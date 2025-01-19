export default {
  metadata: {
    name: "Complete Neovim Theme Structure",
    version: "1.0",
    description:
      "Comprehensive structure for Neovim themes including all highlight groups and their options",
  },
  options: {
    colors: {
      description: "Common color options that can be referenced",
      properties: {
        format: ["hex", "rgb", "name"],
        examples: {
          hex: "#123456",
          rgb: [18, 52, 86],
          name: "Red",
        },
      },
    },
    attributes: {
      style: {
        bold: "boolean",
        italic: "boolean",
        underline: "boolean",
        undercurl: "boolean",
        strikethrough: "boolean",
        reverse: "boolean",
        standout: "boolean",
        nocombine: "boolean",
      },
      underline_style: {
        underlineline: "boolean",
        underdashed: "boolean",
        underdotted: "boolean",
        underdouble: "boolean",
        underwavy: "boolean",
      },
      colors: {
        fg: "color",
        bg: "color",
        sp: "color",
      },
      special: {
        blend: "number",
        default: "boolean",
        link: "string",
      },
    },
  },
  groups: {
    editor: {
      description: "Editor UI elements",
      groups: {
        Normal: {
          description: "Normal text",
          default: true,
          options: ["fg", "bg"],
        },
        NormalFloat: {
          description: "Normal text in floating windows",
          options: ["fg", "bg", "blend"],
        },
        Cursor: {
          description: "Character under the cursor",
          options: ["fg", "bg"],
        },
        CursorLine: {
          description: "Screen line that the cursor is in",
          options: ["bg", "bold"],
        },
        CursorColumn: {
          description: "Screen column that the cursor is in",
          options: ["bg"],
        },
        ColorColumn: {
          description: "Used for the columns set with 'colorcolumn'",
          options: ["bg"],
        },
        Conceal: {
          description: "Placeholder characters for concealed text",
          options: ["fg", "bg"],
        },
        Directory: {
          description: "Directory names in listings",
          options: ["fg", "bold"],
        },
        EndOfBuffer: {
          description: "Filler lines (~) after the end of the buffer",
          options: ["fg"],
        },
        ErrorMsg: {
          description: "Error messages on the command line",
          options: ["fg", "bg", "bold"],
        },
        VertSplit: {
          description: "Column separating vertical splits",
          options: ["fg", "bg"],
        },
        Folded: {
          description: "Line used for closed folds",
          options: ["fg", "bg"],
        },
        FoldColumn: {
          description: "Column showing fold indicators",
          options: ["fg", "bg"],
        },
        SignColumn: {
          description: "Column where signs are displayed",
          options: ["fg", "bg"],
        },
        LineNr: {
          description: "Line number",
          options: ["fg", "bg"],
        },
        CursorLineNr: {
          description: "Current line number",
          options: ["fg", "bg", "bold"],
        },
        MatchParen: {
          description: "Matching parentheses",
          options: ["fg", "bg", "bold"],
        },
        ModeMsg: {
          description: "Mode message (e.g., '-- INSERT --')",
          options: ["fg", "bold"],
        },
        MoreMsg: {
          description: "More-prompt",
          options: ["fg"],
        },
        NonText: {
          description: "Non-text characters",
          options: ["fg"],
        },
      },
    },
    search_selection: {
      description: "Search and selection highlighting",
      groups: {
        Search: {
          description: "Last search pattern",
          options: ["fg", "bg"],
        },
        IncSearch: {
          description: "Incremental search",
          options: ["fg", "bg"],
        },
        Visual: {
          description: "Visual mode selection",
          options: ["fg", "bg"],
        },
        VisualNOS: {
          description: "Visual mode selection (non-owning)",
          options: ["fg", "bg"],
        },
      },
    },
    diff: {
      description: "Diff mode highlighting",
      groups: {
        DiffAdd: {
          description: "Added line",
          options: ["fg", "bg"],
        },
        DiffChange: {
          description: "Changed line",
          options: ["fg", "bg"],
        },
        DiffDelete: {
          description: "Deleted line",
          options: ["fg", "bg"],
        },
        DiffText: {
          description: "Changed text within a changed line",
          options: ["fg", "bg", "bold"],
        },
      },
    },
    completion: {
      description: "Completion menu",
      groups: {
        Pmenu: {
          description: "Popup menu normal item",
          options: ["fg", "bg"],
        },
        PmenuSel: {
          description: "Popup menu selected item",
          options: ["fg", "bg"],
        },
        PmenuSbar: {
          description: "Popup menu scrollbar",
          options: ["bg"],
        },
        PmenuThumb: {
          description: "Popup menu scrollbar thumb",
          options: ["bg"],
        },
      },
    },
    statusline: {
      description: "Status line highlighting",
      groups: {
        StatusLine: {
          description: "Status line of current window",
          options: ["fg", "bg"],
        },
        StatusLineNC: {
          description: "Status lines of non-current windows",
          options: ["fg", "bg"],
        },
        WinBar: {
          description: "Window bar",
          options: ["fg", "bg"],
        },
        WinBarNC: {
          description: "Window bar in non-current windows",
          options: ["fg", "bg"],
        },
      },
    },
    syntax: {
      description: "Syntax highlighting groups",
      groups: {
        Comment: {
          description: "Any comment",
          options: ["fg", "italic"],
        },
        Constant: {
          description: "Any constant",
          options: ["fg"],
        },
        String: {
          description: "String constant",
          options: ["fg"],
        },
        Character: {
          description: "Character constant",
          options: ["fg"],
        },
        Number: {
          description: "Number constant",
          options: ["fg"],
        },
        Boolean: {
          description: "Boolean constant",
          options: ["fg"],
        },
        Float: {
          description: "Float constant",
          options: ["fg"],
        },
        Identifier: {
          description: "Variable name",
          options: ["fg"],
        },
        Function: {
          description: "Function name",
          options: ["fg", "bold"],
        },
        Statement: {
          description: "Any statement",
          options: ["fg"],
        },
        Conditional: {
          description: "if, then, else, etc.",
          options: ["fg"],
        },
        Repeat: {
          description: "for, do, while, etc.",
          options: ["fg"],
        },
        Label: {
          description: "case, default, etc.",
          options: ["fg"],
        },
        Operator: {
          description: "Operators",
          options: ["fg"],
        },
        Keyword: {
          description: "any other keyword",
          options: ["fg"],
        },
        Exception: {
          description: "try, catch, throw",
          options: ["fg"],
        },
        PreProc: {
          description: "Generic preprocessor",
          options: ["fg"],
        },
        Include: {
          description: "#include",
          options: ["fg"],
        },
        Define: {
          description: "#define",
          options: ["fg"],
        },
        Macro: {
          description: "Same as Define",
          options: ["fg"],
        },
        PreCondit: {
          description: "#if, #else, etc.",
          options: ["fg"],
        },
        Type: {
          description: "int, long, char, etc.",
          options: ["fg"],
        },
        StorageClass: {
          description: "static, register, etc.",
          options: ["fg"],
        },
        Structure: {
          description: "struct, union, enum",
          options: ["fg"],
        },
        Typedef: {
          description: "A typedef",
          options: ["fg"],
        },
        Special: {
          description: "Special symbol",
          options: ["fg"],
        },
        SpecialChar: {
          description: "Special character",
          options: ["fg"],
        },
        Tag: {
          description: "you can use CTRL-] on this",
          options: ["fg"],
        },
        Delimiter: {
          description: "Character that needs attention",
          options: ["fg"],
        },
        SpecialComment: {
          description: "Special things inside a comment",
          options: ["fg", "italic"],
        },
        Debug: {
          description: "Debugging statements",
          options: ["fg"],
        },
      },
    },
    spelling: {
      description: "Spell checking",
      groups: {
        SpellBad: {
          description: "Word not recognized",
          options: ["fg", "sp", "undercurl"],
        },
        SpellCap: {
          description: "Word that should start with capital",
          options: ["fg", "sp", "undercurl"],
        },
        SpellLocal: {
          description: "Word from other region",
          options: ["fg", "sp", "undercurl"],
        },
        SpellRare: {
          description: "Rare word",
          options: ["fg", "sp", "undercurl"],
        },
      },
    },
    lsp: {
      description: "LSP highlighting",
      groups: {
        DiagnosticError: {
          description: "Error diagnostic",
          options: ["fg"],
        },
        DiagnosticWarn: {
          description: "Warning diagnostic",
          options: ["fg"],
        },
        DiagnosticInfo: {
          description: "Information diagnostic",
          options: ["fg"],
        },
        DiagnosticHint: {
          description: "Hint diagnostic",
          options: ["fg"],
        },
        DiagnosticUnderlineError: {
          description: "Error underline",
          options: ["sp", "undercurl"],
        },
        DiagnosticUnderlineWarn: {
          description: "Warning underline",
          options: ["sp", "undercurl"],
        },
        DiagnosticUnderlineInfo: {
          description: "Information underline",
          options: ["sp", "undercurl"],
        },
        DiagnosticUnderlineHint: {
          description: "Hint underline",
          options: ["sp", "undercurl"],
        },
        DiagnosticVirtualTextError: {
          description: "Virtual text for errors",
          options: ["fg", "bg"],
        },
        DiagnosticVirtualTextWarn: {
          description: "Virtual text for warnings",
          options: ["fg", "bg"],
        },
        DiagnosticVirtualTextInfo: {
          description: "Virtual text for information",
          options: ["fg", "bg"],
        },
        DiagnosticVirtualTextHint: {
          description: "Virtual text for hints",
          options: ["fg", "bg"],
        },
      },
    },
    git: {
      description: "Git integration",
      groups: {
        GitSignsAdd: {
          description: "Git diff add",
          options: ["fg"],
        },
        GitSignsChange: {
          description: "Git diff change",
          options: ["fg"],
        },
        GitSignsDelete: {
          description: "Git diff delete",
          options: ["fg"],
        },
      },
    },
  },
};
