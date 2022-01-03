import { StatusBar } from "expo-status-bar";
import { atom, useAtom } from "jotai";
import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Activity from "./Activity";

export const isFontLoadedAtom = atom(false);
export const isUserProfileReadyAtom = atom(false);
export const isClubReadyAtom = atom(false);
export const isActivityReadyAtom = atom(false);
export const isAppReadyAtom = atom(false);

export const loadApp = () => {
  const [, setIsFontLoaded] = useAtom(isFontLoadedAtom);
  const [isUserProfileReady, setIsUserProfileReady] = useAtom(
    isUserProfileReadyAtom
  );
  const [, setIsClubReady] = useAtom(isClubReadyAtom);
  const [isActivityReady] = useAtom(isActivityReadyAtom);
  const [, setIsAppReady] = useAtom(isAppReadyAtom);

  useEffect(() => {
    isUserProfileReady &&
      setTimeout(() => {
        setIsClubReady(true);
      }, 1000);
  }, [isUserProfileReady]);

  useEffect(() => {
    isActivityReady &&
      setTimeout(() => {
        setIsAppReady(true);
      }, 1000);
  }, [isActivityReady]);

  return () => {
    setTimeout(() => {
      setIsFontLoaded(true);
      setIsUserProfileReady(true);
    }, 1000);
  };
};

export default function App() {
  const [isFontLoaded] = useAtom(isFontLoadedAtom);
  const [isUserProfileReady] = useAtom(isUserProfileReadyAtom);
  const [isClubReady] = useAtom(isClubReadyAtom);
  const [isActivityReady] = useAtom(isActivityReadyAtom);
  const [isAppReady] = useAtom(isAppReadyAtom);

  return (
    <View style={styles.container}>
      <Button title="load data" onPress={loadApp()} />

      <Text>isFontLoaded: {isFontLoaded.toString()}</Text>
      <Text>isUserProfileReady: {isUserProfileReady.toString()}</Text>
      <Text>isClubReady: {isClubReady.toString()}</Text>
      <Text>isActivityReady: {isActivityReady.toString()}</Text>
      <Text>isAppReady: {isAppReady.toString()}</Text>
      {isClubReady && <Activity />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
