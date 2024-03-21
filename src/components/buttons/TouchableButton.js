import React from "react";
import { Alert, TouchableOpacity, StyleSheet, Text } from "react-native";

const TouchableButton = ({ title, message, style }) => {
  return (
    <TouchableOpacity
        style={[styles.bgColor, style]}
        onPress={() => {
          Alert.alert(message);
        }}
        // activeOpacity={0.6}
        // disabled={false}
        // hitSlop={30}
      >
        <Text style={styles.textStyle}>{title}</Text>
        {/* <Text>{title}</Text> */}
    </TouchableOpacity>
  );
};

export default TouchableButton;

const styles = StyleSheet.create({
    bgColor: {
      backgroundColor: '#004600',
    },
    textStyle: {
      color: 'white',
      fontSize: 16,
      paddingVertical: 60,
    },
  });
