import React, { FC, ReactElement, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchModal } from "../layouts";
import { Colors, FontType, Sizes } from "../theme";
import { getScreenPercent } from "../utils";

interface HomeProps {}

export const Home: FC<HomeProps> = (): ReactElement => {
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SearchModal modalVisible={modalVisible} closeModal={closeModal} />
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.searchButton}>
          <Image
            source={require("../assets/images/Search.png")}
            style={{ width: 24, height: 24 }}
            resizeMode="cover"
          />
          <Text style={{ marginLeft: 12, color: Colors.GRAY_SECONDARY }}>
            Search
          </Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.header}>Order online collect in store</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SECONDARY_BG,
  },
  searchButton: {
    borderColor: Colors.GRAY_PRIMARY,
    borderWidth: 1,
    alignSelf: "center",
    marginTop: "2%",
    padding: "5%",
    width: "80%",
    borderRadius: 30,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "15%",
  },
  header: {
    marginHorizontal: Sizes.MAIN_PADDING,
    fontSize: getScreenPercent(8.7),
    fontFamily: FontType.RALEWAY_BOLD,
    lineHeight: getScreenPercent(10),
  },
});
