import React from 'react';
import { FlatList } from 'react-native';
import Item from '../DeckItem';

export default ({ questions }) => {
  return (
    <FlatList
      style={{width: '90%'}}
      data={questions}
      renderItem={({item}) => {
        return (
          <Item title={item.title} numberOfCards={item.numberOfCards}/>
        )
      }
    }
  />)

}
