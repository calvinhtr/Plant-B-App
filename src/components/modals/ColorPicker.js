import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Spacer } from "../spacer";
import Slider from "@react-native-community/slider";

const ColorPicker = ({
  title,
  showModal,
  setShowModal,
  redVar,
  setRedVar,
  greenVar,
  setGreenVar,
  blueVar,
  setBlueVar,
  buttonText = "Done",
}) => {
  let [tempRed, setTempRed] = useState(redVar);
  let [tempGreen, setTempGreen] = useState(greenVar);
  let [tempBlue, setTempBlue] = useState(blueVar);
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
            height: 440,
            marginTop: "auto",
            backgroundColor: "#F6F6F6",
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

            <Spacer vSize={10} />

            <View style={{ width: "100%", alignItems: "center" }}>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "80%",
                }}
              >
                <Text style={{ fontFamily: "inter", color: "#3C3C4399" }}>
                  RED
                </Text>
                <Text style={{ fontFamily: "inter", color: "#35322D" }}>
                  {tempRed}
                </Text>
              </View>
              <Spacer vSize={3} />
              <View
                style={{
                  backgroundColor: "white",
                  padding: 12,
                  width: "90%",
                  borderRadius: 10,
                }}
              >
                <Slider
                  minimumValue={0}
                  maximumValue={255}
                  minimumTrackTintColor="#BB1200"
                  thumbTintColor="#35322D"
                  value={redVar}
                  onValueChange={(newVal) => {
                    setTempRed(newVal);
                  }}
                  step={1}
                />
              </View>
              <Spacer vSize={5} />
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "80%",
                }}
              >
                <Text style={{ fontFamily: "inter", color: "#3C3C4399" }}>
                  GREEN
                </Text>
                <Text style={{ fontFamily: "inter", color: "#35322D" }}>
                  {tempGreen}
                </Text>
              </View>
              <Spacer vSize={3} />
              <View
                style={{
                  backgroundColor: "white",
                  padding: 12,
                  width: "90%",
                  borderRadius: 10,
                }}
              >
                <Slider
                  minimumValue={0}
                  maximumValue={255}
                  minimumTrackTintColor="#49B100"
                  thumbTintColor="#35322D"
                  value={greenVar}
                  onValueChange={(newVal) => {
                    setTempGreen(newVal);
                  }}
                  step={1}
                />
              </View>
              <Spacer vSize={5} />
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "80%",
                }}
              >
                <Text style={{ fontFamily: "inter", color: "#3C3C4399" }}>
                  BLUE
                </Text>
                <Text style={{ fontFamily: "inter", color: "#35322D" }}>
                  {tempBlue}
                </Text>
              </View>
              <Spacer vSize={3} />
              <View
                style={{
                  backgroundColor: "white",
                  padding: 12,
                  width: "90%",
                  borderRadius: 10,
                }}
              >
                <Slider
                  minimumValue={0}
                  maximumValue={255}
                  minimumTrackTintColor="#0023B0"
                  thumbTintColor="#35322D"
                  value={blueVar}
                  onValueChange={(newVal) => {
                    setTempBlue(newVal);
                  }}
                  step={1}
                />
              </View>
              <Spacer vSize={5} />
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
                setRedVar(tempRed);
                setGreenVar(tempGreen);
                setBlueVar(tempBlue);
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
                // Reset variables when cancel is pressed
                setTempRed(redVar);
                setTempGreen(greenVar);
                setTempBlue(blueVar);
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

export default ColorPicker;

const styles = StyleSheet.create({
  botButton: {
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "#B9B9BB",
    alignItems: "center",
  },
  midButton: {
    backgroundColor: "white",
    paddingVertical: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#B9B9BB",
    alignItems: "center",
  },
  topButton: {
    backgroundColor: "white",
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#B9B9BB",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "center",
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
    width: "90%",
  },
});
