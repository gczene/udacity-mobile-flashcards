import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import DeckForm from './src/components/DeckForm';
// import DeckView from './src/components/DeckView';
import Decks from './src/components/Decks';
import { pink, dark } from './src/colors';

import DeckView from './src/components/CardView';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Homer" component={Decks} />
    </Stack.Navigator>
  )
}

/**
 <Stack.Navigator>
 <Stack.Screen name="Home" component={Decks} />
 </Stack.Navigator>
 */
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
          activeTintColor: pink,
          inactiveTintColor: dark,
        }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="New Deck" component={DeckForm} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
