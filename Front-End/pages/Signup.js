// Signup.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, RadioButton } from 'react-native-paper';

const Signup = () => {
  const [userType, setUserType] = useState('user'); 

  const handleUserTypeChange = (value) => {
    setUserType(value);
  };

  const handleSignup = () => {
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.radioContainer}>
        <Text>I am a:</Text>
        <RadioButton.Group onValueChange={handleUserTypeChange} value={userType}>
          <View style={styles.radioButton}>
            <Text>User</Text>
            <RadioButton value="user" color="blue" /> 
          </View>
          <View style={styles.radioButton}>
            <Text>House Owner</Text>
            <RadioButton value="owner" color="blue" /> 
          </View>
        </RadioButton.Group>
      </View>
      <Button mode="contained" onPress={handleSignup} style={styles.signupButton}>
       <Text> Sign Up</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // White background color
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'blue', // Blue text color
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  signupButton: {
    width: 200,
    backgroundColor: 'blue', // Blue button background color
  },
});

export default Signup;
