import { React, useEffect, useCallback, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Modal,
  TouchableOpacity,
} from "react-native";
import {
  DefaultButton,
  SwitchButton,
  OtherButton,
} from "../components/buttons";
import { Spacer, VerticalSpacer } from "../components/spacer";
import Colors from "../../constants/Colors";
import { WheelPicker, FewPicker } from "../components/modals";

const Home = () => {
  // Initialize state vars
  const { height, width } = Dimensions.get("window");
  const [isAuto, setIsAuto] = useState(false);

  const [pumpOn, setPump] = useState(false);
  const [lightOn, setLight] = useState(false);

  const [showWateringFreq, setShowWateringFreq] = useState(false);
  const [waterFreq, setWaterFreq] = useState(7);

  const [showWaterAmt, setShowWaterAmt] = useState(false);
  const [waterAmt, setWaterAmt] = useState(50);

  const [showLightSen, setShowLightSen] = useState(false);
  const [lightSen, setLightSen] = useState('Medium');

  const [showLightingHr, setShowLightingHr] = useState(false);
  const [lightingHr, setLightingHr] = useState(16);

  const [showWaterAmtManual, setShowWaterAmtManual] = useState(false);
  const [waterAmtManual, setWaterAmtManual] = useState(50);

  const toggleAuto = () => {
    // Toggle isAuto state
    setIsAuto((previousState) => !previousState);

    // Set other states to false
    setPump(false);
    setLight(false);
  };
  const numbersArray = [];
  for (let i = 1; i <= 300; i++) {
    numbersArray.push(i);
  }
  const hrsArray = [];
  for (let i = 1; i <= 24; i++) {
    hrsArray.push(i);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WheelPicker
        title={"Watering Frequency"}
        leftText={"Every"}
        rightText={"days"}
        values={numbersArray}
        showModal={showWateringFreq}
        setShowModal={setShowWateringFreq}
        valueVar={waterFreq}
        setValueVar={setWaterFreq}
      />
      <WheelPicker
        title={"Water Amount"}
        leftText={""}
        rightText={"ml"}
        values={numbersArray}
        showModal={showWaterAmt}
        setShowModal={setShowWaterAmt}
        valueVar={waterAmt}
        setValueVar={setWaterAmt}
      />
      <WheelPicker
        title={"Lighting Length"}
        leftText={""}
        rightText={"hr per day"}
        values={hrsArray}
        showModal={showLightingHr}
        setShowModal={setShowLightingHr}
        valueVar={lightingHr}
        setValueVar={setLightingHr}
      />
      <WheelPicker
        title={"Water Amount"}
        leftText={""}
        rightText={"ml"}
        values={numbersArray}
        showModal={showWaterAmtManual}
        setShowModal={setShowWaterAmtManual}
        valueVar={waterAmtManual}
        setValueVar={setWaterAmtManual}
        buttonText="Water now"
      />
      <FewPicker
        title={"Light Sensitivity"}
        leftText={""}
        rightText={"ml"}
        values={numbersArray}
        showModal={showLightSen}
        setShowModal={setShowLightSen}
        valueVar={lightSen}
        setValueVar={setLightSen}
      />

      {/* Create the logo area */}
      <View
        style={{
          flexDirection: "column",
          justifyContent: "left",
          display: "flex",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/frog_logo.png")}
          />
          <Text
            style={{
              fontFamily: "unblock",
              paddingTop: 12,
              paddingLeft: 5,
              fontSize: 18,
            }}
          >
            PLANT B
          </Text>
        </View>

        <Text style={{ fontSize: 32, fontFamily: "matt" }}>Control Panel</Text>
        <View
          style={{
            flexDirection: "row",
            display: "flex",
            minWidth: "92%",
          }}
        >
          <Spacer hSize={10}></Spacer>
          <View style={{ flexDirection: "column", justifyContent: "center" }}>
            <Text style={[styles.sensorTitle, { fontWeight: 400 }]}>
              Moisture
            </Text>
            <Text style={[styles.sensorValue, { fontWeight: 700 }]}>40%</Text>

            <Spacer vSize={10}></Spacer>

            <Text style={[styles.sensorTitle, { fontWeight: 400 }]}>
              Brightness
            </Text>
            <Text style={[styles.sensorValue, { fontWeight: 700 }]}>80%</Text>
          </View>
          <Image
            style={[styles.frog]}
            source={require("../../assets/images/gudboi.png")}
            marginLeft={10}
          />
        </View>
      </View>

      {/* This creates the area around 'Auto Mode' */}
      <View
        style={{
          flexDirection: "row",
          display: "flex",
          backgroundColor: "white",
          minWidth: "92%",
          borderRadius: 10,
        }}
      >
        <Spacer hSize={5}></Spacer>
        <Text
          style={{
            paddingVertical: 14,
            paddingLeft: 10,
            fontFamily: "inter",
            fontSize: 17,
            color: "#35322D",
          }}
        >
          Auto Mode
        </Text>
        <SwitchButton
          isEnabled={isAuto}
          toggleSwitch={toggleAuto}
        ></SwitchButton>
        <Spacer hSize={5}></Spacer>
      </View>

      <Spacer vSize={5}></Spacer>

      {/* This creates all buttons under 'Watering' */}
      <View style={{ flexDirection: "column", alignItems: "left" }}>
        <Text paddingHorizontal={10} style={{ color: "#838385" }}>
          WATERING
        </Text>
        <Spacer vSize={5}></Spacer>
        {isAuto ? (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <DefaultButton
              icon={require("../../assets/images/calendar.png")}
              title={"Watering Frequency"}
              currText={"Every " + waterFreq + " days"}
              modalVar={showWateringFreq}
              setModalVar={setShowWateringFreq}
            />
            <Spacer hSize={5}></Spacer>
            <DefaultButton
              icon={require("../../assets/images/cup.png")}
              title={"Watering Amount"}
              currText={waterAmt + " ml"}
              modalVar={showWaterAmt}
              setModalVar={setShowWaterAmt}
            />
          </View>
        ) : (
          <View style={{ flexDirection: "column" }}>
            <View style={styles.manualButtonSet}>
              <Spacer hSize={5}></Spacer>
              <Text
                style={{
                  paddingVertical: 14,
                  paddingLeft: 10,
                  fontFamily: "inter",
                  fontSize: 17,
                  color: "#35322D",
                }}
              >
                Pump
              </Text>
              <SwitchButton
                isEnabled={pumpOn}
                toggleSwitch={() => setPump((previousState) => !previousState)}
              ></SwitchButton>
              <Spacer hSize={5}></Spacer>
            </View>
            <OtherButton title="Water amount" onPress={() => setShowWaterAmtManual(true)} />
          </View>
        )}
      </View>

      <VerticalSpacer size={5} />

      {/* This creates all buttons under 'Lighting' */}

      <View style={{ flexDirection: "column", alignItems: "left" }}>
        <Text paddingHorizontal={10} style={{ color: "#838385" }}>
          LIGHTING
        </Text>
        <Spacer vSize={5}></Spacer>
        {isAuto ? (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <DefaultButton
              icon={require("../../assets/images/lightbulb.png")}
              title={"Light Sensitivity"}
              currText={lightSen}
              modalVar={showLightSen}
              setModalVar={setShowLightSen}
            />
            <Spacer hSize={5}></Spacer>
            <DefaultButton
              icon={require("../../assets/images/palette.png")}
              title={"Light Colour"}
              currText={"F5D418"}
            />
          </View>
        ) : (
          <View style={{ flexDirection: "column" }}>
            <View style={styles.manualButtonSet}>
              <Spacer hSize={5}></Spacer>
              <Text
                style={{
                  paddingVertical: 14,
                  paddingLeft: 10,
                  fontFamily: "inter",
                  fontSize: 17,
                  color: "#5D5B57",
                }}
              >
                Light
              </Text>
              <SwitchButton
                isEnabled={lightOn}
                toggleSwitch={() => setLight((previousState) => !previousState)}
              ></SwitchButton>
              <Spacer hSize={5}></Spacer>
            </View>
            <OtherButton title="Light colour" onPress={() => console.log("Light colour")} />
          </View>
        )}

        <Spacer vSize={5}></Spacer>

        {isAuto ? (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <DefaultButton
              icon={require("../../assets/images/clock.png")}
              title={"Start Time"}
              currText={"7:00 AM"}
            />
            <Spacer hSize={5}></Spacer>
            <DefaultButton
              icon={require("../../assets/images/timer.png")}
              title={"Lighting Length"}
              currText={lightingHr + " hr"}
              modalVar={showLightingHr}
              setModalVar={setShowLightingHr}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "top",
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  wrapper: {
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  frog: {
    width: 250,
    height: 275,
    resizeMode: "contain",
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  sensorTitle: {
    fontFamily: "inter",
    fontSize: 12,
    color: "#5D5B57",
  },
  sensorValue: {
    fontFamily: "inter",
    fontSize: 36,
    color: "#35322D",
    includeFontPadding: false,
  },
  manualButtonSet: {
    flexDirection: "row",
    display: "flex",
    backgroundColor: "white",
    minWidth: "92.7%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // borderBottomWidth: 0.7,
    // borderColor: "#B9B9BB",
  },
});
