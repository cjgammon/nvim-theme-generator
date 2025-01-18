import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"; // Assuming a Button component is available
import { Label } from "@/components/ui/label"; // Assuming a Button component is available

import { THEME_TEMPLATE, CODE_EXAMPLE, ColorPalette } from "./consts";

const defaultColors: ColorPalette = {
  bg: "#1a1b26",
  bg_dark: "#16161e",
  bg_highlight: "#292e42",
  fg: "#c0caf5",
  fg_dark: "#a9b1d6",
  fg_gutter: "#3b4261",
  red: "#f7768e",
  green: "#9ece6a",
  yellow: "#e0af68",
  blue: "#7aa2f7",
  purple: "#bb9af7",
  cyan: "#7dcfff",
  orange: "#ff9e64",
  error: "#db4b4b",
  warning: "#e0af68",
  info: "#0db9d7",
  hint: "#1abc9c",
  dark_gray: "#1f2335",
  gray: "#565f89",
  light_gray: "#545c7e",
  selection: "#28344a",
};

const NvimThemeEditor = () => {
  const [colors, setColors] = useState(defaultColors);

  const updateColor = (key, value) => {
    setColors((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const syntaxHighlight = (line) => {
    const commentRegex = /(\/\/.*)/g;
    const blockCommentRegex = /\/\*[\s\S]*?\*\//g;
    const stringRegex = /(["'`].*?["'`])/g;
    const errorRegex = /\{\{(\w+)\}\}/g;
    const hintRegex = /\|\|(\w+)\|\|/g;
    const infoRegex = /\(\((\w+)\)\)/g;
    const warningRegex = /\[\[(\w+)\]\]/g;
    const keywordRegex =
      /\b(const|let|if|return|function|true|false|this|console)\b/g;
    const numberRegex = /\b(\d+)\b/g;
    const functionRegex = /\b\w+(?=\s*\()/g;
    const classRegex = /\b(class)\s+(\w+)/g;
    const paramRegex = /\@(\w+)/g;
    const typeRegex = /(?<!\{)\{(\w+)\}(?!\})/g;
    const templateStringRegex = /\$\{([^}]+)\}/g; // Regex to match ${...}

    return line
      .replace(stringRegex, `<span style="color:${colors.green};">$1</span>`)
      .replace(keywordRegex, `<span style="color:${colors.purple};">$&</span>`)
      .replace(classRegex, (_, classWord, className) => {
        return `<span style="color:${colors.purple};">${classWord}</span> <span style="color:${colors.yellow};">${className}</span>`;
      })
      .replace(numberRegex, `<span style="color:${colors.yellow};">$1</span>`)
      .replace(functionRegex, `<span style="color:${colors.blue};">$&</span>`)
      .replace(paramRegex, `<span style="color:${colors.purple};">$&</span>`)
      .replace(typeRegex, `{<span style="color:${colors.yellow};">$1</span>}`)
      .replace(commentRegex, (match) => {
        return `<span style="color:${colors.gray};font-style:italic;">${match}</span>`;
      })
      .replace(blockCommentRegex, (match) => {
        console.log("a", match);
        return `<span style="color:${colors.gray};font-style:italic;">${match}</span>`;
      })
      .replace(templateStringRegex, (_, inner) => {
        return `<span style="color:${colors.cyan};">\$\{${inner}\}</span>`; // Color the content inside ${}
      })
      .replace(errorRegex, `<span style="color:${colors.error};">$1</span>`)
      .replace(hintRegex, `<span style="color:${colors.hint};">$1</span>`)
      .replace(infoRegex, `<span style="color:${colors.info};">$1</span>`)
      .replace(
        warningRegex,
        `<span style="color:${colors.warning};">$1</span>`
      );
  };

  const codeExample = CODE_EXAMPLE.trim()
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const exportTheme = () => {
    const luaTheme = THEME_TEMPLATE(colors);
    luaTheme.trim();

    const blob = new Blob([luaTheme], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "init.lua";
    a.click();
    URL.revokeObjectURL(url);
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

  return (
    <div className="flex gap-4 p-4 h-screen w-screen">
      {/* Preview Panel */}
      <Card className="flex-1 flex flex-col">
        <CardHeader>
          <CardTitle>Theme Preview</CardTitle>
        </CardHeader>
        <CardContent
          className="flex flex-col relative flex-1"
          style={{ height: "400px" }}
        >
          <pre
            className="p-4 rounded overflow-hidden flex-1"
            style={{
              backgroundColor: colors.bg,
              color: colors.fg,
              fontFamily: "monospace",
              lineHeight: "1.5",
              overflowY: "auto",
              flexGrow: 1,
            }}
          >
            <span
              dangerouslySetInnerHTML={{ __html: syntaxHighlight(codeExample) }}
            />
          </pre>
        </CardContent>
      </Card>

      {/* Color Editor Panel */}
      <Card className="w-80 overflow-scroll">
        <CardHeader>
          <CardTitle>Color Editor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-3">
            {Object.entries(colors).map(([key, value]) => (
              <div key={key} className="flex items-center gap-2 flex-col">
                <Input
                  name={"input" + key}
                  type="color"
                  value={value}
                  onChange={(e) => updateColor(key, e.target.value)}
                  className="w-16 h-8"
                />
                <Label htmlFor={"input" + key}>{key.replace(/_/g, " ")}</Label>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            <Button
              onClick={exportTheme}
              className="w-full bg-blue-600 text-white"
            >
              Export Theme
            </Button>
            <Button
              onClick={() => setColors(defaultColors)}
              className="w-full bg-gray-600 text-white"
            >
              Reset to Default
            </Button>
            <Button
              onClick={randomizeColors}
              className="w-full bg-green-600 text-white"
            >
              Randomize Colors
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NvimThemeEditor;
