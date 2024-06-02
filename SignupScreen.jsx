// SignupScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text,ImageBackground } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = () => {
    if (!email.trim()) {
      setErrorMessage('Email is required');
      return;
    }

    if (!password.trim()) {
      setErrorMessage('Password is required');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Invalid email address');
      return;
    }

    // Password validation
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      return;
    }


    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }

    // Set the global variables for signup email and password
    global.signupEmail = email;
    global.signupPassword = password;

    // Handle signup logic here
    console.log('Signing up with:', email, password);

    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('./assets/Screenshot 2024-06-02 213700.png')} // Change this to the path of your background image
      style={{ flex: 1,
        width: '100%',
        height: '100%',}}
      resizeMode="cover"
    >
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Button title="Signup" onPress={handleSignup} />
    </View>
    </ImageBackground>
  );
};

const styles = {
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    width: 300,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
};

export default SignupScreen;
