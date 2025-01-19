import themeModel from "../../models/theme/themeModel";
import { Input } from "@/components/ui/input";

const ColorSwatchPicker = ({ tag, value, color }) => {
  return (
    <div className="grid grid-cols-2 item-center justify-center">
      <label htmlFor={tag}>{value}</label>
      <Input
        id={tag}
        type="color"
        value={color} // Assuming color has a 'value' property
        onChange={(e) => {
          const newColorValue = e.target.value;
          themeModel.colors[value].value = newColorValue; // Update the color value in themeModel
          //setColors((prev) => ({ ...prev, [value]: newColorValue })); // Update the state if needed
        }}
      />
    </div>
  );
};

export default ColorSwatchPicker;
