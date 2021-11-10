import React, { FC, ReactElement, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, Sizes } from "../theme";
import { getScreenPercent } from "../utils";

interface SearchModalProps {
  modalVisible: boolean;
  closeModal: () => void;
}

export const SearchModal: FC<SearchModalProps> = ({
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
});
