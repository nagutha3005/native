import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import healthData from './HealthData';

const placeholderImage = "https://via.placeholder.com/150";

export default function HealthScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Health Issues</Text>
      {healthData.map((issue, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          <Image source={{ uri: issue.image || placeholderImage }} style={styles.image} />
          <View style={styles.cardContent}>
            <Text style={styles.issueTitle}>{issue.issue}</Text>
            <View style={styles.fruitsContainer}>
              {issue.fruits.map((fruit, index) => (
                <View key={index} style={styles.fruitItem}>
                  <Text style={styles.fruitName}>{fruit.name}</Text>
                  <Text style={styles.fruitBenefits}>{fruit.benefits}</Text>
                </View>
              ))}
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 15,
  },
  issueTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fruitsContainer: {
    marginBottom: 10,
  },
  fruitItem: {
    marginBottom: 5,
  },
  fruitName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fruitBenefits: {
    fontSize: 14,
    color: '#555',
  },
});
