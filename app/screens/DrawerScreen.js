import React, { useCallback } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useTheme } from "../theme/ThemeProvider";
import CustomDrawerItem from "../components/Common/CustomDrawerItem";
import CustomSafeView from "../components/Common/CustomSafeView";
import { useNavigation } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";


const DrawerScreen = (props) => {
  const {
    theme: { colors, spacing, fontSize },
  } = useTheme();
  const navigation = useNavigation();

  const toggleDrawer = () => props.navigation.toggleDrawer();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      paddingHorizontal: spacing.sm,
      paddingVertical: spacing.md,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.black100,
    },
    iconContainer: {
      flexDirection: "row",
    },
    icon: {
      padding: spacing.sm,
      borderWidth: spacing.xxxs,
      borderRadius: spacing.sm,
      borderColor: colors.black100,
    },
    contentContainer: {
      paddingTop: 0,
    },
    footer: {
      padding: spacing.sm,
      borderTopWidth: spacing.xxxs,
      borderTopColor: colors.black100,
    },
  });

  return (
    <CustomSafeView>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Pressable style={styles.icon} onPress={toggleDrawer}>
            <FontAwesome5 name="chevron-right" size={fontSize.sm} />
          </Pressable>
        </View>
      </View>
      <DrawerContentScrollView
        contentContainerStyle={styles.contentContainer}
        {...props}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={styles.footer}>
        <CustomDrawerItem
          IconComponent={FontAwesome5}
          iconName="share"
          title="Tell a friend"
        />
        <CustomDrawerItem
          IconComponent={FontAwesome5}
          iconName="sign-out-alt"
          title="Sign Out"
          onPress={logout}
          bold
        />
      </View>
    </CustomSafeView>
  );
};

export default DrawerScreen;
