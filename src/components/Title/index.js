import React from 'react';

import { Text, StyleSheet } from 'react-native';

const titleStyle = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default ({children, style = {}}) => <Text style={[titleStyle.title, style]}>{children}</Text>
