import React, { useState } from 'react';
import { View, Text, Modal, Button, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation from react-navigation

const LocationScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [osInfo, setOsInfo] = useState(null);
  const [location, setLocation] = useState(null);
  const navigation = useNavigation(); // Initialize navigation

  const getOsInfo = () => {
    const os = Platform.OS;
    const expoVersion = Constants.nativeAppVersion;
    const deviceName = Constants.deviceName;
    const osInfo = `OS: ${os}\nExpo Version: ${expoVersion}\nDevice Name: ${deviceName}`;
    setOsInfo(osInfo);
  };

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let locationData = await Location.getCurrentPositionAsync({});
      setLocation(locationData);
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.linkText} onPress={() => navigation.navigate('Health')}>
        CLICK TO SEE BENEFITS OF FRUITS
      </Text>
      <Text>Screen To check the Location and OS</Text>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Please Check The Location and Device OS</Text>
            <TouchableOpacity style={styles.button} onPress={getLocation}>
              <Text style={styles.buttonText}>Get Location</Text>
            </TouchableOpacity>
            {location && (
              <Text style={styles.locationText}>
                Your Location: {location.coords.latitude}, {location.coords.longitude}
              </Text>
            )}
            <TouchableOpacity style={styles.button} onPress={getOsInfo}>
              <Text style={styles.buttonText}>Get OS Info</Text>
            </TouchableOpacity>
            {osInfo && <Text style={styles.osInfo}>{osInfo}</Text>}
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    marginBottom: 100,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationText: {
    marginTop: 10,
    fontSize: 16,
  },
  osInfo: {
    marginTop: 10,
    fontSize: 16,
    color: 'green',
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LocationScreen;
