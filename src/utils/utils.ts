export const sanitizeColorName = (colorString) => {
  return colorString.replace("colors.", "");
};

export const formatHexColor = (color: string): string => {
  // Remove any leading '#' and ensure the color is in hex format
  color = color.replace(/^#/, "");

  // If the color is 3 digits, convert it to 6 digits
  if (color.length === 3) {
    color = color
      .split("")
      .map((c) => c + c)
      .join("");
  }

  // Ensure the color is 6 digits
  if (color.length !== 6) {
    throw new Error("Invalid hex color format. Must be 6 digits.");
  }

  return `#${color}`;
};
