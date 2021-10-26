import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackParamList, Screens } from "./navigations";
import { Login, Onboarding } from "./screens";

const Stack = createNativeStackNavigator<NativeStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.ONBOARDING}>
        <Stack.Screen name={Screens.ONBOARDING} component={Onboarding} />
        <Stack.Screen name={Screens.LOGIN} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
