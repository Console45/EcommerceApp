import React, { FC, ReactElement } from "react";
import { Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Screens, TabNavigatorParamList } from "./screens";
import { Cart, Home, Favourites, History } from "../screens";
import { Colors } from "../theme";
import { getScreenPercent } from "../utils";
import { useNavigation } from "@react-navigation/core";

interface TabNavigatorProps {}
const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export const TabNavigator: FC<TabNavigatorProps> = ({}): ReactElement => {
  return (
    <Tab.Navigator
      initialRouteName={Screens.HOME}
      screenOptions={{
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: Colors.PRIMARY_BG,
          shadowRadius: 0,
          shadowOffset: { height: 0, width: 0 },
        },
      }}
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
          headerStyle: {
            backgroundColor: Colors.PRIMARY_BG,
            shadowRadius: 0,
            shadowOffset: { height: 0, width: 0 },
          },
          headerLeft: ({}) => {
            return <BackButton />;
          },
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
          headerStyle: {
            backgroundColor: Colors.PRIMARY_BG,
            shadowRadius: 0,
            shadowOffset: { height: 0, width: 0 },
          },
          headerLeft: ({}) => {
            return <BackButton />;
          },
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
          headerStyle: {
            backgroundColor: Colors.PRIMARY_BG,
            shadowRadius: 0,
            shadowOffset: { height: 0, width: 0 },
          },
          headerLeft: ({}) => {
            return <BackButton />;
          },
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

const BackButton: FC<{}> = ({}): ReactElement => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ marginLeft: "12%" }}
      onPress={() => navigation.goBack()}
    >
      <Image
        style={styles.backButton}
        source={require("../assets/images/Arrow.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    width: getScreenPercent(5.4),
    height: getScreenPercent(5.4),
  },
  backButton: {
    width: getScreenPercent(5.8),
    height: getScreenPercent(5.8),
  },
});
