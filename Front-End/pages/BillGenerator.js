// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, ScrollView } from 'react-native';
// import axios from 'axios'; // Make sure to install axios
// import { Picker } from '@react-native-picker/picker';

// function BillGenerator() {
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState('');
//   const [quantity, setQuantity] = useState(1);
//   const [billItems, setBillItems] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect(() => {
//     // Fetch product data from the backend using Axios
//     axios.get('/api/products')
//       .then(response => {
//         setProducts(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching product data:', error);
//       });
//   }, []);

//   const addToBill = () => {
//     if (selectedProduct && quantity > 0) {
//       // Find the selected product object based on its ID
//       const selectedProductObject = products.find(product => product.id === selectedProduct);

//       if (selectedProductObject) {
//         const itemTotal = selectedProductObject.price * quantity;

//         // Update bill items and total amount
//         setBillItems([...billItems, { product: selectedProductObject, quantity }]);
//         setTotalAmount(totalAmount + itemTotal);

//         // Reset selected product and quantity
//         setSelectedProduct('');
//         setQuantity(1);
//       }
//     }
//   };

//   return (
//     <View>
//       <Text>Generate Bill</Text>

//       <Picker
//         selectedValue={selectedProduct}
//         onValueChange={(itemValue) => setSelectedProduct(itemValue)}
//       >
//         <Picker.Item label="Select a Product" value="" />
//         {products.map(product => (
//           <Picker.Item key={product.id} label={product.name} value={product.id} />
//         ))}
//       </Picker>

//       <TextInput
//         keyboardType="numeric"
//         value={quantity.toString()}
//         onChangeText={(text) => setQuantity(text)}
//       />

//       <Button title="Add to Bill" onPress={addToBill} />

//       <ScrollView>
//         {billItems.map((item, index) => (
//           <Text key={index}>{`${item.product.name} x ${item.quantity} = $${(item.product.price * item.quantity).toFixed(2)}`}</Text>
//         ))}
//       </ScrollView>

//       <Text>Total: ${totalAmount.toFixed(2)}</Text>
//     </View>
//   );
// }

// export default BillGenerator;


// import React, { useState } from 'react';
// import { View, Text, Picker, Button, FlatList, TouchableOpacity } from 'react-native';
// import axios from 'axios';

// export default function MakeOrderPage() {
//   const [menuItems, setMenuItems] = useState([]);
//   const [selectedItem, setSelectedItem] = useState('');
//   const [quantity, setQuantity] = useState(1);
//   const [orderData, setOrderData] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);

//   const fetchMenuItems = () => {
//     // Fetch menu items from the backend using Axios and populate the menuItems state
//     axios.get('/api/menu')
//       .then(response => {
//         setMenuItems(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching menu items:', error);
//       });
//   };

//   const addItemToOrder = () => {
//     const selectedItemInfo = menuItems.find(item => item.id === selectedItem);
//     const newItem = {
//       id: selectedItem,
//       name: selectedItemInfo.name,
//       quantity: quantity,
//     };

//     // Send a request to the backend to add the item to the order
//     axios.post('/api/add-to-order', newItem)
//       .then(response => {
//         // Update the orderData and totalAmount based on the response from the backend
//         setOrderData(response.data.orderData);
//         setTotalAmount(response.data.totalAmount);
//       })
//       .catch(error => {
//         console.error('Error adding item to the order:', error);
//       });
//   };

//   const deleteItemFromOrder = (item) => {
//     // Send a request to the backend to delete the item from the order
//     axios.delete(`/api/delete-from-order/${item.id}`)
//       .then(response => {
//         // Update the orderData and totalAmount based on the response from the backend
//         setOrderData(response.data.orderData);
//         setTotalAmount(response.data.totalAmount);
//       })
//       .catch(error => {
//         console.error('Error deleting item from the order:', error);
//       });
//   };

  

//   const generateBill = () => {
//     // Send a request to the backend to calculate the bill
//     axios.post('/api/generate-bill', orderData)
//       .then(response => {
//         // Handle the response and update the UI with the total amount
//         setTotalAmount(response.data.total);
//       })
//       .catch(error => {
//         console.error('Error generating the bill:', error);
//       });
//   };

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 16,
//       backgroundColor: '#f0f0f0',
//     },
//     title: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       marginBottom: 16,
//     },
//     label: {
//       fontSize: 16,
//       marginBottom: 8,
//     },
//     picker: {
//       height: 40,
//       borderColor: 'gray',
//       borderWidth: 1,
//       marginBottom: 16,
//       paddingHorizontal: 8,
//       backgroundColor: 'white',
//     },
//     button: {
//       backgroundColor: 'blue',
//       color: 'white',
//       padding: 10,
//       borderRadius: 5,
//       textAlign: 'center',
//       fontSize: 16,
//     },
//     orderItem: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginBottom: 8,
//     },
//   });
  
