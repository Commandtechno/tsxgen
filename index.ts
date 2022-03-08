import * as ts from "typescript";

export default function tsxgen(
  fn: Function,
  props: { [key: string]: any },
  ...children: any[]
) {
  return fn(props ?? {}, children);
}

export function render(node: ts.Node) {
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

export function NodeArray(props: { 
	 //@ts-ignore
	elements?: Parameters<typeof ts.factory.createNodeArray>[0]
	 //@ts-ignore
	hasTrailingComma?: Parameters<typeof ts.factory.createNodeArray>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createNodeArray(props.elements ?? children, props.hasTrailingComma);
}

export function NumericLiteral(props: { 
	 //@ts-ignore
	value?: Parameters<typeof ts.factory.createNumericLiteral>[0]
	 //@ts-ignore
	numericLiteralFlags?: Parameters<typeof ts.factory.createNumericLiteral>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createNumericLiteral(props.value ?? children[0], props.numericLiteralFlags);
}

export function BigIntLiteral(props: { 
	 //@ts-ignore
	value?: Parameters<typeof ts.factory.createBigIntLiteral>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createBigIntLiteral(props.value ?? children[0]);
}

export function StringLiteral(props: { 
	 //@ts-ignore
	text?: Parameters<typeof ts.factory.createStringLiteral>[0]
	 //@ts-ignore
	isSingleQuote?: Parameters<typeof ts.factory.createStringLiteral>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createStringLiteral(props.text ?? children[0], props.isSingleQuote);
}

export function StringLiteralFromNode(props: { 
	 //@ts-ignore
	sourceNode?: Parameters<typeof ts.factory.createStringLiteralFromNode>[0]
	 //@ts-ignore
	isSingleQuote?: Parameters<typeof ts.factory.createStringLiteralFromNode>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createStringLiteralFromNode(props.sourceNode ?? children[0], props.isSingleQuote);
}

export function RegularExpressionLiteral(props: { 
	 //@ts-ignore
	text?: Parameters<typeof ts.factory.createRegularExpressionLiteral>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createRegularExpressionLiteral(props.text ?? children[0]);
}

export function Identifier(props: { 
	 //@ts-ignore
	text?: Parameters<typeof ts.factory.createIdentifier>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createIdentifier(props.text ?? children[0]);
}

export function TempVariable(props: { 
	 //@ts-ignore
	recordTempVariable?: Parameters<typeof ts.factory.createTempVariable>[0]
	 //@ts-ignore
	reservedInNestedScopes?: Parameters<typeof ts.factory.createTempVariable>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createTempVariable(props.recordTempVariable ?? children[0], props.reservedInNestedScopes);
}

export function LoopVariable(props: { 
	 //@ts-ignore
	reservedInNestedScopes?: Parameters<typeof ts.factory.createLoopVariable>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createLoopVariable(props.reservedInNestedScopes ?? children[0]);
}

export function UniqueName(props: { 
	 //@ts-ignore
	text?: Parameters<typeof ts.factory.createUniqueName>[0]
	 //@ts-ignore
	flags?: Parameters<typeof ts.factory.createUniqueName>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createUniqueName(props.text ?? children[0], props.flags);
}

export function PrivateIdentifier(props: { 
	 //@ts-ignore
	text?: Parameters<typeof ts.factory.createPrivateIdentifier>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createPrivateIdentifier(props.text ?? children[0]);
}

export function Token(props: { 
	 //@ts-ignore
	token?: Parameters<typeof ts.factory.createToken>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createToken(props.token ?? children[0]);
}

export function Super() {
	 //@ts-ignore
	return ts.factory.createSuper();
}

export function This() {
	 //@ts-ignore
	return ts.factory.createThis();
}

export function Null() {
	 //@ts-ignore
	return ts.factory.createNull();
}

export function True() {
	 //@ts-ignore
	return ts.factory.createTrue();
}

export function False() {
	 //@ts-ignore
	return ts.factory.createFalse();
}

export function Modifier(props: { 
	 //@ts-ignore
	kind?: Parameters<typeof ts.factory.createModifier>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createModifier(props.kind ?? children[0]);
}

export function ModifiersFromModifierFlags(props: { 
	 //@ts-ignore
	flags?: Parameters<typeof ts.factory.createModifiersFromModifierFlags>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createModifiersFromModifierFlags(props.flags ?? children[0]);
}

export function QualifiedName(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createQualifiedName>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createQualifiedName>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createQualifiedName(props.left, props.right ?? children[0]);
}

export function ComputedPropertyName(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createComputedPropertyName>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createComputedPropertyName(props.expression ?? children[0]);
}

export function TypeParameterDeclaration(props: { 
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createTypeParameterDeclaration>[0]
	 //@ts-ignore
	constraint?: Parameters<typeof ts.factory.createTypeParameterDeclaration>[1]
	 //@ts-ignore
	defaultType?: Parameters<typeof ts.factory.createTypeParameterDeclaration>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createTypeParameterDeclaration(props.name ?? children[0], props.constraint, props.defaultType);
}

export function ParameterDeclaration(props: { 
	 //@ts-ignore
	decorators?: Parameters<typeof ts.factory.createParameterDeclaration>[0]
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createParameterDeclaration>[1]
	 //@ts-ignore
	dotDotDotToken?: Parameters<typeof ts.factory.createParameterDeclaration>[2]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createParameterDeclaration>[3]
	 //@ts-ignore
	questionToken?: Parameters<typeof ts.factory.createParameterDeclaration>[4]
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createParameterDeclaration>[5]
	 //@ts-ignore
	initializer?: Parameters<typeof ts.factory.createParameterDeclaration>[6] 
}, children) {
	 //@ts-ignore
	return ts.factory.createParameterDeclaration(props.decorators, props.modifiers, props.dotDotDotToken, props.name ?? children[0], props.questionToken, props.type, props.initializer);
}

export function Decorator(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createDecorator>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createDecorator(props.expression ?? children[0]);
}

export function PropertySignature(props: { 
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createPropertySignature>[0]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createPropertySignature>[1]
	 //@ts-ignore
	questionToken?: Parameters<typeof ts.factory.createPropertySignature>[2]
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createPropertySignature>[3] 
}, children) {
	 //@ts-ignore
	return ts.factory.createPropertySignature(props.modifiers, props.name, props.questionToken, props.type ?? children[0]);
}

export function PropertyDeclaration(props: { 
	 //@ts-ignore
	decorators?: Parameters<typeof ts.factory.createPropertyDeclaration>[0]
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createPropertyDeclaration>[1]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createPropertyDeclaration>[2]
	 //@ts-ignore
	questionOrExclamationToken?: Parameters<typeof ts.factory.createPropertyDeclaration>[3]
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createPropertyDeclaration>[4]
	 //@ts-ignore
	initializer?: Parameters<typeof ts.factory.createPropertyDeclaration>[5] 
}, children) {
	 //@ts-ignore
	return ts.factory.createPropertyDeclaration(props.decorators, props.modifiers, props.name, props.questionOrExclamationToken, props.type, props.initializer ?? children[0]);
}

export function MethodSignature(props: { 
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createMethodSignature>[0]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createMethodSignature>[1]
	 //@ts-ignore
	questionToken?: Parameters<typeof ts.factory.createMethodSignature>[2]
	 //@ts-ignore
	typeParameters?: Parameters<typeof ts.factory.createMethodSignature>[3]
	 //@ts-ignore
	parameters?: Parameters<typeof ts.factory.createMethodSignature>[4]
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createMethodSignature>[5] 
}, children) {
	 //@ts-ignore
	return ts.factory.createMethodSignature(props.modifiers, props.name, props.questionToken, props.typeParameters, props.parameters, props.type ?? children[0]);
}

export function MethodDeclaration(props: { 
	 //@ts-ignore
	decorators?: Parameters<typeof ts.factory.createMethodDeclaration>[0]
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createMethodDeclaration>[1]
	 //@ts-ignore
	asteriskToken?: Parameters<typeof ts.factory.createMethodDeclaration>[2]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createMethodDeclaration>[3]
	 //@ts-ignore
	questionToken?: Parameters<typeof ts.factory.createMethodDeclaration>[4]
	 //@ts-ignore
	typeParameters?: Parameters<typeof ts.factory.createMethodDeclaration>[5]
	 //@ts-ignore
	parameters?: Parameters<typeof ts.factory.createMethodDeclaration>[6]
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createMethodDeclaration>[7]
	 //@ts-ignore
	body?: Parameters<typeof ts.factory.createMethodDeclaration>[8] 
}, children) {
	 //@ts-ignore
	return ts.factory.createMethodDeclaration(props.decorators, props.modifiers, props.asteriskToken, props.name, props.questionToken, props.typeParameters, props.parameters, props.type, props.body ?? children[0]);
}

export function ConstructorDeclaration(props: { 
	 //@ts-ignore
	decorators?: Parameters<typeof ts.factory.createConstructorDeclaration>[0]
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createConstructorDeclaration>[1]
	 //@ts-ignore
	parameters?: Parameters<typeof ts.factory.createConstructorDeclaration>[2]
	 //@ts-ignore
	body?: Parameters<typeof ts.factory.createConstructorDeclaration>[3] 
}, children) {
	 //@ts-ignore
	return ts.factory.createConstructorDeclaration(props.decorators, props.modifiers, props.parameters, props.body ?? children[0]);
}

export function GetAccessorDeclaration(props: { 
	 //@ts-ignore
	decorators?: Parameters<typeof ts.factory.createGetAccessorDeclaration>[0]
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createGetAccessorDeclaration>[1]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createGetAccessorDeclaration>[2]
	 //@ts-ignore
	parameters?: Parameters<typeof ts.factory.createGetAccessorDeclaration>[3]
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createGetAccessorDeclaration>[4]
	 //@ts-ignore
	body?: Parameters<typeof ts.factory.createGetAccessorDeclaration>[5] 
}, children) {
	 //@ts-ignore
	return ts.factory.createGetAccessorDeclaration(props.decorators, props.modifiers, props.name, props.parameters, props.type, props.body ?? children[0]);
}

export function SetAccessorDeclaration(props: { 
	 //@ts-ignore
	decorators?: Parameters<typeof ts.factory.createSetAccessorDeclaration>[0]
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createSetAccessorDeclaration>[1]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createSetAccessorDeclaration>[2]
	 //@ts-ignore
	parameters?: Parameters<typeof ts.factory.createSetAccessorDeclaration>[3]
	 //@ts-ignore
	body?: Parameters<typeof ts.factory.createSetAccessorDeclaration>[4] 
}, children) {
	 //@ts-ignore
	return ts.factory.createSetAccessorDeclaration(props.decorators, props.modifiers, props.name, props.parameters, props.body ?? children[0]);
}

export function CallSignature(props: { 
	 //@ts-ignore
	typeParameters?: Parameters<typeof ts.factory.createCallSignature>[0]
	 //@ts-ignore
	parameters?: Parameters<typeof ts.factory.createCallSignature>[1]
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createCallSignature>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createCallSignature(props.typeParameters, props.parameters, props.type ?? children[0]);
}

export function ConstructSignature(props: { 
	 //@ts-ignore
	typeParameters?: Parameters<typeof ts.factory.createConstructSignature>[0]
	 //@ts-ignore
	parameters?: Parameters<typeof ts.factory.createConstructSignature>[1]
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createConstructSignature>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createConstructSignature(props.typeParameters, props.parameters, props.type ?? children[0]);
}

export function IndexSignature(props: { 
	 //@ts-ignore
	decorators?: Parameters<typeof ts.factory.createIndexSignature>[0]
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createIndexSignature>[1]
	 //@ts-ignore
	parameters?: Parameters<typeof ts.factory.createIndexSignature>[2]
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createIndexSignature>[3] 
}, children) {
	 //@ts-ignore
	return ts.factory.createIndexSignature(props.decorators, props.modifiers, props.parameters, props.type ?? children[0]);
}

export function TemplateLiteralTypeSpan(props: { 
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createTemplateLiteralTypeSpan>[0]
	 //@ts-ignore
	literal?: Parameters<typeof ts.factory.createTemplateLiteralTypeSpan>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createTemplateLiteralTypeSpan(props.type, props.literal ?? children[0]);
}

export function ClassStaticBlockDeclaration(props: { 
	 //@ts-ignore
	decorators?: Parameters<typeof ts.factory.createClassStaticBlockDeclaration>[0]
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createClassStaticBlockDeclaration>[1]
	 //@ts-ignore
	body?: Parameters<typeof ts.factory.createClassStaticBlockDeclaration>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createClassStaticBlockDeclaration(props.decorators, props.modifiers, props.body ?? children[0]);
}

export function KeywordTypeNode(props: { 
	 //@ts-ignore
	kind?: Parameters<typeof ts.factory.createKeywordTypeNode>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createKeywordTypeNode(props.kind ?? children[0]);
}

export function TypePredicateNode(props: { 
	 //@ts-ignore
	assertsModifier?: Parameters<typeof ts.factory.createTypePredicateNode>[0]
	 //@ts-ignore
	parameterName?: Parameters<typeof ts.factory.createTypePredicateNode>[1]
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createTypePredicateNode>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createTypePredicateNode(props.assertsModifier, props.parameterName, props.type ?? children[0]);
}

export function TypeReferenceNode(props: { 
	 //@ts-ignore
	typeName?: Parameters<typeof ts.factory.createTypeReferenceNode>[0]
	 //@ts-ignore
	typeArguments?: Parameters<typeof ts.factory.createTypeReferenceNode>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createTypeReferenceNode(props.typeName ?? children[0], props.typeArguments);
}

export function FunctionTypeNode(props: { 
	 //@ts-ignore
	typeParameters?: Parameters<typeof ts.factory.createFunctionTypeNode>[0]
	 //@ts-ignore
	parameters?: Parameters<typeof ts.factory.createFunctionTypeNode>[1]
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createFunctionTypeNode>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createFunctionTypeNode(props.typeParameters, props.parameters, props.type ?? children[0]);
}

export function ConstructorTypeNode(props: { 
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createConstructorTypeNode>[0]
	 //@ts-ignore
	typeParameters?: Parameters<typeof ts.factory.createConstructorTypeNode>[1]
	 //@ts-ignore
	parameters?: Parameters<typeof ts.factory.createConstructorTypeNode>[2]
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createConstructorTypeNode>[3] 
}, children) {
	 //@ts-ignore
	return ts.factory.createConstructorTypeNode(props.modifiers, props.typeParameters, props.parameters, props.type ?? children[0]);
}

export function TypeQueryNode(props: { 
	 //@ts-ignore
	exprName?: Parameters<typeof ts.factory.createTypeQueryNode>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createTypeQueryNode(props.exprName ?? children[0]);
}

export function TypeLiteralNode(props: { 
	 //@ts-ignore
	members?: Parameters<typeof ts.factory.createTypeLiteralNode>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createTypeLiteralNode(props.members ?? children[0]);
}

export function ArrayTypeNode(props: { 
	 //@ts-ignore
	elementType?: Parameters<typeof ts.factory.createArrayTypeNode>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createArrayTypeNode(props.elementType ?? children[0]);
}

export function TupleTypeNode(props: { 
	 //@ts-ignore
	elements?: Parameters<typeof ts.factory.createTupleTypeNode>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createTupleTypeNode(props.elements ?? children);
}

export function NamedTupleMember(props: { 
	 //@ts-ignore
	dotDotDotToken?: Parameters<typeof ts.factory.createNamedTupleMember>[0]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createNamedTupleMember>[1]
	 //@ts-ignore
	questionToken?: Parameters<typeof ts.factory.createNamedTupleMember>[2]
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createNamedTupleMember>[3] 
}, children) {
	 //@ts-ignore
	return ts.factory.createNamedTupleMember(props.dotDotDotToken, props.name, props.questionToken, props.type ?? children[0]);
}

export function OptionalTypeNode(props: { 
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createOptionalTypeNode>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createOptionalTypeNode(props.type ?? children[0]);
}

export function RestTypeNode(props: { 
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createRestTypeNode>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createRestTypeNode(props.type ?? children[0]);
}

export function UnionTypeNode(props: { 
	 //@ts-ignore
	types?: Parameters<typeof ts.factory.createUnionTypeNode>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createUnionTypeNode(props.types ?? children);
}

export function IntersectionTypeNode(props: { 
	 //@ts-ignore
	types?: Parameters<typeof ts.factory.createIntersectionTypeNode>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createIntersectionTypeNode(props.types ?? children);
}

export function ConditionalTypeNode(props: { 
	 //@ts-ignore
	checkType?: Parameters<typeof ts.factory.createConditionalTypeNode>[0]
	 //@ts-ignore
	extendsType?: Parameters<typeof ts.factory.createConditionalTypeNode>[1]
	 //@ts-ignore
	trueType?: Parameters<typeof ts.factory.createConditionalTypeNode>[2]
	 //@ts-ignore
	falseType?: Parameters<typeof ts.factory.createConditionalTypeNode>[3] 
}, children) {
	 //@ts-ignore
	return ts.factory.createConditionalTypeNode(props.checkType, props.extendsType, props.trueType, props.falseType ?? children[0]);
}

export function InferTypeNode(props: { 
	 //@ts-ignore
	typeParameter?: Parameters<typeof ts.factory.createInferTypeNode>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createInferTypeNode(props.typeParameter ?? children[0]);
}

export function ImportTypeNode(props: { 
	 //@ts-ignore
	argument?: Parameters<typeof ts.factory.createImportTypeNode>[0]
	 //@ts-ignore
	qualifier?: Parameters<typeof ts.factory.createImportTypeNode>[1]
	 //@ts-ignore
	typeArguments?: Parameters<typeof ts.factory.createImportTypeNode>[2]
	 //@ts-ignore
	isTypeOf?: Parameters<typeof ts.factory.createImportTypeNode>[3] 
}, children) {
	 //@ts-ignore
	return ts.factory.createImportTypeNode(props.argument ?? children[0], props.qualifier, props.typeArguments, props.isTypeOf);
}

export function ParenthesizedType(props: { 
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createParenthesizedType>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createParenthesizedType(props.type ?? children[0]);
}

export function ThisTypeNode() {
	 //@ts-ignore
	return ts.factory.createThisTypeNode();
}

export function TypeOperatorNode(props: { 
	 //@ts-ignore
	operator?: Parameters<typeof ts.factory.createTypeOperatorNode>[0]
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createTypeOperatorNode>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createTypeOperatorNode(props.operator, props.type ?? children[0]);
}

export function IndexedAccessTypeNode(props: { 
	 //@ts-ignore
	objectType?: Parameters<typeof ts.factory.createIndexedAccessTypeNode>[0]
	 //@ts-ignore
	indexType?: Parameters<typeof ts.factory.createIndexedAccessTypeNode>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createIndexedAccessTypeNode(props.objectType, props.indexType ?? children[0]);
}

export function MappedTypeNode(props: { 
	 //@ts-ignore
	readonlyToken?: Parameters<typeof ts.factory.createMappedTypeNode>[0]
	 //@ts-ignore
	typeParameter?: Parameters<typeof ts.factory.createMappedTypeNode>[1]
	 //@ts-ignore
	nameType?: Parameters<typeof ts.factory.createMappedTypeNode>[2]
	 //@ts-ignore
	questionToken?: Parameters<typeof ts.factory.createMappedTypeNode>[3]
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createMappedTypeNode>[4]
	 //@ts-ignore
	members?: Parameters<typeof ts.factory.createMappedTypeNode>[5] 
}, children) {
	 //@ts-ignore
	return ts.factory.createMappedTypeNode(props.readonlyToken, props.typeParameter, props.nameType, props.questionToken, props.type, props.members ?? children[0]);
}

export function LiteralTypeNode(props: { 
	 //@ts-ignore
	literal?: Parameters<typeof ts.factory.createLiteralTypeNode>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createLiteralTypeNode(props.literal ?? children[0]);
}

export function TemplateLiteralType(props: { 
	 //@ts-ignore
	head?: Parameters<typeof ts.factory.createTemplateLiteralType>[0]
	 //@ts-ignore
	templateSpans?: Parameters<typeof ts.factory.createTemplateLiteralType>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createTemplateLiteralType(props.head, props.templateSpans ?? children);
}

export function ObjectBindingPattern(props: { 
	 //@ts-ignore
	elements?: Parameters<typeof ts.factory.createObjectBindingPattern>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createObjectBindingPattern(props.elements ?? children);
}

export function ArrayBindingPattern(props: { 
	 //@ts-ignore
	elements?: Parameters<typeof ts.factory.createArrayBindingPattern>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createArrayBindingPattern(props.elements ?? children);
}

export function BindingElement(props: { 
	 //@ts-ignore
	dotDotDotToken?: Parameters<typeof ts.factory.createBindingElement>[0]
	 //@ts-ignore
	propertyName?: Parameters<typeof ts.factory.createBindingElement>[1]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createBindingElement>[2]
	 //@ts-ignore
	initializer?: Parameters<typeof ts.factory.createBindingElement>[3] 
}, children) {
	 //@ts-ignore
	return ts.factory.createBindingElement(props.dotDotDotToken, props.propertyName, props.name ?? children[0], props.initializer);
}

export function ArrayLiteralExpression(props: { 
	 //@ts-ignore
	elements?: Parameters<typeof ts.factory.createArrayLiteralExpression>[0]
	 //@ts-ignore
	multiLine?: Parameters<typeof ts.factory.createArrayLiteralExpression>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createArrayLiteralExpression(props.elements ?? children, props.multiLine);
}

export function ObjectLiteralExpression(props: { 
	 //@ts-ignore
	properties?: Parameters<typeof ts.factory.createObjectLiteralExpression>[0]
	 //@ts-ignore
	multiLine?: Parameters<typeof ts.factory.createObjectLiteralExpression>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createObjectLiteralExpression(props.properties ?? children, props.multiLine);
}

export function PropertyAccessExpression(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createPropertyAccessExpression>[0]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createPropertyAccessExpression>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createPropertyAccessExpression(props.expression, props.name ?? children[0]);
}

export function PropertyAccessChain(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createPropertyAccessChain>[0]
	 //@ts-ignore
	questionDotToken?: Parameters<typeof ts.factory.createPropertyAccessChain>[1]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createPropertyAccessChain>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createPropertyAccessChain(props.expression, props.questionDotToken, props.name ?? children[0]);
}

export function ElementAccessExpression(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createElementAccessExpression>[0]
	 //@ts-ignore
	index?: Parameters<typeof ts.factory.createElementAccessExpression>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createElementAccessExpression(props.expression, props.index ?? children[0]);
}

export function ElementAccessChain(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createElementAccessChain>[0]
	 //@ts-ignore
	questionDotToken?: Parameters<typeof ts.factory.createElementAccessChain>[1]
	 //@ts-ignore
	index?: Parameters<typeof ts.factory.createElementAccessChain>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createElementAccessChain(props.expression, props.questionDotToken, props.index ?? children[0]);
}

export function CallExpression(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createCallExpression>[0]
	 //@ts-ignore
	typeArguments?: Parameters<typeof ts.factory.createCallExpression>[1]
	 //@ts-ignore
	argumentsArray?: Parameters<typeof ts.factory.createCallExpression>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createCallExpression(props.expression, props.typeArguments, props.argumentsArray ?? children[0]);
}

export function CallChain(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createCallChain>[0]
	 //@ts-ignore
	questionDotToken?: Parameters<typeof ts.factory.createCallChain>[1]
	 //@ts-ignore
	typeArguments?: Parameters<typeof ts.factory.createCallChain>[2]
	 //@ts-ignore
	argumentsArray?: Parameters<typeof ts.factory.createCallChain>[3] 
}, children) {
	 //@ts-ignore
	return ts.factory.createCallChain(props.expression, props.questionDotToken, props.typeArguments, props.argumentsArray ?? children[0]);
}

export function NewExpression(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createNewExpression>[0]
	 //@ts-ignore
	typeArguments?: Parameters<typeof ts.factory.createNewExpression>[1]
	 //@ts-ignore
	argumentsArray?: Parameters<typeof ts.factory.createNewExpression>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createNewExpression(props.expression, props.typeArguments, props.argumentsArray ?? children[0]);
}

export function TaggedTemplateExpression(props: { 
	 //@ts-ignore
	tag?: Parameters<typeof ts.factory.createTaggedTemplateExpression>[0]
	 //@ts-ignore
	typeArguments?: Parameters<typeof ts.factory.createTaggedTemplateExpression>[1]
	 //@ts-ignore
	template?: Parameters<typeof ts.factory.createTaggedTemplateExpression>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createTaggedTemplateExpression(props.tag, props.typeArguments, props.template ?? children[0]);
}

export function TypeAssertion(props: { 
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createTypeAssertion>[0]
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createTypeAssertion>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createTypeAssertion(props.type, props.expression ?? children[0]);
}

export function ParenthesizedExpression(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createParenthesizedExpression>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createParenthesizedExpression(props.expression ?? children[0]);
}

export function FunctionExpression(props: { 
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createFunctionExpression>[0]
	 //@ts-ignore
	asteriskToken?: Parameters<typeof ts.factory.createFunctionExpression>[1]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createFunctionExpression>[2]
	 //@ts-ignore
	typeParameters?: Parameters<typeof ts.factory.createFunctionExpression>[3]
	 //@ts-ignore
	parameters?: Parameters<typeof ts.factory.createFunctionExpression>[4]
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createFunctionExpression>[5]
	 //@ts-ignore
	body?: Parameters<typeof ts.factory.createFunctionExpression>[6] 
}, children) {
	 //@ts-ignore
	return ts.factory.createFunctionExpression(props.modifiers, props.asteriskToken, props.name, props.typeParameters, props.parameters, props.type, props.body ?? children[0]);
}

export function ArrowFunction(props: { 
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createArrowFunction>[0]
	 //@ts-ignore
	typeParameters?: Parameters<typeof ts.factory.createArrowFunction>[1]
	 //@ts-ignore
	parameters?: Parameters<typeof ts.factory.createArrowFunction>[2]
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createArrowFunction>[3]
	 //@ts-ignore
	equalsGreaterThanToken?: Parameters<typeof ts.factory.createArrowFunction>[4]
	 //@ts-ignore
	body?: Parameters<typeof ts.factory.createArrowFunction>[5] 
}, children) {
	 //@ts-ignore
	return ts.factory.createArrowFunction(props.modifiers, props.typeParameters, props.parameters, props.type, props.equalsGreaterThanToken, props.body ?? children[0]);
}

export function DeleteExpression(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createDeleteExpression>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createDeleteExpression(props.expression ?? children[0]);
}

export function TypeOfExpression(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createTypeOfExpression>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createTypeOfExpression(props.expression ?? children[0]);
}

export function VoidExpression(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createVoidExpression>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createVoidExpression(props.expression ?? children[0]);
}

export function AwaitExpression(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createAwaitExpression>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createAwaitExpression(props.expression ?? children[0]);
}

export function PrefixUnaryExpression(props: { 
	 //@ts-ignore
	operator?: Parameters<typeof ts.factory.createPrefixUnaryExpression>[0]
	 //@ts-ignore
	operand?: Parameters<typeof ts.factory.createPrefixUnaryExpression>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createPrefixUnaryExpression(props.operator, props.operand ?? children[0]);
}

export function PostfixUnaryExpression(props: { 
	 //@ts-ignore
	operand?: Parameters<typeof ts.factory.createPostfixUnaryExpression>[0]
	 //@ts-ignore
	operator?: Parameters<typeof ts.factory.createPostfixUnaryExpression>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createPostfixUnaryExpression(props.operand, props.operator ?? children[0]);
}

export function BinaryExpression(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createBinaryExpression>[0]
	 //@ts-ignore
	operator?: Parameters<typeof ts.factory.createBinaryExpression>[1]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createBinaryExpression>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createBinaryExpression(props.left, props.operator, props.right ?? children[0]);
}

export function ConditionalExpression(props: { 
	 //@ts-ignore
	condition?: Parameters<typeof ts.factory.createConditionalExpression>[0]
	 //@ts-ignore
	questionToken?: Parameters<typeof ts.factory.createConditionalExpression>[1]
	 //@ts-ignore
	whenTrue?: Parameters<typeof ts.factory.createConditionalExpression>[2]
	 //@ts-ignore
	colonToken?: Parameters<typeof ts.factory.createConditionalExpression>[3]
	 //@ts-ignore
	whenFalse?: Parameters<typeof ts.factory.createConditionalExpression>[4] 
}, children) {
	 //@ts-ignore
	return ts.factory.createConditionalExpression(props.condition, props.questionToken, props.whenTrue, props.colonToken, props.whenFalse ?? children[0]);
}

export function TemplateExpression(props: { 
	 //@ts-ignore
	head?: Parameters<typeof ts.factory.createTemplateExpression>[0]
	 //@ts-ignore
	templateSpans?: Parameters<typeof ts.factory.createTemplateExpression>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createTemplateExpression(props.head, props.templateSpans ?? children);
}

export function TemplateHead(props: { 
	 //@ts-ignore
	text?: Parameters<typeof ts.factory.createTemplateHead>[0]
	 //@ts-ignore
	rawText?: Parameters<typeof ts.factory.createTemplateHead>[1]
	 //@ts-ignore
	templateFlags?: Parameters<typeof ts.factory.createTemplateHead>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createTemplateHead(props.text ?? children[0], props.rawText, props.templateFlags);
}

export function TemplateMiddle(props: { 
	 //@ts-ignore
	text?: Parameters<typeof ts.factory.createTemplateMiddle>[0]
	 //@ts-ignore
	rawText?: Parameters<typeof ts.factory.createTemplateMiddle>[1]
	 //@ts-ignore
	templateFlags?: Parameters<typeof ts.factory.createTemplateMiddle>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createTemplateMiddle(props.text ?? children[0], props.rawText, props.templateFlags);
}

export function TemplateTail(props: { 
	 //@ts-ignore
	text?: Parameters<typeof ts.factory.createTemplateTail>[0]
	 //@ts-ignore
	rawText?: Parameters<typeof ts.factory.createTemplateTail>[1]
	 //@ts-ignore
	templateFlags?: Parameters<typeof ts.factory.createTemplateTail>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createTemplateTail(props.text ?? children[0], props.rawText, props.templateFlags);
}

export function NoSubstitutionTemplateLiteral(props: { 
	 //@ts-ignore
	text?: Parameters<typeof ts.factory.createNoSubstitutionTemplateLiteral>[0]
	 //@ts-ignore
	rawText?: Parameters<typeof ts.factory.createNoSubstitutionTemplateLiteral>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createNoSubstitutionTemplateLiteral(props.text ?? children[0], props.rawText);
}

export function YieldExpression(props: { 
	 //@ts-ignore
	asteriskToken?: Parameters<typeof ts.factory.createYieldExpression>[0]
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createYieldExpression>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createYieldExpression(props.asteriskToken, props.expression ?? children[0]);
}

export function SpreadElement(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createSpreadElement>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createSpreadElement(props.expression ?? children[0]);
}

export function ClassExpression(props: { 
	 //@ts-ignore
	decorators?: Parameters<typeof ts.factory.createClassExpression>[0]
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createClassExpression>[1]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createClassExpression>[2]
	 //@ts-ignore
	typeParameters?: Parameters<typeof ts.factory.createClassExpression>[3]
	 //@ts-ignore
	heritageClauses?: Parameters<typeof ts.factory.createClassExpression>[4]
	 //@ts-ignore
	members?: Parameters<typeof ts.factory.createClassExpression>[5] 
}, children) {
	 //@ts-ignore
	return ts.factory.createClassExpression(props.decorators, props.modifiers, props.name, props.typeParameters, props.heritageClauses, props.members ?? children);
}

export function OmittedExpression() {
	 //@ts-ignore
	return ts.factory.createOmittedExpression();
}

export function ExpressionWithTypeArguments(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createExpressionWithTypeArguments>[0]
	 //@ts-ignore
	typeArguments?: Parameters<typeof ts.factory.createExpressionWithTypeArguments>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createExpressionWithTypeArguments(props.expression, props.typeArguments ?? children[0]);
}

export function AsExpression(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createAsExpression>[0]
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createAsExpression>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createAsExpression(props.expression, props.type ?? children[0]);
}

export function NonNullExpression(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createNonNullExpression>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createNonNullExpression(props.expression ?? children[0]);
}

export function NonNullChain(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createNonNullChain>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createNonNullChain(props.expression ?? children[0]);
}

export function MetaProperty(props: { 
	 //@ts-ignore
	keywordToken?: Parameters<typeof ts.factory.createMetaProperty>[0]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createMetaProperty>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createMetaProperty(props.keywordToken, props.name ?? children[0]);
}

export function TemplateSpan(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createTemplateSpan>[0]
	 //@ts-ignore
	literal?: Parameters<typeof ts.factory.createTemplateSpan>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createTemplateSpan(props.expression, props.literal ?? children[0]);
}

export function SemicolonClassElement() {
	 //@ts-ignore
	return ts.factory.createSemicolonClassElement();
}

export function Block(props: { 
	 //@ts-ignore
	statements?: Parameters<typeof ts.factory.createBlock>[0]
	 //@ts-ignore
	multiLine?: Parameters<typeof ts.factory.createBlock>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createBlock(props.statements ?? children, props.multiLine);
}

export function VariableStatement(props: { 
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createVariableStatement>[0]
	 //@ts-ignore
	declarationList?: Parameters<typeof ts.factory.createVariableStatement>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createVariableStatement(props.modifiers, props.declarationList ?? children[0]);
}

export function EmptyStatement() {
	 //@ts-ignore
	return ts.factory.createEmptyStatement();
}

export function ExpressionStatement(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createExpressionStatement>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createExpressionStatement(props.expression ?? children[0]);
}

export function IfStatement(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createIfStatement>[0]
	 //@ts-ignore
	thenStatement?: Parameters<typeof ts.factory.createIfStatement>[1]
	 //@ts-ignore
	elseStatement?: Parameters<typeof ts.factory.createIfStatement>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createIfStatement(props.expression, props.thenStatement ?? children[0], props.elseStatement);
}

export function DoStatement(props: { 
	 //@ts-ignore
	statement?: Parameters<typeof ts.factory.createDoStatement>[0]
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createDoStatement>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createDoStatement(props.statement, props.expression ?? children[0]);
}

export function WhileStatement(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createWhileStatement>[0]
	 //@ts-ignore
	statement?: Parameters<typeof ts.factory.createWhileStatement>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createWhileStatement(props.expression, props.statement ?? children[0]);
}

export function ForStatement(props: { 
	 //@ts-ignore
	initializer?: Parameters<typeof ts.factory.createForStatement>[0]
	 //@ts-ignore
	condition?: Parameters<typeof ts.factory.createForStatement>[1]
	 //@ts-ignore
	incrementor?: Parameters<typeof ts.factory.createForStatement>[2]
	 //@ts-ignore
	statement?: Parameters<typeof ts.factory.createForStatement>[3] 
}, children) {
	 //@ts-ignore
	return ts.factory.createForStatement(props.initializer, props.condition, props.incrementor, props.statement ?? children[0]);
}

export function ForInStatement(props: { 
	 //@ts-ignore
	initializer?: Parameters<typeof ts.factory.createForInStatement>[0]
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createForInStatement>[1]
	 //@ts-ignore
	statement?: Parameters<typeof ts.factory.createForInStatement>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createForInStatement(props.initializer, props.expression, props.statement ?? children[0]);
}

export function ForOfStatement(props: { 
	 //@ts-ignore
	awaitModifier?: Parameters<typeof ts.factory.createForOfStatement>[0]
	 //@ts-ignore
	initializer?: Parameters<typeof ts.factory.createForOfStatement>[1]
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createForOfStatement>[2]
	 //@ts-ignore
	statement?: Parameters<typeof ts.factory.createForOfStatement>[3] 
}, children) {
	 //@ts-ignore
	return ts.factory.createForOfStatement(props.awaitModifier, props.initializer, props.expression, props.statement ?? children[0]);
}

export function ContinueStatement(props: { 
	 //@ts-ignore
	label?: Parameters<typeof ts.factory.createContinueStatement>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createContinueStatement(props.label ?? children[0]);
}

export function BreakStatement(props: { 
	 //@ts-ignore
	label?: Parameters<typeof ts.factory.createBreakStatement>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createBreakStatement(props.label ?? children[0]);
}

export function ReturnStatement(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createReturnStatement>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createReturnStatement(props.expression ?? children[0]);
}

export function WithStatement(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createWithStatement>[0]
	 //@ts-ignore
	statement?: Parameters<typeof ts.factory.createWithStatement>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createWithStatement(props.expression, props.statement ?? children[0]);
}

export function SwitchStatement(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createSwitchStatement>[0]
	 //@ts-ignore
	caseBlock?: Parameters<typeof ts.factory.createSwitchStatement>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createSwitchStatement(props.expression, props.caseBlock ?? children[0]);
}

export function LabeledStatement(props: { 
	 //@ts-ignore
	label?: Parameters<typeof ts.factory.createLabeledStatement>[0]
	 //@ts-ignore
	statement?: Parameters<typeof ts.factory.createLabeledStatement>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createLabeledStatement(props.label, props.statement ?? children[0]);
}

export function ThrowStatement(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createThrowStatement>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createThrowStatement(props.expression ?? children[0]);
}

export function TryStatement(props: { 
	 //@ts-ignore
	tryBlock?: Parameters<typeof ts.factory.createTryStatement>[0]
	 //@ts-ignore
	catchClause?: Parameters<typeof ts.factory.createTryStatement>[1]
	 //@ts-ignore
	finallyBlock?: Parameters<typeof ts.factory.createTryStatement>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createTryStatement(props.tryBlock, props.catchClause, props.finallyBlock ?? children[0]);
}

export function DebuggerStatement() {
	 //@ts-ignore
	return ts.factory.createDebuggerStatement();
}

export function VariableDeclaration(props: { 
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createVariableDeclaration>[0]
	 //@ts-ignore
	exclamationToken?: Parameters<typeof ts.factory.createVariableDeclaration>[1]
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createVariableDeclaration>[2]
	 //@ts-ignore
	initializer?: Parameters<typeof ts.factory.createVariableDeclaration>[3] 
}, children) {
	 //@ts-ignore
	return ts.factory.createVariableDeclaration(props.name ?? children[0], props.exclamationToken, props.type, props.initializer);
}

export function VariableDeclarationList(props: { 
	 //@ts-ignore
	declarations?: Parameters<typeof ts.factory.createVariableDeclarationList>[0]
	 //@ts-ignore
	flags?: Parameters<typeof ts.factory.createVariableDeclarationList>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createVariableDeclarationList(props.declarations ?? children, props.flags);
}

export function FunctionDeclaration(props: { 
	 //@ts-ignore
	decorators?: Parameters<typeof ts.factory.createFunctionDeclaration>[0]
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createFunctionDeclaration>[1]
	 //@ts-ignore
	asteriskToken?: Parameters<typeof ts.factory.createFunctionDeclaration>[2]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createFunctionDeclaration>[3]
	 //@ts-ignore
	typeParameters?: Parameters<typeof ts.factory.createFunctionDeclaration>[4]
	 //@ts-ignore
	parameters?: Parameters<typeof ts.factory.createFunctionDeclaration>[5]
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createFunctionDeclaration>[6]
	 //@ts-ignore
	body?: Parameters<typeof ts.factory.createFunctionDeclaration>[7] 
}, children) {
	 //@ts-ignore
	return ts.factory.createFunctionDeclaration(props.decorators, props.modifiers, props.asteriskToken, props.name, props.typeParameters, props.parameters, props.type, props.body ?? children[0]);
}

export function ClassDeclaration(props: { 
	 //@ts-ignore
	decorators?: Parameters<typeof ts.factory.createClassDeclaration>[0]
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createClassDeclaration>[1]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createClassDeclaration>[2]
	 //@ts-ignore
	typeParameters?: Parameters<typeof ts.factory.createClassDeclaration>[3]
	 //@ts-ignore
	heritageClauses?: Parameters<typeof ts.factory.createClassDeclaration>[4]
	 //@ts-ignore
	members?: Parameters<typeof ts.factory.createClassDeclaration>[5] 
}, children) {
	 //@ts-ignore
	return ts.factory.createClassDeclaration(props.decorators, props.modifiers, props.name, props.typeParameters, props.heritageClauses, props.members ?? children);
}

export function InterfaceDeclaration(props: { 
	 //@ts-ignore
	decorators?: Parameters<typeof ts.factory.createInterfaceDeclaration>[0]
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createInterfaceDeclaration>[1]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createInterfaceDeclaration>[2]
	 //@ts-ignore
	typeParameters?: Parameters<typeof ts.factory.createInterfaceDeclaration>[3]
	 //@ts-ignore
	heritageClauses?: Parameters<typeof ts.factory.createInterfaceDeclaration>[4]
	 //@ts-ignore
	members?: Parameters<typeof ts.factory.createInterfaceDeclaration>[5] 
}, children) {
	 //@ts-ignore
	return ts.factory.createInterfaceDeclaration(props.decorators, props.modifiers, props.name, props.typeParameters, props.heritageClauses, props.members ?? children);
}

export function TypeAliasDeclaration(props: { 
	 //@ts-ignore
	decorators?: Parameters<typeof ts.factory.createTypeAliasDeclaration>[0]
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createTypeAliasDeclaration>[1]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createTypeAliasDeclaration>[2]
	 //@ts-ignore
	typeParameters?: Parameters<typeof ts.factory.createTypeAliasDeclaration>[3]
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createTypeAliasDeclaration>[4] 
}, children) {
	 //@ts-ignore
	return ts.factory.createTypeAliasDeclaration(props.decorators, props.modifiers, props.name, props.typeParameters, props.type ?? children[0]);
}

export function EnumDeclaration(props: { 
	 //@ts-ignore
	decorators?: Parameters<typeof ts.factory.createEnumDeclaration>[0]
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createEnumDeclaration>[1]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createEnumDeclaration>[2]
	 //@ts-ignore
	members?: Parameters<typeof ts.factory.createEnumDeclaration>[3] 
}, children) {
	 //@ts-ignore
	return ts.factory.createEnumDeclaration(props.decorators, props.modifiers, props.name, props.members ?? children);
}

export function ModuleDeclaration(props: { 
	 //@ts-ignore
	decorators?: Parameters<typeof ts.factory.createModuleDeclaration>[0]
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createModuleDeclaration>[1]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createModuleDeclaration>[2]
	 //@ts-ignore
	body?: Parameters<typeof ts.factory.createModuleDeclaration>[3]
	 //@ts-ignore
	flags?: Parameters<typeof ts.factory.createModuleDeclaration>[4] 
}, children) {
	 //@ts-ignore
	return ts.factory.createModuleDeclaration(props.decorators, props.modifiers, props.name, props.body ?? children[0], props.flags);
}

export function ModuleBlock(props: { 
	 //@ts-ignore
	statements?: Parameters<typeof ts.factory.createModuleBlock>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createModuleBlock(props.statements ?? children);
}

export function CaseBlock(props: { 
	 //@ts-ignore
	clauses?: Parameters<typeof ts.factory.createCaseBlock>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createCaseBlock(props.clauses ?? children);
}

export function NamespaceExportDeclaration(props: { 
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createNamespaceExportDeclaration>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createNamespaceExportDeclaration(props.name ?? children[0]);
}

export function ImportEqualsDeclaration(props: { 
	 //@ts-ignore
	decorators?: Parameters<typeof ts.factory.createImportEqualsDeclaration>[0]
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createImportEqualsDeclaration>[1]
	 //@ts-ignore
	isTypeOnly?: Parameters<typeof ts.factory.createImportEqualsDeclaration>[2]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createImportEqualsDeclaration>[3]
	 //@ts-ignore
	moduleReference?: Parameters<typeof ts.factory.createImportEqualsDeclaration>[4] 
}, children) {
	 //@ts-ignore
	return ts.factory.createImportEqualsDeclaration(props.decorators, props.modifiers, props.isTypeOnly, props.name, props.moduleReference ?? children[0]);
}

export function ImportDeclaration(props: { 
	 //@ts-ignore
	decorators?: Parameters<typeof ts.factory.createImportDeclaration>[0]
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createImportDeclaration>[1]
	 //@ts-ignore
	importClause?: Parameters<typeof ts.factory.createImportDeclaration>[2]
	 //@ts-ignore
	moduleSpecifier?: Parameters<typeof ts.factory.createImportDeclaration>[3]
	 //@ts-ignore
	assertClause?: Parameters<typeof ts.factory.createImportDeclaration>[4] 
}, children) {
	 //@ts-ignore
	return ts.factory.createImportDeclaration(props.decorators, props.modifiers, props.importClause, props.moduleSpecifier ?? children[0], props.assertClause);
}

export function ImportClause(props: { 
	 //@ts-ignore
	isTypeOnly?: Parameters<typeof ts.factory.createImportClause>[0]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createImportClause>[1]
	 //@ts-ignore
	namedBindings?: Parameters<typeof ts.factory.createImportClause>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createImportClause(props.isTypeOnly, props.name, props.namedBindings ?? children[0]);
}

export function AssertClause(props: { 
	 //@ts-ignore
	elements?: Parameters<typeof ts.factory.createAssertClause>[0]
	 //@ts-ignore
	multiLine?: Parameters<typeof ts.factory.createAssertClause>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createAssertClause(props.elements ?? children[0], props.multiLine);
}

export function AssertEntry(props: { 
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createAssertEntry>[0]
	 //@ts-ignore
	value?: Parameters<typeof ts.factory.createAssertEntry>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createAssertEntry(props.name, props.value ?? children[0]);
}

export function NamespaceImport(props: { 
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createNamespaceImport>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createNamespaceImport(props.name ?? children[0]);
}

export function NamespaceExport(props: { 
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createNamespaceExport>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createNamespaceExport(props.name ?? children[0]);
}

export function NamedImports(props: { 
	 //@ts-ignore
	elements?: Parameters<typeof ts.factory.createNamedImports>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createNamedImports(props.elements ?? children);
}

export function ImportSpecifier(props: { 
	 //@ts-ignore
	isTypeOnly?: Parameters<typeof ts.factory.createImportSpecifier>[0]
	 //@ts-ignore
	propertyName?: Parameters<typeof ts.factory.createImportSpecifier>[1]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createImportSpecifier>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createImportSpecifier(props.isTypeOnly, props.propertyName, props.name ?? children[0]);
}

export function ExportAssignment(props: { 
	 //@ts-ignore
	decorators?: Parameters<typeof ts.factory.createExportAssignment>[0]
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createExportAssignment>[1]
	 //@ts-ignore
	isExportEquals?: Parameters<typeof ts.factory.createExportAssignment>[2]
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createExportAssignment>[3] 
}, children) {
	 //@ts-ignore
	return ts.factory.createExportAssignment(props.decorators, props.modifiers, props.isExportEquals, props.expression ?? children[0]);
}

export function ExportDeclaration(props: { 
	 //@ts-ignore
	decorators?: Parameters<typeof ts.factory.createExportDeclaration>[0]
	 //@ts-ignore
	modifiers?: Parameters<typeof ts.factory.createExportDeclaration>[1]
	 //@ts-ignore
	isTypeOnly?: Parameters<typeof ts.factory.createExportDeclaration>[2]
	 //@ts-ignore
	exportClause?: Parameters<typeof ts.factory.createExportDeclaration>[3]
	 //@ts-ignore
	moduleSpecifier?: Parameters<typeof ts.factory.createExportDeclaration>[4]
	 //@ts-ignore
	assertClause?: Parameters<typeof ts.factory.createExportDeclaration>[5] 
}, children) {
	 //@ts-ignore
	return ts.factory.createExportDeclaration(props.decorators, props.modifiers, props.isTypeOnly, props.exportClause ?? children[0], props.moduleSpecifier, props.assertClause);
}

export function NamedExports(props: { 
	 //@ts-ignore
	elements?: Parameters<typeof ts.factory.createNamedExports>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createNamedExports(props.elements ?? children);
}

export function ExportSpecifier(props: { 
	 //@ts-ignore
	isTypeOnly?: Parameters<typeof ts.factory.createExportSpecifier>[0]
	 //@ts-ignore
	propertyName?: Parameters<typeof ts.factory.createExportSpecifier>[1]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createExportSpecifier>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createExportSpecifier(props.isTypeOnly, props.propertyName, props.name ?? children[0]);
}

export function ExternalModuleReference(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createExternalModuleReference>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createExternalModuleReference(props.expression ?? children[0]);
}

export function JSDocAllType() {
	 //@ts-ignore
	return ts.factory.createJSDocAllType();
}

export function JSDocUnknownType() {
	 //@ts-ignore
	return ts.factory.createJSDocUnknownType();
}

export function JSDocNonNullableType(props: { 
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createJSDocNonNullableType>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocNonNullableType(props.type ?? children[0]);
}

export function JSDocNullableType(props: { 
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createJSDocNullableType>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocNullableType(props.type ?? children[0]);
}

export function JSDocOptionalType(props: { 
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createJSDocOptionalType>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocOptionalType(props.type ?? children[0]);
}

export function JSDocFunctionType(props: { 
	 //@ts-ignore
	parameters?: Parameters<typeof ts.factory.createJSDocFunctionType>[0]
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createJSDocFunctionType>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocFunctionType(props.parameters, props.type ?? children[0]);
}

export function JSDocVariadicType(props: { 
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createJSDocVariadicType>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocVariadicType(props.type ?? children[0]);
}

export function JSDocNamepathType(props: { 
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createJSDocNamepathType>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocNamepathType(props.type ?? children[0]);
}

export function JSDocTypeExpression(props: { 
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createJSDocTypeExpression>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocTypeExpression(props.type ?? children[0]);
}

export function JSDocNameReference(props: { 
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createJSDocNameReference>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocNameReference(props.name ?? children[0]);
}

export function JSDocMemberName(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createJSDocMemberName>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createJSDocMemberName>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocMemberName(props.left, props.right ?? children[0]);
}

export function JSDocLink(props: { 
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createJSDocLink>[0]
	 //@ts-ignore
	text?: Parameters<typeof ts.factory.createJSDocLink>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocLink(props.name, props.text ?? children[0]);
}

export function JSDocLinkCode(props: { 
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createJSDocLinkCode>[0]
	 //@ts-ignore
	text?: Parameters<typeof ts.factory.createJSDocLinkCode>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocLinkCode(props.name, props.text ?? children[0]);
}

export function JSDocLinkPlain(props: { 
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createJSDocLinkPlain>[0]
	 //@ts-ignore
	text?: Parameters<typeof ts.factory.createJSDocLinkPlain>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocLinkPlain(props.name, props.text ?? children[0]);
}

export function JSDocTypeLiteral(props: { 
	 //@ts-ignore
	jsDocPropertyTags?: Parameters<typeof ts.factory.createJSDocTypeLiteral>[0]
	 //@ts-ignore
	isArrayType?: Parameters<typeof ts.factory.createJSDocTypeLiteral>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocTypeLiteral(props.jsDocPropertyTags ?? children, props.isArrayType);
}

export function JSDocSignature(props: { 
	 //@ts-ignore
	typeParameters?: Parameters<typeof ts.factory.createJSDocSignature>[0]
	 //@ts-ignore
	parameters?: Parameters<typeof ts.factory.createJSDocSignature>[1]
	 //@ts-ignore
	type?: Parameters<typeof ts.factory.createJSDocSignature>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocSignature(props.typeParameters, props.parameters ?? children, props.type);
}

export function JSDocTemplateTag(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJSDocTemplateTag>[0]
	 //@ts-ignore
	constraint?: Parameters<typeof ts.factory.createJSDocTemplateTag>[1]
	 //@ts-ignore
	typeParameters?: Parameters<typeof ts.factory.createJSDocTemplateTag>[2]
	 //@ts-ignore
	comment?: Parameters<typeof ts.factory.createJSDocTemplateTag>[3] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocTemplateTag(props.tagName, props.constraint, props.typeParameters ?? children, props.comment);
}

export function JSDocTypedefTag(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJSDocTypedefTag>[0]
	 //@ts-ignore
	typeExpression?: Parameters<typeof ts.factory.createJSDocTypedefTag>[1]
	 //@ts-ignore
	fullName?: Parameters<typeof ts.factory.createJSDocTypedefTag>[2]
	 //@ts-ignore
	comment?: Parameters<typeof ts.factory.createJSDocTypedefTag>[3] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocTypedefTag(props.tagName ?? children[0], props.typeExpression, props.fullName, props.comment);
}

export function JSDocParameterTag(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJSDocParameterTag>[0]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createJSDocParameterTag>[1]
	 //@ts-ignore
	isBracketed?: Parameters<typeof ts.factory.createJSDocParameterTag>[2]
	 //@ts-ignore
	typeExpression?: Parameters<typeof ts.factory.createJSDocParameterTag>[3]
	 //@ts-ignore
	isNameFirst?: Parameters<typeof ts.factory.createJSDocParameterTag>[4]
	 //@ts-ignore
	comment?: Parameters<typeof ts.factory.createJSDocParameterTag>[5] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocParameterTag(props.tagName, props.name, props.isBracketed ?? children[0], props.typeExpression, props.isNameFirst, props.comment);
}

export function JSDocPropertyTag(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJSDocPropertyTag>[0]
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createJSDocPropertyTag>[1]
	 //@ts-ignore
	isBracketed?: Parameters<typeof ts.factory.createJSDocPropertyTag>[2]
	 //@ts-ignore
	typeExpression?: Parameters<typeof ts.factory.createJSDocPropertyTag>[3]
	 //@ts-ignore
	isNameFirst?: Parameters<typeof ts.factory.createJSDocPropertyTag>[4]
	 //@ts-ignore
	comment?: Parameters<typeof ts.factory.createJSDocPropertyTag>[5] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocPropertyTag(props.tagName, props.name, props.isBracketed ?? children[0], props.typeExpression, props.isNameFirst, props.comment);
}

export function JSDocTypeTag(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJSDocTypeTag>[0]
	 //@ts-ignore
	typeExpression?: Parameters<typeof ts.factory.createJSDocTypeTag>[1]
	 //@ts-ignore
	comment?: Parameters<typeof ts.factory.createJSDocTypeTag>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocTypeTag(props.tagName, props.typeExpression ?? children[0], props.comment);
}

export function JSDocSeeTag(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJSDocSeeTag>[0]
	 //@ts-ignore
	nameExpression?: Parameters<typeof ts.factory.createJSDocSeeTag>[1]
	 //@ts-ignore
	comment?: Parameters<typeof ts.factory.createJSDocSeeTag>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocSeeTag(props.tagName, props.nameExpression ?? children[0], props.comment);
}

export function JSDocReturnTag(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJSDocReturnTag>[0]
	 //@ts-ignore
	typeExpression?: Parameters<typeof ts.factory.createJSDocReturnTag>[1]
	 //@ts-ignore
	comment?: Parameters<typeof ts.factory.createJSDocReturnTag>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocReturnTag(props.tagName ?? children[0], props.typeExpression, props.comment);
}

export function JSDocThisTag(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJSDocThisTag>[0]
	 //@ts-ignore
	typeExpression?: Parameters<typeof ts.factory.createJSDocThisTag>[1]
	 //@ts-ignore
	comment?: Parameters<typeof ts.factory.createJSDocThisTag>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocThisTag(props.tagName, props.typeExpression ?? children[0], props.comment);
}

export function JSDocEnumTag(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJSDocEnumTag>[0]
	 //@ts-ignore
	typeExpression?: Parameters<typeof ts.factory.createJSDocEnumTag>[1]
	 //@ts-ignore
	comment?: Parameters<typeof ts.factory.createJSDocEnumTag>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocEnumTag(props.tagName, props.typeExpression ?? children[0], props.comment);
}

export function JSDocCallbackTag(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJSDocCallbackTag>[0]
	 //@ts-ignore
	typeExpression?: Parameters<typeof ts.factory.createJSDocCallbackTag>[1]
	 //@ts-ignore
	fullName?: Parameters<typeof ts.factory.createJSDocCallbackTag>[2]
	 //@ts-ignore
	comment?: Parameters<typeof ts.factory.createJSDocCallbackTag>[3] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocCallbackTag(props.tagName, props.typeExpression ?? children[0], props.fullName, props.comment);
}

export function JSDocAugmentsTag(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJSDocAugmentsTag>[0]
	 //@ts-ignore
	className?: Parameters<typeof ts.factory.createJSDocAugmentsTag>[1]
	 //@ts-ignore
	comment?: Parameters<typeof ts.factory.createJSDocAugmentsTag>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocAugmentsTag(props.tagName, props.className ?? children[0], props.comment);
}

export function JSDocImplementsTag(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJSDocImplementsTag>[0]
	 //@ts-ignore
	className?: Parameters<typeof ts.factory.createJSDocImplementsTag>[1]
	 //@ts-ignore
	comment?: Parameters<typeof ts.factory.createJSDocImplementsTag>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocImplementsTag(props.tagName, props.className ?? children[0], props.comment);
}

export function JSDocAuthorTag(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJSDocAuthorTag>[0]
	 //@ts-ignore
	comment?: Parameters<typeof ts.factory.createJSDocAuthorTag>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocAuthorTag(props.tagName ?? children[0], props.comment);
}

export function JSDocClassTag(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJSDocClassTag>[0]
	 //@ts-ignore
	comment?: Parameters<typeof ts.factory.createJSDocClassTag>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocClassTag(props.tagName ?? children[0], props.comment);
}

export function JSDocPublicTag(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJSDocPublicTag>[0]
	 //@ts-ignore
	comment?: Parameters<typeof ts.factory.createJSDocPublicTag>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocPublicTag(props.tagName ?? children[0], props.comment);
}

export function JSDocPrivateTag(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJSDocPrivateTag>[0]
	 //@ts-ignore
	comment?: Parameters<typeof ts.factory.createJSDocPrivateTag>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocPrivateTag(props.tagName ?? children[0], props.comment);
}

export function JSDocProtectedTag(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJSDocProtectedTag>[0]
	 //@ts-ignore
	comment?: Parameters<typeof ts.factory.createJSDocProtectedTag>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocProtectedTag(props.tagName ?? children[0], props.comment);
}

export function JSDocReadonlyTag(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJSDocReadonlyTag>[0]
	 //@ts-ignore
	comment?: Parameters<typeof ts.factory.createJSDocReadonlyTag>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocReadonlyTag(props.tagName ?? children[0], props.comment);
}

export function JSDocUnknownTag(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJSDocUnknownTag>[0]
	 //@ts-ignore
	comment?: Parameters<typeof ts.factory.createJSDocUnknownTag>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocUnknownTag(props.tagName ?? children[0], props.comment);
}

export function JSDocDeprecatedTag(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJSDocDeprecatedTag>[0]
	 //@ts-ignore
	comment?: Parameters<typeof ts.factory.createJSDocDeprecatedTag>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocDeprecatedTag(props.tagName ?? children[0], props.comment);
}

export function JSDocOverrideTag(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJSDocOverrideTag>[0]
	 //@ts-ignore
	comment?: Parameters<typeof ts.factory.createJSDocOverrideTag>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocOverrideTag(props.tagName ?? children[0], props.comment);
}

export function JSDocText(props: { 
	 //@ts-ignore
	text?: Parameters<typeof ts.factory.createJSDocText>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocText(props.text ?? children[0]);
}

export function JSDocComment(props: { 
	 //@ts-ignore
	comment?: Parameters<typeof ts.factory.createJSDocComment>[0]
	 //@ts-ignore
	tags?: Parameters<typeof ts.factory.createJSDocComment>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJSDocComment(props.comment ?? children[0], props.tags);
}

export function JsxElement(props: { 
	 //@ts-ignore
	openingElement?: Parameters<typeof ts.factory.createJsxElement>[0]
	 //@ts-ignore
	children?: Parameters<typeof ts.factory.createJsxElement>[1]
	 //@ts-ignore
	closingElement?: Parameters<typeof ts.factory.createJsxElement>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJsxElement(props.openingElement, props.children, props.closingElement ?? children[0]);
}

export function JsxSelfClosingElement(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJsxSelfClosingElement>[0]
	 //@ts-ignore
	typeArguments?: Parameters<typeof ts.factory.createJsxSelfClosingElement>[1]
	 //@ts-ignore
	attributes?: Parameters<typeof ts.factory.createJsxSelfClosingElement>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJsxSelfClosingElement(props.tagName, props.typeArguments, props.attributes ?? children[0]);
}

export function JsxOpeningElement(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJsxOpeningElement>[0]
	 //@ts-ignore
	typeArguments?: Parameters<typeof ts.factory.createJsxOpeningElement>[1]
	 //@ts-ignore
	attributes?: Parameters<typeof ts.factory.createJsxOpeningElement>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJsxOpeningElement(props.tagName, props.typeArguments, props.attributes ?? children[0]);
}

export function JsxClosingElement(props: { 
	 //@ts-ignore
	tagName?: Parameters<typeof ts.factory.createJsxClosingElement>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJsxClosingElement(props.tagName ?? children[0]);
}

export function JsxFragment(props: { 
	 //@ts-ignore
	openingFragment?: Parameters<typeof ts.factory.createJsxFragment>[0]
	 //@ts-ignore
	children?: Parameters<typeof ts.factory.createJsxFragment>[1]
	 //@ts-ignore
	closingFragment?: Parameters<typeof ts.factory.createJsxFragment>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJsxFragment(props.openingFragment, props.children, props.closingFragment ?? children[0]);
}

export function JsxText(props: { 
	 //@ts-ignore
	text?: Parameters<typeof ts.factory.createJsxText>[0]
	 //@ts-ignore
	containsOnlyTriviaWhiteSpaces?: Parameters<typeof ts.factory.createJsxText>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJsxText(props.text ?? children[0], props.containsOnlyTriviaWhiteSpaces);
}

export function JsxOpeningFragment() {
	 //@ts-ignore
	return ts.factory.createJsxOpeningFragment();
}

export function JsxJsxClosingFragment() {
	 //@ts-ignore
	return ts.factory.createJsxJsxClosingFragment();
}

export function JsxAttribute(props: { 
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createJsxAttribute>[0]
	 //@ts-ignore
	initializer?: Parameters<typeof ts.factory.createJsxAttribute>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJsxAttribute(props.name, props.initializer ?? children[0]);
}

export function JsxAttributes(props: { 
	 //@ts-ignore
	properties?: Parameters<typeof ts.factory.createJsxAttributes>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJsxAttributes(props.properties ?? children);
}

export function JsxSpreadAttribute(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createJsxSpreadAttribute>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJsxSpreadAttribute(props.expression ?? children[0]);
}

export function JsxExpression(props: { 
	 //@ts-ignore
	dotDotDotToken?: Parameters<typeof ts.factory.createJsxExpression>[0]
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createJsxExpression>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createJsxExpression(props.dotDotDotToken, props.expression ?? children[0]);
}

export function CaseClause(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createCaseClause>[0]
	 //@ts-ignore
	statements?: Parameters<typeof ts.factory.createCaseClause>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createCaseClause(props.expression, props.statements ?? children);
}

export function DefaultClause(props: { 
	 //@ts-ignore
	statements?: Parameters<typeof ts.factory.createDefaultClause>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createDefaultClause(props.statements ?? children);
}

export function HeritageClause(props: { 
	 //@ts-ignore
	token?: Parameters<typeof ts.factory.createHeritageClause>[0]
	 //@ts-ignore
	types?: Parameters<typeof ts.factory.createHeritageClause>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createHeritageClause(props.token, props.types ?? children);
}

export function CatchClause(props: { 
	 //@ts-ignore
	variableDeclaration?: Parameters<typeof ts.factory.createCatchClause>[0]
	 //@ts-ignore
	block?: Parameters<typeof ts.factory.createCatchClause>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createCatchClause(props.variableDeclaration, props.block ?? children[0]);
}

export function PropertyAssignment(props: { 
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createPropertyAssignment>[0]
	 //@ts-ignore
	initializer?: Parameters<typeof ts.factory.createPropertyAssignment>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createPropertyAssignment(props.name, props.initializer ?? children[0]);
}

export function ShorthandPropertyAssignment(props: { 
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createShorthandPropertyAssignment>[0]
	 //@ts-ignore
	objectAssignmentInitializer?: Parameters<typeof ts.factory.createShorthandPropertyAssignment>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createShorthandPropertyAssignment(props.name ?? children[0], props.objectAssignmentInitializer);
}

export function SpreadAssignment(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createSpreadAssignment>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createSpreadAssignment(props.expression ?? children[0]);
}

export function EnumMember(props: { 
	 //@ts-ignore
	name?: Parameters<typeof ts.factory.createEnumMember>[0]
	 //@ts-ignore
	initializer?: Parameters<typeof ts.factory.createEnumMember>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createEnumMember(props.name ?? children[0], props.initializer);
}

export function SourceFile(props: { 
	 //@ts-ignore
	statements?: Parameters<typeof ts.factory.createSourceFile>[0]
	 //@ts-ignore
	endOfFileToken?: Parameters<typeof ts.factory.createSourceFile>[1]
	 //@ts-ignore
	flags?: Parameters<typeof ts.factory.createSourceFile>[2] 
}, children) {
	 //@ts-ignore
	return ts.factory.createSourceFile(props.statements, props.endOfFileToken, props.flags ?? children[0]);
}

export function NotEmittedStatement(props: { 
	 //@ts-ignore
	original?: Parameters<typeof ts.factory.createNotEmittedStatement>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createNotEmittedStatement(props.original ?? children[0]);
}

export function PartiallyEmittedExpression(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createPartiallyEmittedExpression>[0]
	 //@ts-ignore
	original?: Parameters<typeof ts.factory.createPartiallyEmittedExpression>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createPartiallyEmittedExpression(props.expression ?? children[0], props.original);
}

export function CommaListExpression(props: { 
	 //@ts-ignore
	elements?: Parameters<typeof ts.factory.createCommaListExpression>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createCommaListExpression(props.elements ?? children);
}

export function Bundle(props: { 
	 //@ts-ignore
	sourceFiles?: Parameters<typeof ts.factory.createBundle>[0]
	 //@ts-ignore
	prepends?: Parameters<typeof ts.factory.createBundle>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createBundle(props.sourceFiles ?? children, props.prepends);
}

export function Comma(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createComma>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createComma>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createComma(props.left, props.right ?? children[0]);
}

export function Assignment(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createAssignment>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createAssignment>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createAssignment(props.left, props.right ?? children[0]);
}

export function LogicalOr(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createLogicalOr>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createLogicalOr>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createLogicalOr(props.left, props.right ?? children[0]);
}

export function LogicalAnd(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createLogicalAnd>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createLogicalAnd>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createLogicalAnd(props.left, props.right ?? children[0]);
}

export function BitwiseOr(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createBitwiseOr>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createBitwiseOr>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createBitwiseOr(props.left, props.right ?? children[0]);
}

export function BitwiseXor(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createBitwiseXor>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createBitwiseXor>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createBitwiseXor(props.left, props.right ?? children[0]);
}

export function BitwiseAnd(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createBitwiseAnd>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createBitwiseAnd>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createBitwiseAnd(props.left, props.right ?? children[0]);
}

export function StrictEquality(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createStrictEquality>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createStrictEquality>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createStrictEquality(props.left, props.right ?? children[0]);
}

export function StrictInequality(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createStrictInequality>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createStrictInequality>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createStrictInequality(props.left, props.right ?? children[0]);
}

export function Equality(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createEquality>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createEquality>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createEquality(props.left, props.right ?? children[0]);
}

export function Inequality(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createInequality>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createInequality>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createInequality(props.left, props.right ?? children[0]);
}

export function LessThan(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createLessThan>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createLessThan>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createLessThan(props.left, props.right ?? children[0]);
}

export function LessThanEquals(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createLessThanEquals>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createLessThanEquals>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createLessThanEquals(props.left, props.right ?? children[0]);
}

export function GreaterThan(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createGreaterThan>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createGreaterThan>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createGreaterThan(props.left, props.right ?? children[0]);
}

export function GreaterThanEquals(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createGreaterThanEquals>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createGreaterThanEquals>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createGreaterThanEquals(props.left, props.right ?? children[0]);
}

export function LeftShift(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createLeftShift>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createLeftShift>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createLeftShift(props.left, props.right ?? children[0]);
}

export function RightShift(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createRightShift>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createRightShift>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createRightShift(props.left, props.right ?? children[0]);
}

export function UnsignedRightShift(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createUnsignedRightShift>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createUnsignedRightShift>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createUnsignedRightShift(props.left, props.right ?? children[0]);
}

export function Add(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createAdd>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createAdd>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createAdd(props.left, props.right ?? children[0]);
}

export function Subtract(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createSubtract>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createSubtract>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createSubtract(props.left, props.right ?? children[0]);
}

export function Multiply(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createMultiply>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createMultiply>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createMultiply(props.left, props.right ?? children[0]);
}

export function Divide(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createDivide>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createDivide>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createDivide(props.left, props.right ?? children[0]);
}

export function Modulo(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createModulo>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createModulo>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createModulo(props.left, props.right ?? children[0]);
}

export function Exponent(props: { 
	 //@ts-ignore
	left?: Parameters<typeof ts.factory.createExponent>[0]
	 //@ts-ignore
	right?: Parameters<typeof ts.factory.createExponent>[1] 
}, children) {
	 //@ts-ignore
	return ts.factory.createExponent(props.left, props.right ?? children[0]);
}

export function PrefixPlus(props: { 
	 //@ts-ignore
	operand?: Parameters<typeof ts.factory.createPrefixPlus>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createPrefixPlus(props.operand ?? children[0]);
}

export function PrefixMinus(props: { 
	 //@ts-ignore
	operand?: Parameters<typeof ts.factory.createPrefixMinus>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createPrefixMinus(props.operand ?? children[0]);
}

export function PrefixIncrement(props: { 
	 //@ts-ignore
	operand?: Parameters<typeof ts.factory.createPrefixIncrement>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createPrefixIncrement(props.operand ?? children[0]);
}

export function PrefixDecrement(props: { 
	 //@ts-ignore
	operand?: Parameters<typeof ts.factory.createPrefixDecrement>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createPrefixDecrement(props.operand ?? children[0]);
}

export function BitwiseNot(props: { 
	 //@ts-ignore
	operand?: Parameters<typeof ts.factory.createBitwiseNot>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createBitwiseNot(props.operand ?? children[0]);
}

export function LogicalNot(props: { 
	 //@ts-ignore
	operand?: Parameters<typeof ts.factory.createLogicalNot>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createLogicalNot(props.operand ?? children[0]);
}

export function PostfixIncrement(props: { 
	 //@ts-ignore
	operand?: Parameters<typeof ts.factory.createPostfixIncrement>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createPostfixIncrement(props.operand ?? children[0]);
}

export function PostfixDecrement(props: { 
	 //@ts-ignore
	operand?: Parameters<typeof ts.factory.createPostfixDecrement>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createPostfixDecrement(props.operand ?? children[0]);
}

export function ImmediatelyInvokedFunctionExpression(props: { 
	 //@ts-ignore
	statements?: Parameters<typeof ts.factory.createImmediatelyInvokedFunctionExpression>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createImmediatelyInvokedFunctionExpression(props.statements ?? children);
}

export function ImmediatelyInvokedArrowFunction(props: { 
	 //@ts-ignore
	statements?: Parameters<typeof ts.factory.createImmediatelyInvokedArrowFunction>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createImmediatelyInvokedArrowFunction(props.statements ?? children);
}

export function VoidZero() {
	 //@ts-ignore
	return ts.factory.createVoidZero();
}

export function ExportDefault(props: { 
	 //@ts-ignore
	expression?: Parameters<typeof ts.factory.createExportDefault>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createExportDefault(props.expression ?? children[0]);
}

export function ExternalModuleExport(props: { 
	 //@ts-ignore
	exportName?: Parameters<typeof ts.factory.createExternalModuleExport>[0] 
}, children) {
	 //@ts-ignore
	return ts.factory.createExternalModuleExport(props.exportName ?? children[0]);
}
