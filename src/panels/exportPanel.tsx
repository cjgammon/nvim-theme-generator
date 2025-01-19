import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Assuming a Button component is available

const ExportPanel = () => {
  const exportTheme = () => {
    /*
        const luaTheme = THEME_TEMPLATE(colors);
        luaTheme.trim();
    
        const blob = new Blob([luaTheme], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "init.lua";
        a.click();
        URL.revokeObjectURL(url);
        */
  };

  const getRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
  };

  const getContrastYIQ = (hexcolor) => {
    const r = parseInt(hexcolor.slice(1, 3), 16);
    const g = parseInt(hexcolor.slice(3, 5), 16);
    const b = parseInt(hexcolor.slice(5, 7), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "black" : "white";
  };

  /*
  const randomizeColors = () => {
    const newColors = {};
    for (const key in defaultColors) {
      if (key !== "bg") {
        let color;
        do {
          color = getRandomColor();
        } while (getContrastYIQ(color) === "white" && key !== "bg"); // Ensure contrast for text colors
        newColors[key] = color;
      } else {
        newColors[key] = defaultColors[key];
      }
    }

    const palette: ColorPalette = newColors as ColorPalette;
    setColors(palette);
  };
  */

  return (
    <Card>
      <CardContent>
        <div className="mt-4 space-y-2">
          <Button
            //onClick={exportTheme}
            className="w-full bg-blue-600 text-white"
          >
            Export Theme
          </Button>
          <Button
            //onClick={() => setColors(defaultColors)}
            className="w-full bg-gray-600 text-white"
          >
            Reset to Default
          </Button>
          <Button
            //onClick={randomizeColors}
            className="w-full bg-green-600 text-white"
          >
            Randomize Colors
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExportPanel;
