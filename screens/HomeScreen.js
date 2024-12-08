// import { StyleSheet,Text, View ,SafeAreaView,Image} from 'react-native'
// import React from 'react'
// import tw from 'tailwind-react-native-classnames';
// import NavOptions from '../components/NavOptions';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import "react-native-get-random-values";
// import { GOOGLE_MAPS_APIKEY } from "@env";

// import { setDestination,setOrigin } from '../slices/navSlice';
// import { useDispatch } from 'react-redux';


// const HomeScreen = () => {
//   const dispatch=useDispatch()
  
//   return (
//     <SafeAreaView style={tw`bg-white h-full`}>
//       <View style={tw`p-5`}>
//         <Image
//           style={{
//             width: 140,
//             height: 140,
//             resizeMode: "contain",
//           }}
//           source={require("/Users/rakeshkunduru/Desktop/charan/exeed/Lets-Go/assets/image.png")}
//         />
//         {/* <GooglePlacesAutocomplete
//           query={{
//             key: "",
//             language: "en",
//           }}
          
//           placeholder="Where From?"
//           nearbyPlacesAPI="GooglePlacesSearch"
//           styles={{
//             textInput: {
//               fontSize: 18,
              
//             },
//             container: {
//               flex: 0,
//             },
//           }}
//           enablePoweredByContainer={false}
//           minLength={2}
//           onPress={(data, details = null) => {
//             dispatch(setOrigin({
//               location:details.geometry.location,
//               description:data.description
//             }))
//             dispatch(setDestination(null))
//             console.log("Selected Place Data: ", data);
//             console.log("Details: ", details);
//           }}
//           fetchDetails={true}
//           returnKeyType={"search"}
//           onFail={(error) => console.log("API Error:", error)}
//         /> */}

//          <GooglePlacesAutocomplete
//         placeholder="Search for a place"
     

            
//         query={{
//           key: 'AlzaSyPLK0rlO2fyeqGjeovdJnJWbrJoczlpoIC',
//           language: 'en',
//         }}
//         fetchDetails={true}
//         styles={{
//             textInput: {
//               fontSize: 18,
              
//             },
//             container: {
//               flex: 0,
//             },
//           }}
//         enablePoweredByContainer={false} // Remove "Powered by Google"
//         predefinedPlacesAlwaysVisible={true}
//         GooglePlacesDetailsQuery={{
//           fields: 'geometry',
//         }}
//         // Override Google API URL to use gomaps.pro
//         GooglePlacesSearchUrlOverride={{
//           baseUrl: 'https://maps.gomaps.pro/maps/api',
//         }}
//         onFail={(error) => console.log("API Error:", error)}
//       />

        
//         <NavOptions />
//       </View>
//     </SafeAreaView>
//   );
// }

// export default HomeScreen

// const styles = StyleSheet.create({
//   text:{
//     color:"blue",
//   }
// })


import React from 'react';
import { SafeAreaView, View, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import CustomAutocomplete from '../components/CustomAutocomplete';
import NavOptions from '../components/NavOptions';
import axios from 'axios';

const HomeScreen = () => {
  const dispatch = useDispatch();

  // Handle place selection from CustomAutocomplete
  const handlePlaceSelect = (data) => {
    const { description, place_id } = data;

    // Fetch place details for the selected place
    axios
      .get(`https://maps.gomaps.pro/maps/api/place/details/json`, {
        params: {
          placeid: place_id,
          key: '', // Replace with your GoMaps API key
        },
      })
      .then((response) => {
        const details = response.data.result;
        if (details && details.geometry) {
          // Dispatch origin and clear destination
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: details.formatted_address || description,
            })
          );
          dispatch(setDestination(null));
        }
      })
      .catch((error) => {
        console.error("Error fetching place details:", error);
      });
  };

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 140,
            height: 140,
            resizeMode: "contain",
          }}
          source={require("/Users/rakeshkunduru/Desktop/charan/exeed/Lets-Go/assets/image.png")} // Ensure you provide a valid image path
        />

        {/* Custom Autocomplete Component */}
        <CustomAutocomplete
          placeholder="Search for a place"
          onSelect={handlePlaceSelect} // Pass the handler function
          apiKey="" // Replace with your GoMaps API key
        />

        {/* NavOptions or other components */}
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
