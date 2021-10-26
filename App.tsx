import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackParamList, Screens } from "./navigations/screens";
import { Login, Onboarding } from "./screens";
import { TabNavigator } from "./navigations/TabNavigator";

const Stack = createNativeStackNavigator<NativeStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.ONBOARDING}>
        <Stack.Screen name={Screens.ONBOARDING} component={Onboarding} />
        <Stack.Screen name={Screens.LOGIN} component={Login} />
        <Stack.Screen name={Screens.SHOP} component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
