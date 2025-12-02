import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useAuth } from '../context/AuthContext';

import LoginScreen from '../screens/LoginScreen';
import SelectStudentScreen from '../screens/SelectStudentScreen';
import HomeScreen from '../screens/HomeScreen';
import RecadosScreen from '../screens/RecadosScreen';
import NotasScreen from '../screens/NotasScreen';
import FaltasScreen from '../screens/FaltasScreen';
import ChatScreen from '../screens/ChatScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#6B7280',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Recados') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          } else if (route.name === 'Notas') {
            iconName = focused ? 'document-text' : 'document-text-outline';
          } else if (route.name === 'Faltas') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Config') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
      <Tab.Screen name="Recados" component={RecadosScreen} />
      <Tab.Screen name="Notas" component={NotasScreen} />
      <Tab.Screen name="Faltas" component={FaltasScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen
        name="Config"
        component={SettingsScreen}
        options={{ title: 'Config.' }}
      />
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  const { user, selectedStudent } = useAuth();

  return (
    <NavigationContainer>
      {user ? (
        <Stack.Navigator>
          {!selectedStudent ? (
            <Stack.Screen
              name="SelectStudent"
              component={SelectStudentScreen}
              options={{ title: 'Selecione o aluno' }}
            />
          ) : (
            <Stack.Screen
              name="MainTabs"
              component={MainTabs}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
