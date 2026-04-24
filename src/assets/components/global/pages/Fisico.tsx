import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Fisico() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Físico</Text>
      <TouchableOpacity style={styles.cameraButton}>
        <MaterialIcons name="camera" size={50} color="#FFD700" />
        <Text style={styles.buttonText}>Postar Evolução</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFD700',
    marginBottom: 20,
  },
  cameraButton: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFD700',
    fontSize: 18,
    marginTop: 10,
  },
});