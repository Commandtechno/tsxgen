import { factory } from "typescript";
import { Props } from "./props";

export function NodeArray(props: Props["createNodeArray"]) {
	return factory.createNodeArray(props.elements, props.hasTrailingComma);
}

export function NumericLiteral(props: Props["createNumericLiteral"]) {
	return factory.createNumericLiteral(props.value, props.numericLiteralFlags);
}

export function BigIntLiteral(props: Props["createBigIntLiteral"]) {
	return factory.createBigIntLiteral(props.value);
}

export function StringLiteral(props: Props["createStringLiteral"]) {
	return factory.createStringLiteral(props.text, props.isSingleQuote, props.hasExtendedUnicodeEscape);
}

export function StringLiteralFromNode(props: Props["createStringLiteralFromNode"]) {
	return factory.createStringLiteralFromNode(props.sourceNode);
}

export function RegularExpressionLiteral(props: Props["createRegularExpressionLiteral"]) {
	return factory.createRegularExpressionLiteral(props.text);
}

export function Identifier(props: Props["createIdentifier"]) {
	return factory.createIdentifier(props.text, props.typeArguments, props.originalKeywordKind);
}

export function TempVariable(props: Props["createTempVariable"]) {
	return factory.createTempVariable(props.recordTempVariable, props.reservedInNestedScopes);
}

export function LoopVariable(props: Props["createLoopVariable"]) {
	return factory.createLoopVariable(props.reservedInNestedScopes);
}

export function UniqueName(props: Props["createUniqueName"]) {
	return factory.createUniqueName(props.text, props.flags);
}

export function PrivateIdentifier(props: Props["createPrivateIdentifier"]) {
	return factory.createPrivateIdentifier(props.text);
}

export function Token(props: Props["createToken"]) {
	return factory.createToken(props.token);
}

export function Super() {
	return factory.createSuper();
}

export function This() {
	return factory.createThis();
}

export function Null() {
	return factory.createNull();
}

export function True() {
	return factory.createTrue();
}

export function False() {
	return factory.createFalse();
}

export function Modifier(props: Props["createModifier"]) {
	return factory.createModifier(props.kind);
}

export function ModifiersFromModifierFlags(props: Props["createModifiersFromModifierFlags"]) {
	return factory.createModifiersFromModifierFlags(props.flags);
}

export function QualifiedName(props: Props["createQualifiedName"]) {
	return factory.createQualifiedName(props.left, props.right);
}

export function ComputedPropertyName(props: Props["createComputedPropertyName"]) {
	return factory.createComputedPropertyName(props.expression);
}

export function TypeParameterDeclaration(props: Props["createTypeParameterDeclaration"]) {
	return factory.createTypeParameterDeclaration(props.name, props.constraint, props.defaultType);
}

export function ParameterDeclaration(props: Props["createParameterDeclaration"]) {
	return factory.createParameterDeclaration(props.decorators, props.modifiers, props.dotDotDotToken, props.name, props.questionToken, props.type, props.initializer);
}

export function Decorator(props: Props["createDecorator"]) {
	return factory.createDecorator(props.expression);
}

export function PropertySignature(props: Props["createPropertySignature"]) {
	return factory.createPropertySignature(props.modifiers, props.name, props.questionToken, props.type);
}

export function PropertyDeclaration(props: Props["createPropertyDeclaration"]) {
	return factory.createPropertyDeclaration(props.decorators, props.modifiers, props.name, props.questionOrExclamationToken, props.type, props.initializer);
}

export function MethodSignature(props: Props["createMethodSignature"]) {
	return factory.createMethodSignature(props.modifiers, props.name, props.questionToken, props.typeParameters, props.parameters, props.type);
}

export function MethodDeclaration(props: Props["createMethodDeclaration"]) {
	return factory.createMethodDeclaration(props.decorators, props.modifiers, props.asteriskToken, props.name, props.questionToken, props.typeParameters, props.parameters, props.type, props.body);
}

export function ConstructorDeclaration(props: Props["createConstructorDeclaration"]) {
	return factory.createConstructorDeclaration(props.decorators, props.modifiers, props.parameters, props.body);
}

export function GetAccessorDeclaration(props: Props["createGetAccessorDeclaration"]) {
	return factory.createGetAccessorDeclaration(props.decorators, props.modifiers, props.name, props.parameters, props.type, props.body);
}

export function SetAccessorDeclaration(props: Props["createSetAccessorDeclaration"]) {
	return factory.createSetAccessorDeclaration(props.decorators, props.modifiers, props.name, props.parameters, props.body);
}

