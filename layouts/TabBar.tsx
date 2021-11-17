import React, { FC, ReactElement, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Colors, FontType, Sizes } from "../theme";
import { getScreenPercent } from "../utils";

interface TabBarProps {}

export const TabBar: FC<TabBarProps> = ({}): ReactElement => {
  const [tabFilter, setTabFilter] = useState("wearable");
  const categories: string[] = ["Wearable", "Laptops", "Phones", "Drones"];
  const changeTab = (tabName: string) => {
    setTabFilter(tabName);
  };
  return (
    <View style={styles.tabView}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{ width: "100%", marginTop: 15 }}
      >
        {categories.map((category: string, index: number) => {
          return (
            <Tabs
              title={category}
              index={index}
              key={index}
              filter={tabFilter}
              changeTab={changeTab}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

interface TabsProps {
  title: string;
  index?: number;
  filter: string;
  changeTab: (tabName: string) => void;
}

const Tabs: FC<TabsProps> = ({ title, filter, changeTab }): ReactElement => {
  const isActive = filter === title.toLowerCase();
  const active = isActive ? styles.active : styles.text;
  const tabActive = isActive ? styles.activeTab : styles.tabItem;

  return (
    <TouchableOpacity
      style={{ ...styles.tabItem, ...tabActive }}
      onPress={() => changeTab(title.toLowerCase())}
    >
      <Text style={active}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabView: {
    marginLeft: getScreenPercent(10),
    marginTop: getScreenPercent(12),
  },
  text: {
    color: Colors.GRAY_TETIARY,
    fontFamily: FontType.RALEWAY_SEMIBOLD,
    fontSize: 17,
  },
  active: {
    color: Colors.PRIMARY,
    fontFamily: FontType.RALEWAY_BOLD,
    fontSize: 17,
  },
  activeTab: {
    borderBottomColor: Colors.PRIMARY,
    borderBottomWidth: 3,
  },
  tabItem: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 7,
    marginRight: 5,
  },
});
