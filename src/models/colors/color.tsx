// Types for color management
export interface Color {
  id: string; // Unique identifier
  name: string; // Display name
  value: string; // Hex value
  description?: string; // Optional description
  isDefault?: boolean; // Is this a system default color?
  category?: string; // Optional grouping (e.g., "base", "syntax", "diagnostic")
}

export interface ColorPalette {
  id: string;
  name: string;
  colors: {
    [key: string]: Color;
  };
}
