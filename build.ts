import * as ts from "typescript";

import { writeFileSync } from "fs";
import { resolve } from "path";

const path = require.resolve("typescript").replace(".js", ".d.ts");
const file = ts
  .createProgram([path], {})
  .getSourceFiles()
  .find(({ fileName }) => resolve(fileName) === path);

let output = "";
output += 'import * as ts from "typescript";\n';
output += `\nexport default function tsxgen(
  fn: Function,
  props: { [key: string]: any },
  ...children: any[]
) {
  return fn(props ?? {}, children);
}\n`;

output += `\nexport function render(node: ts.Node) {
  const file = ts.createSourceFile(
    "",
    "",
    ts.ScriptTarget.ESNext,
    false,
    ts.ScriptKind.TS
  );

  const printer = ts.createPrinter();
  return printer.printNode(ts.EmitHint.Unspecified, node, file);
}\n`;

function walk(node) {
  if (
    node.kind === ts.SyntaxKind.InterfaceDeclaration &&
    node.name.escapedText === "NodeFactory"
  ) {
    const names = new Set<string>();
    for (const member of node.members) {
      if (
        !member.name.escapedText.startsWith("create") ||
        names.has(member.name.escapedText)
      )
        continue;

      names.add(member.name.escapedText);

      output +=
        "\nexport function " + member.name.escapedText.slice("create".length);

      output += "(";
      if (member.parameters.length) {
        output += "props: { ";
        member.parameters.forEach((param, index) => {
          output += "\n\t //@ts-ignore";
          output += "\n\t" + param.name.escapedText + "?: ";
          output +=
            "Parameters<typeof ts.factory." + member.name.escapedText + ">";

          output += "[" + index + "]";
        });

        output += " \n}, children";
      }

      output += ") {";
      output += "\n\t //@ts-ignore";
      // output += "\n\tconsole.log(";
      output += "\n\treturn ts.factory." + member.name.escapedText + "(";

      if (member.parameters.length) {
        let usedChildren = false;
        member.parameters.forEach((param, index) => {
          output += "props." + param.name.escapedText;
          if (
            !usedChildren &&
            (index === member.parameters.length - 1 ||
              member.parameters[index + 1]?.questionToken)
          ) {
            usedChildren = true;
            output += " ?? ";

            if (param.type.type?.kind === ts.SyntaxKind.ArrayType)
              output += "children";
            else output += "children[0]";
          }

          if (index !== member.parameters.length - 1) output += ", ";
        });
      }

      output += ");";

      output += "\n}";
      output += "\n";
    }
  }

  node.forEachChild(walk);
}

walk(file);
writeFileSync("index.ts", output);