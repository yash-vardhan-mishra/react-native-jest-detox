import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  name: string;
}

const Component: React.FC<Props> = ({ name }) => {
  return (
    <View style={{ marginVertical: 12 }}>
      <Text>Hello, {name}!</Text>
    </View>
  );
};

export default Component;