export function CallSignature(props: Props["createCallSignature"]) {
	return factory.createCallSignature(props.typeParameters, props.parameters, props.type);
}

export function ConstructSignature(props: Props["createConstructSignature"]) {
	return factory.createConstructSignature(props.typeParameters, props.parameters, props.type);
}

export function IndexSignature(props: Props["createIndexSignature"]) {
	return factory.createIndexSignature(props.decorators, props.modifiers, props.parameters, props.type);
}

export function ClassStaticBlockDeclaration(props: Props["createClassStaticBlockDeclaration"]) {
	return factory.createClassStaticBlockDeclaration(props.decorators, props.modifiers, props.body);
}

export function TemplateLiteralTypeSpan(props: Props["createTemplateLiteralTypeSpan"]) {
	return factory.createTemplateLiteralTypeSpan(props.type, props.literal);
}

export function KeywordTypeNode(props: Props["createKeywordTypeNode"]) {
	return factory.createKeywordTypeNode(props.kind);
}

export function TypePredicateNode(props: Props["createTypePredicateNode"]) {
	return factory.createTypePredicateNode(props.assertsModifier, props.parameterName, props.type);
}

export function TypeReferenceNode(props: Props["createTypeReferenceNode"]) {
	return factory.createTypeReferenceNode(props.typeName, props.typeArguments);
}

export function FunctionTypeNode(props: Props["createFunctionTypeNode"]) {
	return factory.createFunctionTypeNode(props.typeParameters, props.parameters, props.type);
}

export function ConstructorTypeNode() {
	return factory.createConstructorTypeNode();
}

export function TypeQueryNode(props: Props["createTypeQueryNode"]) {
	return factory.createTypeQueryNode(props.exprName);
}

export function TypeLiteralNode(props: Props["createTypeLiteralNode"]) {
	return factory.createTypeLiteralNode(props.members);
}

export function ArrayTypeNode(props: Props["createArrayTypeNode"]) {
	return factory.createArrayTypeNode(props.elementType);
}

export function TupleTypeNode(props: Props["createTupleTypeNode"]) {
	return factory.createTupleTypeNode(props.elements);
}

export function NamedTupleMember(props: Props["createNamedTupleMember"]) {
	return factory.createNamedTupleMember(props.dotDotDotToken, props.name, props.questionToken, props.type);
}

export function OptionalTypeNode(props: Props["createOptionalTypeNode"]) {
	return factory.createOptionalTypeNode(props.type);
}

export function RestTypeNode(props: Props["createRestTypeNode"]) {
	return factory.createRestTypeNode(props.type);
}

export function UnionTypeNode(props: Props["createUnionTypeNode"]) {
	return factory.createUnionTypeNode(props.types);
}

export function IntersectionTypeNode(props: Props["createIntersectionTypeNode"]) {
	return factory.createIntersectionTypeNode(props.types);
}

export function ConditionalTypeNode(props: Props["createConditionalTypeNode"]) {
	return factory.createConditionalTypeNode(props.checkType, props.extendsType, props.trueType, props.falseType);
}

export function InferTypeNode(props: Props["createInferTypeNode"]) {
	return factory.createInferTypeNode(props.typeParameter);
}

export function ImportTypeNode(props: Props["createImportTypeNode"]) {
	return factory.createImportTypeNode(props.argument, props.qualifier, props.typeArguments, props.isTypeOf);
}

export function ParenthesizedType(props: Props["createParenthesizedType"]) {
	return factory.createParenthesizedType(props.type);
}

export function ThisTypeNode() {
	return factory.createThisTypeNode();
}

export function TypeOperatorNode(props: Props["createTypeOperatorNode"]) {
	return factory.createTypeOperatorNode(props.operator, props.type);
}

export function IndexedAccessTypeNode(props: Props["createIndexedAccessTypeNode"]) {
	return factory.createIndexedAccessTypeNode(props.objectType, props.indexType);
}

export function MappedTypeNode(props: Props["createMappedTypeNode"]) {
	return factory.createMappedTypeNode(props.readonlyToken, props.typeParameter, props.nameType, props.questionToken, props.type, props.members);
}

export function LiteralTypeNode(props: Props["createLiteralTypeNode"]) {
	return factory.createLiteralTypeNode(props.literal);
}

export function TemplateLiteralType(props: Props["createTemplateLiteralType"]) {
	return factory.createTemplateLiteralType(props.head, props.templateSpans);
}

export function ObjectBindingPattern(props: Props["createObjectBindingPattern"]) {
	return factory.createObjectBindingPattern(props.elements);
}

