import { FlatList,StyleSheet,TouchableOpacity,View, Text } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import tw from 'tailwind-react-native-classnames'

const data=[
    {
        id:'123',
        icon:'home',
        location:'Home',
        destination:'iare',
    },
    {
        id:'456',
        icon:'briefcase',
        location:'work',
        destination:'svs',
    },
    // {
    //     id:'455',
    //     icon:'briefcase',
    //     location:'work',
    //     destination:'svs',
    // }
]

const NavFav = () => {
  return (
    <FlatList
    data={data}
    keyExtractor={(item)=>item.id}
    ItemSeparatorComponent={()=> (
      <View style={[tw`bg-gray-200`,{height:0.5}]}/>  
    ) }
    renderItem={({item:{location,destination,icon}})=>(
        <TouchableOpacity  style={tw`flex-row items-center p-5`}>
            <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
            />
            <View>
                <Text  style={tw`font-semibold text-lg`} >{location}</Text>
                <Text  style={tw`text-gray-500`}>{destination}</Text>
            </View>
            

        </TouchableOpacity>
    )}
    />
  )
}

export default NavFav