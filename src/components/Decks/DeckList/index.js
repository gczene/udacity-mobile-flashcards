import React from 'react';
import { FlatList } from 'react-native';
import Item from '../DeckItem';

export default ({ decks, onPress }) => {
  return (
    <FlatList
      style={{width: '90%'}}
      data={decks}
      renderItem={({item}) => {
        return (
          <Item deck={item} onPress={onPress} numberOfCards={item.questions.length}/>
        )
      }
    }
  />)

}