export function ArrayBindingPattern(props: Props["createArrayBindingPattern"]) {
	return factory.createArrayBindingPattern(props.elements);
}

export function BindingElement(props: Props["createBindingElement"]) {
	return factory.createBindingElement(props.dotDotDotToken, props.propertyName, props.name, props.initializer);
}

export function ArrayLiteralExpression(props: Props["createArrayLiteralExpression"]) {
	return factory.createArrayLiteralExpression(props.elements, props.multiLine);
}

export function ObjectLiteralExpression(props: Props["createObjectLiteralExpression"]) {
	return factory.createObjectLiteralExpression(props.properties, props.multiLine);
}

export function PropertyAccessExpression(props: Props["createPropertyAccessExpression"]) {
	return factory.createPropertyAccessExpression(props.expression, props.name);
}

export function PropertyAccessChain(props: Props["createPropertyAccessChain"]) {
	return factory.createPropertyAccessChain(props.expression, props.questionDotToken, props.name);
}

export function ElementAccessExpression(props: Props["createElementAccessExpression"]) {
	return factory.createElementAccessExpression(props.expression, props.index);
}

export function ElementAccessChain(props: Props["createElementAccessChain"]) {
	return factory.createElementAccessChain(props.expression, props.questionDotToken, props.index);
}

export function CallExpression(props: Props["createCallExpression"]) {
	return factory.createCallExpression(props.expression, props.typeArguments, props.argumentsArray);
}

export function CallChain(props: Props["createCallChain"]) {
	return factory.createCallChain(props.expression, props.questionDotToken, props.typeArguments, props.argumentsArray);
}

export function NewExpression(props: Props["createNewExpression"]) {
	return factory.createNewExpression(props.expression, props.typeArguments, props.argumentsArray);
}

export function TaggedTemplateExpression(props: Props["createTaggedTemplateExpression"]) {
	return factory.createTaggedTemplateExpression(props.tag, props.typeArguments, props.template);
}

export function TypeAssertion(props: Props["createTypeAssertion"]) {
	return factory.createTypeAssertion(props.type, props.expression);
}

export function ParenthesizedExpression(props: Props["createParenthesizedExpression"]) {
	return factory.createParenthesizedExpression(props.expression);
}

export function FunctionExpression(props: Props["createFunctionExpression"]) {
	return factory.createFunctionExpression(props.modifiers, props.asteriskToken, props.name, props.typeParameters, props.parameters, props.type, props.body);
}

export function ArrowFunction(props: Props["createArrowFunction"]) {
	return factory.createArrowFunction(props.modifiers, props.typeParameters, props.parameters, props.type, props.equalsGreaterThanToken, props.body);
}

export function DeleteExpression(props: Props["createDeleteExpression"]) {
	return factory.createDeleteExpression(props.expression);
}

export function TypeOfExpression(props: Props["createTypeOfExpression"]) {
	return factory.createTypeOfExpression(props.expression);
}

export function VoidExpression(props: Props["createVoidExpression"]) {
	return factory.createVoidExpression(props.expression);
}

export function AwaitExpression(props: Props["createAwaitExpression"]) {
	return factory.createAwaitExpression(props.expression);
}

export function PrefixUnaryExpression(props: Props["createPrefixUnaryExpression"]) {
	return factory.createPrefixUnaryExpression(props.operator, props.operand);
}

export function PostfixUnaryExpression(props: Props["createPostfixUnaryExpression"]) {
	return factory.createPostfixUnaryExpression(props.operand, props.operator);
}

export function BinaryExpression(props: Props["createBinaryExpression"]) {
	return factory.createBinaryExpression(props.left, props.operator, props.right);
}

export function ConditionalExpression(props: Props["createConditionalExpression"]) {
	return factory.createConditionalExpression(props.condition, props.questionToken, props.whenTrue, props.colonToken, props.whenFalse);
}

export function TemplateExpression(props: Props["createTemplateExpression"]) {
	return factory.createTemplateExpression(props.head, props.templateSpans);
}

export function TemplateHead(props: Props["createTemplateHead"]) {
	return factory.createTemplateHead(props.text, props.rawText, props.templateFlags);
}

export function TemplateMiddle(props: Props["createTemplateMiddle"]) {
	return factory.createTemplateMiddle(props.text, props.rawText, props.templateFlags);
}

export function TemplateTail(props: Props["createTemplateTail"]) {
	return factory.createTemplateTail(props.text, props.rawText, props.templateFlags);
}

