import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { UdaButton } from '../form';
import Title from '../Title';
import { pink, yellow } from '../../colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: yellow,
  },
  currentScreenWrapper: {
    alignItems: 'flex-end',
    paddingRight: 25,
    paddingTop: 15,
  },
  textWrapper: {
    alignItems: 'center',
  },
  btnWrapper: {
    paddingBottom: 200,
  },
  subTitle: {
    color: pink,
    fontWeight: 'bold',
    paddingTop: 30,
  }
});

export default ({ route, navigation}) => {

  const { deck, score, currentIndex } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: deck.title})
  }, [deck.title] )

  const [ isAnswerDisplayed, setIsAnswerDisplayed ] = useState(false);

  const goToNext = (isCorrect) => {
    const newScore = score + (isCorrect ? 1 : 0)
    if (currentIndex < deck.questions.length -1) {
      navigation.setParams({
        score: newScore,
        currentIndex: currentIndex + 1,
        deck,
      })
    } else {
      navigation.navigate('Results', {
        deck,
        score: newScore,
      });
    }
  }

  return (
    <View style={style.container}>
      <View style={style.currentScreenWrapper}><Text>{currentIndex + 1} / {deck.questions.length}</Text></View>
      <View style={style.textWrapper}>
        <Title>
          {isAnswerDisplayed && deck.questions[currentIndex].answer}
          {!isAnswerDisplayed && deck.questions[currentIndex].question}
        </Title>
        <TouchableOpacity onPress={() => setIsAnswerDisplayed(!isAnswerDisplayed)}>
          <Text style={style.subTitle}>
            {isAnswerDisplayed && 'Question'}
            {!isAnswerDisplayed && 'Answer'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={style.btnWrapper}>
        <UdaButton onPress={() => goToNext(true)}>Correct</UdaButton>
        <UdaButton onPress={() => goToNext(false)} secondary>Incorrect</UdaButton>
      </View>
    </View>
  )
}
