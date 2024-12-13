import { FlatList, SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'
import RideProfiles from './RideProfiles'
import { Icon } from '@rneui/base'




    const data = [
        {
          id: "1",
          title: 'bike',
          multiplier:1,
          image:require('/Users/rakeshkunduru/Desktop/charan/exeed/Lets-Go/assets/UberX-(1).webp'),
          
        },
        {
          id: '2',
          title: 'auto',
          multiplier:1,
          image: require('/Users/rakeshkunduru/Desktop/charan/exeed/Lets-Go/assets/UberBlack.webp'),
          
        },
        {
          id: '3',
          title: 'car',
          multiplier:1,
          image: require('/Users/rakeshkunduru/Desktop/charan/exeed/Lets-Go/assets/UberBlack.webp'),
          
        },
        
      ];

const RideOptionsCard = () => {
  const navigation=useNavigation()
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity 
        onPress={()=> navigation.navigate("RideProfiles")}
        style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >

        
       
        
        <Icon name="chevron-left" type="fontawesome"/>

        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`} >Select a Ride </Text>
      </View>
      {/* <FlatList 
      data={data}
      keyExtractor={(item)=>item.id}
      renderItem={({item:{id,title,multiplier,image},item})=>(
        <TouchableOpacity>
           <Image
                         style={ {
                            width:120,
                            height:120,
                            resizeMode:"contain",
                           }}
                        source={{uri:image}}/>

        </TouchableOpacity>
      )}
      /> */}
        

   

    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})