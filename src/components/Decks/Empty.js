import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '../Title';

const style = StyleSheet.create({
  container: {
    paddingTop: 40,
  }
});
export default () => {
  return (
    <View style={style.container}>
      <Title>There is no deck yet!</Title>
    </View>
  );
};
