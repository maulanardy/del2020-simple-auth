import React from 'react';
import { View, Text } from 'react-native';

const container = { flex: 1, alignItems: 'center', justifyContent: 'center' };

const detail = () => {
  return (
    <View style={container}>
      <Text>Details Screen</Text>
    </View>
  );
};

export default detail;
