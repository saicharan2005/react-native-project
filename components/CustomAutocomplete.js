import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const CustomAutocomplete = ({ placeholder, onSelect, apiKey }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Function to fetch place suggestions based on the input
  const fetchSuggestions = async (query) => {
    if (query.length > 2) {
      try {
        const response = await axios.get(`https://maps.gomaps.pro/maps/api/place/autocomplete/json`, {
          params: {
            input: query,
            key: apiKey,
          },
        });

        // Update the suggestions state with the response data
        setSuggestions(response.data.predictions);
      } catch (error) {
        console.error("API Error:", error);
      }
    } else {
      setSuggestions([]); // Clear suggestions if input is too short
    }
  };

  // Handle the selection of a place
  const handleSelect = (item) => {
    setSearchTerm(item.description); // Update the searchTerm with selected place
    setSuggestions([]); // Clear suggestions
    onSelect(item); // Notify parent about the selected item
  };

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder || "Search..."}
        value={searchTerm}
        onChangeText={(text) => {
          setSearchTerm(text);
          fetchSuggestions(text);
        }}
      />
      {searchTerm.length > 2 && (
        <FlatList
          data={suggestions}
          keyExtractor={(item) => item.place_id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.suggestionItem}
              onPress={() => handleSelect(item)}
            >
              <Text>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default CustomAutocomplete;
