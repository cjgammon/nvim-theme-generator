import { makeAutoObservable } from "mobx";

class ThemeModel {
  metadata = {
    name: "My Theme",
    author: "",
    description: "",
  };

  /*
  colors = {
    bg: "#1a1b26",
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
  */

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
    function: "#7aa2f7",
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
      fg: "colors.function",
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
      fg: "colors.function",
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
      ...this.statusline,
      ...this.spelling,
      ...this.selection,
      ...this.diff,
      ...this.search_selection,
      // Add any other groups you want to include
    };

    return groups;
  }

  export() {
    const colors = this.colors;
    const groups = {
      ...this.editor,
      ...this.syntax,
      ...this.lsp,
      ...this.git,
      // Add any other groups you want to include
    };

    const luaTheme = `
local M = {}

local colors = {
${Object.entries(colors)
  .map(([key, value]) => `  ${key} = "${value}",`)
  .join("\n")}
}

local groups = {
${Object.entries(groups)
  .map(([groupName, settings]) => {
    const fg = "fg" in settings ? `fg = ${settings.fg}` : "";
    const bg = "bg" in settings ? `bg = ${settings.bg}` : "";
    const sp = "sp" in settings ? `sp = ${settings.sp}` : "";
    const otherAttributes = Object.entries(settings)
      .filter(([key]) => !["fg", "bg", "sp"].includes(key))
      .map(([key, value]) => `${key} = ${value}`)
      .join(", ");

    const groupValues = [fg, bg, sp, otherAttributes]
      .filter((value) => {
        return value !== "";
      })
      .join(", ");
    return `  ${groupName} = { ${groupValues} },`;
  })
  .join("\n")}
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

    vim.defer_fn(function()
      vim.api.nvim_set_hl(0, "CursorLine", { bg = ${
        this.editor.CursorLine.bg
      } })
    end, 100)
end

return M
`;

    return luaTheme.trim();
  }
}

const themeModel = new ThemeModel();
export default themeModel;
