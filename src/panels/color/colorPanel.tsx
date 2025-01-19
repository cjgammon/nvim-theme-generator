import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"; // Assuming a Button component is available

import themeModel from "../../models/theme/themeModel";

const ColorPanel = () => {
  const [newColor, setNewColor] = useState({ name: "", value: "" });

  const addNewColor = () => {
    if (newColor.name && newColor.value) {
      themeModel.colors[newColor.name.toLowerCase().replace(/\s+/g, "_")] =
        newColor.value;
      setNewColor({ name: "", value: "" }); // Reset the input fields
    }
  };

  return (
    <Card className="overflow-scroll h-80">
      <CardHeader>
        <CardTitle>Colors</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-3">
          {Object.entries(themeModel.colors).map(([key, color]) => (
            <Input type="color" value={color} key={key}></Input>
          ))}
        </div>
        <div className="flex flex-col mt-4">
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

export default ColorPanel;
