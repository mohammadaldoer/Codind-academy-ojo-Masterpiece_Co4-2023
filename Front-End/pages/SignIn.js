import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: 'blue' } }} 
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: 'blue' } }} 
      />
      <Button mode="contained" onPress={handleSignIn} style={styles.signInButton}>
       <Text>Sign In</Text> 
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white', 
  },
  input: {
    width: '80%',
    marginBottom: 20,
  },
  signInButton: {
    width: 200,
    backgroundColor: 'white', 
  },
});

export default SignIn;
