import React, { useState } from "react";
import { observer } from "mobx-react";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import themeModel from "../../models/theme/themeModel";

import ColorSwatchPicker from "./colorPicker";
import { sanitizeColorName } from "../../utils/utils";

export interface sectionComponentProps {
  section: string;
  item: string;
  options: string[];
}

const sectionComponent: React.FC<sectionComponentProps> = ({
  section,
  item,
  options,
}) => {
  //iterate options to show ui
  return (
    <div>
      {options.map((label) => {
        if (label == "fg" || label == "bg" || label == "sp") {
          console.log(section, item, label);
          if (
            !themeModel[section] ||
            !themeModel[section][item] ||
            !themeModel[section][item][label]
          ) {
            return <div>{label} : no matching label</div>;
          }

          const colorName = sanitizeColorName(themeModel[section][item][label]);
          const color = themeModel.colors[colorName]; // Get the color object from themeModel

          return (
            <ColorSwatchPicker
              key={section + item + label}
              color={color}
              label={label}
              selectedValue={colorName}
              onColorChange={(newValue) => {
                //themeModel[section][item][label] = `colors.${newValue}`;
                themeModel.updateColor(section, item, label, newValue);
              }}
            />
          );
        } else if (
          label == "bold" ||
          label == "blend" ||
          label == "italic" ||
          label == "undercurl"
        ) {
          return (
            <div className="flex items-center space-x-2">
              <Checkbox id={label + item} />
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor={label + item}
              >
                {label}
              </label>
            </div>
          );
        }
      })}
    </div>
  );
};

export default observer(sectionComponent);
