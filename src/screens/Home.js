import { React, useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { DefaultButton, SwitchButton } from "../components/buttons";
import { Spacer, VerticalSpacer } from "../components/spacer";
import Colors from "../../constants/Colors";

const Home = () => {
  const dimensions = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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
          <Text style={{ fontFamily: 'unblock', paddingTop: 12, paddingLeft: 5, fontSize: 18 }}>
            PLANT B
          </Text>
        </View>

        <Text style={{ fontSize: 32, fontFamily: 'matt' }}>Control Panel</Text>
        <View
          style={{
            flexDirection: "row",
            display: "flex",
            minWidth: "92%",
          }}
        >
          <Spacer hSize={10}></Spacer>
          <View style={{ flexDirection: "column", justifyContent: "center" }}>
            <Text style= {[styles.sensorTitle, {fontWeight: 400,}]}>Moisture</Text>
            <Text style={[styles.sensorValue, {fontWeight: 700 }]}>40%</Text>

            <Spacer vSize={10}></Spacer>

            <Text style={[styles.sensorTitle, {fontWeight: 400}]}>Brightness</Text>
            <Text style={[styles.sensorValue, {fontWeight: 700}]}>80%</Text>
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
        <Text style={{ paddingVertical: 14, paddingLeft: 10, fontFamily: 'inter', fontSize: 17, color: '#5D5B57' }}>Auto Mode</Text>
        <SwitchButton></SwitchButton>
        <Spacer hSize={5}></Spacer>
      </View>

      <Spacer vSize={5}></Spacer>

      {/* This creates all buttons under 'Watering' */}
      <View style={{ flexDirection: "column", alignItems: "left" }}>
        <Text paddingHorizontal={10}>WATERING</Text>
        <Spacer vSize={5}></Spacer>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <DefaultButton
            icon={require('../../assets/images/calendar.png')}
            title={"Watering Frequency"}
            currText={"Every 10 days"}
          />
          <Spacer hSize={5}></Spacer>
          <DefaultButton
            icon={require('../../assets/images/cup.png')}
            title={"Watering Amount"}
            currText={"50 ml"}
          />
        </View>
      </View>

      <VerticalSpacer size={5} />

      {/* This creates all buttons under 'Lighting' */}
      <View style={{ flexDirection: "column", alignItems: "left" }}>
        <Text paddingHorizontal={10}>LIGHTING</Text>
        <Spacer vSize={5}></Spacer>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <DefaultButton
            icon={require('../../assets/images/lightbulb.png')}
            title={"Light Sensitivity"}
            currText={"Medium"}
          />
          <Spacer hSize={5}></Spacer>
          <DefaultButton
            icon={require('../../assets/images/palette.png')}
            title={"Light Colour"}
            currText={"F5D418"}
          />
        </View>
        <Spacer vSize={5}></Spacer>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <DefaultButton
            icon={require('../../assets/images/clock.png')}
            title={"Start Time"}
            currText={"7:00 AM"}
          />
          <Spacer hSize={5}></Spacer>
          <DefaultButton
            icon={require('../../assets/images/timer.png')}
            title={"Lighting Length"}
            currText={"10 hr"}
          />
        </View>
      </View>

      {/* <VerticalSpacer size={15} />
      <AnimatedButton
        title={'Animated Button'}
        message={'Animated Button clicked!'}
      /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingTop: 30
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
    fontFamily: 'inter',
    fontSize: 12,
    color: '#5D5B57',
  },
  sensorValue: {
    fontFamily: 'inter', 
    fontSize: 36,
    color: '#35322D',
    includeFontPadding: false
  }
});
