import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import UdaButton from '../form/UdaButton';
import Title from '../Title';
import { yellow } from "../../colors";

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: yellow,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    paddingVertical: 15,
  },
  subTitle: {
    paddingVertical: 15,
    fontSize: 24,
  },
})

export default ({navigation, deck = {}, deleteDeck = () => {}}) => {

  const { title = '', questions = [] } = deck;
  const startQuiz = () => {
    navigation.navigate(
      'CardView',
      {
        deck,
        currentIndex: 0,
        score: 0,
      }
    )
  }

  const navigateToCardForm = () => {
    navigation.navigate('AddCard', {
      title
    })
  };

  const remove = () => {
    deleteDeck(deck.title);
    navigation.navigate('Home');
    ;
  };

  const confirm = () => {
    Alert.alert(
      'Sure?',
      'Really?',
      [
        {text: 'NO', style: 'cancel'},
        {text: 'YES', onPress: remove},
      ]
    );
  };

  return (
    <View style={style.container}>
      <Title>{title}</Title>
      <Text style={style.subTitle}>{questions.length} cards</Text>
      <View>
        <UdaButton onPress={navigateToCardForm}>Add card</UdaButton>
        <UdaButton onPress={startQuiz} disabled={questions.length === 0} secondary>Start Quiz</UdaButton>
        <UdaButton onPress={confirm}>Delete Deck</UdaButton>
      </View>
    </View>
  );
};
