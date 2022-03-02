const { writeFileSync } = require("fs");
const { resolve } = require("path");
const ts = require("typescript");

const { ArgKeys } = require("./args");

const path = require.resolve("typescript").replace(".js", ".d.ts");
const file = ts
  .createProgram([path], {})
  .getSourceFiles()
  .find(({ fileName }) => resolve(fileName) === path);

const properties = new Set();

function walk(node) {
  if (
    node.kind === ts.SyntaxKind.InterfaceDeclaration &&
    node.name.escapedText === "NodeFactory"
  )
    return node.members.forEach(member => {
      properties.add(member.name.escapedText);
    });

  node.forEachChild(walk);
}

walk(file);

let output = "";
output += 'import { factory } from "typescript";\n';
output += 'import { Props } from "./props";\n';

for (const key in ts.factory) {
  if (key.startsWith("create") && properties.has(key)) {
    output += "\nexport function " + key.slice("create".length);
    output += "(";
    if (ArgKeys[key].length)
      output += "props: Props[" + JSON.stringify(key) + "]";

    output += ") {";
    output +=
      "\n\treturn factory." +
      key +
      "(" +
      ArgKeys[key].map(argKey => "props." + argKey).join(", ") +
      ");";

    output += "\n}";
    output += "\n";
  }
}

writeFileSync("index.ts", output);