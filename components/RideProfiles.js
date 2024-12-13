import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { FontAwesome } from '@expo/vector-icons';

const RideProfiles = () => {
  // Example Data for profiles
  const profiles = [
    {
      id: '1',
      name: 'Sahil Sharma',
      rating: '4.8',
      reviews: 144,
      profession: 'Senior Software Engineer',
      company: 'QUANTUMTECH',
      start: 'HCX8+XQH Aryabhatta Block, Domara P...',
      end: 'Bachupally, Hyderabad, Telangana',
      time: '07:28 am',
      price: '₹59',
      seats: '1 Seat Available',
      image: 'https://via.placeholder.com/50', // Replace with actual image URL
    },
    // Add more profiles here
    {
      id: '2',
      name: 'Ravi Teja',
      rating: '4.5',
      reviews: 89,
      profession: 'Project Manager',
      company: 'TechCorp',
      start: 'Madhapur, Hyderabad',
      end: 'Kukatpally, Hyderabad',
      time: '08:10 am',
      price: '₹70',
      seats: '2 Seats Available',
      image: 'https://via.placeholder.com/50', // Replace with actual image URL
    },
  ];

  const renderProfile = ({ item }) => (
    <View style={tw`bg-white mx-3 my-3 rounded-lg shadow-lg p-4 w-80`}>
      {/* Header with Image and Info */}
      <View style={tw`flex-row items-center`}>
        <Image
          source={{ uri: item.image }}
          style={tw`w-12 h-12 rounded-full`}
        />
        <View style={tw`ml-3`}>
          <Text style={tw`font-bold text-lg`}>{item.name}</Text>
          <Text style={tw`text-gray-500 text-sm`}>{item.company}, {item.profession}</Text>
          <View style={tw`flex-row items-center`}>
            <FontAwesome name="star" size={16} color="#FFD700" />
            <Text style={tw`text-gray-600 ml-1`}>
              {item.rating} ({item.reviews})
            </Text>
          </View>
        </View>
      </View>

      {/* Ride Details */}
      <View style={tw`mt-3`}>
        <Text style={tw`text-gray-600`}>
          <Text style={tw`font-bold`}>Start: </Text>
          {item.start}
        </Text>
        <Text style={tw`text-gray-600`}>
          <Text style={tw`font-bold`}>End: </Text>
          {item.end}
        </Text>
      </View>

      {/* Time and Price */}
      <View style={tw`flex-row justify-between items-center mt-3`}>
        <Text style={tw`text-gray-500`}>{item.time}</Text>
        <Text style={tw`text-gray-500 font-bold`}>{item.price}</Text>
      </View>

      {/* Availability */}
      <Text style={tw`text-gray-500 mt-1`}>{item.seats}</Text>

      {/* Buttons */}
      <View style={tw`flex-row justify-between items-center mt-3`}>
        <TouchableOpacity style={tw`bg-blue-500 rounded-lg py-2 px-4`}>
          <Text style={tw`text-white`}>Request for car ride</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={tw`text-blue-500`}>Invite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={tw`flex-1 bg-gray-100`}>
      {/* Filter button */}
      <TouchableOpacity style={tw`absolute top-5 left-5 z-10 bg-white p-2 rounded-lg shadow`}>
        <FontAwesome name="filter" size={20} color="black" />
      </TouchableOpacity>

      {/* Profiles */}
      <FlatList
        data={profiles}
        renderItem={renderProfile}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`px-2`}
      />
    </View>
  );
};

export default RideProfiles;
