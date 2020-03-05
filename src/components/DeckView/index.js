import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import UdaButton from '../form/UdaButton';
import Title from '../Title';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginTop: 30,
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
export default ({card = initialCard}) => {
  const { title, questions } = initialCard;
  return (
    <View style={style.container}>
      <Title>{title}</Title>
      <Text style={style.subTitle}>{questions.length} cards</Text>
      <View>
        <UdaButton>Add card</UdaButton>
        <UdaButton secondary>Start Quiz</UdaButton>
      </View>
    </View>
  );
};
