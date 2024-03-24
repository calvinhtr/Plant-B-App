import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import { React, useState } from "react";
import { Spacer } from "../spacer";
import { Ionicons } from "@expo/vector-icons";
import { fetchData } from "../../utils/utils";

const FewPicker = ({
  title,
  subtext,
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
  let [temp, setTemp] = useState(valueVar);
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

            <Spacer vSize={21} />

            <View>
              <TouchableOpacity
                style={styles.topButton}
                onPress={() => setTemp("Low")}
              >
                <View style={styles.contentWrapper}>
                  <Text style={styles.buttonText}>Low</Text>
                  {temp == "Low" ? (
                    <Ionicons
                      name="checkmark-outline"
                      size={20}
                      color="#007AFF"
                    />
                  ) : null}
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.midButton}
                onPress={() => setTemp("Medium")}
              >
                <View style={styles.contentWrapper}>
                  <Text style={styles.buttonText}>Medium</Text>
                  {temp == "Medium" ? (
                    <Ionicons
                      name="checkmark-outline"
                      size={20}
                      color="#007AFF"
                    />
                  ) : null}
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.botButton}
                onPress={() => setTemp("High")}
              >
                <View style={styles.contentWrapper}>
                  <Text style={styles.buttonText}>High</Text>
                  {temp == "High" ? (
                    <Ionicons
                      name="checkmark-outline"
                      size={20}
                      color="#007AFF"
                    />
                  ) : null}
                </View>
              </TouchableOpacity>
            </View>
            <Spacer vSize={5}></Spacer>
            <Text style={{width: '80%', fontSize: 11, fontFamily: 'inter', color: '#3C3C4399'}}>{subtext}</Text>
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
                setTemp(valueVar)
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

export default FewPicker;

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
