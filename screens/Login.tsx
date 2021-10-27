import React, { FC, ReactElement } from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, FontType, Sizes } from "../theme";
import { getScreenPercent } from "../utils";

interface LoginProps {}

export const Login: FC<LoginProps> = ({}): ReactElement => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/login-bg.png")}
        style={styles.headerContainer}
      >
        <SafeAreaView edges={["top"]}>
          <Text style={styles.title}>Welcome Back</Text>
        </SafeAreaView>
      </ImageBackground>
      <View style={styles.formContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
    flex: 1,
  },
  headerContainer: {
    flex: 1,
  },
  title: {
    paddingHorizontal: "6%",
    paddingTop: "7.7%",
    paddingBottom: "10%",
    color: Colors.WHITE,
    fontSize: getScreenPercent(16.7),
    fontFamily: FontType.RALEWAY_EXTRA_BOLD,
    lineHeight: 69,
  },
  formContainer: {
    height: "66.5%",
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: getScreenPercent(8),
    borderTopRightRadius: getScreenPercent(8),
    margin: 0,
  },
});