export function NoSubstitutionTemplateLiteral(props: Props["createNoSubstitutionTemplateLiteral"]) {
	return factory.createNoSubstitutionTemplateLiteral(props.text, props.rawText, props.templateFlags);
}

export function YieldExpression(props: Props["createYieldExpression"]) {
	return factory.createYieldExpression(props.asteriskToken, props.expression);
}

export function SpreadElement(props: Props["createSpreadElement"]) {
	return factory.createSpreadElement(props.expression);
}

export function ClassExpression(props: Props["createClassExpression"]) {
	return factory.createClassExpression(props.decorators, props.modifiers, props.name, props.typeParameters, props.heritageClauses, props.members);
}

export function OmittedExpression() {
	return factory.createOmittedExpression();
}

export function ExpressionWithTypeArguments(props: Props["createExpressionWithTypeArguments"]) {
	return factory.createExpressionWithTypeArguments(props.expression, props.typeArguments);
}

export function AsExpression(props: Props["createAsExpression"]) {
	return factory.createAsExpression(props.expression, props.type);
}

export function NonNullExpression(props: Props["createNonNullExpression"]) {
	return factory.createNonNullExpression(props.expression);
}

export function NonNullChain(props: Props["createNonNullChain"]) {
	return factory.createNonNullChain(props.expression);
}

export function MetaProperty(props: Props["createMetaProperty"]) {
	return factory.createMetaProperty(props.keywordToken, props.name);
}

export function TemplateSpan(props: Props["createTemplateSpan"]) {
	return factory.createTemplateSpan(props.expression, props.literal);
}

export function SemicolonClassElement() {
	return factory.createSemicolonClassElement();
}

export function Block(props: Props["createBlock"]) {
	return factory.createBlock(props.statements, props.multiLine);
}

export function VariableStatement(props: Props["createVariableStatement"]) {
	return factory.createVariableStatement(props.modifiers, props.declarationList);
}

export function EmptyStatement() {
	return factory.createEmptyStatement();
}

export function ExpressionStatement(props: Props["createExpressionStatement"]) {
	return factory.createExpressionStatement(props.expression);
}

export function IfStatement(props: Props["createIfStatement"]) {
	return factory.createIfStatement(props.expression, props.thenStatement, props.elseStatement);
}

export function DoStatement(props: Props["createDoStatement"]) {
	return factory.createDoStatement(props.statement, props.expression);
}

export function WhileStatement(props: Props["createWhileStatement"]) {
	return factory.createWhileStatement(props.expression, props.statement);
}

export function ForStatement(props: Props["createForStatement"]) {
	return factory.createForStatement(props.initializer, props.condition, props.incrementor, props.statement);
}

export function ForInStatement(props: Props["createForInStatement"]) {
	return factory.createForInStatement(props.initializer, props.expression, props.statement);
}

export function ForOfStatement(props: Props["createForOfStatement"]) {
	return factory.createForOfStatement(props.awaitModifier, props.initializer, props.expression, props.statement);
}

export function ContinueStatement(props: Props["createContinueStatement"]) {
	return factory.createContinueStatement(props.label);
}

export function BreakStatement(props: Props["createBreakStatement"]) {
	return factory.createBreakStatement(props.label);
}

export function ReturnStatement(props: Props["createReturnStatement"]) {
	return factory.createReturnStatement(props.expression);
}

export function WithStatement(props: Props["createWithStatement"]) {
	return factory.createWithStatement(props.expression, props.statement);
}

export function SwitchStatement(props: Props["createSwitchStatement"]) {
	return factory.createSwitchStatement(props.expression, props.caseBlock);
}

export function LabeledStatement(props: Props["createLabeledStatement"]) {
	return factory.createLabeledStatement(props.label, props.statement);
}

export function ThrowStatement(props: Props["createThrowStatement"]) {
	return factory.createThrowStatement(props.expression);
}

export function TryStatement(props: Props["createTryStatement"]) {
	return factory.createTryStatement(props.tryBlock, props.catchClause, props.finallyBlock);
}

export function DebuggerStatement() {
	return factory.createDebuggerStatement();
}

export function VariableDeclaration(props: Props["createVariableDeclaration"]) {
	return factory.createVariableDeclaration(props.name, props.exclamationToken, props.type, props.initializer);
}

export function VariableDeclarationList(props: Props["createVariableDeclarationList"]) {
	return factory.createVariableDeclarationList(props.declarations, props.flags);
}

