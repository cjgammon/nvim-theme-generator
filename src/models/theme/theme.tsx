export interface ThemeColor {
  hex: string;
  name: string;
}

export interface ThemeColors {
  [key: string]: ThemeColor;
}

export interface HighlightGroup {
  fg?: string;
  bg?: string;
  sp?: string;
  [key: string]: any; // For other attributes like bold, italic, etc.
}

export interface ThemeDefinition {
  metadata: {
    name: string;
    author: string;
    description: string;
    background: "dark" | "light";
  };
  colors: ThemeColors;
  [category: string]: { [group: string]: HighlightGroup } | any;
}
