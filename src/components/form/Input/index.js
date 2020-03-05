import React from 'react';
import { TextInput, StyleSheet } from "react-native";
import { dark } from "../../../colors";

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 15,
    borderColor: dark,
  }
});
export default (props) => {
  return (
    <TextInput {...props} style={style.input} />
  );
};
