import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DeckList from './DeckList';
import Title from '../Title';
import { yellow } from '../../colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: yellow,
  },
})

const data = [{
  title: 'Hello',
  numberOfCards: 3
}, {
  title: 'Bye',
  numberOfCards: 2
}]
export default () => {
  return (
    <View style={[style.container]}>
      <Title>Decks</Title>

      <DeckList questions={data} />
    </View>
  )
}
