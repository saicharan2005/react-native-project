import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomAutocomplete from './CustomAutocomplete';
import { setDestination } from '../slices/navSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import RideOptionsCard from './RideOptionsCard';

RideOptionsCard


const NavigateCard = () => {
  const navigation=useNavigation()
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
            setDestination({
              location: details.geometry.location,
              description: details.formatted_address || description,
            })
          );
            navigation.navigate('RideOptionsCard', { details })
         
        }
      })
      .catch((error) => {
        console.error("Error fetching place details:", error);
      });
  };




  return (
  
   <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl `}>good morning ,cherry</Text>

      <View style={tw`border-t border-gray-200 flex-shrink `}>
        <View>

            {/* Custom Autocomplete Component */}
        <CustomAutocomplete
          placeholder="where to go"
          onSelect={handlePlaceSelect} // Pass the handler function
          apiKey="" // Replace with your GoMaps API key
          onError={(errorMessage) => {
        console.error('MapViewDirections Error:', errorMessage);
         }}
        />

        </View>

      </View >
       </SafeAreaView>

  )
}

export default NavigateCard

const styles = StyleSheet.create({})