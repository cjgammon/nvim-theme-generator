import { ColorPalette } from "./color";

export const defaultColors: ColorPalette = {
  id: "default",
  name: "Default Dark",
  colors: {
    bg: {
      id: "bg",
      name: "Background",
      value: "#1a1b26",
      description: "Main background color",
      category: "base",
      isDefault: true,
    },
    bg_dark: {
      id: "bg_dark",
      name: "Dark Background",
      value: "#16161e",
      description: "Darker background for contrasting elements",
      category: "base",
      isDefault: true,
    },
    fg: {
      id: "fg",
      name: "Foreground",
      value: "#c0caf5",
      description: "Main text color",
      category: "base",
      isDefault: true,
    },
    // ... other default colors
  },
};
