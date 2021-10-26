import React, { FC, ReactElement } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Screens, TabNavigatorParamList } from "./screens";
import { Cart, Home } from "../screens";
import { Favourites } from "../screens/Favourites";

interface TabNavigatorProps {}
const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export const TabNavigator: FC<TabNavigatorProps> = ({}): ReactElement => {
  return (
    <Tab.Navigator initialRouteName={Screens.HOME}>
      <Tab.Screen name={Screens.HOME} component={Home} />
      <Tab.Screen name={Screens.FAVORITES} component={Favourites} />
      <Tab.Screen name={Screens.CART} component={Cart} />
    </Tab.Navigator>
  );
};
