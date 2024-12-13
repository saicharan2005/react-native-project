import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import HomeScreen from './HomeScreen';
import { useNavigation } from '@react-navigation/native';

const OTPScreen = () => {
    const navigation=useNavigation()
  const [otp, setOtp] = useState('');


  const handleResend = () => {
    // Handle OTP resend logic here
    console.log('OTP Resend Requested');
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white justify-center px-6`}>
      <View style={tw`items-center mb-8`}>
        <Text style={tw`text-2xl font-semibold mb-2`}>Verify your phone number</Text>
        <Text style={tw`text-gray-600 text-center`}>Enter the 4-digit code sent to your number</Text>
      </View>

      <TextInput
        style={tw`border border-gray-300 rounded-lg px-4 py-3 text-center text-lg mb-6`}
        placeholder="Enter the OTP Code"
        keyboardType="number-pad"
        maxLength={4}
        value={otp}
        onChangeText={setOtp}
      />

      <TouchableOpacity
        style={tw`bg-black py-4 rounded-lg mb-4`}
        // onPress={handleVerify}
         onPress={()=>{
              navigation.navigate(HomeScreen)}}
      >
        <Text style={tw`text-white text-center text-lg font-bold`}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleResend}>
        <Text style={tw`text-blue-500 text-center text-lg`}>Resend code via SMS</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OTPScreen;
