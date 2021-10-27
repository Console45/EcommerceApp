import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import { NativeStackParamList, Screens } from "./navigations/screens";
import { Login, Onboarding } from "./screens";
import { TabNavigator } from "./navigations/TabNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Raleway_800ExtraBold,
  Raleway_700Bold,
  Raleway_600SemiBold,
  Raleway_400Regular,
} from "@expo-google-fonts/raleway";

const Stack = createNativeStackNavigator<NativeStackParamList>();
export default function App() {
  let [fontsLoaded] = useFonts({
    Raleway_800ExtraBold,
    Raleway_700Bold,
    Raleway_600SemiBold,
    Raleway_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={Screens.ONBOARDING}
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name={Screens.ONBOARDING} component={Onboarding} />
            <Stack.Screen name={Screens.LOGIN} component={Login} />
            <Stack.Screen name={Screens.SHOP} component={TabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
}
