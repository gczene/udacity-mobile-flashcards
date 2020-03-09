import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import DeckForm from './src/components/DeckForm';
import DeckView from './src/components/DeckView';
import Decks from './src/components/Decks';
import { pink, dark } from './src/colors';
import { Provider } from 'react-redux';
import store from './src/store';
import CardView from './src/components/CardView';
import CardForm from './src/components/CardForm';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Results from './src/components/Results';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Decks} options={{ title: 'Overview' }} />
      <Stack.Screen name="DeckView" component={DeckView} />
      <Stack.Screen name="CardView" component={CardView} />
      <Stack.Screen name="AddCard" component={CardForm} options={{title: 'Add Card'}} />
      <Stack.Screen
        name="Results"
        component={Results}
        options={({navigation}) => ({
          title: 'hello',
          headerLeft: () => (<HeaderBackButton label={'Home'} onPress={() => navigation.navigate('Home')} />)
        })}
      />

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
        <Provider store={store}>
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: pink,
              inactiveTintColor: dark,
            }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="New Deck" component={DeckForm} />
          </Tab.Navigator>
        </Provider>
      </NavigationContainer>
    );
  }
}
