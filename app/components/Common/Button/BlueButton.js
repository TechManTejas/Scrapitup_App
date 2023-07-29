import React from "react";
import { useTheme } from "../../../theme/ThemeProvider";
import CustomButton from "./CustomButton";

const BlueButton = ({
  title,
  onPress,
  size,
  elevation,
  buttonStyle,
  textStyle,
  disabled,
  expandHorizontal,
  uppercase,
  outline,
  extraSpaceTop,
  Icon,
  iconName,
  isLoading
}) => {
  const {
    theme: { colors },
  } = useTheme();

  const props = {
    title,
    onPress,
    size,
    elevation: elevation || 2,
    buttonStyle,
    textStyle,
    color: colors.white,
    backgroundColor: colors.blue,
    backgroundColorPressed: colors.blue700,
    disabled,
    expandHorizontal,
    uppercase,
    outline,
    extraSpaceTop,
    Icon,
    iconName,
    isLoading
  };

  return <CustomButton {...props} />;
};

export default BlueButton;
