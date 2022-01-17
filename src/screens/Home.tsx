import React from "react";
import { Text, View } from "react-native";
import NavigateButton from "../components/NavigateButton";
import { screensNames } from "../constants/screenConfigs";

const Home = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <NavigateButton to={screensNames.Details} title="Go to details" />
    </View>
  );
};

export default Home;
