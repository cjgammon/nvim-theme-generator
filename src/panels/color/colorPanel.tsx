import React, { useState } from "react";
import { observer } from "mobx-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"; // Assuming a Button component is available
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import themeModel from "../../models/theme/themeModel";
import { formatHexColor } from "../../utils/utils";

const ColorPanel = () => {
  const [newColor, setNewColor] = useState({ name: "", value: "" });

  const addNewColor = () => {
    if (newColor.name && newColor.value) {
      try {
        const formattedColor = formatHexColor(newColor.value);
        themeModel.colors[newColor.name.toLowerCase().replace(/\s+/g, "_")] =
          formattedColor;
        setNewColor({ name: "", value: "" }); // Reset the input fields
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  const handleColorChange = (e, key) => {
    const newColorValue = e.target.value;
    try {
      const formattedColor = formatHexColor(newColorValue);
      themeModel.setColor(key, formattedColor);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    try {
      const colors = JSON.parse(pastedData);
      /*
      Object.entries(colors).forEach(([key, value]) => {
        themeModel.setColor(key, formatHexColor(value));
      });
      */
      themeModel.setColors(colors);
    } catch (error) {
      console.error("Invalid JSON format:", error, pastedData);
    }
  };

  return (
    <Card className="overflow-scroll h-120" onPaste={handlePaste}>
      <CardHeader>
        <CardTitle>Colors</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-3">
          {Object.entries(themeModel.colors).map(([key, color]) => (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Input
                    type="color"
                    value={color}
                    key={key}
                    onChange={(e) => handleColorChange(e, key)}
                  ></Input>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{key}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <div className="flex flex-col mt-4 gap-3">
          <Input
            placeholder="Color Name"
            value={newColor.name}
            onChange={(e) => setNewColor({ ...newColor, name: e.target.value })}
          />
          <Input
            placeholder="Color Value (Hex)"
            value={newColor.value}
            onChange={(e) =>
              setNewColor({ ...newColor, value: e.target.value })
            }
          />
          <Button onClick={addNewColor} className="mt-2 bg-blue-600 text-white">
            Add Color
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default observer(ColorPanel);
