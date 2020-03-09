import React, { useState } from 'react';
import {Text, StyleSheet, View, KeyboardAvoidingView, SafeAreaView} from 'react-native';
import Title from '../Title';
import Input from '../form/Input';
import UdaButton from '../form/UdaButton';
import ErrorMessage from '../form/ErrorMessage';
import { yellow } from '../../colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: yellow,
  },
  label: {
    marginVertical: 10,
    fontSize: 18,
  },
  btnContainer: {
    paddingTop: 30,
  }
})

export default ({question: defaultQuestion, answer: defaultAnswer, onSubmit = () => {}}) => {

  const [ question, setQuestion ] = useState(defaultQuestion || '');
  const [ answer, setAnswer ] = useState(defaultAnswer || '');
  const [ hasError, setHasError ] = useState(false);

  const submit = () => {
    const q = question.trim();
    const a = answer.trim();
    if (q.length <= 3 || a.length <= 3) {
      setHasError(true);
    } else {
      setHasError(false)
      onSubmit({
        question: q,
        answer: a,
      });
    }
  }
  return (
    <KeyboardAvoidingView style={style.container} behavior={Platform.OS === "ios" ? "padding" : null}>
      <SafeAreaView>
      <Title>Edit Card</Title>
      <View>
        <Text style={style.label}>Question</Text>
        <Input onChangeText={setQuestion} value={question} placeholder={'Question'} />
      </View>
      <View>
        <Text style={style.label}>Answer</Text>
        <Input onChangeText={setAnswer} value={answer} placeholder={'Answer'} />
      </View>
      <View style={style.btnContainer}>
        {
          hasError &&
          <ErrorMessage>Question or Answer is invalid!</ErrorMessage>
        }
      </View>
      <View>
        <UdaButton onPress={submit}>Submit</UdaButton>
      </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
};
