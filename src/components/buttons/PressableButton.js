import React from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

const PressableButton = ({ title, message, style }) => {
  return (
    <Pressable
      onPress={() => {
        Alert.alert(message);
      }}
    >
      {({ pressed }) => (
        <View
          style={[{ backgroundColor: pressed ? '#0476a0' : '#1146aa' }, style]}
        >
          <Text
            style={[
              { color: pressed ? '#fafafa' : '#aaffaa' },
              styles.textStyle,
            ]}
          >
            {title}
          </Text>
        </View>
      )}

      {/* <View>
          <Text>
            {title}
          </Text>
      </View> */}
    </Pressable>
  );
};

export default PressableButton;

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 16,
    paddingVertical: 60,
  },
});