import React, { FC, ReactElement } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  Text,
  TextStyle,
} from "react-native";
import { Colors, FontType } from "../theme";
import { getScreenPercent } from "../utils";

interface ButtonProps {
  children?: ReactElement;
  style?: ViewStyle;
  onPress?: (e: GestureResponderEvent) => void;
  title?: string;
  textStyle?: TextStyle;
}

export const Button: FC<ButtonProps> = ({
  children,
  style,
  title,
  onPress,
  textStyle,
}): ReactElement => {
  const { button } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={{ ...button, ...style }}>
      {title ? (
        <Text style={{ ...styles.buttonText, ...textStyle }}>{title}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: Colors.PRIMARY,
    shadowOffset: { height: 10, width: 0 },
    shadowColor: Colors.BLACK,
    elevation: 1,
    shadowOpacity: 0.2,
    shadowRadius: 30,
  },
  buttonText: {
    color: Colors.WHITE,
    fontFamily: FontType.RALEWAY_BOLD,
    fontSize: getScreenPercent(5.1),
  },
});
