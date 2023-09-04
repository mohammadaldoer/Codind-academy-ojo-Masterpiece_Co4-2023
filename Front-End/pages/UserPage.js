import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

import propertyData from './propertyData.json';

const UserPage = () => {
  const navigation = useNavigation(); 

  const horizontalData = propertyData.properties;

  const verticalData = propertyData.properties;

  const navigateToDetails = (propertyId) => {
    
    navigation.navigate('Details', { propertyId }); 
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search based on city"
          style={styles.searchInput}
          onChangeText={(text) => {
           
          }}
        />
      </View>
      <View style={styles.propertyTypes}>
        <Text>Villa</Text>
        <Text>Apartment</Text>
        <Text>Studio</Text>
      </View>
      <ScrollView horizontal={true} style={styles.horizontalScroll}>
        {horizontalData.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigateToDetails(item.id)}
            style={styles.horizontalBox}
          >
            <Image source={item.image} style={styles.image} />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView style={styles.verticalScroll}>
        {verticalData.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigateToDetails(item.id)}
            style={styles.verticalBox}
          >
            <Image source={item.image} style={styles.image} />
            <View style={styles.verticalTextContainer}>
              <Text style={styles.verticalText}>{item.name}</Text>
              <Text style={styles.verticalText}>Price: ${item.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  searchContainer: {
    margin: 20,
  },
  searchInput: {
    backgroundColor: '#F3F3F3',
    padding: 10,
    borderRadius: 8,
  },
  propertyTypes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  horizontalScroll: {
    marginBottom: 20,
  },
  horizontalBox: {
    width: 200, 
    marginRight: 10,
    alignItems: 'center',
  },
  verticalScroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 800,
    gap: 10,
  },
  verticalBox: {
    flexWrap: 'wrap',
    width: '80%', 
    marginBottom: 10,
    flexDirection: 'row', 
    gap: 20,
  },
  verticalTextContainer: {
    marginLeft: 10, 
  },
  verticalText: {
    marginLeft: 5,
  },
  image: {
    width: 150,
    height: 100,
    marginBottom: 5,
  },
});

export default UserPage;
