import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export enum Metrics {
  SCREEN_WIDTH = width < height ? width : height,
  SCREEN_HEIGHT = width < height ? height : width,
}

export enum Sizes {
  MAIN_PADDING = "12%",
}
