import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const SwitchButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Switch
      trackColor={{ false: "#E9E9EB", true: "#34C759" }}
      thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
      marginLeft='auto'
    />
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default SwitchButton;
