import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { FontAwesome } from '@expo/vector-icons'; // For QR Code Icon
import HomeScreen from './HomeScreen';
import { useNavigation } from '@react-navigation/native';
import OTPScreen from './OTPScreen';



const LoginScreen = () => {
    const navigation=useNavigation()
  return (
    <View style={tw`flex-1 bg-white justify-center px-5`}>
      {/* Heading */}
      <Text style={tw`text-xl font-bold text-center mb-5`}>What's your phone number or email?</Text>

      {/* Input Field */}
      <TextInput
        style={tw`border border-gray-300 rounded-lg px-4 py-3 text-lg`}
        placeholder="Enter phone number or email"
        keyboardType="email-address"
      />

      {/* Continue Button */}
      <TouchableOpacity 
      onPress={()=>{
              navigation.navigate(OTPScreen)}}
              style={tw`bg-black py-4 rounded-lg mt-4`}>
        <Text style={tw`text-white text-center text-lg`}>Continue</Text>
      </TouchableOpacity>

      {/* OR Divider */}
      <View style={tw`flex-row items-center my-4`}>
        <View style={tw`flex-1 h-px bg-gray-300`} />
        <Text style={tw`px-2 text-gray-500`}>or</Text>
        <View style={tw`flex-1 h-px bg-gray-300`} />
      </View>

      {/* Google Sign-In */}
      <TouchableOpacity style={tw`bg-gray-100 py-4 rounded-lg mb-4 flex-row items-center justify-center`}>
        <FontAwesome name="google" size={20} color="black" style={tw`mr-3`} />
        <Text style={tw`text-black text-lg`}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Apple Sign-In */}
      <TouchableOpacity style={tw`bg-gray-100 py-4 rounded-lg mb-4 flex-row items-center justify-center`}>
        <FontAwesome name="apple" size={20} color="black" style={tw`mr-3`} />
        <Text style={tw`text-black text-lg`}>Continue with Apple</Text>
      </TouchableOpacity>

      

      {/* Footer Text */}
      <Text style={tw`text-center text-gray-500 text-sm mt-5`}>
        By proceeding, you consent to get calls, WhatsApp, or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.
      </Text>
    </View>
  );
};

export default LoginScreen;
