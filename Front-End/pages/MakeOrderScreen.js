// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

// const MakeOrderScreen = ({ route }) => {
//   const { tableNumber } = route.params;
//   const [order, setOrder] = useState('');
//   const [orderList, setOrderList] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);

//   const addOrder = () => {
//     if (order.trim() !== '') {
//       // Parse order to extract amount (e.g., "Coffee $5")
//       const orderParts = order.split('$');
//       const item = orderParts[0].trim();
//       const amount = parseFloat(orderParts[1].trim()) || 0;

//       // Update total amount
//       setTotalAmount(totalAmount + amount);

//       // Add order to the list
//       setOrderList([...orderList, { item, amount }]);
//       setOrder('');
//     }
//   };

//   const generateBill = () => {
//     // You can implement your bill generation logic here
//     // For now, we'll just display a simple alert with the total amount
//     alert(`Total Bill for Table ${tableNumber}: $${totalAmount.toFixed(2)}`);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Table {tableNumber}</Text>
//       <TextInput
//         placeholder="Enter your order (e.g., Coffee $5)"
//         value={order}
//         onChangeText={(text) => setOrder(text)}
//         style={styles.input}
//       />
//       <Button title="Add Order" onPress={addOrder} />
//       <ScrollView style={styles.orderList}>
//         {orderList.map((item, index) => (
//           <Text key={index} style={styles.orderItem}>
//             {item.item} - ${item.amount.toFixed(2)}
//           </Text>
//         ))}
//       </ScrollView>
//       <Text style={styles.totalAmount}>Total: ${totalAmount.toFixed(2)}</Text>
//       <Button title="Generate Bill" onPress={generateBill} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   header: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingLeft: 10,
//   },
//   orderList: {
//     maxHeight: 200,
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   orderItem: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   totalAmount: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
// });

// export default MakeOrderScreen;


import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

const MakeOrderScreen = ({ route }) => {
  const { tableNumber } = route.params;
  const [order, setOrder] = useState('');
  const [orderList, setOrderList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const createOrder = async () => {
    try {
      // Make a POST request to create a new order
      const response = await fetch(`http://localhost:3000/tables/${tableNumber}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tableNumber, item: order, amount }),
      });

      if (response.ok) {
        // Display a message or take any other action upon success
        alert('Order created successfully');
        // Optionally, you can refresh the orders list for the table here
        // You can call the getOrders function to fetch and display the updated list
        getOrders();
      } else {
        // Handle errors
        alert('Failed to create order');
      }
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Error creating order');
    }
  };

  const getOrders = async () => {
    try {
      // Make a GET request to retrieve orders for the table
      const response = await fetch(`http://localhost:3000/tables/${tableNumber}/orders`);

      if (response.ok) {
        const data = await response.json();
        setOrderList(data);
      } else {
        // Handle errors
        alert('Failed to retrieve orders');
      }
    } catch (error) {
      console.error('Error getting orders:', error);
      alert('Error getting orders');
    }
  };  
  const generateBill = () => {
    // You can implement your bill generation logic here
    // For now, we'll just display a simple alert with the total amount
    
    alert(`Total Bill for Table ${tableNumber}: $${totalAmount.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Table {tableNumber}</Text>
      <TextInput
        placeholder="Enter your order"
        value={order}
        onChangeText={(text) => setOrder(text)}
        style={styles.input}
      />
      <Button title="Add Order" onPress={createOrder} />
      <ScrollView style={styles.orderList}>
        {orderList.map((item, index) => (
          <Text key={index} style={styles.orderItem}>
            {item.item} - ${item.amount.toFixed(2)}
          </Text>
        ))}
      </ScrollView>
      <Text style={styles.totalAmount}>Total: ${totalAmount.toFixed(2)}</Text>
      <Button title="Generate Bill" onPress={generateBill} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  orderList: {
    maxHeight: 200,
    marginTop: 10,
    marginBottom: 10,
  },
  orderItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default MakeOrderScreen;
