import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const style = StyleSheet.create({
  item: {
    paddingVertical: 30,
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333333',
    width: '100%',
    marginTop: 15,
  },
  num: {
    fontSize: 16,
  },
  title: {
    fontSize: 30
  }
})

export default ({ deck, numberOfCards, onPress = () => {} }) => {

  const press = () => onPress(deck);

  return (
    <TouchableOpacity style={style.item} onPress={press}>
      <Text style={style.title}>{deck.title}</Text>
      <Text style={style.num}>{numberOfCards} cards</Text>
    </TouchableOpacity>
  )
}
