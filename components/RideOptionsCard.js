import { FlatList, SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View,Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'
import RideProfiles from './RideProfiles'
import { Icon } from '@rneui/base'




    const rides = [
        {
          id: "1",
          title: 'bike',
          price:190,
          image:require('/Users/rakeshkunduru/Desktop/charan/exeed/Lets-Go/assets/UberX-(1).webp'),
          
        },
        {
          id: '2',
          title: 'auto',
          price:190,
          image: require('/Users/rakeshkunduru/Desktop/charan/exeed/Lets-Go/assets/UberBlack.webp'),
          
        },
        {
          id: '3',
          title: 'car',
          price:190,
          image: require('/Users/rakeshkunduru/Desktop/charan/exeed/Lets-Go/assets/UberBlack.webp'),
          
        },
        
      ];

const RideOptionsCard = () => {
  const [selectedRide, setSelectedRide] = useState(null);
  const navigation=useNavigation()
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity 
        onPress={()=> navigation.navigate("NavigateCard")}
        style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >

        
       
        
        <Icon name="chevron-left" type="fontawesome"/>

        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`} >Select a Ride </Text>
      </View>


      <FlatList
        data={rides}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw.style(
              `flex-row items-center p-2 mb-2 border rounded-xl`,
              selectedRide?.id === item.id
                ? `border-black bg-gray-200`
                : `border-gray-300`
            )}
            onPress={() => setSelectedRide(item)}
          >
            <Image source={item.image} style={tw`w-16 h-16 mr-4`} />
            <View style={tw`flex-1`}>
              <Text style={tw`text-lg font-bold`}>{item.title}</Text>
              
            </View>
            <Text style={tw`text-lg font-bold`}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Choose Ride Button */}
      <TouchableOpacity
        style={tw`bg-black py-4 rounded-lg mt-5`}
        onPress={() =>
          selectedRide
            ? 
              navigation.navigate("RideProfiles")
            
            : alert("Please select a ride.")
        }
      >
        <Text style={tw`text-white text-center text-lg font-bold`}>
          {selectedRide ? `Choose ${selectedRide.title}` : "Choose a Ride"}
        </Text>
      </TouchableOpacity>
        

   

    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})