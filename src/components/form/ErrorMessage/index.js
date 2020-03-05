import { Text, View, StyleSheet } from "react-native";
import { ErrorIcon } from "../../icons";
import React from "react";

const style = StyleSheet.create({
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

export default ({children}) => {
  return (
    <View style={style.errorView}>
      <ErrorIcon color={'white'} />
      <Text style={style.errorText}>{children}</Text>
    </View>
  );
}
