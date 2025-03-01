import React , { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet ,Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { FontAwesome } from '@expo/vector-icons'; // For QR Code Icon

import { useNavigation } from '@react-navigation/native';

// import auth from "@react-native-firebase/auth"

// import firestore from '@react-native-firebase/firestore';


// const LoginScreen = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [code, setCode] = useState("");
//   const [confirm, setConfirm] = useState(null);
  
//   const navigation = useNavigation();

//   const signInWithPhoneNumber = async () => {
//     try {
//       const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//       setConfirm(confirmation);
//     } catch (error) {
//       console.log("Error sending code: ", error);
//     }
//   };


//   const confirmCode = async () => {
//     try {
//       const userCredential = await confirm.confirm(code);
//       const user = userCredential.user;
    
    
  

//           const userDocument = await firestore()
//             .collection("users")
//             .doc(user.uid)
//             .get();

//           if (userDocument.exists) {
//             // User is existing, navigate to Dashboard
//             navigation.navigate("Dashboard");
//           } else {
//             // User is new, navigate to Detail
//             navigation.navigate("Detail", { uid: user.uid });
//           }
//         }

//     catch (error) {
//         console.log("Invalid code.", error);
//       }
//     }







   
//   return (
//     <View style={tw`flex-1 bg-white justify-center px-5`}>
     
      
//       {!confirm ? (
//          <>
//         {/* Heading */}
//       <Text style={tw`text-xl font-bold text-center mb-5`}>What's your phone number or email?</Text>

//       {/* Input Field */}
//       <TextInput
//         style={tw`border border-gray-300 rounded-lg px-4 py-3 text-lg`}
//         placeholder="Enter phone number or email"
//             keyboardType="email-address"
//             value={phoneNumber}
//             onChange={setPhoneNumber}
//       />

//       {/* Continue Button */}
//       <TouchableOpacity 
//       onPress={signInWithPhoneNumber}
//               style={tw`bg-black py-4 rounded-lg mt-4`}>
//         <Text style={tw`text-white text-center text-lg`}>send code</Text>
//       </TouchableOpacity>

//       {/* OR Divider */}
//       <View style={tw`flex-row items-center my-4`}>
//         <View style={tw`flex-1 h-px bg-gray-300`} />
//         <Text style={tw`px-2 text-gray-500`}>or</Text>
//         <View style={tw`flex-1 h-px bg-gray-300`} />
//       </View>

//       {/* Google Sign-In */}
//       <TouchableOpacity style={tw`bg-gray-100 py-4 rounded-lg mb-4 flex-row items-center justify-center`}>
//         <FontAwesome name="google" size={20} color="black" style={tw`mr-3`} />
//         <Text style={tw`text-black text-lg`}>Continue with Google</Text>
//       </TouchableOpacity>

//       {/* Apple Sign-In */}
//       <TouchableOpacity style={tw`bg-gray-100 py-4 rounded-lg mb-4 flex-row items-center justify-center`}>
//         <FontAwesome name="apple" size={20} color="black" style={tw`mr-3`} />
//         <Text style={tw`text-black text-lg`}>Continue with Apple</Text>
//       </TouchableOpacity>

      

//       {/* Footer Text */}
//       <Text style={tw`text-center text-gray-500 text-sm mt-5`}>
//         By proceeding, you consent to get calls, WhatsApp, or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.
//       </Text>
//         </>
        
//       ) :
//         (
//           <>
//             <SafeAreaView style={tw`flex-1 bg-white justify-center px-6`}>
//       <View style={tw`items-center mb-8`}>
//         <Text style={tw`text-2xl font-semibold mb-2`}>Verify your phone number</Text>
//         <Text style={tw`text-gray-600 text-center`}>Enter the 4-digit code sent to your number</Text>
//       </View>

//       <TextInput
//         style={tw`border border-gray-300 rounded-lg px-4 py-3 text-center text-lg mb-6`}
//         placeholder="Enter the OTP Code"
//         keyboardType="number-pad"
//         maxLength={4}
//         value={code}
//         onChangeText={setCode}
//       />

//       <TouchableOpacity
//         style={tw`bg-black py-4 rounded-lg mb-4`}
//         // onPress={handleVerify}
//                 onPress={
//                   confirmCode
//                 }
//               //     () => {
//               // navigation.navigate(HomeScreen)}
//       >
//         <Text style={tw`text-white text-center text-lg font-bold`}>Submit</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={handleResend}>
//         <Text style={tw`text-blue-500 text-center text-lg`}>Resend code via SMS</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//           </>
          
//       )}
     
      
//     </View>
//   );
// };


const LoginScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
 

  function handleSignin() {
    console.log(username)
    console.log(password)
   
    if (username === "admin" && password === "admin") {
    
     navigation.navigate("HomeScreen")
    } else {
      alert("Invalid username or password");
    }
  }
 
  


 

  return (
    <View style={tw`flex-1 bg-white justify-start px-5`}>
      {/* Top Image */}
      <View style={tw`flex-row justify-between items-center mt-10 mb-20`}>
        
        <Image
          style={{
            width: 140,
            height: 140,
            resizeMode: "contain",
          }}
          source={require("/Users/rakeshkunduru/Desktop/charan/exeed/Lets-Go/assets/image.png")} // Ensure the image path is valid
        />
      </View>
      

      {/* Email Input Field */}
      <TextInput
        style={tw`border border-gray-300 rounded-lg px-4 py-3 text-lg mb-4`}
        placeholder="email@example.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      {/* Password Input Field */}
      <TextInput
        style={tw`border border-gray-300 rounded-lg px-4 py-3 text-lg`}
        placeholder="password"
        secureTextEntry
        value={password}
          onChangeText={(text) => setPassword(text)}
      />

      {/* Login Button */}
      <TouchableOpacity style={tw`bg-black py-4 rounded-lg mt-4`}
        onPress={handleSignin} >
         
        <Text style={tw`text-white text-center text-lg`}>Login</Text>
      </TouchableOpacity>

      {/* Footer */}
      <TouchableOpacity
      onPress={() => navigation.navigate("SignUp")}>
        <Text style={tw`text-center text-gray-500 text-sm mt-5`}>
          New here?{" "}
          <Text style={tw`text-blue-500 font-bold`}>Create new Account</Text>
        </Text>
      </TouchableOpacity>

      {/* OR Divider */}
      <View style={tw`flex-row items-center my-4`}>
        <View style={tw`flex-1 h-px bg-gray-300`} />
        <Text style={tw`px-2 text-gray-500`}>or</Text>
        <View style={tw`flex-1 h-px bg-gray-300`} />
      </View>

      {/* Google Sign-In */}
      <TouchableOpacity
        style={tw`bg-gray-100 py-4 rounded-lg mb-10 flex-row items-center justify-center `}
      >
        <FontAwesome name="google" size={20} color="black" style={tw`mr-3`} />
        <Text style={tw`text-black text-lg`}>Continue with Google</Text>
      </TouchableOpacity>

     
    </View>
  );
};
export default LoginScreen;
