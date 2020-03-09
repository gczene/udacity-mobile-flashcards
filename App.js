import React, { Component } from 'react';
import DeckForm from './src/components/DeckForm';
import DeckView from './src/components/DeckView';
import Decks from './src/components/Decks';
import { FontAwesome } from '@expo/vector-icons';
import { pink, dark, yellow } from './src/colors';
import { Provider } from 'react-redux';
import store from './src/store';
import CardView from './src/components/CardView';
import CardForm from './src/components/CardForm';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Results from './src/components/Results';
import Preloader from './src/components/Preloader';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: yellow,
      }
    }}>
      <Stack.Screen name="Home" component={Decks} options={{ title: 'Overview' }} />
      <Stack.Screen name="DeckView" component={DeckView} />
      <Stack.Screen name="CardView" component={CardView} />
      <Stack.Screen name="AddCard" component={CardForm} options={{title: 'Add Card'}} />
      <Stack.Screen
        name="Results"
        component={Results}
        options={({navigation}) => ({
          title: 'Completed',
          headerLeft: () => (<HeaderBackButton label={'Home'} onPress={() => navigation.navigate('Home')} />)
        })}
      />

    </Stack.Navigator>
  )
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <Preloader>
            <Tab.Navigator
              tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: '#FEC94B',
                tabStyle: {
                },
                labelStyle: {
                  // fontSize: 20,
                  fontWeight: 'bold',
                },
                style: {
                  paddingTop: 0,
                  borderWidth: 1,
                  borderColor: 'green',
                  backgroundColor: '#F5AC33'
                }
              }}>
              <Tab.Screen
                name="Home"
                component={Home}
                options={{
                  tabBarIcon: ({color}) => <FontAwesome name="home" size={25} color={color} />
                }}
              />
              <Tab.Screen
                name="New Deck"
                component={DeckForm}
                options={{
                  tabBarIcon: ({color}) => <FontAwesome name="plus-square" size={25} color={color} />
                }}
              />
            </Tab.Navigator>
          </Preloader>
        </Provider>
      </NavigationContainer>
    );
  }
}
