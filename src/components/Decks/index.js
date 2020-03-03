import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DeckList from './DeckList';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
  },
  title: {
    fontSize: 36,
  }
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
    <View style={style.container}>
      <Text style={style.title}>Decks</Text>

      <DeckList questions={data} />
    </View>
  )
}
