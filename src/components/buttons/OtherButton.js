import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';

const OtherButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.contentWrapper}>
        <Text style={styles.buttonText}>{title}</Text>
        <Ionicons name="chevron-forward-outline" size={15} color="#3C3C434D" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderTopWidth: 0.7,
    borderColor: "#B9B9BB",
  },
  buttonText: {
    paddingVertical: 4,
    fontFamily: "inter",
    fontSize: 17,
    color: "#35322D",
  },
  contentWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default OtherButton;
