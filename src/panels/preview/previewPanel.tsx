import { observer } from "mobx-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CODE_EXAMPLE from "../../models/codeExample";

import themeModel from "../../models/theme/themeModel";

import { sanitizeColorName } from "../../utils/utils";
import { info } from "console";

const PreviewPanel = () => {
  const backgroundColorName = sanitizeColorName(themeModel.editor.Normal.bg);
  const backgroundColor = themeModel.colors[backgroundColorName];

  const colorName = sanitizeColorName(themeModel.editor.Normal.fg);
  const color = themeModel.colors[colorName];

  const codeExample = CODE_EXAMPLE.trim()
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const syntaxHighlight = (code) => {
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
    const templateVarRegex = /\$\{([^}]+)\}/g; // Regex to match ${...}

    const colors = themeModel.colors;
    const stringColor = sanitizeColorName(themeModel.syntax.String.fg);
    const keywordColor = sanitizeColorName(themeModel.syntax.Keyword.fg);
    const typeColor = sanitizeColorName(themeModel.syntax.Type.fg);
    const numberColor = sanitizeColorName(themeModel.syntax.Number.fg);
    const constColor = sanitizeColorName(themeModel.syntax.Constant.fg);
    const functionColor = sanitizeColorName(themeModel.syntax.Function.fg);
    const statementColor = sanitizeColorName(themeModel.syntax.Statement.fg);
    const commentColor = sanitizeColorName(themeModel.syntax.Comment.fg);
    const templateString = sanitizeColorName(
      themeModel.syntax.TemplateStringPlaceholder.fg
    );
    const errorColor = sanitizeColorName(themeModel.lsp.DiagnosticError.fg);
    const hintColor = sanitizeColorName(themeModel.lsp.DiagnosticHint.fg);
    const infoColor = sanitizeColorName(themeModel.lsp.DiagnosticInfo.fg);
    const warningColor = sanitizeColorName(themeModel.lsp.DiagnosticWarn.fg);
    const cursorColor = sanitizeColorName(themeModel.editor.CursorLine.bg);

    const editedCode = code
      .replace(
        stringRegex,
        `<span style="color:${colors[stringColor]};">$1</span>`
      )
      .replace(
        keywordRegex,
        `<span style="color:${colors[keywordColor]};">$&</span>`
      )
      .replace(classRegex, (_, classWord, className) => {
        return `<span style="color:${colors[keywordColor]};">${classWord}</span> <span style="color:${colors[constColor]};">${className}</span>`;
      })
      .replace(
        numberRegex,
        `<span style="color:${colors[numberColor]};">$1</span>`
      )
      .replace(
        functionRegex,
        `<span style="color:${colors[functionColor]};">$&</span>`
      )
      .replace(
        paramRegex,
        `<span style="color:${colors[statementColor]};">$&</span>`
      )
      .replace(
        typeRegex,
        `{<span style="color:${colors[typeColor]};">$1</span>}`
      )
      .replace(commentRegex, (match) => {
        return `<span style="color:${colors[commentColor]};font-style:italic;">${match}</span>`;
      })
      .replace(blockCommentRegex, (match) => {
        return `<span style="color:${colors[commentColor]};font-style:italic;">${match}</span>`;
      })
      .replace(templateVarRegex, (_, inner) => {
        return `<span style="color:${colors[templateString]};">\$\{${inner}\}</span>`; // Color the content inside ${}
      })
      .replace(
        errorRegex,
        `<span style="color:${colors[errorColor]};">$&</span>`
      )
      .replace(hintRegex, `<span style="color:${colors[hintColor]};">$&</span>`)
      .replace(infoRegex, `<span style="color:${colors[infoColor]};">$&</span>`)
      .replace(
        warningRegex,
        `<span style="color:${colors[warningColor]};">$&</span>`
      );

    const lines = editedCode.split("\n"); // Split the code into lines
    const highlightedLines = lines.map((line, index) => {
      if (index === 20) {
        // Line 21 (0-based index)
        return `<span style="background-color:${colors[cursorColor]};">${line}</span>`; // Wrap line 21 in a span
      }
      return line; // Return unchanged line
    });

    return highlightedLines.join("\n"); // Join the lines
  };

  return (
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
            backgroundColor,
            color,
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
  );
};

export default observer(PreviewPanel);
