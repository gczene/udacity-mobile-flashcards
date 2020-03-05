import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";


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
    backgroundColor: '#FF6A70',
  },
  secondary: {
    borderColor: '#2F1627',
    borderWidth: 1,
  },
});

export default ({text = 'no text passed', secondary, style = {}, children, onPress = () => {}}) => {
  const predefinedStyle = secondary ? btnStyle.secondary : btnStyle.primary;

  const styles = [btnStyle.btn, predefinedStyle, style];

  return (
    <TouchableOpacity style={styles} onPress={onPress}>
      <Text style={btnStyle.text}>{children}</Text>
    </TouchableOpacity>
  );
}
