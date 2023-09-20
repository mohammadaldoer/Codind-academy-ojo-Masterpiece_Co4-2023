import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TablesScreen = () => {
  const navigation = useNavigation();

  const handleTableClick = (tableNumber) => {
    // Navigate to the "Make Order / Generate Bill" screen and pass the table number
    navigation.navigate('MakeOrder', { tableNumber });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.tableContainer}>
        {[...Array(20)].map((_, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tableBox}
            onPress={() => handleTableClick(index + 1)}
          >
            <Text style={styles.tableNumber}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Add a bottom padding to allow scrolling */}
      <View style={{ paddingBottom: 50 }}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    // Remove maxHeight
  },
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    // Remove maxHeight
  },
  tableBox: {
    width: '45%',
    aspectRatio: 1, // Maintain a square aspect ratio
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  tableNumber: {
    fontSize: 24,
  },
});

export default TablesScreen;
