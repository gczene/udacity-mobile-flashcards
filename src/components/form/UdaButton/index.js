import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { pink, dark } from '../../../colors'

const btnStyle = StyleSheet.create({
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
  primary: {
    backgroundColor: pink,
  },
  secondary: {
    borderColor: dark,
    borderWidth: 1,
  },
  disabled: {
    color: 'lightgrey',
  }
});

export default ({text = 'no text passed', secondary, disabled = false, style = {}, children, onPress = () => {}}) => {
  const predefinedStyle = secondary ? btnStyle.secondary : btnStyle.primary;

  const wrapperStyles = [btnStyle.btn, predefinedStyle, style];
  const textStyles = [btnStyle.text];
  if (disabled) {
    textStyles.push(btnStyle.disabled);
  }
  return (
    <TouchableOpacity style={wrapperStyles} disabled={disabled} onPress={onPress}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
}