export function FunctionDeclaration(props: Props["createFunctionDeclaration"]) {
	return factory.createFunctionDeclaration(props.decorators, props.modifiers, props.asteriskToken, props.name, props.typeParameters, props.parameters, props.type, props.body);
}

export function ClassDeclaration(props: Props["createClassDeclaration"]) {
	return factory.createClassDeclaration(props.decorators, props.modifiers, props.name, props.typeParameters, props.heritageClauses, props.members);
}

export function InterfaceDeclaration(props: Props["createInterfaceDeclaration"]) {
	return factory.createInterfaceDeclaration(props.decorators, props.modifiers, props.name, props.typeParameters, props.heritageClauses, props.members);
}

export function TypeAliasDeclaration(props: Props["createTypeAliasDeclaration"]) {
	return factory.createTypeAliasDeclaration(props.decorators, props.modifiers, props.name, props.typeParameters, props.type);
}

export function EnumDeclaration(props: Props["createEnumDeclaration"]) {
	return factory.createEnumDeclaration(props.decorators, props.modifiers, props.name, props.members);
}

export function ModuleDeclaration(props: Props["createModuleDeclaration"]) {
	return factory.createModuleDeclaration(props.decorators, props.modifiers, props.name, props.body, props.flags);
}

export function ModuleBlock(props: Props["createModuleBlock"]) {
	return factory.createModuleBlock(props.statements);
}

export function CaseBlock(props: Props["createCaseBlock"]) {
	return factory.createCaseBlock(props.clauses);
}

export function NamespaceExportDeclaration(props: Props["createNamespaceExportDeclaration"]) {
	return factory.createNamespaceExportDeclaration(props.name);
}

export function ImportEqualsDeclaration(props: Props["createImportEqualsDeclaration"]) {
	return factory.createImportEqualsDeclaration(props.decorators, props.modifiers, props.isTypeOnly, props.name, props.moduleReference);
}

export function ImportDeclaration(props: Props["createImportDeclaration"]) {
	return factory.createImportDeclaration(props.decorators, props.modifiers, props.importClause, props.moduleSpecifier, props.assertClause);
}

export function ImportClause(props: Props["createImportClause"]) {
	return factory.createImportClause(props.isTypeOnly, props.name, props.namedBindings);
}

export function AssertClause(props: Props["createAssertClause"]) {
	return factory.createAssertClause(props.elements, props.multiLine);
}

export function AssertEntry(props: Props["createAssertEntry"]) {
	return factory.createAssertEntry(props.name, props.value);
}

export function NamespaceImport(props: Props["createNamespaceImport"]) {
	return factory.createNamespaceImport(props.name);
}

export function NamespaceExport(props: Props["createNamespaceExport"]) {
	return factory.createNamespaceExport(props.name);
}

export function NamedImports(props: Props["createNamedImports"]) {
	return factory.createNamedImports(props.elements);
}

export function ImportSpecifier(props: Props["createImportSpecifier"]) {
	return factory.createImportSpecifier(props.isTypeOnly, props.propertyName, props.name);
}

export function ExportAssignment(props: Props["createExportAssignment"]) {
	return factory.createExportAssignment(props.decorators, props.modifiers, props.isExportEquals, props.expression);
}

export function ExportDeclaration(props: Props["createExportDeclaration"]) {
	return factory.createExportDeclaration(props.decorators, props.modifiers, props.isTypeOnly, props.exportClause, props.moduleSpecifier, props.assertClause);
}

export function NamedExports(props: Props["createNamedExports"]) {
	return factory.createNamedExports(props.elements);
}

export function ExportSpecifier(props: Props["createExportSpecifier"]) {
	return factory.createExportSpecifier(props.isTypeOnly, props.propertyName, props.name);
}

export function ExternalModuleReference(props: Props["createExternalModuleReference"]) {
	return factory.createExternalModuleReference(props.expression);
}

export function JSDocAllType() {
	return factory.createJSDocAllType();
}

export function JSDocUnknownType() {
	return factory.createJSDocUnknownType();
}

export function JSDocNonNullableType(props: Props["createJSDocNonNullableType"]) {
	return factory.createJSDocNonNullableType(props.type);
}

export function JSDocNullableType(props: Props["createJSDocNullableType"]) {
	return factory.createJSDocNullableType(props.type);
}

export function JSDocOptionalType(props: Props["createJSDocOptionalType"]) {
	return factory.createJSDocOptionalType(props.type);
}

export function JSDocVariadicType(props: Props["createJSDocVariadicType"]) {
	return factory.createJSDocVariadicType(props.type);
}

