import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, Keyboard, KeyboardAvoidingView } from 'react-native';
import Title from '../Title';
import UdaButton from '../form/UdaButton';
import { ErrorIcon } from "../icons";

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 50,
  },
  btnContainer: {
    paddingTop: 25,
  },
  errorView: {
    flexDirection: 'row',
    margin: 15,
    padding: 15,
    backgroundColor: '#961F41',
  },
  errorText: {
    paddingLeft: 15,
    flex: 1,
    alignSelf: 'center',
    color: 'white',
  }
})

const ErrorView = () => {
  return (
    <View style={style.errorView}>
      <ErrorIcon color={'white'} />
      <Text style={style.errorText}>Min 3 characters!</Text>
    </View>
  );
}
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
    <KeyboardAvoidingView style={style.btnContainer} behavior={Platform.OS === "ios" ? "padding" : null}>
      <SafeAreaView style={style.container}>
        <Title>What is the title of your new deck?</Title>
        <View>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setTitle(text)}
            value={title}
          />
        </View>
        {hasError && <ErrorView />}
        <UdaButton onPress={submit}>Submit</UdaButton>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
