import * as ts from "typescript";
import tsxgen, {
  render,
  Block,
  FunctionDeclaration,
  Identifier,
  ReturnStatement,
  StringLiteral,
  TypeReferenceNode,
  VariableDeclaration,
  VariableDeclarationList,
  VariableStatement
} from ".";

console.log(
  render(
    <FunctionDeclaration name="test">
      <Block>
        <VariableStatement>
          <VariableDeclarationList flags={ts.NodeFlags.Const}>
            <VariableDeclaration
              name="b"
              type={<TypeReferenceNode typeName="string"></TypeReferenceNode>}
              initializer={<StringLiteral text="a"></StringLiteral>}
            ></VariableDeclaration>
          </VariableDeclarationList>
        </VariableStatement>
        <ReturnStatement>
          <Identifier text="b"></Identifier>
        </ReturnStatement>
      </Block>
    </FunctionDeclaration>
  )
);