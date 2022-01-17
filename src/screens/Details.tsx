import React from "react";
import { View, Text } from "react-native";
import NavigateButton from "../components/NavigateButton";
import { screensNames } from "../constants/screenConfigs";

const Details = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <NavigateButton to={screensNames.Home} title="Go to home" />
    </View>
  );
};

export default Details;
