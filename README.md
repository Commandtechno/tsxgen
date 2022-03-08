# tsxgen

the most scuffed shit you've ever seen

anyways import what you want, you must import default as the jsxFactory option in your tsconfig, in my case, tsxgen

also import render if you want it to turn into actual code lol

````tsx
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
} from "./index";```
````

# how make code?

the code below makes a function named test that defines a variable named b of string type with the value of "a" then returns b

```tsx
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
```

output of above code

```ts
function test() {
  const b: string = "a";
  return b;
}
```

# how it work?

i dont fucking know, id ont know why i wrote this, help