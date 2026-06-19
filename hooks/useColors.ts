import { useColorScheme } from "react-native";

import colorsRaw from "@/constants/colors";

const { radius, ...palettes } = colorsRaw;

export function useColors() {
  const scheme = useColorScheme();
  const palette = scheme === "dark" && palettes.dark ? palettes.dark : palettes.light;
  return { ...palette, radius };
}
