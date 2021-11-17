import React, { FC, ReactElement, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Product } from "../constants";
import { Colors, FontType } from "../theme";
import { getScreenPercent } from "../utils";

interface TabBarProps {}

export const TabBar: FC<TabBarProps> = ({}): ReactElement => {
  const [tabFilter, setTabFilter] = useState("wearable");
  const categories: string[] = ["Wearables", "Laptops", "Phones", "Tablets"];
  const changeTab = (tabName: string) => {
    setTabFilter(tabName);
  };

  const products = Product.filter((product) => product.category === tabFilter);

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
      <FlatList
        data={products}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => (
          <View style={{ width: getScreenPercent(10) }} />
        )}
        contentContainerStyle={{
          height: getScreenPercent(100),
        }}
        style={{ width: "100%" }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.productContainer}>
              <Image
                source={item.image}
                resizeMode={"contain"}
                style={{
                  width: getScreenPercent(40),
                  marginTop: -getScreenPercent(30),
                  height: getScreenPercent(40),
                }}
              />
              <Text
                style={{
                  fontFamily: FontType.RALEWAY_SEMIBOLD,
                  fontSize: getScreenPercent(5),
                  textAlign: "center",
                  lineHeight: getScreenPercent(7),
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  color: Colors.PRIMARY,
                  fontFamily: FontType.RALEWAY_BOLD,
                  fontSize: getScreenPercent(4.5),
                }}
              >
                $ {item.price}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
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
  productContainer: {
    width: getScreenPercent(50),
    marginTop: getScreenPercent(30),
    height: "60%",
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    alignItems: "center",
    marginLeft: 10,
    justifyContent: "space-evenly",
  },
});
