import { StyleSheet, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../slices/navSlice";
import { GOOGLE_MAPS_APIKEY } from "@env";
import PolylineDecoder from "@mapbox/polyline"; // Correctly use Polyline decoder

const fetchDirections = async (origin, destination, originCoords, destinationCoords) => {
  try {
    const response = await fetch(
`https://maps.gomaps.pro/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AlzaSyeiNCe2FIfIsByo01Rg3f-nLzfn0y_KQHu`
    );    
    const data = await response.json();
    console.log("API Response:", data);

    if (data.routes && data.routes[0]) {
      const points = PolylineDecoder.decode(data.routes[0].overview_polyline.points);
      const coords = points.map(([lat, lng]) => ({
        latitude: lat,
        longitude: lng,
      }));
       coords.unshift(originCoords);
      coords.push(destinationCoords);
      return coords;
    } else {
      console.error("No routes found:", data);
    }
  } catch (error) {
    console.error("Error fetching directions:", error);
  }
  return [];
};

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const [routeCoords, setRouteCoords] = useState([]);
  const mapRef = useRef(null);

 useEffect(() => {
  if (origin && destination) {
    const fetchAndSetDirections = async () => {
      const coords = await fetchDirections(
        origin.description,
        destination.description,
        { latitude: origin.location.lat, longitude: origin.location.lng },
        { latitude: destination.location.lat, longitude: destination.location.lng }
      );
      setRouteCoords(coords);

      if (coords.length > 0 && mapRef.current) {
        mapRef.current.fitToCoordinates(coords, {
          edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        });
      }
    };
    fetchAndSetDirections();
  }
}, [origin, destination]);


  if (!origin || !destination) return null; // Prevent errors if origin or destination is missing

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
        />
      )}

      {destination.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
        />
      )}

      {routeCoords.length > 0 && (
        <Polyline coordinates={routeCoords} strokeWidth={3} strokeColor="black" />
      )}
    </MapView>
  );
};

export default Map;
const styles = StyleSheet.create({});
