// DetailsPage.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps'; // Import MapboxGL

const DetailsPage = ({ route, navigation }) => {
  const { propertyId } = route.params; // Get the property ID from the navigation params
  const [property, setProperty] = useState(null);
  MapboxGL.setAccessToken('pk.eyJ1IjoibW9oYW1tYWRhbGRvZXIiLCJhIjoiY2xsNHlvamwzMGJjOTNlbWttd2R3b2RxZCJ9.wTNW77STIZiNRFGAGVo_hg');

//   useEffect(() => {
    
//   }, [propertyId]);

  const dummyProperty = {
    id: 1,
    name: 'Property 1',
    image: require('../assets/images/pic1.jpg'),
    totalPrice: 1200,
    rooms: 20,
    area: '300m',
    location: { latitude: 37.7749, longitude: -122.4194 }, // Replace with actual coordinates
  };

  if (!property) {
    setProperty(dummyProperty);
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={property.image} style={styles.image} />
      <View style={styles.propertyDetails}>
        <Text style={styles.title}>{property.name}</Text>
        <Text style={styles.detail}>Total Price: ${property.totalPrice}</Text>
        <Text style={styles.detail}>Number of Rooms: {property.rooms}</Text>
        <Text style={styles.detail}>Area: {property.area}</Text>
      </View>
      <View style={styles.mapContainer}>
        <MapboxGL.MapView style={styles.map} centerCoordinate={property.location} zoomLevel={15}>
          <MapboxGL.MarkerView coordinate={property.location} title="Property Location" />
        </MapboxGL.MapView>
      </View>
      <Button title="Contact Owner" onPress={() => handleContactOwner(property.id)} style={styles.button} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 250,
  },
  propertyDetails: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    marginBottom: 8,
  },
  mapContainer: {
    height: 300,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  map: {
    flex: 1,
  },
  button: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
});

export default DetailsPage;
