import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DeckList from './DeckList';
import Title from '../Title';
import { yellow } from '../../colors';
import { connect } from 'react-redux';

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
}];

const Decks = ({decks, onPress}) => {
  return (
    <View style={[style.container]}>
      <Title>Decks</Title>
      <DeckList decks={decks} onPress={onPress} />
    </View>
  )
};

const mapDispatchToProps = (dispatch, { navigation }) => {
  return {
    onPress: (deck) => navigation.navigate('DeckView', { id: deck.title })
  };
};

const mapStateToProps = ({ decks }) => {
  return {
    decks: Object.keys(decks).map(id => decks[id])
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Decks);
