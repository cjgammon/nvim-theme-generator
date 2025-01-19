import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CODE_EXAMPLE from "../../models/codeExample";

import themeModel from "../../models/theme/themeModel";

import { sanitizeColorName } from "../../utils/utils";

const PreviewPanel = () => {
  console.log(themeModel);
  console.log(themeModel.editor);
  console.log(themeModel.editor.Normal);
  console.log(themeModel.editor.Normal.bg);

  console.log("hi", themeModel.editor.Normal.bg);
  const backgroundColorName = sanitizeColorName(themeModel.editor.Normal.bg);
  console.log("hi1", backgroundColorName);
  console.log("hi1a", themeModel.colors);
  const backgroundColor = themeModel.colors[backgroundColorName];
  console.log("hi2", backgroundColor);

  const colorName = sanitizeColorName(themeModel.editor.Normal.fg);
  const color = themeModel.colors[colorName];

  const codeExample = CODE_EXAMPLE.trim()
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const syntaxHighlight = (code) => {
    /*
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
      */
    return code;
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

export default PreviewPanel;
