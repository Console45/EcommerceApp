import React, { FC, ReactElement } from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, FontType, Sizes } from "../theme";
import { getScreenPercent } from "../utils";

interface HomeProps {}

export const Home: FC<HomeProps> = (): ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.searchContainer}>
        <Image
          source={require("../assets/images/Search.png")}
          style={{ width: 24, height: 24 }}
          resizeMode="cover"
        />
        <TextInput
          style={{ width: "100%", height: "100%", marginLeft: 12 }}
          placeholder="Search"
          placeholderTextColor={Colors.GRAY_SECONDARY}
        />
      </View>
      <Text style={styles.header}>Order online collect in store</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SECONDARY_BG,
  },
  searchContainer: {
    alignSelf: "center",
    borderColor: Colors.GRAY_PRIMARY,
    borderWidth: 1,
    height: "9%",
    width: "80%",
    marginTop: "8%",
    flexDirection: "row",
    padding: 18,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: "15%",
  },
  header: {
    marginHorizontal: Sizes.MAIN_PADDING,
    fontSize: getScreenPercent(8.7),
    fontFamily: FontType.RALEWAY_BOLD,
    lineHeight: getScreenPercent(10),
  },
});
