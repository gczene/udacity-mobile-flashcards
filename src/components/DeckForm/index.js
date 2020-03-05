import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, Keyboard, KeyboardAvoidingView } from 'react-native';
import Title from '../Title';
import UdaButton from '../form/UdaButton';
import Input from '../form/Input';
import ErrorMessage from '../form/ErrorMessage';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputWrapper: {
    marginVertical: 15,
  }
})

export default ({onSubmit = () => {}}) => {

  const [ title, setTitle ] = useState('');
  const [ hasError, setHasError ] = useState(false);
  const submit = () => {
    if (title.trim().length <= 3) {
      setHasError(true);
    } else {
      setHasError(false);
      onSubmit(title);
    }
    Keyboard.dismiss();
  }
  return (
    <KeyboardAvoidingView style={style.container} behavior={Platform.OS === "ios" ? "padding" : null}>
      <SafeAreaView >

        <Title>What is the title of your new deck?</Title>
        <View style={style.inputWrapper}>
          <Input
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setTitle(text)}
            value={title}
          />
        </View>
        {hasError && <ErrorMessage>Min 3 characters!</ErrorMessage>}
        <UdaButton onPress={submit}>Submit</UdaButton>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
