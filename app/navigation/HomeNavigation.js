import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREEN_NAMES } from "../constants/screenNames";
import HomeScreen from "../screens/HomeScreen";
import { useTheme } from "../theme/ThemeProvider";

const Stack = createStackNavigator();

const HomeNavigation = () => {

    const {
        theme: { colors },
    } = useTheme();

    const styles = StyleSheet.create({
        headerStyle: {
            backgroundColor: colors.blue100,
        },
    });

    return (
        <Stack.Navigator
            initialRouteName={SCREEN_NAMES.homeScreen}
            screenOptions={({ navigation }) => ({
                headerStyle: styles.headerStyle,
                // headerLeft: () => <CustomHeaderLeftIcon navigation={navigation} />,
                headerTitleAlign: "center",
                // headerTitle: (props) => <CustomHeaderTitle {...props} />,
                headerBackVisible: false,
                animation: "slide_from_right",
            })}
        >
            <Stack.Screen
                name={SCREEN_NAMES.homeScreen}
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigation