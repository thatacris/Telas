import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Perfil() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.initials}>JG</Text>
      </View>
      
      <View style={styles.grid}>
        <View style={styles.gridItem}>
          <Text style={styles.gridIcon}>📏</Text>
          <Text style={styles.gridValue}>1.78m</Text>
          <Text style={styles.gridLabel}>Altura</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.gridIcon}>🏋️</Text>
          <Text style={styles.gridValue}>81.2 kg</Text>
          <Text style={styles.gridLabel}>Peso</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.gridIcon}>🎯</Text>
          <Text style={styles.gridValue}>Ganhar massa</Text>
          <Text style={styles.gridLabel}>Objetivo</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.gridIcon}>⚡</Text>
          <Text style={styles.gridValue}>3,420</Text>
          <Text style={styles.gridLabel}>XP Total</Text>
        </View>
      </View>
      
      <View style={styles.imcCard}>
        <Text style={styles.imcText}>IMC ATUAL: 24.8</Text>
        <Text style={styles.imcStatus}>NORMAL</Text>
      </View>
      
      <View style={styles.badges}>
        <Text style={styles.badge}>1-Iniciado</Text>
        <Text style={styles.badge}>5-Discípulo</Text>
        <Text style={styles.badge}>10-Evoluindo</Text>
        <Text style={styles.badge}>20-Elite</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  initials: {
    fontSize: 36,
    color: '#000',
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  gridItem: {
    width: '48%',
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  gridIcon: {
    fontSize: 30,
    marginBottom: 5,
  },
  gridValue: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  gridLabel: {
    fontSize: 14,
    color: '#ccc',
  },
  imcCard: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  imcText: {
    fontSize: 18,
    color: '#fff',
  },
  imcStatus: {
    fontSize: 16,
    color: '#00FF00',
    fontWeight: 'bold',
  },
  badges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  badge: {
    backgroundColor: '#FFD700',
    color: '#000',
    padding: 10,
    borderRadius: 20,
    margin: 5,
    fontWeight: 'bold',
  },
});