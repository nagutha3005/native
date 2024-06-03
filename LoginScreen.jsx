import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {

    if (email !== global.signupEmail || password !== global.signupPassword) {
      setErrorMessage('Invalid email or password Please SignUp!');
      return;
    }
    navigation.navigate('Health');


    console.log('Logging in with:', email, password);
    navigation.navigate('Location');
    setErrorMessage('');
  };

  const handleSignUp = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
        
      <LottieView
        source={require('./assets/Animation - 1717344967632.json')}
        autoPlay
        loop
        style={styles.animation}
      />
      <View style={styles.overlay}>
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
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        <Button title="Login" onPress={handleLogin} />
        <Text style={styles.signupText} onPress={handleSignUp}>
          Don't have an account? <Text style={styles.signupLink}>Click Here!</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animation: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    width: 300,
    borderRadius: 8,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  signupText: {
    marginTop: 20,
  },
  signupLink: {
    color: 'blue',
  },
});

export default LoginScreen;
