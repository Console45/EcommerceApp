import React, { FC, ReactElement } from "react";
import { View, StyleSheet, SafeAreaView, StatusBar, Text } from "react-native";
import { Colors, FontType, Metrics, Sizes } from "../theme";

interface OnboardingProps {}

export const Onboarding: FC<OnboardingProps> = ({}): ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Find your Gadget</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },
  title: {
    margin: Sizes.MAIN_PADDING,
    color: Colors.WHITE,
    fontSize: (16.7 / 100) * Metrics.SCREEN_WIDTH,
    fontFamily: FontType.RALEWAY_EXTRA_BOLD,
    lineHeight: 69,
  },
});
