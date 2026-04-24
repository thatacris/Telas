import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Missoes() {
  const [completed, setCompleted] = useState([false, false, false]);

  const missions = [
    { text: 'Treinar 30 minutos', xp: 20, attr: 'Disciplina' },
    { text: 'Beber 2L de água', xp: 15, attr: 'Saúde' },
    { text: 'Dormir 8 horas', xp: 20, attr: 'Energia' },
  ];

  const toggleComplete = (index: number) => {
    const newCompleted = [...completed];
    newCompleted[index] = !newCompleted[index];
    setCompleted(newCompleted);
  };

  const completedCount = completed.filter(c => c).length;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.progress}>Progresso de Conclusão: {completedCount}/6 completadas</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${(completedCount / 6) * 100}%` }]} />
      </View>
      
      {missions.map((mission, index) => (
        <TouchableOpacity key={index} style={styles.missionCard} onPress={() => toggleComplete(index)}>
          <MaterialIcons name={completed[index] ? 'check-box' : 'check-box-outline-blank'} size={24} color="#FFD700" />
          <View style={styles.missionText}>
            <Text style={styles.missionDesc}>{mission.text} (+{mission.xp} XP • {mission.attr})</Text>
          </View>
        </TouchableOpacity>
      ))}
      
      <Text style={styles.footer}>Seu maior inimigo é a falta de disciplina.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  progress: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    marginBottom: 20,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FFD700',
    borderRadius: 5,
  },
  missionCard: {
    flexDirection: 'row',
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  missionText: {
    marginLeft: 10,
  },
  missionDesc: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    fontSize: 14,
    color: '#FFD700',
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'monospace',
  },
});