export function JSDocNamepathType(props: Props["createJSDocNamepathType"]) {
	return factory.createJSDocNamepathType(props.type);
}

export function JSDocFunctionType(props: Props["createJSDocFunctionType"]) {
	return factory.createJSDocFunctionType(props.parameters, props.type);
}

export function JSDocTypeLiteral(props: Props["createJSDocTypeLiteral"]) {
	return factory.createJSDocTypeLiteral(props.propertyTags, props.isArrayType);
}

export function JSDocTypeExpression(props: Props["createJSDocTypeExpression"]) {
	return factory.createJSDocTypeExpression(props.type);
}

export function JSDocSignature(props: Props["createJSDocSignature"]) {
	return factory.createJSDocSignature(props.typeParameters, props.parameters, props.type);
}

export function JSDocTemplateTag(props: Props["createJSDocTemplateTag"]) {
	return factory.createJSDocTemplateTag(props.tagName, props.constraint, props.typeParameters, props.comment);
}

export function JSDocTypedefTag(props: Props["createJSDocTypedefTag"]) {
	return factory.createJSDocTypedefTag(props.tagName, props.typeExpression, props.fullName, props.comment);
}

export function JSDocParameterTag(props: Props["createJSDocParameterTag"]) {
	return factory.createJSDocParameterTag(props.tagName, props.name, props.isBracketed, props.typeExpression, props.isNameFirst, props.comment);
}

export function JSDocPropertyTag(props: Props["createJSDocPropertyTag"]) {
	return factory.createJSDocPropertyTag(props.tagName, props.name, props.isBracketed, props.typeExpression, props.isNameFirst, props.comment);
}

export function JSDocCallbackTag(props: Props["createJSDocCallbackTag"]) {
	return factory.createJSDocCallbackTag(props.tagName, props.typeExpression, props.fullName, props.comment);
}

export function JSDocAugmentsTag(props: Props["createJSDocAugmentsTag"]) {
	return factory.createJSDocAugmentsTag(props.tagName, props.className, props.comment);
}

export function JSDocImplementsTag(props: Props["createJSDocImplementsTag"]) {
	return factory.createJSDocImplementsTag(props.tagName, props.className, props.comment);
}

export function JSDocSeeTag(props: Props["createJSDocSeeTag"]) {
	return factory.createJSDocSeeTag(props.tagName, props.name, props.comment);
}

export function JSDocNameReference(props: Props["createJSDocNameReference"]) {
	return factory.createJSDocNameReference(props.name);
}

export function JSDocMemberName(props: Props["createJSDocMemberName"]) {
	return factory.createJSDocMemberName(props.left, props.right);
}

export function JSDocLink(props: Props["createJSDocLink"]) {
	return factory.createJSDocLink(props.name, props.text);
}

export function JSDocLinkCode(props: Props["createJSDocLinkCode"]) {
	return factory.createJSDocLinkCode(props.name, props.text);
}

export function JSDocLinkPlain(props: Props["createJSDocLinkPlain"]) {
	return factory.createJSDocLinkPlain(props.name, props.text);
}

export function JSDocTypeTag(props: Props["createJSDocTypeTag"]) {
	return factory.createJSDocTypeTag(props.tagName, props.typeExpression, props.comment);
}

export function JSDocReturnTag(props: Props["createJSDocReturnTag"]) {
	return factory.createJSDocReturnTag(props.tagName, props.typeExpression, props.comment);
}

export function JSDocThisTag(props: Props["createJSDocThisTag"]) {
	return factory.createJSDocThisTag(props.tagName, props.typeExpression, props.comment);
}

export function JSDocEnumTag(props: Props["createJSDocEnumTag"]) {
	return factory.createJSDocEnumTag(props.tagName, props.typeExpression, props.comment);
}

export function JSDocAuthorTag(props: Props["createJSDocAuthorTag"]) {
	return factory.createJSDocAuthorTag(props.tagName, props.comment);
}

export function JSDocClassTag(props: Props["createJSDocClassTag"]) {
	return factory.createJSDocClassTag(props.tagName, props.comment);
}

export function JSDocPublicTag(props: Props["createJSDocPublicTag"]) {
	return factory.createJSDocPublicTag(props.tagName, props.comment);
}

export function JSDocPrivateTag(props: Props["createJSDocPrivateTag"]) {
	return factory.createJSDocPrivateTag(props.tagName, props.comment);
}

export function JSDocProtectedTag(props: Props["createJSDocProtectedTag"]) {
	return factory.createJSDocProtectedTag(props.tagName, props.comment);
}

