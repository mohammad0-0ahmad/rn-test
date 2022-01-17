import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screensComponents } from "./src/screens";
import { screensNames } from "./src/constants/screenConfigs";
const Stack = createNativeStackNavigator();

const RouterProvider = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {Object.values(screensNames).map((ScreenName) => (
          <Stack.Screen
            key={ScreenName}
            name={ScreenName}
            component={screensComponents[ScreenName]}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouterProvider;

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

type RootStackParamList = { [screenName in keyof typeof screensNames]: any };

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
