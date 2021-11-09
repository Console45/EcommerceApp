import React, { FC, ReactElement, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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

interface SearchModalProps {
  modalVisible: boolean;
  closeModal: () => void;
}

const SearchModal: FC<SearchModalProps> = ({
  modalVisible,
  closeModal,
}): ReactElement => {
  return (
    <Modal
      animationType="fade"
      visible={modalVisible}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <SafeAreaView
        style={{ ...styles.container, paddingHorizontal: Sizes.MAIN_PADDING }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-around",
            marginHorizontal: "5%",
            marginTop: "2%",
          }}
        >
          <TouchableOpacity onPress={closeModal}>
            <Image
              style={styles.backButton}
              source={require("../assets/images/Arrow.png")}
            />
          </TouchableOpacity>
          <View style={styles.searchContainer}>
            <Image
              source={require("../assets/images/Search.png")}
              style={{ width: 24, height: 24 }}
              resizeMode="cover"
            />
            <TextInput
              style={{ width: "100%", height: "100%", marginLeft: 12 }}
              autoFocus={true}
              placeholder="Search"
              placeholderTextColor={Colors.GRAY_SECONDARY}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backButton: {
    width: getScreenPercent(5.8),
    height: getScreenPercent(5.8),
    marginTop: "100%",
  },
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
  searchContainer: {
    borderColor: Colors.GRAY_PRIMARY,
    borderWidth: 1,
    height: "8.5%",
    width: "80%",
    flexDirection: "row",
    padding: 18,
    borderRadius: 30,
    alignItems: "center",
  },
  header: {
    marginHorizontal: Sizes.MAIN_PADDING,
    fontSize: getScreenPercent(8.7),
    fontFamily: FontType.RALEWAY_BOLD,
    lineHeight: getScreenPercent(10),
  },
});
