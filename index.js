"use strict";
exports.__esModule = true;
exports.IntersectionTypeNode = exports.UnionTypeNode = exports.RestTypeNode = exports.OptionalTypeNode = exports.NamedTupleMember = exports.TupleTypeNode = exports.ArrayTypeNode = exports.TypeLiteralNode = exports.TypeQueryNode = exports.ConstructorTypeNode = exports.FunctionTypeNode = exports.TypeReferenceNode = exports.TypePredicateNode = exports.KeywordTypeNode = exports.TemplateLiteralTypeSpan = exports.ClassStaticBlockDeclaration = exports.IndexSignature = exports.ConstructSignature = exports.CallSignature = exports.SetAccessorDeclaration = exports.GetAccessorDeclaration = exports.ConstructorDeclaration = exports.MethodDeclaration = exports.MethodSignature = exports.PropertyDeclaration = exports.PropertySignature = exports.Decorator = exports.ParameterDeclaration = exports.TypeParameterDeclaration = exports.ComputedPropertyName = exports.QualifiedName = exports.ModifiersFromModifierFlags = exports.Modifier = exports.False = exports.True = exports.Null = exports.This = exports.Super = exports.Token = exports.PrivateIdentifier = exports.UniqueName = exports.LoopVariable = exports.TempVariable = exports.Identifier = exports.RegularExpressionLiteral = exports.StringLiteralFromNode = exports.StringLiteral = exports.BigIntLiteral = exports.NumericLiteral = exports.NodeArray = void 0;
exports.TemplateSpan = exports.MetaProperty = exports.NonNullChain = exports.NonNullExpression = exports.AsExpression = exports.ExpressionWithTypeArguments = exports.OmittedExpression = exports.ClassExpression = exports.SpreadElement = exports.YieldExpression = exports.NoSubstitutionTemplateLiteral = exports.TemplateTail = exports.TemplateMiddle = exports.TemplateHead = exports.TemplateExpression = exports.ConditionalExpression = exports.BinaryExpression = exports.PostfixUnaryExpression = exports.PrefixUnaryExpression = exports.AwaitExpression = exports.VoidExpression = exports.TypeOfExpression = exports.DeleteExpression = exports.ArrowFunction = exports.FunctionExpression = exports.ParenthesizedExpression = exports.TypeAssertion = exports.TaggedTemplateExpression = exports.NewExpression = exports.CallChain = exports.CallExpression = exports.ElementAccessChain = exports.ElementAccessExpression = exports.PropertyAccessChain = exports.PropertyAccessExpression = exports.ObjectLiteralExpression = exports.ArrayLiteralExpression = exports.BindingElement = exports.ArrayBindingPattern = exports.ObjectBindingPattern = exports.TemplateLiteralType = exports.LiteralTypeNode = exports.MappedTypeNode = exports.IndexedAccessTypeNode = exports.TypeOperatorNode = exports.ThisTypeNode = exports.ParenthesizedType = exports.ImportTypeNode = exports.InferTypeNode = exports.ConditionalTypeNode = void 0;
exports.JSDocOptionalType = exports.JSDocNullableType = exports.JSDocNonNullableType = exports.JSDocUnknownType = exports.JSDocAllType = exports.ExternalModuleReference = exports.ExportSpecifier = exports.NamedExports = exports.ExportDeclaration = exports.ExportAssignment = exports.ImportSpecifier = exports.NamedImports = exports.NamespaceExport = exports.NamespaceImport = exports.AssertEntry = exports.AssertClause = exports.ImportClause = exports.ImportDeclaration = exports.ImportEqualsDeclaration = exports.NamespaceExportDeclaration = exports.CaseBlock = exports.ModuleBlock = exports.ModuleDeclaration = exports.EnumDeclaration = exports.TypeAliasDeclaration = exports.InterfaceDeclaration = exports.ClassDeclaration = exports.FunctionDeclaration = exports.VariableDeclarationList = exports.VariableDeclaration = exports.DebuggerStatement = exports.TryStatement = exports.ThrowStatement = exports.LabeledStatement = exports.SwitchStatement = exports.WithStatement = exports.ReturnStatement = exports.BreakStatement = exports.ContinueStatement = exports.ForOfStatement = exports.ForInStatement = exports.ForStatement = exports.WhileStatement = exports.DoStatement = exports.IfStatement = exports.ExpressionStatement = exports.EmptyStatement = exports.VariableStatement = exports.Block = exports.SemicolonClassElement = void 0;
exports.CatchClause = exports.HeritageClause = exports.DefaultClause = exports.CaseClause = exports.JsxExpression = exports.JsxSpreadAttribute = exports.JsxAttributes = exports.JsxAttribute = exports.JsxJsxClosingFragment = exports.JsxOpeningFragment = exports.JsxText = exports.JsxFragment = exports.JsxClosingElement = exports.JsxOpeningElement = exports.JsxSelfClosingElement = exports.JsxElement = exports.JSDocComment = exports.JSDocText = exports.JSDocUnknownTag = exports.JSDocDeprecatedTag = exports.JSDocOverrideTag = exports.JSDocReadonlyTag = exports.JSDocProtectedTag = exports.JSDocPrivateTag = exports.JSDocPublicTag = exports.JSDocClassTag = exports.JSDocAuthorTag = exports.JSDocEnumTag = exports.JSDocThisTag = exports.JSDocReturnTag = exports.JSDocTypeTag = exports.JSDocLinkPlain = exports.JSDocLinkCode = exports.JSDocLink = exports.JSDocMemberName = exports.JSDocNameReference = exports.JSDocSeeTag = exports.JSDocImplementsTag = exports.JSDocAugmentsTag = exports.JSDocCallbackTag = exports.JSDocPropertyTag = exports.JSDocParameterTag = exports.JSDocTypedefTag = exports.JSDocTemplateTag = exports.JSDocSignature = exports.JSDocTypeExpression = exports.JSDocTypeLiteral = exports.JSDocFunctionType = exports.JSDocNamepathType = exports.JSDocVariadicType = void 0;
exports.ExternalModuleExport = exports.ExportDefault = exports.VoidZero = exports.ImmediatelyInvokedArrowFunction = exports.ImmediatelyInvokedFunctionExpression = exports.PostfixDecrement = exports.PostfixIncrement = exports.LogicalNot = exports.BitwiseNot = exports.PrefixDecrement = exports.PrefixIncrement = exports.PrefixMinus = exports.PrefixPlus = exports.Exponent = exports.Modulo = exports.Divide = exports.Multiply = exports.Subtract = exports.Add = exports.UnsignedRightShift = exports.RightShift = exports.LeftShift = exports.GreaterThanEquals = exports.GreaterThan = exports.LessThanEquals = exports.LessThan = exports.Inequality = exports.Equality = exports.StrictInequality = exports.StrictEquality = exports.BitwiseAnd = exports.BitwiseXor = exports.BitwiseOr = exports.LogicalAnd = exports.LogicalOr = exports.Assignment = exports.Comma = exports.CommaListExpression = exports.PartiallyEmittedExpression = exports.NotEmittedStatement = exports.Bundle = exports.SourceFile = exports.EnumMember = exports.SpreadAssignment = exports.ShorthandPropertyAssignment = exports.PropertyAssignment = void 0;
var typescript_1 = require("typescript");
function NodeArray(props) {
    return typescript_1.factory.createNodeArray(props.elements, props.hasTrailingComma);
}
exports.NodeArray = NodeArray;
function NumericLiteral(props) {
    return typescript_1.factory.createNumericLiteral(props.value, props.numericLiteralFlags);
}
exports.NumericLiteral = NumericLiteral;
function BigIntLiteral(props) {
    return typescript_1.factory.createBigIntLiteral(props.value);
}
exports.BigIntLiteral = BigIntLiteral;
function StringLiteral(props) {
    return typescript_1.factory.createStringLiteral(props.text, props.isSingleQuote, props.hasExtendedUnicodeEscape);
}
exports.StringLiteral = StringLiteral;
function StringLiteralFromNode(props) {
    return typescript_1.factory.createStringLiteralFromNode(props.sourceNode);
}
exports.StringLiteralFromNode = StringLiteralFromNode;
function RegularExpressionLiteral(props) {
    return typescript_1.factory.createRegularExpressionLiteral(props.text);
}
exports.RegularExpressionLiteral = RegularExpressionLiteral;
function Identifier(props) {
    return typescript_1.factory.createIdentifier(props.text, props.typeArguments, props.originalKeywordKind);
}
exports.Identifier = Identifier;
function TempVariable(props) {
    return typescript_1.factory.createTempVariable(props.recordTempVariable, props.reservedInNestedScopes);
}
exports.TempVariable = TempVariable;
function LoopVariable(props) {
    return typescript_1.factory.createLoopVariable(props.reservedInNestedScopes);
}
exports.LoopVariable = LoopVariable;
function UniqueName(props) {
    return typescript_1.factory.createUniqueName(props.text, props.flags);
}
exports.UniqueName = UniqueName;
function PrivateIdentifier(props) {
    return typescript_1.factory.createPrivateIdentifier(props.text);
}
exports.PrivateIdentifier = PrivateIdentifier;
function Token(props) {
    return typescript_1.factory.createToken(props.token);
}
exports.Token = Token;
function Super() {
    return typescript_1.factory.createSuper();
}
exports.Super = Super;
function This() {
    return typescript_1.factory.createThis();
}
exports.This = This;
function Null() {
    return typescript_1.factory.createNull();
}
exports.Null = Null;
function True() {
    return typescript_1.factory.createTrue();
}
exports.True = True;
function False() {
    return typescript_1.factory.createFalse();
}
exports.False = False;
function Modifier(props) {
    return typescript_1.factory.createModifier(props.kind);
}
exports.Modifier = Modifier;
function ModifiersFromModifierFlags(props) {
    return typescript_1.factory.createModifiersFromModifierFlags(props.flags);
}
exports.ModifiersFromModifierFlags = ModifiersFromModifierFlags;
function QualifiedName(props) {
    return typescript_1.factory.createQualifiedName(props.left, props.right);
}
exports.QualifiedName = QualifiedName;
function ComputedPropertyName(props) {
    return typescript_1.factory.createComputedPropertyName(props.expression);
}
exports.ComputedPropertyName = ComputedPropertyName;
function TypeParameterDeclaration(props) {
    return typescript_1.factory.createTypeParameterDeclaration(props.name, props.constraint, props.defaultType);
}
exports.TypeParameterDeclaration = TypeParameterDeclaration;
function ParameterDeclaration(props) {
    return typescript_1.factory.createParameterDeclaration(props.decorators, props.modifiers, props.dotDotDotToken, props.name, props.questionToken, props.type, props.initializer);
}
exports.ParameterDeclaration = ParameterDeclaration;
function Decorator(props) {
    return typescript_1.factory.createDecorator(props.expression);
}
exports.Decorator = Decorator;
function PropertySignature(props) {
    return typescript_1.factory.createPropertySignature(props.modifiers, props.name, props.questionToken, props.type);
}
exports.PropertySignature = PropertySignature;
function PropertyDeclaration(props) {
    return typescript_1.factory.createPropertyDeclaration(props.decorators, props.modifiers, props.name, props.questionOrExclamationToken, props.type, props.initializer);
}
exports.PropertyDeclaration = PropertyDeclaration;
function MethodSignature(props) {
    return typescript_1.factory.createMethodSignature(props.modifiers, props.name, props.questionToken, props.typeParameters, props.parameters, props.type);
}
exports.MethodSignature = MethodSignature;
function MethodDeclaration(props) {
    return typescript_1.factory.createMethodDeclaration(props.decorators, props.modifiers, props.asteriskToken, props.name, props.questionToken, props.typeParameters, props.parameters, props.type, props.body);
}
exports.MethodDeclaration = MethodDeclaration;
function ConstructorDeclaration(props) {
    return typescript_1.factory.createConstructorDeclaration(props.decorators, props.modifiers, props.parameters, props.body);
}
exports.ConstructorDeclaration = ConstructorDeclaration;
function GetAccessorDeclaration(props) {
    return typescript_1.factory.createGetAccessorDeclaration(props.decorators, props.modifiers, props.name, props.parameters, props.type, props.body);
}
exports.GetAccessorDeclaration = GetAccessorDeclaration;
function SetAccessorDeclaration(props) {
    return typescript_1.factory.createSetAccessorDeclaration(props.decorators, props.modifiers, props.name, props.parameters, props.body);
}
exports.SetAccessorDeclaration = SetAccessorDeclaration;
function CallSignature(props) {
    return typescript_1.factory.createCallSignature(props.typeParameters, props.parameters, props.type);
}
exports.CallSignature = CallSignature;
function ConstructSignature(props) {
    return typescript_1.factory.createConstructSignature(props.typeParameters, props.parameters, props.type);
}
exports.ConstructSignature = ConstructSignature;
function IndexSignature(props) {
    return typescript_1.factory.createIndexSignature(props.decorators, props.modifiers, props.parameters, props.type);
}
exports.IndexSignature = IndexSignature;
function ClassStaticBlockDeclaration(props) {
    return typescript_1.factory.createClassStaticBlockDeclaration(props.decorators, props.modifiers, props.body);
}
exports.ClassStaticBlockDeclaration = ClassStaticBlockDeclaration;
function TemplateLiteralTypeSpan(props) {
    return typescript_1.factory.createTemplateLiteralTypeSpan(props.type, props.literal);
}
exports.TemplateLiteralTypeSpan = TemplateLiteralTypeSpan;
function KeywordTypeNode(props) {
    return typescript_1.factory.createKeywordTypeNode(props.kind);
}
exports.KeywordTypeNode = KeywordTypeNode;
function TypePredicateNode(props) {
    return typescript_1.factory.createTypePredicateNode(props.assertsModifier, props.parameterName, props.type);
}
exports.TypePredicateNode = TypePredicateNode;
function TypeReferenceNode(props) {
    return typescript_1.factory.createTypeReferenceNode(props.typeName, props.typeArguments);
}
exports.TypeReferenceNode = TypeReferenceNode;
function FunctionTypeNode(props) {
    return typescript_1.factory.createFunctionTypeNode(props.typeParameters, props.parameters, props.type);
}
exports.FunctionTypeNode = FunctionTypeNode;
function ConstructorTypeNode() {
    return typescript_1.factory.createConstructorTypeNode();
}
exports.ConstructorTypeNode = ConstructorTypeNode;
function TypeQueryNode(props) {
    return typescript_1.factory.createTypeQueryNode(props.exprName);
}
exports.TypeQueryNode = TypeQueryNode;
function TypeLiteralNode(props) {
    return typescript_1.factory.createTypeLiteralNode(props.members);
}
exports.TypeLiteralNode = TypeLiteralNode;
function ArrayTypeNode(props) {
    return typescript_1.factory.createArrayTypeNode(props.elementType);
}
exports.ArrayTypeNode = ArrayTypeNode;
function TupleTypeNode(props) {
    return typescript_1.factory.createTupleTypeNode(props.elements);
}
exports.TupleTypeNode = TupleTypeNode;
function NamedTupleMember(props) {
    return typescript_1.factory.createNamedTupleMember(props.dotDotDotToken, props.name, props.questionToken, props.type);
}
exports.NamedTupleMember = NamedTupleMember;
function OptionalTypeNode(props) {
    return typescript_1.factory.createOptionalTypeNode(props.type);
}
exports.OptionalTypeNode = OptionalTypeNode;
function RestTypeNode(props) {
    return typescript_1.factory.createRestTypeNode(props.type);
}
exports.RestTypeNode = RestTypeNode;
function UnionTypeNode(props) {
    return typescript_1.factory.createUnionTypeNode(props.types);
}
exports.UnionTypeNode = UnionTypeNode;
function IntersectionTypeNode(props) {
    return typescript_1.factory.createIntersectionTypeNode(props.types);
}
exports.IntersectionTypeNode = IntersectionTypeNode;
function ConditionalTypeNode(props) {
    return typescript_1.factory.createConditionalTypeNode(props.checkType, props.extendsType, props.trueType, props.falseType);
}
exports.ConditionalTypeNode = ConditionalTypeNode;
function InferTypeNode(props) {
    return typescript_1.factory.createInferTypeNode(props.typeParameter);
}
exports.InferTypeNode = InferTypeNode;
function ImportTypeNode(props) {
    return typescript_1.factory.createImportTypeNode(props.argument, props.qualifier, props.typeArguments, props.isTypeOf);
}
exports.ImportTypeNode = ImportTypeNode;
function ParenthesizedType(props) {
    return typescript_1.factory.createParenthesizedType(props.type);
}
exports.ParenthesizedType = ParenthesizedType;
function ThisTypeNode() {
    return typescript_1.factory.createThisTypeNode();
}
exports.ThisTypeNode = ThisTypeNode;
function TypeOperatorNode(props) {
    return typescript_1.factory.createTypeOperatorNode(props.operator, props.type);
}
exports.TypeOperatorNode = TypeOperatorNode;
function IndexedAccessTypeNode(props) {
    return typescript_1.factory.createIndexedAccessTypeNode(props.objectType, props.indexType);
}
exports.IndexedAccessTypeNode = IndexedAccessTypeNode;
function MappedTypeNode(props) {
    return typescript_1.factory.createMappedTypeNode(props.readonlyToken, props.typeParameter, props.nameType, props.questionToken, props.type, props.members);
}
exports.MappedTypeNode = MappedTypeNode;
function LiteralTypeNode(props) {
    return typescript_1.factory.createLiteralTypeNode(props.literal);
}
exports.LiteralTypeNode = LiteralTypeNode;
function TemplateLiteralType(props) {
    return typescript_1.factory.createTemplateLiteralType(props.head, props.templateSpans);
}
exports.TemplateLiteralType = TemplateLiteralType;
function ObjectBindingPattern(props) {
    return typescript_1.factory.createObjectBindingPattern(props.elements);
}
exports.ObjectBindingPattern = ObjectBindingPattern;
function ArrayBindingPattern(props) {
    return typescript_1.factory.createArrayBindingPattern(props.elements);
}
exports.ArrayBindingPattern = ArrayBindingPattern;
function BindingElement(props) {
    return typescript_1.factory.createBindingElement(props.dotDotDotToken, props.propertyName, props.name, props.initializer);
}
exports.BindingElement = BindingElement;
function ArrayLiteralExpression(props) {
    return typescript_1.factory.createArrayLiteralExpression(props.elements, props.multiLine);
}
exports.ArrayLiteralExpression = ArrayLiteralExpression;
function ObjectLiteralExpression(props) {
    return typescript_1.factory.createObjectLiteralExpression(props.properties, props.multiLine);
}
exports.ObjectLiteralExpression = ObjectLiteralExpression;
function PropertyAccessExpression(props) {
    return typescript_1.factory.createPropertyAccessExpression(props.expression, props.name);
}
exports.PropertyAccessExpression = PropertyAccessExpression;
function PropertyAccessChain(props) {
    return typescript_1.factory.createPropertyAccessChain(props.expression, props.questionDotToken, props.name);
}
exports.PropertyAccessChain = PropertyAccessChain;
function ElementAccessExpression(props) {
    return typescript_1.factory.createElementAccessExpression(props.expression, props.index);
}
exports.ElementAccessExpression = ElementAccessExpression;
function ElementAccessChain(props) {
    return typescript_1.factory.createElementAccessChain(props.expression, props.questionDotToken, props.index);
}
exports.ElementAccessChain = ElementAccessChain;
function CallExpression(props) {
    return typescript_1.factory.createCallExpression(props.expression, props.typeArguments, props.argumentsArray);
}
exports.CallExpression = CallExpression;
function CallChain(props) {
    return typescript_1.factory.createCallChain(props.expression, props.questionDotToken, props.typeArguments, props.argumentsArray);
}
exports.CallChain = CallChain;
function NewExpression(props) {
    return typescript_1.factory.createNewExpression(props.expression, props.typeArguments, props.argumentsArray);
}
exports.NewExpression = NewExpression;
function TaggedTemplateExpression(props) {
    return typescript_1.factory.createTaggedTemplateExpression(props.tag, props.typeArguments, props.template);
}
exports.TaggedTemplateExpression = TaggedTemplateExpression;
function TypeAssertion(props) {
    return typescript_1.factory.createTypeAssertion(props.type, props.expression);
}
exports.TypeAssertion = TypeAssertion;
function ParenthesizedExpression(props) {
    return typescript_1.factory.createParenthesizedExpression(props.expression);
}
exports.ParenthesizedExpression = ParenthesizedExpression;
function FunctionExpression(props) {
    return typescript_1.factory.createFunctionExpression(props.modifiers, props.asteriskToken, props.name, props.typeParameters, props.parameters, props.type, props.body);
}
exports.FunctionExpression = FunctionExpression;
function ArrowFunction(props) {
    return typescript_1.factory.createArrowFunction(props.modifiers, props.typeParameters, props.parameters, props.type, props.equalsGreaterThanToken, props.body);
}
exports.ArrowFunction = ArrowFunction;
function DeleteExpression(props) {
    return typescript_1.factory.createDeleteExpression(props.expression);
}
exports.DeleteExpression = DeleteExpression;
function TypeOfExpression(props) {
    return typescript_1.factory.createTypeOfExpression(props.expression);
}
exports.TypeOfExpression = TypeOfExpression;
function VoidExpression(props) {
    return typescript_1.factory.createVoidExpression(props.expression);
}
exports.VoidExpression = VoidExpression;
function AwaitExpression(props) {
    return typescript_1.factory.createAwaitExpression(props.expression);
}
exports.AwaitExpression = AwaitExpression;
function PrefixUnaryExpression(props) {
    return typescript_1.factory.createPrefixUnaryExpression(props.operator, props.operand);
}
exports.PrefixUnaryExpression = PrefixUnaryExpression;
function PostfixUnaryExpression(props) {
    return typescript_1.factory.createPostfixUnaryExpression(props.operand, props.operator);
}
exports.PostfixUnaryExpression = PostfixUnaryExpression;
function BinaryExpression(props) {
    return typescript_1.factory.createBinaryExpression(props.left, props.operator, props.right);
}
exports.BinaryExpression = BinaryExpression;
function ConditionalExpression(props) {
    return typescript_1.factory.createConditionalExpression(props.condition, props.questionToken, props.whenTrue, props.colonToken, props.whenFalse);
}
exports.ConditionalExpression = ConditionalExpression;
function TemplateExpression(props) {
    return typescript_1.factory.createTemplateExpression(props.head, props.templateSpans);
}
exports.TemplateExpression = TemplateExpression;
function TemplateHead(props) {
    return typescript_1.factory.createTemplateHead(props.text, props.rawText, props.templateFlags);
}
exports.TemplateHead = TemplateHead;
function TemplateMiddle(props) {
    return typescript_1.factory.createTemplateMiddle(props.text, props.rawText, props.templateFlags);
}
exports.TemplateMiddle = TemplateMiddle;
function TemplateTail(props) {
    return typescript_1.factory.createTemplateTail(props.text, props.rawText, props.templateFlags);
}
exports.TemplateTail = TemplateTail;
function NoSubstitutionTemplateLiteral(props) {
    return typescript_1.factory.createNoSubstitutionTemplateLiteral(props.text, props.rawText, props.templateFlags);
}
exports.NoSubstitutionTemplateLiteral = NoSubstitutionTemplateLiteral;
function YieldExpression(props) {
    return typescript_1.factory.createYieldExpression(props.asteriskToken, props.expression);
}
exports.YieldExpression = YieldExpression;
function SpreadElement(props) {
    return typescript_1.factory.createSpreadElement(props.expression);
}
exports.SpreadElement = SpreadElement;
function ClassExpression(props) {
    return typescript_1.factory.createClassExpression(props.decorators, props.modifiers, props.name, props.typeParameters, props.heritageClauses, props.members);
}
exports.ClassExpression = ClassExpression;
function OmittedExpression() {
    return typescript_1.factory.createOmittedExpression();
}
exports.OmittedExpression = OmittedExpression;
function ExpressionWithTypeArguments(props) {
    return typescript_1.factory.createExpressionWithTypeArguments(props.expression, props.typeArguments);
}
exports.ExpressionWithTypeArguments = ExpressionWithTypeArguments;
function AsExpression(props) {
    return typescript_1.factory.createAsExpression(props.expression, props.type);
}
exports.AsExpression = AsExpression;
function NonNullExpression(props) {
    return typescript_1.factory.createNonNullExpression(props.expression);
}
exports.NonNullExpression = NonNullExpression;
function NonNullChain(props) {
    return typescript_1.factory.createNonNullChain(props.expression);
}
exports.NonNullChain = NonNullChain;
function MetaProperty(props) {
    return typescript_1.factory.createMetaProperty(props.keywordToken, props.name);
}
exports.MetaProperty = MetaProperty;
function TemplateSpan(props) {
    return typescript_1.factory.createTemplateSpan(props.expression, props.literal);
}
exports.TemplateSpan = TemplateSpan;
function SemicolonClassElement() {
    return typescript_1.factory.createSemicolonClassElement();
}
exports.SemicolonClassElement = SemicolonClassElement;
function Block(props) {
    return typescript_1.factory.createBlock(props.statements, props.multiLine);
}
exports.Block = Block;
function VariableStatement(props) {
    return typescript_1.factory.createVariableStatement(props.modifiers, props.declarationList);
}
exports.VariableStatement = VariableStatement;
function EmptyStatement() {
    return typescript_1.factory.createEmptyStatement();
}
exports.EmptyStatement = EmptyStatement;
function ExpressionStatement(props) {
    return typescript_1.factory.createExpressionStatement(props.expression);
}
exports.ExpressionStatement = ExpressionStatement;
function IfStatement(props) {
    return typescript_1.factory.createIfStatement(props.expression, props.thenStatement, props.elseStatement);
}
exports.IfStatement = IfStatement;
function DoStatement(props) {
    return typescript_1.factory.createDoStatement(props.statement, props.expression);
}
exports.DoStatement = DoStatement;
function WhileStatement(props) {
    return typescript_1.factory.createWhileStatement(props.expression, props.statement);
}
exports.WhileStatement = WhileStatement;
function ForStatement(props) {
    return typescript_1.factory.createForStatement(props.initializer, props.condition, props.incrementor, props.statement);
}
exports.ForStatement = ForStatement;
function ForInStatement(props) {
    return typescript_1.factory.createForInStatement(props.initializer, props.expression, props.statement);
}
exports.ForInStatement = ForInStatement;
function ForOfStatement(props) {
    return typescript_1.factory.createForOfStatement(props.awaitModifier, props.initializer, props.expression, props.statement);
}
exports.ForOfStatement = ForOfStatement;
function ContinueStatement(props) {
    return typescript_1.factory.createContinueStatement(props.label);
}
exports.ContinueStatement = ContinueStatement;
function BreakStatement(props) {
    return typescript_1.factory.createBreakStatement(props.label);
}
exports.BreakStatement = BreakStatement;
function ReturnStatement(props) {
    return typescript_1.factory.createReturnStatement(props.expression);
}
exports.ReturnStatement = ReturnStatement;
function WithStatement(props) {
    return typescript_1.factory.createWithStatement(props.expression, props.statement);
}
exports.WithStatement = WithStatement;
function SwitchStatement(props) {
    return typescript_1.factory.createSwitchStatement(props.expression, props.caseBlock);
}
exports.SwitchStatement = SwitchStatement;
function LabeledStatement(props) {
    return typescript_1.factory.createLabeledStatement(props.label, props.statement);
}
exports.LabeledStatement = LabeledStatement;
function ThrowStatement(props) {
    return typescript_1.factory.createThrowStatement(props.expression);
}
exports.ThrowStatement = ThrowStatement;
function TryStatement(props) {
    return typescript_1.factory.createTryStatement(props.tryBlock, props.catchClause, props.finallyBlock);
}
exports.TryStatement = TryStatement;
function DebuggerStatement() {
    return typescript_1.factory.createDebuggerStatement();
}
exports.DebuggerStatement = DebuggerStatement;
function VariableDeclaration(props) {
    return typescript_1.factory.createVariableDeclaration(props.name, props.exclamationToken, props.type, props.initializer);
}
exports.VariableDeclaration = VariableDeclaration;
function VariableDeclarationList(props) {
    return typescript_1.factory.createVariableDeclarationList(props.declarations, props.flags);
}
exports.VariableDeclarationList = VariableDeclarationList;
function FunctionDeclaration(props) {
    return typescript_1.factory.createFunctionDeclaration(props.decorators, props.modifiers, props.asteriskToken, props.name, props.typeParameters, props.parameters, props.type, props.body);
}
exports.FunctionDeclaration = FunctionDeclaration;
function ClassDeclaration(props) {
    return typescript_1.factory.createClassDeclaration(props.decorators, props.modifiers, props.name, props.typeParameters, props.heritageClauses, props.members);
}
exports.ClassDeclaration = ClassDeclaration;
function InterfaceDeclaration(props) {
    return typescript_1.factory.createInterfaceDeclaration(props.decorators, props.modifiers, props.name, props.typeParameters, props.heritageClauses, props.members);
}
exports.InterfaceDeclaration = InterfaceDeclaration;
function TypeAliasDeclaration(props) {
    return typescript_1.factory.createTypeAliasDeclaration(props.decorators, props.modifiers, props.name, props.typeParameters, props.type);
}
exports.TypeAliasDeclaration = TypeAliasDeclaration;
function EnumDeclaration(props) {
    return typescript_1.factory.createEnumDeclaration(props.decorators, props.modifiers, props.name, props.members);
}
exports.EnumDeclaration = EnumDeclaration;
function ModuleDeclaration(props) {
    return typescript_1.factory.createModuleDeclaration(props.decorators, props.modifiers, props.name, props.body, props.flags);
}
exports.ModuleDeclaration = ModuleDeclaration;
function ModuleBlock(props) {
    return typescript_1.factory.createModuleBlock(props.statements);
}
exports.ModuleBlock = ModuleBlock;
function CaseBlock(props) {
    return typescript_1.factory.createCaseBlock(props.clauses);
}
exports.CaseBlock = CaseBlock;
function NamespaceExportDeclaration(props) {
    return typescript_1.factory.createNamespaceExportDeclaration(props.name);
}
exports.NamespaceExportDeclaration = NamespaceExportDeclaration;
function ImportEqualsDeclaration(props) {
    return typescript_1.factory.createImportEqualsDeclaration(props.decorators, props.modifiers, props.isTypeOnly, props.name, props.moduleReference);
}
exports.ImportEqualsDeclaration = ImportEqualsDeclaration;
function ImportDeclaration(props) {
    return typescript_1.factory.createImportDeclaration(props.decorators, props.modifiers, props.importClause, props.moduleSpecifier, props.assertClause);
}
exports.ImportDeclaration = ImportDeclaration;
function ImportClause(props) {
    return typescript_1.factory.createImportClause(props.isTypeOnly, props.name, props.namedBindings);
}
exports.ImportClause = ImportClause;
function AssertClause(props) {
    return typescript_1.factory.createAssertClause(props.elements, props.multiLine);
}
exports.AssertClause = AssertClause;
function AssertEntry(props) {
    return typescript_1.factory.createAssertEntry(props.name, props.value);
}
exports.AssertEntry = AssertEntry;
function NamespaceImport(props) {
    return typescript_1.factory.createNamespaceImport(props.name);
}
exports.NamespaceImport = NamespaceImport;
function NamespaceExport(props) {
    return typescript_1.factory.createNamespaceExport(props.name);
}
exports.NamespaceExport = NamespaceExport;
function NamedImports(props) {
    return typescript_1.factory.createNamedImports(props.elements);
}
exports.NamedImports = NamedImports;
function ImportSpecifier(props) {
    return typescript_1.factory.createImportSpecifier(props.isTypeOnly, props.propertyName, props.name);
}
exports.ImportSpecifier = ImportSpecifier;
function ExportAssignment(props) {
    return typescript_1.factory.createExportAssignment(props.decorators, props.modifiers, props.isExportEquals, props.expression);
}
exports.ExportAssignment = ExportAssignment;
function ExportDeclaration(props) {
    return typescript_1.factory.createExportDeclaration(props.decorators, props.modifiers, props.isTypeOnly, props.exportClause, props.moduleSpecifier, props.assertClause);
}
exports.ExportDeclaration = ExportDeclaration;
function NamedExports(props) {
    return typescript_1.factory.createNamedExports(props.elements);
}
exports.NamedExports = NamedExports;
function ExportSpecifier(props) {
    return typescript_1.factory.createExportSpecifier(props.isTypeOnly, props.propertyName, props.name);
}
exports.ExportSpecifier = ExportSpecifier;
function ExternalModuleReference(props) {
    return typescript_1.factory.createExternalModuleReference(props.expression);
}
exports.ExternalModuleReference = ExternalModuleReference;
function JSDocAllType() {
    return typescript_1.factory.createJSDocAllType();
}
exports.JSDocAllType = JSDocAllType;
function JSDocUnknownType() {
    return typescript_1.factory.createJSDocUnknownType();
}
exports.JSDocUnknownType = JSDocUnknownType;
function JSDocNonNullableType(props) {
    return typescript_1.factory.createJSDocNonNullableType(props.type);
}
exports.JSDocNonNullableType = JSDocNonNullableType;
function JSDocNullableType(props) {
    return typescript_1.factory.createJSDocNullableType(props.type);
}
exports.JSDocNullableType = JSDocNullableType;
function JSDocOptionalType(props) {
    return typescript_1.factory.createJSDocOptionalType(props.type);
}
exports.JSDocOptionalType = JSDocOptionalType;
function JSDocVariadicType(props) {
    return typescript_1.factory.createJSDocVariadicType(props.type);
}
exports.JSDocVariadicType = JSDocVariadicType;
function JSDocNamepathType(props) {
    return typescript_1.factory.createJSDocNamepathType(props.type);
}
exports.JSDocNamepathType = JSDocNamepathType;
function JSDocFunctionType(props) {
    return typescript_1.factory.createJSDocFunctionType(props.parameters, props.type);
}
exports.JSDocFunctionType = JSDocFunctionType;
function JSDocTypeLiteral(props) {
    return typescript_1.factory.createJSDocTypeLiteral(props.propertyTags, props.isArrayType);
}
exports.JSDocTypeLiteral = JSDocTypeLiteral;
function JSDocTypeExpression(props) {
    return typescript_1.factory.createJSDocTypeExpression(props.type);
}
exports.JSDocTypeExpression = JSDocTypeExpression;
function JSDocSignature(props) {
    return typescript_1.factory.createJSDocSignature(props.typeParameters, props.parameters, props.type);
}
exports.JSDocSignature = JSDocSignature;
function JSDocTemplateTag(props) {
    return typescript_1.factory.createJSDocTemplateTag(props.tagName, props.constraint, props.typeParameters, props.comment);
}
exports.JSDocTemplateTag = JSDocTemplateTag;
function JSDocTypedefTag(props) {
    return typescript_1.factory.createJSDocTypedefTag(props.tagName, props.typeExpression, props.fullName, props.comment);
}
exports.JSDocTypedefTag = JSDocTypedefTag;
function JSDocParameterTag(props) {
    return typescript_1.factory.createJSDocParameterTag(props.tagName, props.name, props.isBracketed, props.typeExpression, props.isNameFirst, props.comment);
}
exports.JSDocParameterTag = JSDocParameterTag;
function JSDocPropertyTag(props) {
    return typescript_1.factory.createJSDocPropertyTag(props.tagName, props.name, props.isBracketed, props.typeExpression, props.isNameFirst, props.comment);
}
exports.JSDocPropertyTag = JSDocPropertyTag;
function JSDocCallbackTag(props) {
    return typescript_1.factory.createJSDocCallbackTag(props.tagName, props.typeExpression, props.fullName, props.comment);
}
exports.JSDocCallbackTag = JSDocCallbackTag;
function JSDocAugmentsTag(props) {
    return typescript_1.factory.createJSDocAugmentsTag(props.tagName, props.className, props.comment);
}
exports.JSDocAugmentsTag = JSDocAugmentsTag;
function JSDocImplementsTag(props) {
    return typescript_1.factory.createJSDocImplementsTag(props.tagName, props.className, props.comment);
}
exports.JSDocImplementsTag = JSDocImplementsTag;
function JSDocSeeTag(props) {
    return typescript_1.factory.createJSDocSeeTag(props.tagName, props.name, props.comment);
}
exports.JSDocSeeTag = JSDocSeeTag;
function JSDocNameReference(props) {
    return typescript_1.factory.createJSDocNameReference(props.name);
}
exports.JSDocNameReference = JSDocNameReference;
function JSDocMemberName(props) {
    return typescript_1.factory.createJSDocMemberName(props.left, props.right);
}
exports.JSDocMemberName = JSDocMemberName;
function JSDocLink(props) {
    return typescript_1.factory.createJSDocLink(props.name, props.text);
}
exports.JSDocLink = JSDocLink;
function JSDocLinkCode(props) {
    return typescript_1.factory.createJSDocLinkCode(props.name, props.text);
}
exports.JSDocLinkCode = JSDocLinkCode;
function JSDocLinkPlain(props) {
    return typescript_1.factory.createJSDocLinkPlain(props.name, props.text);
}
exports.JSDocLinkPlain = JSDocLinkPlain;
function JSDocTypeTag(props) {
    return typescript_1.factory.createJSDocTypeTag(props.tagName, props.typeExpression, props.comment);
}
exports.JSDocTypeTag = JSDocTypeTag;
function JSDocReturnTag(props) {
    return typescript_1.factory.createJSDocReturnTag(props.tagName, props.typeExpression, props.comment);
}
exports.JSDocReturnTag = JSDocReturnTag;
function JSDocThisTag(props) {
    return typescript_1.factory.createJSDocThisTag(props.tagName, props.typeExpression, props.comment);
}
exports.JSDocThisTag = JSDocThisTag;
function JSDocEnumTag(props) {
    return typescript_1.factory.createJSDocEnumTag(props.tagName, props.typeExpression, props.comment);
}
exports.JSDocEnumTag = JSDocEnumTag;
function JSDocAuthorTag(props) {
    return typescript_1.factory.createJSDocAuthorTag(props.tagName, props.comment);
}
exports.JSDocAuthorTag = JSDocAuthorTag;
function JSDocClassTag(props) {
    return typescript_1.factory.createJSDocClassTag(props.tagName, props.comment);
}
exports.JSDocClassTag = JSDocClassTag;
function JSDocPublicTag(props) {
    return typescript_1.factory.createJSDocPublicTag(props.tagName, props.comment);
}
exports.JSDocPublicTag = JSDocPublicTag;
function JSDocPrivateTag(props) {
    return typescript_1.factory.createJSDocPrivateTag(props.tagName, props.comment);
}
exports.JSDocPrivateTag = JSDocPrivateTag;
function JSDocProtectedTag(props) {
    return typescript_1.factory.createJSDocProtectedTag(props.tagName, props.comment);
}
exports.JSDocProtectedTag = JSDocProtectedTag;
function JSDocReadonlyTag(props) {
    return typescript_1.factory.createJSDocReadonlyTag(props.tagName, props.comment);
}
exports.JSDocReadonlyTag = JSDocReadonlyTag;
function JSDocOverrideTag(props) {
    return typescript_1.factory.createJSDocOverrideTag(props.tagName, props.comment);
}
exports.JSDocOverrideTag = JSDocOverrideTag;
function JSDocDeprecatedTag(props) {
    return typescript_1.factory.createJSDocDeprecatedTag(props.tagName, props.comment);
}
exports.JSDocDeprecatedTag = JSDocDeprecatedTag;
function JSDocUnknownTag(props) {
    return typescript_1.factory.createJSDocUnknownTag(props.tagName, props.comment);
}
exports.JSDocUnknownTag = JSDocUnknownTag;
function JSDocText(props) {
    return typescript_1.factory.createJSDocText(props.text);
}
exports.JSDocText = JSDocText;
function JSDocComment(props) {
    return typescript_1.factory.createJSDocComment(props.comment, props.tags);
}
exports.JSDocComment = JSDocComment;
function JsxElement(props) {
    return typescript_1.factory.createJsxElement(props.openingElement, props.children, props.closingElement);
}
exports.JsxElement = JsxElement;
function JsxSelfClosingElement(props) {
    return typescript_1.factory.createJsxSelfClosingElement(props.tagName, props.typeArguments, props.attributes);
}
exports.JsxSelfClosingElement = JsxSelfClosingElement;
function JsxOpeningElement(props) {
    return typescript_1.factory.createJsxOpeningElement(props.tagName, props.typeArguments, props.attributes);
}
exports.JsxOpeningElement = JsxOpeningElement;
function JsxClosingElement(props) {
    return typescript_1.factory.createJsxClosingElement(props.tagName);
}
exports.JsxClosingElement = JsxClosingElement;
function JsxFragment(props) {
    return typescript_1.factory.createJsxFragment(props.openingFragment, props.children, props.closingFragment);
}
exports.JsxFragment = JsxFragment;
function JsxText(props) {
    return typescript_1.factory.createJsxText(props.text, props.containsOnlyTriviaWhiteSpaces);
}
exports.JsxText = JsxText;
function JsxOpeningFragment() {
    return typescript_1.factory.createJsxOpeningFragment();
}
exports.JsxOpeningFragment = JsxOpeningFragment;
function JsxJsxClosingFragment() {
    return typescript_1.factory.createJsxJsxClosingFragment();
}
exports.JsxJsxClosingFragment = JsxJsxClosingFragment;
function JsxAttribute(props) {
    return typescript_1.factory.createJsxAttribute(props.name, props.initializer);
}
exports.JsxAttribute = JsxAttribute;
function JsxAttributes(props) {
    return typescript_1.factory.createJsxAttributes(props.properties);
}
exports.JsxAttributes = JsxAttributes;
function JsxSpreadAttribute(props) {
    return typescript_1.factory.createJsxSpreadAttribute(props.expression);
}
exports.JsxSpreadAttribute = JsxSpreadAttribute;
function JsxExpression(props) {
    return typescript_1.factory.createJsxExpression(props.dotDotDotToken, props.expression);
}
exports.JsxExpression = JsxExpression;
function CaseClause(props) {
    return typescript_1.factory.createCaseClause(props.expression, props.statements);
}
exports.CaseClause = CaseClause;
function DefaultClause(props) {
    return typescript_1.factory.createDefaultClause(props.statements);
}
exports.DefaultClause = DefaultClause;
function HeritageClause(props) {
    return typescript_1.factory.createHeritageClause(props.token, props.types);
}
exports.HeritageClause = HeritageClause;
function CatchClause(props) {
    return typescript_1.factory.createCatchClause(props.variableDeclaration, props.block);
}
exports.CatchClause = CatchClause;
function PropertyAssignment(props) {
    return typescript_1.factory.createPropertyAssignment(props.name, props.initializer);
}
exports.PropertyAssignment = PropertyAssignment;
function ShorthandPropertyAssignment(props) {
    return typescript_1.factory.createShorthandPropertyAssignment(props.name, props.objectAssignmentInitializer);
}
exports.ShorthandPropertyAssignment = ShorthandPropertyAssignment;
function SpreadAssignment(props) {
    return typescript_1.factory.createSpreadAssignment(props.expression);
}
exports.SpreadAssignment = SpreadAssignment;
function EnumMember(props) {
    return typescript_1.factory.createEnumMember(props.name, props.initializer);
}
exports.EnumMember = EnumMember;
function SourceFile(props) {
    return typescript_1.factory.createSourceFile(props.statements, props.endOfFileToken, props.flags);
}
exports.SourceFile = SourceFile;
function Bundle(props) {
    return typescript_1.factory.createBundle(props.sourceFiles, props.prepends);
}
exports.Bundle = Bundle;
function NotEmittedStatement(props) {
    return typescript_1.factory.createNotEmittedStatement(props.original);
}
exports.NotEmittedStatement = NotEmittedStatement;
function PartiallyEmittedExpression(props) {
    return typescript_1.factory.createPartiallyEmittedExpression(props.expression, props.original);
}
exports.PartiallyEmittedExpression = PartiallyEmittedExpression;
function CommaListExpression(props) {
    return typescript_1.factory.createCommaListExpression(props.elements);
}
exports.CommaListExpression = CommaListExpression;
function Comma(props) {
    return typescript_1.factory.createComma(props.left, props.right);
}
exports.Comma = Comma;
function Assignment(props) {
    return typescript_1.factory.createAssignment(props.left, props.right);
}
exports.Assignment = Assignment;
function LogicalOr(props) {
    return typescript_1.factory.createLogicalOr(props.left, props.right);
}
exports.LogicalOr = LogicalOr;
function LogicalAnd(props) {
    return typescript_1.factory.createLogicalAnd(props.left, props.right);
}
exports.LogicalAnd = LogicalAnd;
function BitwiseOr(props) {
    return typescript_1.factory.createBitwiseOr(props.left, props.right);
}
exports.BitwiseOr = BitwiseOr;
function BitwiseXor(props) {
    return typescript_1.factory.createBitwiseXor(props.left, props.right);
}
exports.BitwiseXor = BitwiseXor;
function BitwiseAnd(props) {
    return typescript_1.factory.createBitwiseAnd(props.left, props.right);
}
exports.BitwiseAnd = BitwiseAnd;
function StrictEquality(props) {
    return typescript_1.factory.createStrictEquality(props.left, props.right);
}
exports.StrictEquality = StrictEquality;
function StrictInequality(props) {
    return typescript_1.factory.createStrictInequality(props.left, props.right);
}
exports.StrictInequality = StrictInequality;
function Equality(props) {
    return typescript_1.factory.createEquality(props.left, props.right);
}
exports.Equality = Equality;
function Inequality(props) {
    return typescript_1.factory.createInequality(props.left, props.right);
}
exports.Inequality = Inequality;
function LessThan(props) {
    return typescript_1.factory.createLessThan(props.left, props.right);
}
exports.LessThan = LessThan;
function LessThanEquals(props) {
    return typescript_1.factory.createLessThanEquals(props.left, props.right);
}
exports.LessThanEquals = LessThanEquals;
function GreaterThan(props) {
    return typescript_1.factory.createGreaterThan(props.left, props.right);
}
exports.GreaterThan = GreaterThan;
function GreaterThanEquals(props) {
    return typescript_1.factory.createGreaterThanEquals(props.left, props.right);
}
exports.GreaterThanEquals = GreaterThanEquals;
function LeftShift(props) {
    return typescript_1.factory.createLeftShift(props.left, props.right);
}
exports.LeftShift = LeftShift;
function RightShift(props) {
    return typescript_1.factory.createRightShift(props.left, props.right);
}
exports.RightShift = RightShift;
function UnsignedRightShift(props) {
    return typescript_1.factory.createUnsignedRightShift(props.left, props.right);
}
exports.UnsignedRightShift = UnsignedRightShift;
function Add(props) {
    return typescript_1.factory.createAdd(props.left, props.right);
}
exports.Add = Add;
function Subtract(props) {
    return typescript_1.factory.createSubtract(props.left, props.right);
}
exports.Subtract = Subtract;
function Multiply(props) {
    return typescript_1.factory.createMultiply(props.left, props.right);
}
exports.Multiply = Multiply;
function Divide(props) {
    return typescript_1.factory.createDivide(props.left, props.right);
}
exports.Divide = Divide;
function Modulo(props) {
    return typescript_1.factory.createModulo(props.left, props.right);
}
exports.Modulo = Modulo;
function Exponent(props) {
    return typescript_1.factory.createExponent(props.left, props.right);
}
exports.Exponent = Exponent;
function PrefixPlus(props) {
    return typescript_1.factory.createPrefixPlus(props.operand);
}
exports.PrefixPlus = PrefixPlus;
function PrefixMinus(props) {
    return typescript_1.factory.createPrefixMinus(props.operand);
}
exports.PrefixMinus = PrefixMinus;
function PrefixIncrement(props) {
    return typescript_1.factory.createPrefixIncrement(props.operand);
}
exports.PrefixIncrement = PrefixIncrement;
function PrefixDecrement(props) {
    return typescript_1.factory.createPrefixDecrement(props.operand);
}
exports.PrefixDecrement = PrefixDecrement;
function BitwiseNot(props) {
    return typescript_1.factory.createBitwiseNot(props.operand);
}
exports.BitwiseNot = BitwiseNot;
function LogicalNot(props) {
    return typescript_1.factory.createLogicalNot(props.operand);
}
exports.LogicalNot = LogicalNot;
function PostfixIncrement(props) {
    return typescript_1.factory.createPostfixIncrement(props.operand);
}
exports.PostfixIncrement = PostfixIncrement;
function PostfixDecrement(props) {
    return typescript_1.factory.createPostfixDecrement(props.operand);
}
exports.PostfixDecrement = PostfixDecrement;
function ImmediatelyInvokedFunctionExpression(props) {
    return typescript_1.factory.createImmediatelyInvokedFunctionExpression(props.statements, props.param, props.paramValue);
}
exports.ImmediatelyInvokedFunctionExpression = ImmediatelyInvokedFunctionExpression;
function ImmediatelyInvokedArrowFunction(props) {
    return typescript_1.factory.createImmediatelyInvokedArrowFunction(props.statements, props.param, props.paramValue);
}
exports.ImmediatelyInvokedArrowFunction = ImmediatelyInvokedArrowFunction;
function VoidZero() {
    return typescript_1.factory.createVoidZero();
}
exports.VoidZero = VoidZero;
function ExportDefault(props) {
    return typescript_1.factory.createExportDefault(props.expression);
}
exports.ExportDefault = ExportDefault;
function ExternalModuleExport(props) {
    return typescript_1.factory.createExternalModuleExport(props.exportName);
}
exports.ExternalModuleExport = ExternalModuleExport;
