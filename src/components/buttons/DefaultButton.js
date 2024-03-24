import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { Spacer } from "../spacer";

const DefaultButton = ({ icon, title, currText, modalVar, setModalVar }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#F5F5F5" : "#FFFFFF",
          borderRadius: 10,
          padding: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          minWidth: "45%",
        },
      ]}
      onPress={() => {
        setModalVar(true);
      }}
    >
      <View style={styles.button}>
        <Image source={icon} style={{ width: 45, height: 45 }} />
        <Spacer vSize={5}></Spacer>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.setting, { fontWeight: 700 }]}>{currText}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "column",
    alignItems: "centre",
    // width: 150,
    // minWidth: '43%',
  },
  title: {
    color: "#5D5B57",
    fontFamily: "inter",
    fontSize: 12,
    marginRight: 10,
  },
  setting: {
    color: "#35322D",
    fontFamily: "inter",
    fontSize: 16,
  },
});

export default DefaultButton;
