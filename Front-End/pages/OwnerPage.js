import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const OwnerPage = () => {
  const [propertyData, setPropertyData] = useState({
    name: '',
    price: '',
    area: '',
    rooms: '',
    type: '',
  });

  const handleInputChange = (key, value) => {
    setPropertyData({ ...propertyData, [key]: value });
  };

  const handleSubmit = () => {
  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Submit Property Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => handleInputChange('name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        onChangeText={(text) => handleInputChange('price', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Area"
        onChangeText={(text) => handleInputChange('area', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Rooms"
        onChangeText={(text) => handleInputChange('rooms', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Type"
        onChangeText={(text) => handleInputChange('type', text)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'blue',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default OwnerPage;
