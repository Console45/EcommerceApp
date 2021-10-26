import { Metrics } from "../theme";

export const getScreenPercent = (number: number): number => {
  return (number / 100) * Metrics.SCREEN_WIDTH;
};
