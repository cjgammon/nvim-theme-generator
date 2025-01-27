export const exportVSCodeTheme = (name, colors) => {
  const vscodeTheme = {
    name,
    colors: {
      "activityBar.background": colors.background_darker,
      "activityBar.foreground": colors.foreground,
      "activityBar.inactiveForeground": colors.foreground_subtle,
      "activityBarBadge.background": colors.func,
      "activityBarBadge.foreground": colors.background,
      "editor.background": colors.background,
      "editor.foreground": colors.foreground,
      "editorCursor.foreground": colors.foreground,
      "editor.lineHighlightBackground": colors.background_highlight,
      "editor.selectionBackground": colors.selection_bg,
      "editorError.foreground": colors.error,
      "editorWarning.foreground": colors.warning,
      "editorInfo.foreground": colors.info,
      "editorHint.foreground": colors.success,
      "editorGutter.addedBackground": colors.git_added,
      "editorGutter.modifiedBackground": colors.git_modified,
      "editorGutter.deletedBackground": colors.git_deleted,
      "sideBar.background": colors.background_darker,
      "sideBar.foreground": colors.foreground,
      "statusBar.background": colors.background_darker,
      "statusBar.foreground": colors.foreground,
      "statusBarItem.hoverBackground": colors.foreground_subtle,
      "tab.activeBackground": colors.background,
      "tab.activeForeground": colors.foreground,
      "tab.inactiveBackground": colors.background_darker,
      "tab.inactiveForeground": colors.foreground_subtle,
      "titleBar.activeBackground": colors.background_darker,
      "titleBar.activeForeground": colors.foreground,
      "titleBar.inactiveBackground": colors.background_darker,
      "titleBar.inactiveForeground": colors.foreground_subtle,
      "input.background": colors.background,
      "input.foreground": colors.foreground,
      "input.border": colors.foreground_subtle,
      "input.placeholderForeground": colors.foreground_muted,
      "list.activeSelectionBackground": colors.background_highlight,
      "list.activeSelectionForeground": colors.foreground,
      "list.hoverBackground": colors.background_highlight,
      "list.inactiveSelectionBackground": colors.background_highlight,
      "list.inactiveSelectionForeground": colors.foreground,
      "menu.background": colors.background_darker,
      "menu.foreground": colors.foreground,
      "menu.selectionBackground": colors.background_highlight,
      "menu.selectionForeground": colors.foreground,
      "widget.border": colors.foreground_subtle,
      "widget.background": colors.background_darker,
      "widget.foreground": colors.foreground,
    },
    tokenColors: [
      {
        scope: ["comment"],
        settings: {
          foreground: colors.comment,
          fontStyle: "italic",
        },
      },
      {
        scope: ["constant", "constant.numeric"],
        settings: {
          foreground: colors.constant,
        },
      },
      {
        scope: ["string"],
        settings: {
          foreground: colors.string,
        },
      },
      {
        scope: ["keyword"],
        settings: {
          foreground: colors.keyword,
        },
      },
      {
        scope: ["storage.type", "storage.modifier"],
        settings: {
          foreground: colors.type,
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: colors.func,
        },
      },
      {
        scope: ["variable"],
        settings: {
          foreground: colors.variable,
        },
      },
      {
        scope: ["entity.name.type", "support.type"],
        settings: {
          foreground: colors.type,
        },
      },
      {
        scope: ["entity.name.tag"],
        settings: {
          foreground: colors.keyword,
        },
      },
      {
        scope: ["entity.other.attribute-name"],
        settings: {
          foreground: colors.variable,
        },
      },
      {
        scope: ["punctuation.definition.comment"],
        settings: {
          foreground: colors.comment,
        },
      },
      {
        scope: ["punctuation.definition.string"],
        settings: {
          foreground: colors.string,
        },
      },
      {
        scope: ["punctuation.definition.variable"],
        settings: {
          foreground: colors.variable,
        },
      },
      {
        scope: ["punctuation.definition.keyword"],
        settings: {
          foreground: colors.keyword,
        },
      },
      {
        scope: ["punctuation.definition.entity"],
        settings: {
          foreground: colors.type,
        },
      },
      {
        scope: ["meta.embedded"],
        settings: {
          foreground: colors.foreground,
        },
      },
      {
        scope: ["emphasis"],
        settings: {
          fontStyle: "italic",
        },
      },
      {
        scope: ["strong"],
        settings: {
          fontStyle: "bold",
        },
      },
      {
        scope: ["invalid"],
        settings: {
          foreground: colors.error,
        },
      },
      {
        scope: ["markup.underline"],
        settings: {
          fontStyle: "underline",
        },
      },
      {
        scope: ["markup.bold"],
        settings: {
          fontStyle: "bold",
        },
      },
      {
        scope: ["markup.heading"],
        settings: {
          fontStyle: "bold",
        },
      },
      {
        scope: ["markup.italic"],
        settings: {
          fontStyle: "italic",
        },
      },
      {
        scope: ["markup.strikethrough"],
        settings: {
          fontStyle: "strikethrough",
        },
      },
      {
        scope: ["markup.inserted"],
        settings: {
          foreground: colors.git_added,
        },
      },
      {
        scope: ["markup.deleted"],
        settings: {
          foreground: colors.git_deleted,
        },
      },
      {
        scope: ["markup.changed"],
        settings: {
          foreground: colors.git_modified,
        },
      },
    ],
  };

  return JSON.stringify(vscodeTheme, null, 2);
};
