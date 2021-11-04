import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC, ReactElement, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  ImageSourcePropType,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components";
import { NativeStackParamList, Screens } from "../navigations/screens";
import { Colors, FontType, Sizes } from "../theme";
import { getScreenPercent } from "../utils";

interface LoginProps
  extends NativeStackScreenProps<NativeStackParamList, Screens.LOGIN> {}
interface LabelProps {
  image: ImageSourcePropType;
  title: string;
}

export const Login: FC<LoginProps> = ({ navigation }): ReactElement => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const login = () => {
    if (username && password) navigation.navigate(Screens.SHOP);
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      style={{ backgroundColor: Colors.PRIMARY }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={false}
    >
      <ImageBackground
        source={require("../assets/images/login-bg.png")}
        style={styles.headerContainer}
      >
        <SafeAreaView edges={["top"]}>
          <Text style={styles.title}>Welcome Back</Text>
        </SafeAreaView>
      </ImageBackground>
      <View style={styles.formContainer}>
        <Text
          style={{
            fontFamily: FontType.RALEWAY_BOLD,
            fontSize: getScreenPercent(4.6),
          }}
        >
          Login
        </Text>
        <View style={styles.formInputs}>
          <View style={styles.inputContainer}>
            <Label
              image={require("../assets/images/profile.png")}
              title="Username"
            />
            <View style={styles.input}>
              <TextInput
                style={{ flex: 1, borderWidth: 0 }}
                value={username}
                onChangeText={(text: string) => setUsername(text)}
              />
            </View>
          </View>
          <View>
            <Label
              image={require("../assets/images/lock.png")}
              title="Password"
            />
            <View style={styles.input}>
              <TextInput
                secureTextEntry={hidePassword}
                textContentType="password"
                style={{ borderWidth: 0, flex: 1 }}
                value={password}
                onChangeText={(text: string) => setPassword(text)}
              />
              <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                <Text
                  style={{
                    color: Colors.PRIMARY,
                    fontFamily: FontType.RALEWAY_SEMIBOLD,
                    fontSize: getScreenPercent(3.8),
                  }}
                >
                  {hidePassword ? "Show" : "Hide"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Button title="Login" style={{ marginTop: "15%" }} onPress={login} />
      </View>
    </KeyboardAwareScrollView>
  );
};

const Label: FC<LabelProps> = ({ image, title }): ReactElement => {
  return (
    <View style={styles.labelContainer}>
      <Image
        source={image}
        style={{
          width: getScreenPercent(5.0),
          height: getScreenPercent(5.0),
          marginRight: 10,
        }}
        resizeMode={"contain"}
      />
      <Text
        style={{
          fontSize: getScreenPercent(3.8),
          color: Colors.GRAY_SECONDARY,
          fontFamily: FontType.RALEWAY_SEMIBOLD,
        }}
      >
        {title}
      </Text>
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
    padding: Sizes.MAIN_PADDING,
    paddingTop: "9.2%",
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  formInputs: {
    marginVertical: Sizes.MAIN_PADDING,
  },
  inputContainer: {
    marginBottom: "10%",
  },
  input: {
    borderBottomColor: Colors.GRAY_SECONDARY,
    borderBottomWidth: 1,
    marginTop: "4%",
    flexDirection: "row",
    paddingBottom: getScreenPercent(3),
    justifyContent: "space-between",
  },
});
