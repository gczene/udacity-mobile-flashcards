import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { UdaButton } from '../form';
import Title from '../Title';
import { pink } from '../../colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
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

export default () => {

  const [ isAnswerDisplayed, setIsAnswerDisplayed ] = useState(false);

  return (
    <View style={style.container}>
      <View><Text>2 / 2</Text></View>
      <View style={style.textWrapper}>
        <Title>
          {isAnswerDisplayed && 'ANSWER'}
          {!isAnswerDisplayed && 'QUESTION QUESTION QUESTION QUESTION QUESTION QUESTION QUESTION '}
        </Title>
        <TouchableOpacity onPress={() => setIsAnswerDisplayed(!isAnswerDisplayed)}>
          <Text style={style.subTitle}>
            {isAnswerDisplayed && 'QUESTION'}
            {!isAnswerDisplayed && 'Answer'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={style.btnWrapper}>
        <UdaButton>Correct</UdaButton>
        <UdaButton secondary>Incorrect</UdaButton>
      </View>
    </View>
  )
}
