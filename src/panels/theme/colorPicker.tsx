import themeModel from "../../models/theme/themeModel";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const ColorSwatchPicker = ({ color, label, selectedValue, onColorChange }) => {
  const [selectedOption, setSelectedOption] = useState(selectedValue);

  const colorSwatches = Object.entries(themeModel.colors);

  const handleColorChange = (value) => {
    setSelectedOption(value);

    if (onColorChange) {
      onColorChange(value, color); // Pass the new value and color to the parent
    }
  };

  const handleInputChange = (event) => {
    const newColor = event.target.value;
    if (onColorChange) {
      onColorChange(newColor, color); // Pass the new color to the parent
    }
  };

  return (
    <div>
      <div className="grid grid-cols-4 relative">
        <label className="col-span-1 justify-self-center self-center">
          {label}
        </label>
        <Select
          value={selectedOption}
          className="col-span-1"
          onValueChange={handleColorChange}
        >
          <SelectTrigger className="w-[180px]" value={selectedValue}>
            <SelectValue placeholder="select a theme" />
          </SelectTrigger>
          <SelectContent>
            {colorSwatches.map(([key, value], index) => {
              return (
                <SelectItem key={index + key + label} value={key}>
                  <span
                    className="size-3 rounded-full inline-block mr-2"
                    style={{ backgroundColor: value }}
                  ></span>
                  {key}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <Input
        type="color"
        value={color} // Assuming color has a 'value' property
        onChange={handleInputChange} // Added onChange handler
      />
    </div>
  );
};

export default ColorSwatchPicker;
