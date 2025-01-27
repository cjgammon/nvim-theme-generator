import { makeAutoObservable } from "mobx";
import { exportLua } from "./luaTemplate";
import { exportVSCodeTheme } from "./vscTemplate";

class ThemeModel {
  metadata = {
    name: "My Theme",
    author: "",
    description: "",
    background: "dark",
  };

  colors = {
    // Base UI colors
    background: "#1a1b26",
    background_darker: "#16161e",
    background_highlight: "#292e42",
    foreground: "#c0caf5",
    foreground_muted: "#a9b1d6",
    foreground_subtle: "#3b4261",
    selection_bg: "#2e3c64",

    // Syntax highlighting
    keyword: "#9d7cd8",
    func: "#7aa2f7",
    type: "#e0af68",
    string: "#9ece6a",
    constant: "#ff9e64",
    comment: "#565f89",
    variable: "#c0caf5",
    operator: "#89ddff",
    template: "#7dcfff",

    // UI indicators
    error: "#db4b4b",
    warning: "#e0af68",
    info: "#0db9d7",
    success: "#1abc9c",

    // Git colors
    git_added: "#9ece6a",
    git_modified: "#7aa2f7",
    git_deleted: "#f7768e",
  };

  editor = {
    Normal: {
      fg: "colors.foreground",
      bg: "colors.background",
    },
    NormalFloat: {
      fg: "colors.foreground",
      bg: "colors.background_darker",
    },
    Cursor: {
      fg: "colors.background",
      bg: "colors.foreground",
    },
    CursorLine: {
      bg: "colors.background_highlight",
    },
    CursorColumn: {
      bg: "colors.background_highlight",
    },
    LineNr: {
      fg: "colors.foreground_subtle",
    },
    CursorLineNr: {
      fg: "colors.foreground_muted",
    },
    SignColumn: {
      bg: "colors.background",
    },
    ColorColumn: {
      bg: "colors.background_highlight",
    },
    Folded: {
      fg: "colors.func",
      bg: "colors.foreground_subtle",
    },
    FoldColumn: {
      fg: "colors.foreground_subtle",
    },
    VertSplit: {
      fg: "colors.foreground_subtle",
    },
  };

  syntax = {
    Comment: {
      fg: "colors.comment",
      italic: true,
    },
    Constant: {
      fg: "colors.constant",
    },
    String: {
      fg: "colors.string",
    },
    Character: {
      fg: "colors.string",
    },
    Number: {
      fg: "colors.constant",
    },
    Boolean: {
      fg: "colors.constant",
    },
    Float: {
      fg: "colors.constant",
    },
    Function: {
      fg: "colors.func",
    },
    Statement: {
      fg: "colors.keyword",
    },
    Keyword: {
      fg: "colors.keyword",
    },
    Special: {
      fg: "colors.keyword",
    },
    Type: {
      fg: "colors.type",
    },
    TemplateStringPlaceholder: {
      fg: "colors.template",
    },
    Exception: {
      fg: "colors.template",
    },
    Typedef: {
      fg: "colors.template",
    },
    Operator: {
      fg: "colors.operator",
    },
    Identifier: {
      fg: "colors.variable", // Using variable color since identifiers are variables
    },
    Conditional: {
      fg: "colors.keyword", // These are keywords like if/else
    },
    Repeat: {
      fg: "colors.keyword", // These are keywords like for/while
    },
    Label: {
      fg: "colors.keyword", // Labels are keywords
    },
    Include: {
      fg: "colors.func", // Include statements are like function calls
    },
    Define: {
      fg: "colors.keyword", // Preprocessor definitions are keywords
    },
    Macro: {
      fg: "colors.keyword", // Macros are similar to definitions
    },
    PreCondit: {
      fg: "colors.keyword", // Preprocessor conditionals are keywords
    },
    StorageClass: {
      fg: "colors.type", // Storage classes are type-related
    },
    Structure: {
      fg: "colors.type", // Structures are types
    },
    SpecialChar: {
      fg: "colors.string", // Special characters appear in strings
    },
    Tag: {
      fg: "colors.type", // Tags are like types
    },
    Delimiter: {
      fg: "colors.foreground", // Delimiters should be subtle
    },
    SpecialComment: {
      fg: "colors.comment", // Special comments are still comments
      italic: true, // Keeping comment style
    },
    Debug: {
      fg: "colors.warning", // Debug statements should stand out
    },
    PreProc: {
      fg: "colors.keyword", // Preprocessor directives are keywords
    },
  };

  lsp = {
    DiagnosticError: {
      fg: "colors.error",
    },
    DiagnosticWarn: {
      fg: "colors.warning",
    },
    DiagnosticInfo: {
      fg: "colors.info",
    },
    DiagnosticHint: {
      fg: "colors.success",
    },
    DiagnosticUnderlineError: {
      sp: "colors.error",
      undercurl: true,
    },
    DiagnosticUnderlineWarn: {
      sp: "colors.warning",
      undercurl: true,
    },
    DiagnosticUnderlineInfo: {
      sp: "colors.info",
      undercurl: true,
    },
    DiagnosticUnderlineHint: {
      sp: "colors.success",
      undercurl: true,
    },
  };

  git = {
    GitSignsAdd: {
      fg: "colors.git_added",
    },
    GitSignsChange: {
      fg: "colors.git_modified",
    },
    GitSignsDelete: {
      fg: "colors.git_deleted",
    },
  };

  treesitter = {
    '["@variable"]': {
      fg: "colors.variable",
    },
    '["@variable.builtin"]': {
      link: '"Special"',
    },
  };

  constructor() {
    makeAutoObservable(this);
  }

  setColor(key, value) {
    this.colors[key] = value;
  }

  setColors(colors) {
    this.colors = Object.assign(colors);
  }

  updateColor(section: string, item: string, label: string, newValue: string) {
    this[section][item][label] = `colors.${newValue}`;
  }

  getGroupMappings() {
    const groups = {
      ...this.editor,
      ...this.syntax,
      ...this.lsp,
      ...this.git,
      ...this.treesitter,
      // Add any other groups you want to include
    };

    return groups;
  }

  exportLua(name) {
    return exportLua(name, this.colors, this.getGroupMappings());
  }

  exportVSCodeTheme(name) {
    return exportVSCodeTheme(name, this.colors);
  }
}

const themeModel = new ThemeModel();
export default themeModel;
