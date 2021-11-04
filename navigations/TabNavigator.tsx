import React, { FC, ReactElement } from "react";
import { Image, ImageSourcePropType } from "react-native";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Screens, TabNavigatorParamList } from "./screens";
import { Cart, Home, Favourites, History } from "../screens";
import { Colors } from "../theme";
import { getScreenPercent } from "../utils";

interface TabNavigatorProps {}
const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export const TabNavigator: FC<TabNavigatorProps> = ({}): ReactElement => {
  return (
    <Tab.Navigator
      initialRouteName={Screens.HOME}
      screenOptions={{ tabBarShowLabel: false }}
    >
      <Tab.Screen
        name={Screens.HOME}
        component={Home}
        options={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.SECONDARY_BG,
            borderTopWidth: 0,
            elevation: 0,
          },
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                image={require("../assets/images/Home.png")}
                activeImage={require("../assets/images/Home-active.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={Screens.FAVORITES}
        component={Favourites}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                image={require("../assets/images/Heart.png")}
                activeImage={require("../assets/images/Heart-active.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={Screens.CART}
        component={Cart}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                image={require("../assets/images/Buy.png")}
                activeImage={require("../assets/images/Buy-active.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={Screens.HISTORY}
        component={History}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                image={require("../assets/images/Bag.png")}
                activeImage={require("../assets/images/Bag-active.png")}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

interface TabIconProps {
  image: ImageSourcePropType;
  activeImage: ImageSourcePropType;
  focused: boolean;
}

const TabIcon: FC<TabIconProps> = ({
  image,
  focused,
  activeImage,
}): ReactElement => {
  return focused ? (
    <Image style={styles.tabIcon} resizeMode="cover" source={activeImage} />
  ) : (
    <Image style={styles.tabIcon} resizeMode="stretch" source={image} />
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    width: getScreenPercent(5.4),
    height: getScreenPercent(5.4),
  },
});
