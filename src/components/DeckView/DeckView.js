import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import UdaButton from '../form/UdaButton';
import Title from '../Title';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
const initialCard = {
  title: '',
  questions: []
}
export default ({route, navigation, deck}) => {

  const { title, questions } = deck;
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
  }
  return (
    <View style={style.container}>
      <Title>{title}</Title>
      <Text style={style.subTitle}>{questions.length} cards</Text>
      <View>
        <UdaButton onPress={navigateToCardForm}>Add card</UdaButton>
        <UdaButton onPress={startQuiz} disabled={questions.length === 0} secondary>Start Quiz</UdaButton>
      </View>
    </View>
  );
};
