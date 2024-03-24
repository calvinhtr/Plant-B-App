import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import { React, useState } from "react";
import { Spacer } from "../spacer";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import { fetchData } from "../../utils/utils";

const WheelPicker = ({
  title,
  showModal,
  setShowModal,
  hrVar,
  setHrVar,
  minVar,
  setMinVar,
  amPMVar,
  setAMPMVar,
  ipAddress,
  setMoisture,
  setLight,
  endpoint = "",
  buttonText = "Done",
}) => {
  // Make temp vars to store values before 'Done' is pressed
  let tempHr = "6";
  let tempMin = "00";
  let tempAMPM = "AM";

  const hrArray = ["12"];
  const minArray = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"];
  const amPM = ["AM", "PM"];

  for (let i = 1; i <= 11; i++) {
    hrArray.push(i.toString());
  }
  for (let i = 10; i <= 59; i++) {
    minArray.push(i.toString());
  }
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
              <WheelPickerExpo
                height={200}
                width={60}
                initialSelectedIndex={hrArray.indexOf(hrVar)}
                items={hrArray.map((name) => ({ label: name, value: "" }))}
                onChange={({ item }) => (tempHr = item.label)}
                fontFamily={"inter"}
                haptics={true}
              />

              <WheelPickerExpo
                height={200}
                width={60}
                initialSelectedIndex={minArray.indexOf(minVar)}
                items={minArray.map((name) => ({ label: name, value: "" }))}
                onChange={({ item }) => (tempMin = item.label)}
                fontFamily={"inter"}
                haptics={true}
              />

              <WheelPickerExpo
                height={200}
                width={60}
                initialSelectedIndex={amPM.indexOf(amPMVar)}
                items={amPM.map((name) => ({ label: name, value: "" }))}
                onChange={({ item }) => (tempAMPM = item.label)}
                fontFamily={"inter"}
                haptics={true}
              />
            </View>
            {/* <View style={{backgroundColor: 'grey', width: '80%', height: 30, marginTop: -110, zIndex: -1}}/> */}
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
                setHrVar(tempHr);
                setMinVar(tempMin);
                setAMPMVar(tempAMPM);
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
