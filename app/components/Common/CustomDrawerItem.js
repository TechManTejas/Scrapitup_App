import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

const CustomDrawerItem = ({
  IconComponent,
  iconName,
  title,
  bold,
  onPress,
}) => {
  const {
    theme: { colors, spacing, fontFamily, fontSize },
  } = useTheme();

  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: spacing.xs,
      paddingVertical: spacing.sm,
      marginBottom: spacing.xs,
    },
    title: {
      fontFamily: bold ? fontFamily.semiBold : fontFamily.regular,
      fontSize: fontSize.md,
      lineHeight: fontSize.lg,
      color: colors.black500,
      marginLeft: spacing.md,
    },
    icon: {
      fontSize: fontSize.default,
      color: colors.black400,
    },
  });

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <IconComponent
        name={iconName}
        color={styles.icon.color}
        size={styles.icon.fontSize}
      />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default CustomDrawerItem;
