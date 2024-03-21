import React from 'react';
import { View } from 'react-native';

const Spacer = ({ vSize = 0, hSize = 0 }) => {
  return (
    <View
      style={{
        paddingVertical: vSize,
        paddingHorizontal: hSize,
      }}
    />
  );
};

export default Spacer;