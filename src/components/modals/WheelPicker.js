import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React from "react";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import { Spacer } from "../spacer";
import { fetchData } from "../../utils/utils";

const WheelPicker = ({
  title,
  leftText,
  rightText,
  values,
  showModal,
  setShowModal,
  valueVar,
  setValueVar,
  ipAddress,
  setMoisture,
  setLight,
  endpoint = "",
  buttonText = "Done",
}) => {
  // Make temp vars to store values before 'Done' is pressed
  let temp = 0;
  return (
    <View>
      {/* Background blur modal */}
      <Modal animationType="fade" transparent={true} visible={showModal}>
        <View
          style={{
            height: "100%",
            marginTop: "auto",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <View
          style={{
            height: 410,
            marginTop: "auto",
            backgroundColor: "white",
            borderTopLeftRadius: 13,
            borderTopRightRadius: 13,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "top",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "inter-sb",
                fontSize: 17,
                fontWeight: 700,
                color: "#35322D",
                paddingTop: 24,
              }}
            >
              {title}
            </Text>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                paddingTop: 30,
              }}
            >
              <Text style={{ fontFamily: "inter", fontSize: 23 }}>
                {leftText}
              </Text>
              <WheelPickerExpo
                height={200}
                width={75}
                initialSelectedIndex={valueVar - 1}
                items={values.map((name) => ({ label: name, value: "" }))}
                onChange={({ item }) => (temp = item.label)}
                fontFamily={"inter"}
                haptics={true}
              />
              <Text style={{ fontFamily: "inter", fontSize: 23 }}>
                {rightText}
              </Text>
            </View>
            <Spacer vSize={10}></Spacer>
            <TouchableOpacity
              style={{
                width: "80%",
                backgroundColor: "#35322D",
                height: 50,
                justifyContent: "center",
                borderRadius: 14,
              }}
              onPress={() => {
                setShowModal(false);
                setValueVar(temp);
                const newIp = ipAddress + "/" + endpoint;
                fetchData(newIp, setMoisture, setLight);
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "inter-sb",
                  fontSize: 18,
                }}
              >
                {buttonText}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ width: "100%", paddingTop: 16 }}
              onPress={() => {
                setShowModal(false);
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "inter-sb",
                  fontSize: 17,
                }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default WheelPicker;

const styles = StyleSheet.create({});
