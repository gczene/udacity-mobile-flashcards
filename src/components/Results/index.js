import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Title from '../Title';
import UdaButton from '../form/UdaButton';
import { yellow } from "../../colors";

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: yellow,
  },
  results: {
    paddingVertical: 20,
    textAlign: 'center',
  }
});

export default ({route, navigation}) => {
  const { deck, score } = route.params;

  const restartQuiz = () => {
    navigation.navigate(
      'CardView',
      {
        deck,
        currentIndex: 0,
        score: 0,
      }
    )
  };

  return (
    <View style={style.container}>
      <View>
        <Title>{deck.title}</Title>
        <Text style={style.results}>
          Your results
        </Text>
        <Title>
          {score} out of {deck.questions.length}
        </Title>
      </View>
      <View>
        <UdaButton onPress={restartQuiz}>Restart Quiz</UdaButton>
        <UdaButton secondary onPress={() => navigation.navigate('Home')}>Back to Home</UdaButton>
      </View>
    </View>
  )
}
