import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RadarChart } from './charts';

export default function Dashboard() {
  const radarAttrs = [
    { label: 'Disciplina', value: 80 },
    { label: 'Saúde', value: 70 },
    { label: 'Foco', value: 60 },
    { label: 'Energia', value: 75 },
    { label: 'Produtividade', value: 85 },
    { label: 'Bem-estar', value: 65 },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>BEM-VINDO DE VOLTA, JOGADOR</Text>
      
      <View style={styles.levelCard}>
        <Text style={styles.levelText}>Nível: 3.4</Text>
        <Text style={styles.rankText}>Rank: DISCÍPULO</Text>
        <View style={styles.xpBar}>
          <View style={[styles.xpFill, { width: '68%' }]} />
          <Text style={styles.xpText}>680 / 1000 XP</Text>
        </View>
      </View>
      
      <View style={styles.chartContainer}>
        <RadarChart attrs={radarAttrs} />
      </View>
      
      <View style={styles.trainingCard}>
        <Text style={styles.trainingTitle}>Treino de Hoje</Text>
        <Text>Treino Rápido — HIIT, 20 min, 250 kcal, Nível Fácil</Text>
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
  header: {
    fontSize: 24,
    fontFamily: 'Orbitron', // Assuming font is loaded
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  levelCard: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  levelText: {
    fontSize: 18,
    color: '#fff',
  },
  rankText: {
    fontSize: 16,
    color: '#fff',
  },
  xpBar: {
    height: 20,
    backgroundColor: '#555',
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
  },
  xpFill: {
    height: '100%',
    backgroundColor: '#FFD700',
    borderRadius: 10,
  },
  xpText: {
    position: 'absolute',
    alignSelf: 'center',
    color: '#000',
    fontSize: 12,
  },
  chartContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  trainingCard: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
  },
  trainingTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
});