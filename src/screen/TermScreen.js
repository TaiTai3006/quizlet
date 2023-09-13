import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TermScreen = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
     <Text> Term Screen</Text>
    </TouchableOpacity>
  );
};

export default TermScreen;