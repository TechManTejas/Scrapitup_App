import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREEN_NAMES } from "../constants/screenNames";
import DrawerNavigation from "./DrawerNavigation";

const Stack = createStackNavigator();

const RootNavigation = () => {
  const { isAuthenticated } = true;

  return (
    <NavigationContainer>
      <Stack.Navigator
      >
        {!isAuthenticated ? (
          <>
            <Stack.Screen
              name={SCREEN_NAMES.onBoardingScreen}
              component={()=>{}}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={SCREEN_NAMES.loginScreen}
              component={()=>{}}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={SCREEN_NAMES.registerScreen}
              component={()=>{}}
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name={SCREEN_NAMES.drawerNavigator}
            component={()=>{}}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;