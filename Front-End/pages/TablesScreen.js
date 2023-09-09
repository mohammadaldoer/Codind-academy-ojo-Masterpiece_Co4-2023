import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TablesScreen = ({ navigation }) => {
  // Simulated table data; you can replace this with actual data
  const tables = [
    { id: 1, number: 1 },
    { id: 2, number: 2 },
    { id: 3, number: 3 },
    // Add more tables as needed
  ];

  const handleTableSelect = (tableNumber) => {
    // Navigate to the "Make Order" page with the selected table number
    navigation.navigate('MakeOrder', { tableNumber });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select a Table</Text>
      {tables.map((table) => (
        <TouchableOpacity
          key={table.id}
          style={styles.tableButton}
          onPress={() => handleTableSelect(table.number)}
        >
          <Text style={styles.tableText}>Table {table.number}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  tableButton: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  tableText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TablesScreen;
