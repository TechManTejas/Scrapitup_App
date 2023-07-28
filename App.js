import { StatusBar } from 'expo-status-bar';
import { useCallback } from "react";
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { SCREEN_NAMES } from "./app/constants/screenNames";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useTheme } from "./app/theme/ThemeProvider"
import { ThemeProvider } from "./app/theme/ThemeProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from './app/navigation/HomeNavigation';

const BottomTab = createBottomTabNavigator();

export default function App() {

  const { theme: { spacing, colors, fontSize, fontFamily } } = useTheme();

  const shouldShowTabBarBottom = useCallback((route, initialScreen) => {
    const routeName = getFocusedRouteNameFromRoute(route) || initialScreen;

    const SHOW_ON_SCREENS = [SCREEN_NAMES.homeScreen];

    return SHOW_ON_SCREENS.indexOf(routeName) > -1;
  }, []);

  const styles = StyleSheet.create({
    tabBar: {
      position: "absolute",
      height: spacing.u52,
      backgroundColor: colors.white100,
    },
    tabBarIcon: {
      marginTop: spacing.sm,
    },
    iconSize: {
      fontSize: fontSize.xxl,
    },
    iconColor: {
      color: colors.green,
    },
    iconColorFoucsed: {
      color: colors.green,
    },
    tabBarLabel: {
      fontFamily: fontFamily.regular,
      paddingBottom: spacing.xs,
      color: colors.blue400
    },
    centerTabContainer: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      flex: 1,
      flexDirection: "row",
      alignItems: "stretch",
      justifyContent: "center",
    },
    centerTab: {
      position: "absolute",
      top: -spacing.xxl,
      bottom: spacing.xs,
      paddingTop: spacing.xxs,
      paddingHorizontal: spacing.xl,
      backgroundColor: colors.green,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: spacing.xxxl,
      borderWidth: spacing.xs,
      borderColor: colors.white100,
      elevation: 5,
    },
    centerTabIconContainer: { marginBottom: spacing.sm },
    centerTabIcon: {
      color: colors.white100,
      fontSize: fontSize.xxl,
    },
    centerTabLabel: {
      fontFamily: fontFamily.regular,
      fontSize: fontSize.md,
      color: colors.white100,
    },
  });

  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <BottomTab.Navigator
            initialRouteName={SCREEN_NAMES.homeNavigator}
            screenOptions={() => ({
              headerShown: false,
              tabBarStyle: [styles.tabBar],
              tabBarLabelStyle: styles.tabBarLabel,
              tabBarIconStyle: styles.tabBarIcon,
              tabBarActiveTintColor: colors.blue500,
            })}
          >

            <BottomTab.Screen
              name={SCREEN_NAMES.homeNavigator}
              component={HomeNavigation}
              options={({ route }) => ({
                title: "Home",
                tabBarStyle: [
                  styles.tabBar,
                  {
                    display: shouldShowTabBarBottom(route, SCREEN_NAMES.homeScreen)
                      ? "flex"
                      : "none",
                  },
                ],
                tabBarIcon: ({ focused }) => (
                  <FontAwesome5
                    name="home"
                    size={styles.iconSize.fontSize}
                    color={
                      focused ? styles.iconColorFoucsed.color : styles.iconColor.color
                    }
                  />
                ),
                tabBarButton: () => null,
              })}
            />

            <BottomTab.Screen
              name={SCREEN_NAMES.ohubScreen}
              component={()=>{}}
              options={{
                title: "Rate Chart",
                tabBarIcon: ({ focused }) => (
                  <FontAwesome5
                    name="list"
                    size={styles.iconSize.fontSize}
                    color={
                      focused ? styles.iconColorFoucsed.color : styles.iconColor.color
                    }
                  />
                )
              }}
              listeners={() => ({
                tabPress: (e) => {
                  e.preventDefault()
                  Linking.openURL("https://www.oiconomos.com/blog")
                }
              })}
            />

            <BottomTab.Screen
              name={SCREEN_NAMES.willNavigator}
              component={()=>{}}
              options={({ route }) => ({
                title: "Schedule Vendor",
                tabBarStyle: [
                  {
                    display: shouldShowTabBarBottom(route, SCREEN_NAMES.nomineeScreen)
                      ? "flex"
                      : "none",
                  },
                ],
                tabBarIcon: ({ focused }) => (
                  <View style={styles.centerTabContainer}>
                    <View style={styles.centerTab}>
                      <View style={styles.centerTabIconContainer}>
                        <FontAwesome5
                          name="recycle"
                          size={styles.centerTabIcon.fontSize}
                          color={styles.centerTabIcon.color}
                        />
                      </View>
                      <Text style={styles.centerTabLabel}>Book Vendor</Text>
                    </View>
                  </View>
                ),
                tabBarIconStyle: { marginTop: 0 },
                tabBarLabelStyle: { display: "none" },
              })}
            />

            <BottomTab.Screen
              name={SCREEN_NAMES.nomineeNavigator}
              component={()=>{}}
              options={({ route }) => ({
                title: "History",
                tabBarStyle: [
                  {
                    display: shouldShowTabBarBottom(route, SCREEN_NAMES.nomineeScreen)
                      ? "flex"
                      : "none",
                  },
                ],
                tabBarIcon: ({ focused }) => (
                  <FontAwesome5
                    name="history"
                    size={styles.iconSize.fontSize}
                    color={
                      focused ? styles.iconColorFoucsed.color : styles.iconColor.color
                    }
                  />
                ),
              })}
            />

          </BottomTab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}


