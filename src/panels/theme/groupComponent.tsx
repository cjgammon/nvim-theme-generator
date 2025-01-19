import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import themeModel from "../../models/theme/themeModel";

import ColorSwatchPicker from "./colorPicker";

export interface GroupComponentProps {
  group: string;
  propKey: string;
  options: string[];
}

const GroupComponent: React.FC<GroupComponentProps> = ({
  group,
  propKey,
  options,
}) => {
  //iterate options to show ui
  return (
    <div>
      {options.map((value) => {
        if (value == "fg" || value == "bg" || value == "sp") {
          console.log(group, propKey, options);

          if (
            !themeModel[group] ||
            !themeModel[group][propKey] ||
            !themeModel[group][propKey][value]
          ) {
            return <div>{value} : no matching value</div>;
          }

          const colorName = themeModel[group][propKey][value].replace(
            "colors.",
            ""
          );
          const color = themeModel.colors[colorName]; // Get the color object from themeModel

          console.log(themeModel.colors, colorName, color);
          return (
            <ColorSwatchPicker
              tag={value + propKey}
              value={value}
              color={color}
            />
          );
        } else if (
          value == "bold" ||
          value == "blend" ||
          value == "italic" ||
          value == "undercurl"
        ) {
          return (
            <div className="flex items-center space-x-2">
              <Checkbox id={value + propKey} />
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor={value + propKey}
              >
                {value}
              </label>
            </div>
          );
        }
      })}
    </div>
  );
};

export default GroupComponent;
