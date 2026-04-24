import './gesture-handler.js';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { Routes } from './src/assets/components/Routes';


export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});