import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './pages/LoginScreen';
import TablesScreen from './pages/TablesScreen';
import MakeOrderScreen from './pages/MakeOrderScreen'; // Import your MakeOrderScreen component here

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Tables" component={TablesScreen} />
        <Stack.Screen name="MakeOrder" component={MakeOrderScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
