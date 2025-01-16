import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const NvimThemeEditor = () => {
  const [colors, setColors] = useState({
    bg: "#282c34",
    fg: "#abb2bf",
    red: "#e06c75",
    green: "#98c379",
    yellow: "#e5c07b",
    blue: "#61afef",
    purple: "#c678dd",
    cyan: "#56b6c2",
    dark_gray: "#2c323c",
    gray: "#5c6370",
    light_gray: "#848b98",
  });

  const updateColor = (key, value) => {
    setColors((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const codeExample = `
function example() {
  // This is a comment
  const str = "Hello World";
  let num = 42;
  
  if (num > 40) {
    console.log(str);
    return true;
  }
  
  return false;
}
`
    .trim()
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return (
    <div className="flex gap-4 p-4 h-screen">
      {/* Preview Panel */}
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Theme Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <pre
            className="p-4 rounded"
            style={{
              backgroundColor: colors.bg,
              color: colors.fg,
              fontFamily: "monospace",
              lineHeight: "1.5",
            }}
          >
            {codeExample.split("\n").map((line, i) => (
              <div key={i} className="flex">
                <span
                  style={{
                    color: colors.gray,
                    marginRight: "1rem",
                    userSelect: "none",
                  }}
                >
                  {(i + 1).toString().padStart(2, " ")}
                </span>
                <span dangerouslySetInnerHTML={{ __html: line }} />
              </div>
            ))}
          </pre>
        </CardContent>
      </Card>

      {/* Color Editor Panel */}
      <Card className="w-80">
        <CardHeader>
          <CardTitle>Color Editor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(colors).map(([key, value]) => (
              <div key={key} className="flex items-center gap-2">
                <Input
                  type="color"
                  value={value}
                  onChange={(e) => updateColor(key, e.target.value)}
                  className="w-16 h-8"
                />
                <span className="text-sm font-medium capitalize">
                  {key.replace(/_/g, " ")}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NvimThemeEditor;
