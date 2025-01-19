import { makeAutoObservable } from "mobx";

class ThemeModel {
  metadata = {
    name: "My Theme",
    author: "",
    description: "",
    background: "dark",
  };

  colors = {
    //bg: "#1a1b26",
    bg: "#ff0000",
    bg_dark: "#16161e",
    bg_highlight: "#292e42",
    fg: "#c0caf5",
    fg_dark: "#a9b1d6",
    fg_gutter: "#3b4261",
    selection: "#2e3c64",
    red: "#f7768e",
    green: "#9ece6a",
    yellow: "#e0af68",
    blue: "#7aa2f7",
    purple: "#9d7cd8",
    cyan: "#7dcfff",
    orange: "#ff9e64",
    gray: "#565f89",
    error: "#db4b4b",
    warning: "#e0af68",
    info: "#0db9d7",
    hint: "#1abc9c",
  };

  editor = {
    Normal: {
      fg: "colors.fg",
      bg: "colors.bg",
    },
    NormalFloat: {
      fg: "colors.fg",
      bg: "colors.bg_dark",
    },
    Cursor: {
      fg: "colors.bg",
      bg: "colors.fg",
    },
    CursorLine: {
      bg: "colors.bg_highlight",
    },
    CursorColumn: {
      bg: "colors.bg_highlight",
    },
    LineNr: {
      fg: "colors.fg_gutter",
    },
    CursorLineNr: {
      fg: "colors.fg_dark",
    },
    DiffAdd: {
      fg: "colors.green",
      bg: "colors.bg_highlight",
    },
    DiffChange: {
      fg: "colors.blue",
      bg: "colors.bg_highlight",
    },
    DiffDelete: {
      fg: "colors.red",
      bg: "colors.bg_highlight",
    },
    DiffText: {
      fg: "colors.blue",
      bg: "colors.bg_highlight",
    },
  };
  syntax = {
    Comment: {
      fg: "colors.gray",
      italic: true,
    },
    Constant: {
      fg: "colors.orange",
    },
    String: {
      fg: "colors.green",
    },
    Character: {
      fg: "colors.green",
    },
    Number: {
      fg: "colors.orange",
    },
    Boolean: {
      fg: "colors.orange",
    },
    Float: {
      fg: "colors.orange",
    },
    Function: {
      fg: "colors.blue",
    },
    Statement: {
      fg: "colors.purple",
    },
    Keyword: {
      fg: "colors.purple",
    },
    Type: {
      fg: "colors.yellow",
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
      fg: "colors.hint",
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
      sp: "colors.hint",
      undercurl: true,
    },
  };
  git = {
    GitSignsAdd: {
      fg: "colors.green",
    },
    GitSignsChange: {
      fg: "colors.blue",
    },
    GitSignsDelete: {
      fg: "colors.red",
    },
  };

  constructor() {
    makeAutoObservable(this);
  }

  updateColor(section: string, item: string, label: string, newValue: string) {
    console.log("update theme store", newValue);
    //this.themeModel[section][item][label] = `colors.${newValue}`;
    this[section][item][label] = `colors.${newValue}`;
  }
}

const themeModel = new ThemeModel();
export default themeModel;
