import { Colors } from "./types";

export const baseColors = {
  failure: "#98C1D9",
  primary: "#ff9505",
  primaryBright: "#ff9505",
  primaryDark: "#ff9505",
  secondary: "#E07A5F",
  success: "#81B29A",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#B42B51",
  background: "#053F5C",
  backgroundDisabled: "#000000",
  contrast: "#1e293b",
  invertedContrast: "#191326",
  input: "#14213d",
  primaryDark: "#429EBD",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#000000",
  card: "#053F5C",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
