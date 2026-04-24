import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Ranking() {
  const rankings = [
    { name: 'Jogador 1', score: 5000 },
    { name: 'Jogador 2', score: 4800 },
    { name: 'Você', score: 3420 },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ranking</Text>
      {rankings.map((player, index) => (
        <View key={index} style={styles.rankItem}>
          <Text style={styles.rankNumber}>{index + 1}</Text>
          <Text style={styles.playerName}>{player.name}</Text>
          <Text style={styles.score}>{player.score} XP</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 20,
  },
  rankItem: {
    flexDirection: 'row',
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  rankNumber: {
    fontSize: 18,
    color: '#FFD700',
    width: 30,
  },
  playerName: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
  },
  score: {
    fontSize: 16,
    color: '#FFD700',
  },
});