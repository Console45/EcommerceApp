import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC, ReactElement } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, StatusBar, Text, Image, View } from "react-native";
import { Button } from "../components";
import { NativeStackParamList, Screens } from "../navigations/screens";
import { Colors, FontType, Metrics, Sizes } from "../theme";
import { getScreenPercent } from "../utils";

interface OnboardingProps
  extends NativeStackScreenProps<NativeStackParamList, Screens.ONBOARDING> {}

export const Onboarding: FC<OnboardingProps> = ({
  navigation,
}): ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Find your Gadget</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/onboard.png")}
        />
      </View>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate(Screens.LOGIN)}
      >
        <Text style={styles.buttonText}>Get started</Text>
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },
  title: {
    marginHorizontal: Sizes.MAIN_PADDING,
    marginTop: "7.7%",
    marginBottom: "10%",
    color: Colors.WHITE,
    fontSize: getScreenPercent(16.7),
    fontFamily: FontType.RALEWAY_EXTRA_BOLD,
    lineHeight: 69,
  },
  imageContainer: {
    width: Metrics.SCREEN_WIDTH,
    alignItems: "center",
    height: "60%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  button: { backgroundColor: Colors.WHITE, width: "81%", alignSelf: "center" },
  buttonText: {
    color: Colors.PRIMARY,
    fontFamily: FontType.RALEWAY_BOLD,
    fontSize: getScreenPercent(5.5),
  },
});
