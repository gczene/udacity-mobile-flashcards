import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DeckList from './DeckList';
import Title from '../Title';
import { yellow } from '../../colors';
import { connect } from 'react-redux';
import Empty from './Empty';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    backgroundColor: yellow,
  },
});

const Decks = ({decks, onPress}) => {
  return (
    <View style={[style.container]}>
      <Title>Decks</Title>
      {decks.length === 0 && <Empty/> }
      <DeckList decks={decks} onPress={onPress} />
    </View>
  );
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
