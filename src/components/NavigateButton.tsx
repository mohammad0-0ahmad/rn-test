import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { Button, ButtonProps } from "react-native";
import { ScreenNameType } from "../constants/screenConfigs";

const NavigateButton: FC<ScreenLinkPropsType> = ({ to, ...props }) => {
  const { navigate } = useNavigation();

  return (
    <Button
      {...props}
      onPress={() => {
        navigate(to);
      }}
    />
  );
};

export default NavigateButton;

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */
type ScreenLinkPropsType = Omit<ButtonProps, "onPress"> & {
  to: ScreenNameType;
};
