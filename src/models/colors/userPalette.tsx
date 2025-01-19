import { ColorPalette } from "./color";

export interface UserPalette extends ColorPalette {
  parentId?: string; // Optional reference to parent palette
  modified?: Date; // When it was last modified
}

export const userPalette: UserPalette = {
  id: "user_palette_1",
  name: "My Custom Dark Theme",
  colors: {
    bg: {
      id: "bg",
      name: "Background",
      value: "#1a1b26",
      description: "Main background color",
      category: "base",
    },
    fg: {
      id: "fg",
      name: "Foreground",
      value: "#c0caf5",
      description: "Main text color",
      category: "base",
    },
    red: {
      id: "red",
      name: "Error Red",
      value: "#f7768e",
      description: "Color for errors",
      category: "diagnostic",
    },
    green: {
      id: "green",
      name: "Success Green",
      value: "#9ece6a",
      description: "Color for success messages",
      category: "diagnostic",
    },
    yellow: {
      id: "yellow",
      name: "Warning Yellow",
      value: "#e0af68",
      description: "Color for warnings",
      category: "diagnostic",
    },
    blue: {
      id: "blue",
      name: "Information Blue",
      value: "#7aa2f7",
      description: "Color for informational messages",
      category: "diagnostic",
    },
    purple: {
      id: "purple",
      name: "My Purple",
      value: "#bb9af7",
      description: "Custom purple for keywords",
      category: "syntax",
    },
    cyan: {
      id: "cyan",
      name: "Cyan",
      value: "#7dcfff",
      description: "Color for highlights",
      category: "accent",
    },
    orange: {
      id: "orange",
      name: "Orange",
      value: "#ff9e64",
      description: "Color for accents",
      category: "accent",
    },
    error: {
      id: "error",
      name: "Error",
      value: "#db4b4b",
      description: "Color for errors",
      category: "diagnostic",
    },
    warning: {
      id: "warning",
      name: "Warning",
      value: "#e0af68",
      description: "Color for warnings",
      category: "diagnostic",
    },
    info: {
      id: "info",
      name: "Info",
      value: "#0db9d7",
      description: "Color for informational messages",
      category: "diagnostic",
    },
    hint: {
      id: "hint",
      name: "Hint",
      value: "#1abc9c",
      description: "Color for hints",
      category: "diagnostic",
    },
    dark_gray: {
      id: "dark_gray",
      name: "Dark Gray",
      value: "#1f2335",
      description: "Color for dark gray elements",
      category: "base",
    },
    gray: {
      id: "gray",
      name: "Gray",
      value: "#565f89",
      description: "Color for gray elements",
      category: "base",
    },
    light_gray: {
      id: "light_gray",
      name: "Light Gray",
      value: "#545c7e",
      description: "Color for light gray elements",
      category: "base",
    },
    selection: {
      id: "selection",
      name: "Selection",
      value: "#28344a",
      description: "Color for selected elements",
      category: "base",
    },
  },
};
