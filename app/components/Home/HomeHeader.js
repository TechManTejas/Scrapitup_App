import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";

const HomeHeader = () => {
  const { theme: { colors, spacing, fontFamily, fontSize } } = useTheme();
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      paddingTop: spacing.xxl,
      paddingBottom: spacing.lg,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    greeting: {
      fontFamily: fontFamily.semiBold,
      fontSize: fontSize.xxl,
      lineHeight: fontSize.xxxl,
      color: colors.black500,
    },
    username: {
      color: colors.green600,
      textTransform: "capitalize",
    },
    caption: {
      fontFamily: fontFamily.regular,
      fontSize: fontSize.default,
      color: colors.black400,
    },
    iconContainer: {
      // borderWidth: spacing.xxxs,
      paddingHorizontal: spacing.xs,
      paddingTop: spacing.xs,
      paddingBottom: spacing.sm,
      // borderRadius: spacing.sm,
      // borderColor: colors.blue300,
      // borderStyle: "dashed",
      backgroundColor: colors.white100,
    },
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>
          Hi,{" "}
          <Text style={styles.username}>
            User
          </Text>
        </Text>
      </View>
      <Pressable
        style={styles.iconContainer}
        onPress={() => {
          navigation.toggleDrawer();
        }}
      >
        <View>
          <FontAwesome name="user-circle" size={fontSize.xxxl} color={colors.green600} />
        </View>
      </Pressable>
    </View>
  );
};

export default HomeHeader;
