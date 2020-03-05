import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export const ErrorIcon = ({color = 'white'}) => {
  return (
    <MaterialIcons name="error-outline" size={32} color={color} />
  )
}
