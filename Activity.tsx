import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { View } from "react-native";
import { isActivityReadyAtom, isClubReadyAtom } from "./App";

const Activity = () => {
  const [isClubReady] = useAtom(isClubReadyAtom);
  const [, setIsActivityReady] = useAtom(isActivityReadyAtom);

  useEffect(() => {
    isClubReady &&
      setTimeout(() => {
        setIsActivityReady(true);
      }, 1000);
  }, [isClubReady]);

  return (
    <>
      <View>😀</View>
    </>
  );
};

export default Activity;
