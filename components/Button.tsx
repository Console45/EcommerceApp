import React, { FC, ReactElement } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { Colors } from "../theme";

interface ButtonProps {
  children?: ReactElement;
  style?: ViewStyle;
  onPress?: (e: GestureResponderEvent) => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  style,
  onPress,
}): ReactElement => {
  const { button } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={{ ...button, ...style }}>
      {children}
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
  },
});
