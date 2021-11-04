import React, { FC, ReactElement } from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "../theme";

interface FavouritesProps {}

export const Favourites: FC<FavouritesProps> = ({}): ReactElement => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BG,
  },
});