export function JSDocReadonlyTag(props: Props["createJSDocReadonlyTag"]) {
	return factory.createJSDocReadonlyTag(props.tagName, props.comment);
}

export function JSDocOverrideTag(props: Props["createJSDocOverrideTag"]) {
	return factory.createJSDocOverrideTag(props.tagName, props.comment);
}

export function JSDocDeprecatedTag(props: Props["createJSDocDeprecatedTag"]) {
	return factory.createJSDocDeprecatedTag(props.tagName, props.comment);
}

export function JSDocUnknownTag(props: Props["createJSDocUnknownTag"]) {
	return factory.createJSDocUnknownTag(props.tagName, props.comment);
}

export function JSDocText(props: Props["createJSDocText"]) {
	return factory.createJSDocText(props.text);
}

export function JSDocComment(props: Props["createJSDocComment"]) {
	return factory.createJSDocComment(props.comment, props.tags);
}

export function JsxElement(props: Props["createJsxElement"]) {
	return factory.createJsxElement(props.openingElement, props.children, props.closingElement);
}

export function JsxSelfClosingElement(props: Props["createJsxSelfClosingElement"]) {
	return factory.createJsxSelfClosingElement(props.tagName, props.typeArguments, props.attributes);
}

export function JsxOpeningElement(props: Props["createJsxOpeningElement"]) {
	return factory.createJsxOpeningElement(props.tagName, props.typeArguments, props.attributes);
}

export function JsxClosingElement(props: Props["createJsxClosingElement"]) {
	return factory.createJsxClosingElement(props.tagName);
}

export function JsxFragment(props: Props["createJsxFragment"]) {
	return factory.createJsxFragment(props.openingFragment, props.children, props.closingFragment);
}

export function JsxText(props: Props["createJsxText"]) {
	return factory.createJsxText(props.text, props.containsOnlyTriviaWhiteSpaces);
}

export function JsxOpeningFragment() {
	return factory.createJsxOpeningFragment();
}

export function JsxJsxClosingFragment() {
	return factory.createJsxJsxClosingFragment();
}

export function JsxAttribute(props: Props["createJsxAttribute"]) {
	return factory.createJsxAttribute(props.name, props.initializer);
}

export function JsxAttributes(props: Props["createJsxAttributes"]) {
	return factory.createJsxAttributes(props.properties);
}

export function JsxSpreadAttribute(props: Props["createJsxSpreadAttribute"]) {
	return factory.createJsxSpreadAttribute(props.expression);
}

export function JsxExpression(props: Props["createJsxExpression"]) {
	return factory.createJsxExpression(props.dotDotDotToken, props.expression);
}

export function CaseClause(props: Props["createCaseClause"]) {
	return factory.createCaseClause(props.expression, props.statements);
}

export function DefaultClause(props: Props["createDefaultClause"]) {
	return factory.createDefaultClause(props.statements);
}

export function HeritageClause(props: Props["createHeritageClause"]) {
	return factory.createHeritageClause(props.token, props.types);
}

export function CatchClause(props: Props["createCatchClause"]) {
	return factory.createCatchClause(props.variableDeclaration, props.block);
}

export function PropertyAssignment(props: Props["createPropertyAssignment"]) {
	return factory.createPropertyAssignment(props.name, props.initializer);
}

export function ShorthandPropertyAssignment(props: Props["createShorthandPropertyAssignment"]) {
	return factory.createShorthandPropertyAssignment(props.name, props.objectAssignmentInitializer);
}

export function SpreadAssignment(props: Props["createSpreadAssignment"]) {
	return factory.createSpreadAssignment(props.expression);
}

export function EnumMember(props: Props["createEnumMember"]) {
	return factory.createEnumMember(props.name, props.initializer);
}

export function SourceFile(props: Props["createSourceFile"]) {
	return factory.createSourceFile(props.statements, props.endOfFileToken, props.flags);
}

export function Bundle(props: Props["createBundle"]) {
	return factory.createBundle(props.sourceFiles, props.prepends);
}

export function NotEmittedStatement(props: Props["createNotEmittedStatement"]) {
	return factory.createNotEmittedStatement(props.original);
}

export function PartiallyEmittedExpression(props: Props["createPartiallyEmittedExpression"]) {
	return factory.createPartiallyEmittedExpression(props.expression, props.original);
}

export function CommaListExpression(props: Props["createCommaListExpression"]) {
	return factory.createCommaListExpression(props.elements);
}

export function Comma(props: Props["createComma"]) {
	return factory.createComma(props.left, props.right);
}