//     // ... (previous code remains the same)
  
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Make Order</Text>
//         <Text style={styles.label}>Select Item:</Text>
//         <Picker
//           selectedValue={selectedItem}
//           onValueChange={(itemValue) => setSelectedItem(itemValue)}
//           style={styles.picker}
//         >
//           {/* ... */}
//         </Picker>
//         <Text style={styles.label}>Select Quantity:</Text>
//         <Picker
//           selectedValue={quantity}
//           onValueChange={(itemValue) => setQuantity(itemValue)}
//           style={styles.picker}
//         >
//           {/* ... */}
//         </Picker>
//         <Button title="Add" onPress={addItemToOrder} style={styles.button} />
  
//         <Text style={styles.title}>Order Summary</Text>
//         <FlatList
//           data={orderData}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({ item, index }) => (
//             <View style={styles.orderItem}>
//               <Text>{item.name} x{item.quantity}</Text>
//               <TouchableOpacity onPress={() => deleteItemFromOrder(index)}>
//                 <Text style={styles.button}>Delete</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         />
  
//         <Button title="Generate Bill" onPress={generateBill} style={styles.button} />
//         <Text style={styles.title}>Total: {totalAmount}</Text>
//       </View>
//     );
//           }}










import { Picker } from '@react-native-picker/picker';

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

export default function MakeOrderPage() {
  const [menuItems, setMenuItems] = useState([1]);
  const [selectedItem, setSelectedItem] = useState('');
  const [quantity, setQuantity] = useState([1,2,3,4,5,6,7,8,9,10]);
  const [orderData, setOrderData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = () => {
    axios
      .get('http://10.0.2.2:8080/api/menu')
      .then((response) => {
        setMenuItems(response.data);
        alert(response.data[0].name);
      })
      .catch((error) => {
        setError('Error fetching menu items: ' + error.message);
      });
  };

  const addItemToOrder = () => {
    const selectedItemInfo = menuItems.find((item) => item.id === selectedItem);
    const newItem = {
      id: selectedItem,
      name: selectedItemInfo.name,
      quantity: quantity,
    };

    axios
      .post('http://10.0.2.2:8080/api/menu', newItem)
      .then((response) => {
        setOrderData(response.data.orderData);
        setTotalAmount(response.data.totalAmount);
      })
      .catch((error) => {
        setError('Error adding item to the order: ' + error.message);
      });
  };

  const deleteItemFromOrder = (index) => {
    axios
      .delete(`/api/delete-from-order/${orderData[index].id}`)
      .then((response) => {
        setOrderData(response.data.orderData);
        setTotalAmount(response.data.totalAmount);
      })
      .catch((error) => {
        setError('Error deleting item from the order: ' + error.message);
      });
  };

  const generateBill = () => {
    axios
      .post('/api/generate-bill', orderData)
      .then((response) => {
        setTotalAmount(response.data.total);
      })
      .catch((error) => {
        setError('Error generating the bill: ' + error.message);
      });
  };

  const styles = StyleSheet.create({
    container: {
              flex: 1,
              padding: 16,
              backgroundColor: '#f0f0f0',
            },
            title: {
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 16,
            },
            label: {
              fontSize: 16,
              marginBottom: 8,
            },
            picker: {
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              marginBottom: 16,
              paddingHorizontal: 8,
              backgroundColor: 'white',
            },
            button: {
              backgroundColor: 'blue',
              color: 'white',
              padding: 10,
              borderRadius: 5,
              textAlign: 'center',
              fontSize: 16,
            },
            orderItem: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 8,
            },
      });
      const numbersArray = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Make Order</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <Text style={styles.label}>Select Item:</Text>
      <Picker
        selectedValue={selectedItem}
        onValueChange={(itemValue) => setSelectedItem(itemValue)}
        style={styles.picker}
      >
             {menuItems.map((number) => (
          <Picker.Item key={number.toString()} label={number.name} value={number.name} />
        ))}     
         </Picker>
      <Text style={styles.label}>Select Quantity:</Text>
      <Text style={styles.label}>Select Quantity:</Text>
      <Picker
        selectedValue={quantity}
        onValueChange={(itemValue) => setQuantity(itemValue)}
        style={styles.picker}
      >
        {numbersArray.map((number) => (
          <Picker.Item key={number.toString()} label={number.toString()} value={number} />
        ))}
      </Picker>
      <TouchableOpacity onPress={addItemToOrder} style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Order Summary</Text>
      <FlatList
        data={orderData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.orderItem}>
            <Text>{item.name} x{item.quantity}</Text>
            <TouchableOpacity onPress={() => deleteItemFromOrder(index)} style={styles.button}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity onPress={generateBill} style={styles.button}>
        <Text style={styles.buttonText}>Generate Bill</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Total: {totalAmount}</Text>
    </View>
  );
}
