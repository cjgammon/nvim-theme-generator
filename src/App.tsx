import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"; // Assuming a Button component is available

const defaultColors = {
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
    const stringRegex = /(".*?")/g;
    const keywordRegex =
      /\b(const|let|if|return|function|true|false|this|console)\b/g;
    const numberRegex = /\b(\d+)\b/g;
    const functionRegex = /\b\w+(?=\s*\()/g;
    const classRegex = /\b(class)\s+(\w+)/g;
    const paramRegex = /\@(\w+)/g;
    const typeRegex = /\{(\w+)\}/g;

    return line
      .replace(blockCommentRegex, (match) => {
        console.log("a", match);
        return `<span style="color:${colors.gray};font-style:italic;">${match}</span>`;
      })
      .replace(stringRegex, `<span style="color:${colors.green};">$1</span>`)
      .replace(keywordRegex, `<span style="color:${colors.purple};">$&</span>`)
      .replace(
        classRegex,
        (match, classWord, className) =>
          `<span style="color:${colors.purple};">${classWord}</span> <span style="color:${colors.yellow};">${className}</span>`
      )
      .replace(numberRegex, `<span style="color:${colors.yellow};">$1</span>`)
      .replace(functionRegex, `<span style="color:${colors.blue};">$&</span>`)
      .replace(paramRegex, `<span style="color:${colors.purple};">$&</span>`)
      .replace(typeRegex, `{<span style="color:${colors.yellow};">$1</span>}`)
      .replace(commentRegex, (match) => {
        return `<span style="color:${colors.gray};font-style:italic;">${match}</span>`;
      });
  };

  const codeExample = `
/**
 * Calculates the factorial of a number.
 * @param {number} n - The number to calculate the factorial for.
 * @returns {number} - The factorial of the input number.
 */
function factorial(n) {
  // Base case
  if (n <= 1) {
    return 1;
  }

  // Recursive case
  return n * factorial(n - 1);
}

// Example usage
const result = factorial(5);
console.log("Factorial of 5 is:", result);

// Working with arrays
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => {
  console.log(\`Fruit \${index + 1}: \${fruit}\`);
});

// Handling objects
const person = {
  name: "John Doe",
  age: 30,
  greet: function() {
    console.log(\`Hello, my name is \${this.name} and I am \${this.age} years old.\`);
  },
};

// Call the greet method
person.greet();

// Using a class
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(\`\${this.name} says \${this.sound}!\`);
  }
}

const dog = new Animal("Dog", "Woof");
dog.makeSound();
`
    .trim()
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const exportTheme = () => {
    const luaTheme = `
local M = {}

local colors = {
${Object.entries(colors)
  .map(([key, value]) => `${key} = "${value}",`)
  .join("\n ")}
}

function M.setup()
  vim.g.colors_name = "mytheme"
  -- Define highlight groups here...
end

return M
`.trim();

    const blob = new Blob([luaTheme], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mytheme.lua";
    a.click();
    URL.revokeObjectURL(url);
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
                <span
                  dangerouslySetInnerHTML={{ __html: syntaxHighlight(line) }}
                />
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NvimThemeEditor;
