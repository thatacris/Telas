import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Login from './global/pages/login';
import Dashboard from './global/pages/Dashboard/Dashboard';
import Missoes from './global/pages/Missoes';
import Ranking from './global/pages/Ranking';
import Fisico from './global/pages/Fisico';
import Perfil from './global/pages/Perfil';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="grid-view" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Missões"
        component={Missoes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="track-changes" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Ranking"
        component={Ranking}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="emoji-events" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Físico"
        component={Fisico}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="camera" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomRoutes" component={BottomRoutes} />
    </Stack.Navigator>
  );
}
