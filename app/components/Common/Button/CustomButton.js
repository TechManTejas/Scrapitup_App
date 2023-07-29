import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { useTheme } from "../../../theme/ThemeProvider";
import CustomActivityIndicator from "../CustomActivityIndicator";

const CustomButton = ({
  title,
  onPress,
  size,
  elevation,
  buttonStyle,
  textStyle,
  color,
  backgroundColor,
  backgroundColorPressed,
  disabled,
  expandHorizontal,
  uppercase,
  extraSpaceTop,
  outline,
  Icon,
  iconName,
  isLoading,
}) => {
  const {
    theme: { spacing, colors, fontSize, fontFamily },
  } = useTheme();

  const styles = StyleSheet.create({
    button: {
      paddingVertical: spacing.default,
      paddingHorizontal: spacing.md,
      marginTop: extraSpaceTop ? spacing.xs : 0,
      backgroundColor,
      borderWidth: 1,
      borderColor: backgroundColor,
      borderRadius: spacing.sm,
      elevation: elevation || 0,
    },
    buttonDisabled: {
      opacity: 0.8,
    },
    buttonPressed: {
      elevation: 0,
      // opacity: 0.8,
      backgroundColor: backgroundColorPressed,
    },
    buttonPressedOutline: {
      elevation: 0,
      borderColor: backgroundColorPressed,
    },
    buttonOutline: {
      borderWidth: spacing.xxxs,
      borderColor: backgroundColor,
      backgroundColor: colors.white100,
    },
    buttonSm: {
      borderRadius: spacing.sm,
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
    },
    buttonXs: {
      borderRadius: spacing.xs,
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.sm,
    },
    buttonExpandHorizontal: {
      flex: 1,
    },
    title: {
      flex: 1,
      color: color || colors.white100,
      textAlign: "center",
      fontSize: fontSize.default,
      lineHeight: fontSize.lg,
      fontFamily: fontFamily.semiBold,
    },
    titleSm: {
      fontSize: fontSize.md,
      lineHeight: fontSize.default,
    },
    titleXs: {
      fontSize: fontSize.sm,
      lineHeight: fontSize.default,
    },
    textOutline: {
      color: backgroundColor,
    },
    titlePressedOutline: {
      color: backgroundColorPressed,
    },
    textUppercase: {
      textTransform: "uppercase",
    },
    textContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    icon: {
      color: color || colors.white100,
      fontSize: fontSize.md,
    },
    iconOutline: {
      color: backgroundColor,
    },
    iconSm: {
      fontSize: fontSize.sm,
    },
    iconXs: {
      fontSize: fontSize.sm,
    },
  });

  const buttonStyles = [
    styles.button,
    disabled && styles.buttonDisabled,
    expandHorizontal && styles.buttonExpandHorizontal,
    size === "sm" && styles.buttonSm,
    size === "xs" && styles.buttonXs,
    outline && styles.buttonOutline,
    buttonStyle,
  ];

  const textStyles = [
    styles.title,
    size === "sm" && styles.titleSm,
    size === "xs" && styles.titleXs,
    outline && styles.textOutline,
    uppercase && styles.textUppercase,
    textStyle,
  ];

  const iconColors = outline ? styles.iconOutline.color : styles.icon.color;

  let iconSize = styles.icon.fontSize;

  switch (size) {
    case "sm":
      iconSize = styles.iconSm.fontSize;
      break;
    case "xs":
      iconSize = styles.iconXs.fontSize;
      break;
    default:
      break;
  }

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        ...buttonStyles,
        pressed && !outline && styles.buttonPressed,
        pressed && outline && styles.buttonPressedOutline,
      ]}
      children={({ pressed }) =>
        isLoading ? (
          <CustomActivityIndicator
            color={outline ? backgroundColor : colors.white100}
            backgroundColor="transparent"
          />
        ) : (
          <View style={styles.textContainer}>
            {Icon && iconName ? (
              <Icon name={iconName} color={iconColors} size={iconSize} />
            ) : null}
            <Text
              style={[
                ...textStyles,
                pressed && outline && styles.titlePressedOutline,
              ]}
            >
              {title}
            </Text>
          </View>
        )
      }
    />
  );
};

export default CustomButton;
