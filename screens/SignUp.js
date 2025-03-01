import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import tw from  'tailwind-react-native-classnames'

const SignUp = () => {


    const navigation = useNavigation();
  return (
    <View style={tw`flex-1 bg-white justify-start px-5`}>
          {/* Name Fields */}
          

          <View style={tw`flex-row justify-between items-center mt-5 mb-10`}>
        
        <Image
          style={{
            width: 140,
            height: 140,
            resizeMode: "contain",
          }}
          source={require("/Users/rakeshkunduru/Desktop/charan/exeed/Lets-Go/assets/image.png")} // Ensure the image path is valid
        />
      </View>
      <Text style={tw`text-gray-700 text-lg mb-2`}>What's your name</Text>
      <View style={tw`flex-row justify-between mb-4`}>
        <TextInput
          style={tw`border border-gray-300 rounded-lg px-4 py-3 flex-1 mr-2`}
          placeholder="First name"
        />
        <TextInput
          style={tw`border border-gray-300 rounded-lg px-4 py-3 flex-1`}
          placeholder="Last name"
        />
      </View>

      {/* Email Field */}
      <Text style={tw`text-gray-700 text-lg mb-2`}>What's your email</Text>
      <TextInput
        style={tw`border border-gray-300 rounded-lg px-4 py-3 text-lg mb-4`}
        placeholder="email@example.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Field */}
      <Text style={tw`text-gray-700 text-lg mb-2`}>Enter Password</Text>
      <TextInput
        style={tw`border border-gray-300 rounded-lg px-4 py-3 text-lg`}
        placeholder="password"
        secureTextEntry
      />

      {/* Login Button */}
          <TouchableOpacity style={tw`bg-black py-4 rounded-lg mt-6 mb-20`}
           onPress={() => navigation.navigate("HomeScreen")} >
        <Text style={tw`text-white text-center text-lg`}>SignUp</Text>
      </TouchableOpacity>


      {/* Footer Text */}
      <Text style={tw`text-center text-gray-500 text-sm mt-20`}>
        By proceeding, you consent to get calls, WhatsApp, or SMS messages,
        including by automated means, from Uber and its affiliates to the
        number provided.
      </Text>
    </View>
  );
};

export default SignUp;