export function Assignment(props: Props["createAssignment"]) {
	return factory.createAssignment(props.left, props.right);
}

export function LogicalOr(props: Props["createLogicalOr"]) {
	return factory.createLogicalOr(props.left, props.right);
}

export function LogicalAnd(props: Props["createLogicalAnd"]) {
	return factory.createLogicalAnd(props.left, props.right);
}

export function BitwiseOr(props: Props["createBitwiseOr"]) {
	return factory.createBitwiseOr(props.left, props.right);
}

export function BitwiseXor(props: Props["createBitwiseXor"]) {
	return factory.createBitwiseXor(props.left, props.right);
}

export function BitwiseAnd(props: Props["createBitwiseAnd"]) {
	return factory.createBitwiseAnd(props.left, props.right);
}

export function StrictEquality(props: Props["createStrictEquality"]) {
	return factory.createStrictEquality(props.left, props.right);
}

export function StrictInequality(props: Props["createStrictInequality"]) {
	return factory.createStrictInequality(props.left, props.right);
}

export function Equality(props: Props["createEquality"]) {
	return factory.createEquality(props.left, props.right);
}

export function Inequality(props: Props["createInequality"]) {
	return factory.createInequality(props.left, props.right);
}

export function LessThan(props: Props["createLessThan"]) {
	return factory.createLessThan(props.left, props.right);
}

export function LessThanEquals(props: Props["createLessThanEquals"]) {
	return factory.createLessThanEquals(props.left, props.right);
}

export function GreaterThan(props: Props["createGreaterThan"]) {
	return factory.createGreaterThan(props.left, props.right);
}

export function GreaterThanEquals(props: Props["createGreaterThanEquals"]) {
	return factory.createGreaterThanEquals(props.left, props.right);
}

export function LeftShift(props: Props["createLeftShift"]) {
	return factory.createLeftShift(props.left, props.right);
}

export function RightShift(props: Props["createRightShift"]) {
	return factory.createRightShift(props.left, props.right);
}

export function UnsignedRightShift(props: Props["createUnsignedRightShift"]) {
	return factory.createUnsignedRightShift(props.left, props.right);
}

export function Add(props: Props["createAdd"]) {
	return factory.createAdd(props.left, props.right);
}

export function Subtract(props: Props["createSubtract"]) {
	return factory.createSubtract(props.left, props.right);
}

export function Multiply(props: Props["createMultiply"]) {
	return factory.createMultiply(props.left, props.right);
}

export function Divide(props: Props["createDivide"]) {
	return factory.createDivide(props.left, props.right);
}

export function Modulo(props: Props["createModulo"]) {
	return factory.createModulo(props.left, props.right);
}

export function Exponent(props: Props["createExponent"]) {
	return factory.createExponent(props.left, props.right);
}

export function PrefixPlus(props: Props["createPrefixPlus"]) {
	return factory.createPrefixPlus(props.operand);
}

export function PrefixMinus(props: Props["createPrefixMinus"]) {
	return factory.createPrefixMinus(props.operand);
}

export function PrefixIncrement(props: Props["createPrefixIncrement"]) {
	return factory.createPrefixIncrement(props.operand);
}

export function PrefixDecrement(props: Props["createPrefixDecrement"]) {
	return factory.createPrefixDecrement(props.operand);
}

export function BitwiseNot(props: Props["createBitwiseNot"]) {
	return factory.createBitwiseNot(props.operand);
}

export function LogicalNot(props: Props["createLogicalNot"]) {
	return factory.createLogicalNot(props.operand);
}

export function PostfixIncrement(props: Props["createPostfixIncrement"]) {
	return factory.createPostfixIncrement(props.operand);
}

export function PostfixDecrement(props: Props["createPostfixDecrement"]) {
	return factory.createPostfixDecrement(props.operand);
}

export function ImmediatelyInvokedFunctionExpression(props: Props["createImmediatelyInvokedFunctionExpression"]) {
	return factory.createImmediatelyInvokedFunctionExpression(props.statements, props.param, props.paramValue);
}

export function ImmediatelyInvokedArrowFunction(props: Props["createImmediatelyInvokedArrowFunction"]) {
	return factory.createImmediatelyInvokedArrowFunction(props.statements, props.param, props.paramValue);
}

export function VoidZero() {
	return factory.createVoidZero();
}

export function ExportDefault(props: Props["createExportDefault"]) {
	return factory.createExportDefault(props.expression);
}

export function ExternalModuleExport(props: Props["createExternalModuleExport"]) {
	return factory.createExternalModuleExport(props.exportName);
}
