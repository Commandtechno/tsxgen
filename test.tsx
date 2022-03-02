import * as ts from "typescript";
import {
  Block,
  FunctionDeclaration,
  StringLiteral,
  TypeReferenceNode,
  VariableDeclaration,
  VariableDeclarationList,
  VariableStatement
} from "./index";

function render(node: ts.Node) {
  const file = ts.createSourceFile(
    "",
    "",
    ts.ScriptTarget.ESNext,
    false,
    ts.ScriptKind.TS
  );

  const printer = ts.createPrinter();
  return printer.printNode(ts.EmitHint.Unspecified, node, file);
}

function createElement(
  fn: Function,
  props: { [key: string]: any },
  ...children: any[]
) {
  if (children.length) {
    if (children.length === 1) {
      children = children[0];
    }

    props ??= {};
    props.body ??= children;
    props.members ??= children;
    props.statements ??= children;
    props.declarations ??= children;
  }

  return fn(props);
}

console.log(
  render(
    <FunctionDeclaration name="getBalls">
      <Block>
        <VariableStatement>
          <VariableDeclarationList flags={ts.NodeFlags.Const}>
            <VariableDeclaration
              name="cock"
              type={<TypeReferenceNode typeName="string"></TypeReferenceNode>}
              initializer={<StringLiteral text="balls"></StringLiteral>}
            ></VariableDeclaration>
          </VariableDeclarationList>
        </VariableStatement>
      </Block>
    </FunctionDeclaration>
  )
);