import { useNavigation } from "@react-navigation/native";
import React, { FC, ReactElement } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Button } from "../components";
import { Colors, FontType } from "../theme";
import { getScreenPercent } from "../utils";

interface FavouritesProps {}

export const Favourites: FC<FavouritesProps> = ({}): ReactElement => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/images/nofav.png")}
      />
      <Text style={styles.headText}>No Favourites Yet</Text>
      <Text style={styles.text}>
        Hit the blue button down below to Create an order
      </Text>
      <Button
        title="Start ordering"
        style={styles.button}
        textStyle={{ fontSize: getScreenPercent(4.2) }}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BG,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: getScreenPercent(70),
    width: getScreenPercent(70),
  },
  headText: {
    fontFamily: FontType.RALEWAY_SEMIBOLD,
    textAlign: "center",
    fontSize: getScreenPercent(8),
    marginTop: getScreenPercent(10),
  },
  text: {
    width: getScreenPercent(54),
    textAlign: "center",
    marginTop: getScreenPercent(4.6),
    fontFamily: FontType.RALEWAY_REGULAR,
    fontSize: getScreenPercent(4.2),
    lineHeight: getScreenPercent(6.1),
  },
  button: {
    marginTop: getScreenPercent(7.4),
    width: getScreenPercent(57.4),
    height: getScreenPercent(12.8),
    backgroundColor: Colors.SECONDARY,
  },
});
