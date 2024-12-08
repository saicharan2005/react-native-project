import { Image, StyleSheet, Text, TouchableOpacity, View ,FlatList} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const NavOptions = () => {
  const navigation=useNavigation()
  const origin=useSelector(selectOrigin)



    const data = [
        {
          id: "1",
          title: 'Find a Ride',
          image:require('/Users/rakeshkunduru/Desktop/charan/exeed/Lets-Go/assets/UberX-(1).webp'),
          screen:"MapScreen",
        },
        {
          id: '2',
          title: 'Create a Ride',
          image: require('/Users/rakeshkunduru/Desktop/charan/exeed/Lets-Go/assets/UberBlack.webp'),
          screen:"screen2",
        },
        
      ];

  return (
    <FlatList
        data={data}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({item}) => (
            <TouchableOpacity 
            onPress={()=>{
              navigation.navigate(item.screen)}}
            style={tw`p-2 pl-6 pt-4 pb-8 m-2 bg-gray-200 w-40`}
            disabled={!origin}>
                   <View  style={tw`${!origin && "opacity-20"}`}>
                  
                        <Image
                         style={ {
                            width:120,
                            height:120,
                            resizeMode:"contain",
                           }}
                        source={item.image}
                      />
                      <Text  style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>

                      <Icon
                      style={tw`p-2 bg-black w-10 rounded-full mt-4`}
                       name='arrowright' color="white" type='antdesign'/>
                    
                    </View> 
            </TouchableOpacity>

        
     
      )}
        
      />

   
  )
}

export default NavOptions

const styles = StyleSheet.create({})