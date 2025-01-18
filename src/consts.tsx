export type ColorPalette = {
  bg: string;
  bg_dark: string;
  bg_highlight: string;
  fg: string;
  fg_dark: string;
  fg_gutter: string;
  red: string;
  green: string;
  yellow: string;
  blue: string;
  purple: string;
  cyan: string;
  orange: string;
  error: string;
  warning: string;
  info: string;
  hint: string;
  dark_gray: string;
  gray: string;
  light_gray: string;
  selection: string;
};

export function THEME_TEMPLATE(colors: any) {
  return `
local M = {}

local colors = {
${Object.entries(colors)
  .map(([key, value]) => `${key} = "${value}",`)
  .join("\n ")}
}


-- Highlight group definitions
local groups = {
  -- Editor UI
  Normal = { fg = colors.fg, bg = colors.bg },
  NormalFloat = { fg = colors.fg, bg = colors.bg_dark },
  Cursor = { fg = colors.bg, bg = colors.fg },
  CursorLine = { bg = colors.bg_highlight },
  CursorColumn = { bg = colors.bg_highlight },
  LineNr = { fg = colors.fg_gutter },
  CursorLineNr = { fg = colors.fg_dark },
  SignColumn = { bg = colors.bg },
  ColorColumn = { bg = colors.bg_highlight },
  Folded = { fg = colors.blue, bg = colors.fg_gutter },
  FoldColumn = { fg = colors.fg_gutter },
  VertSplit = { fg = colors.fg_gutter },

  -- Selection
  Visual = { bg = colors.selection },
  VisualNOS = { bg = colors.selection },
  Search = { fg = colors.bg, bg = colors.blue },
  IncSearch = { fg = colors.bg, bg = colors.orange },

  -- Syntax Base
  Comment = { fg = colors.gray, italic = true },
  NonText = { fg = colors.fg_gutter },

  -- Syntax Groups
  Constant = { fg = colors.orange },
  String = { fg = colors.green },
  Character = { fg = colors.green },
  Number = { fg = colors.orange },
  Boolean = { fg = colors.orange },
  Float = { fg = colors.orange },

  Identifier = { fg = colors.blue },
  Function = { fg = colors.blue },

  Statement = { fg = colors.purple },
  Conditional = { fg = colors.purple },
  Repeat = { fg = colors.purple },
  Label = { fg = colors.purple },
  Operator = { fg = colors.fg },
  Keyword = { fg = colors.purple },
  Exception = { fg = colors.purple },

  PreProc = { fg = colors.cyan },
  Include = { fg = colors.purple },
  Define = { fg = colors.purple },
  Macro = { fg = colors.purple },
  PreCondit = { fg = colors.purple },

  Type = { fg = colors.yellow },
  StorageClass = { fg = colors.orange },
  Structure = { fg = colors.purple },
  Typedef = { fg = colors.yellow },

  Special = { fg = colors.cyan },
  SpecialChar = { fg = colors.cyan },
  Tag = { fg = colors.blue },
  Delimiter = { fg = colors.fg },
  SpecialComment = { fg = colors.gray, italic = true },
  Debug = { fg = colors.red },

  -- Messages
  Error = { fg = colors.error },
  Warning = { fg = colors.warning },
  Info = { fg = colors.info },
  Hint = { fg = colors.hint },

  -- Git
  GitSignsAdd = { fg = colors.green },
  GitSignsChange = { fg = colors.blue },
  GitSignsDelete = { fg = colors.red },

  -- LSP
  DiagnosticError = { fg = colors.error },
  DiagnosticWarn = { fg = colors.warning },
  DiagnosticInfo = { fg = colors.info },
  DiagnosticHint = { fg = colors.hint },

  -- Pmenu (completion)
  Pmenu = { fg = colors.fg, bg = colors.bg_dark },
  PmenuSel = { fg = colors.fg, bg = colors.selection },
  PmenuSbar = { bg = colors.bg_dark },
  PmenuThumb = { bg = colors.selection },

  -- Status line
  StatusLine = { fg = colors.fg, bg = colors.bg_dark },
  StatusLineNC = { fg = colors.fg_dark, bg = colors.bg_dark },
}

function M.setup()
  vim.cmd("highlight clear")
  if vim.fn.exists("syntax_on") then
    vim.cmd("syntax reset")
  end

  vim.g.colors_name = "mytheme"

  for group, settings in pairs(groups) do
    vim.api.nvim_set_hl(0, group, settings)
  end
end

return M
`;
}

export const CODE_EXAMPLE = `
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

{{Error}}
[[Warning]]
||Hint||
((Info))
`;
