import { Props } from "./props";
export declare function NodeArray(props: Props["createNodeArray"]): import("typescript").NodeArray<import("typescript").Node>;
export declare function NumericLiteral(props: Props["createNumericLiteral"]): import("typescript").NumericLiteral;
export declare function BigIntLiteral(props: Props["createBigIntLiteral"]): import("typescript").BigIntLiteral;
export declare function StringLiteral(props: Props["createStringLiteral"]): import("typescript").StringLiteral;
export declare function StringLiteralFromNode(props: Props["createStringLiteralFromNode"]): import("typescript").StringLiteral;
export declare function RegularExpressionLiteral(props: Props["createRegularExpressionLiteral"]): import("typescript").RegularExpressionLiteral;
export declare function Identifier(props: Props["createIdentifier"]): import("typescript").Identifier;
export declare function TempVariable(props: Props["createTempVariable"]): import("typescript").Identifier;
export declare function LoopVariable(props: Props["createLoopVariable"]): import("typescript").Identifier;
export declare function UniqueName(props: Props["createUniqueName"]): import("typescript").Identifier;
export declare function PrivateIdentifier(props: Props["createPrivateIdentifier"]): import("typescript").PrivateIdentifier;
export declare function Token(props: Props["createToken"]): import("typescript").Token<import("typescript").SyntaxKind.Unknown | import("typescript").SyntaxKind.EndOfFileToken>;
export declare function Super(): import("typescript").SuperExpression;
export declare function This(): import("typescript").ThisExpression;
export declare function Null(): import("typescript").NullLiteral;
export declare function True(): import("typescript").TrueLiteral;
export declare function False(): import("typescript").FalseLiteral;
export declare function Modifier(props: Props["createModifier"]): import("typescript").ModifierToken<import("typescript").ModifierSyntaxKind>;
export declare function ModifiersFromModifierFlags(props: Props["createModifiersFromModifierFlags"]): import("typescript").Modifier[];
export declare function QualifiedName(props: Props["createQualifiedName"]): import("typescript").QualifiedName;
export declare function ComputedPropertyName(props: Props["createComputedPropertyName"]): import("typescript").ComputedPropertyName;
export declare function TypeParameterDeclaration(props: Props["createTypeParameterDeclaration"]): import("typescript").TypeParameterDeclaration;
export declare function ParameterDeclaration(props: Props["createParameterDeclaration"]): import("typescript").ParameterDeclaration;
export declare function Decorator(props: Props["createDecorator"]): import("typescript").Decorator;
export declare function PropertySignature(props: Props["createPropertySignature"]): import("typescript").PropertySignature;
export declare function PropertyDeclaration(props: Props["createPropertyDeclaration"]): import("typescript").PropertyDeclaration;
export declare function MethodSignature(props: Props["createMethodSignature"]): import("typescript").MethodSignature;
export declare function MethodDeclaration(props: Props["createMethodDeclaration"]): import("typescript").MethodDeclaration;
export declare function ConstructorDeclaration(props: Props["createConstructorDeclaration"]): import("typescript").ConstructorDeclaration;
export declare function GetAccessorDeclaration(props: Props["createGetAccessorDeclaration"]): import("typescript").GetAccessorDeclaration;
export declare function SetAccessorDeclaration(props: Props["createSetAccessorDeclaration"]): import("typescript").SetAccessorDeclaration;
export declare function CallSignature(props: Props["createCallSignature"]): import("typescript").CallSignatureDeclaration;
export declare function ConstructSignature(props: Props["createConstructSignature"]): import("typescript").ConstructSignatureDeclaration;
export declare function IndexSignature(props: Props["createIndexSignature"]): import("typescript").IndexSignatureDeclaration;
export declare function ClassStaticBlockDeclaration(props: Props["createClassStaticBlockDeclaration"]): import("typescript").ClassStaticBlockDeclaration;
export declare function TemplateLiteralTypeSpan(props: Props["createTemplateLiteralTypeSpan"]): import("typescript").TemplateLiteralTypeSpan;
export declare function KeywordTypeNode(props: Props["createKeywordTypeNode"]): import("typescript").KeywordTypeNode<import("typescript").KeywordTypeSyntaxKind>;
export declare function TypePredicateNode(props: Props["createTypePredicateNode"]): import("typescript").TypePredicateNode;
export declare function TypeReferenceNode(props: Props["createTypeReferenceNode"]): import("typescript").TypeReferenceNode;
export declare function FunctionTypeNode(props: Props["createFunctionTypeNode"]): import("typescript").FunctionTypeNode;
export declare function ConstructorTypeNode(): import("typescript").ConstructorTypeNode;
export declare function TypeQueryNode(props: Props["createTypeQueryNode"]): import("typescript").TypeQueryNode;
export declare function TypeLiteralNode(props: Props["createTypeLiteralNode"]): import("typescript").TypeLiteralNode;
export declare function ArrayTypeNode(props: Props["createArrayTypeNode"]): import("typescript").ArrayTypeNode;
export declare function TupleTypeNode(props: Props["createTupleTypeNode"]): import("typescript").TupleTypeNode;
export declare function NamedTupleMember(props: Props["createNamedTupleMember"]): import("typescript").NamedTupleMember;
export declare function OptionalTypeNode(props: Props["createOptionalTypeNode"]): import("typescript").OptionalTypeNode;
export declare function RestTypeNode(props: Props["createRestTypeNode"]): import("typescript").RestTypeNode;
export declare function UnionTypeNode(props: Props["createUnionTypeNode"]): import("typescript").UnionTypeNode;
export declare function IntersectionTypeNode(props: Props["createIntersectionTypeNode"]): import("typescript").IntersectionTypeNode;
export declare function ConditionalTypeNode(props: Props["createConditionalTypeNode"]): import("typescript").ConditionalTypeNode;
export declare function InferTypeNode(props: Props["createInferTypeNode"]): import("typescript").InferTypeNode;
export declare function ImportTypeNode(props: Props["createImportTypeNode"]): import("typescript").ImportTypeNode;
export declare function ParenthesizedType(props: Props["createParenthesizedType"]): import("typescript").ParenthesizedTypeNode;
export declare function ThisTypeNode(): import("typescript").ThisTypeNode;
export declare function TypeOperatorNode(props: Props["createTypeOperatorNode"]): import("typescript").TypeOperatorNode;
export declare function IndexedAccessTypeNode(props: Props["createIndexedAccessTypeNode"]): import("typescript").IndexedAccessTypeNode;
export declare function MappedTypeNode(props: Props["createMappedTypeNode"]): import("typescript").MappedTypeNode;
export declare function LiteralTypeNode(props: Props["createLiteralTypeNode"]): import("typescript").LiteralTypeNode;
export declare function TemplateLiteralType(props: Props["createTemplateLiteralType"]): import("typescript").TemplateLiteralTypeNode;
export declare function ObjectBindingPattern(props: Props["createObjectBindingPattern"]): import("typescript").ObjectBindingPattern;
export declare function ArrayBindingPattern(props: Props["createArrayBindingPattern"]): import("typescript").ArrayBindingPattern;
export declare function BindingElement(props: Props["createBindingElement"]): import("typescript").BindingElement;
export declare function ArrayLiteralExpression(props: Props["createArrayLiteralExpression"]): import("typescript").ArrayLiteralExpression;
export declare function ObjectLiteralExpression(props: Props["createObjectLiteralExpression"]): import("typescript").ObjectLiteralExpression;
export declare function PropertyAccessExpression(props: Props["createPropertyAccessExpression"]): import("typescript").PropertyAccessExpression;
export declare function PropertyAccessChain(props: Props["createPropertyAccessChain"]): import("typescript").PropertyAccessChain;
export declare function ElementAccessExpression(props: Props["createElementAccessExpression"]): import("typescript").ElementAccessExpression;
export declare function ElementAccessChain(props: Props["createElementAccessChain"]): import("typescript").ElementAccessChain;
export declare function CallExpression(props: Props["createCallExpression"]): import("typescript").CallExpression;
export declare function CallChain(props: Props["createCallChain"]): import("typescript").CallChain;
export declare function NewExpression(props: Props["createNewExpression"]): import("typescript").NewExpression;
export declare function TaggedTemplateExpression(props: Props["createTaggedTemplateExpression"]): import("typescript").TaggedTemplateExpression;
export declare function TypeAssertion(props: Props["createTypeAssertion"]): import("typescript").TypeAssertion;
export declare function ParenthesizedExpression(props: Props["createParenthesizedExpression"]): import("typescript").ParenthesizedExpression;
export declare function FunctionExpression(props: Props["createFunctionExpression"]): import("typescript").FunctionExpression;
export declare function ArrowFunction(props: Props["createArrowFunction"]): import("typescript").ArrowFunction;
export declare function DeleteExpression(props: Props["createDeleteExpression"]): import("typescript").DeleteExpression;
export declare function TypeOfExpression(props: Props["createTypeOfExpression"]): import("typescript").TypeOfExpression;
export declare function VoidExpression(props: Props["createVoidExpression"]): import("typescript").VoidExpression;
export declare function AwaitExpression(props: Props["createAwaitExpression"]): import("typescript").AwaitExpression;
export declare function PrefixUnaryExpression(props: Props["createPrefixUnaryExpression"]): import("typescript").PrefixUnaryExpression;
export declare function PostfixUnaryExpression(props: Props["createPostfixUnaryExpression"]): import("typescript").PostfixUnaryExpression;
export declare function BinaryExpression(props: Props["createBinaryExpression"]): import("typescript").BinaryExpression;
export declare function ConditionalExpression(props: Props["createConditionalExpression"]): import("typescript").ConditionalExpression;
export declare function TemplateExpression(props: Props["createTemplateExpression"]): import("typescript").TemplateExpression;
export declare function TemplateHead(props: Props["createTemplateHead"]): import("typescript").TemplateHead;
export declare function TemplateMiddle(props: Props["createTemplateMiddle"]): import("typescript").TemplateMiddle;
export declare function TemplateTail(props: Props["createTemplateTail"]): import("typescript").TemplateTail;
export declare function NoSubstitutionTemplateLiteral(props: Props["createNoSubstitutionTemplateLiteral"]): import("typescript").NoSubstitutionTemplateLiteral;
export declare function YieldExpression(props: Props["createYieldExpression"]): import("typescript").YieldExpression;
export declare function SpreadElement(props: Props["createSpreadElement"]): import("typescript").SpreadElement;
export declare function ClassExpression(props: Props["createClassExpression"]): import("typescript").ClassExpression;
export declare function OmittedExpression(): import("typescript").OmittedExpression;
export declare function ExpressionWithTypeArguments(props: Props["createExpressionWithTypeArguments"]): import("typescript").ExpressionWithTypeArguments;
export declare function AsExpression(props: Props["createAsExpression"]): import("typescript").AsExpression;
export declare function NonNullExpression(props: Props["createNonNullExpression"]): import("typescript").NonNullExpression;
export declare function NonNullChain(props: Props["createNonNullChain"]): import("typescript").NonNullChain;
export declare function MetaProperty(props: Props["createMetaProperty"]): import("typescript").MetaProperty;
export declare function TemplateSpan(props: Props["createTemplateSpan"]): import("typescript").TemplateSpan;
export declare function SemicolonClassElement(): import("typescript").SemicolonClassElement;
export declare function Block(props: Props["createBlock"]): import("typescript").Block;
export declare function VariableStatement(props: Props["createVariableStatement"]): import("typescript").VariableStatement;
export declare function EmptyStatement(): import("typescript").EmptyStatement;
export declare function ExpressionStatement(props: Props["createExpressionStatement"]): import("typescript").ExpressionStatement;
export declare function IfStatement(props: Props["createIfStatement"]): import("typescript").IfStatement;
export declare function DoStatement(props: Props["createDoStatement"]): import("typescript").DoStatement;
export declare function WhileStatement(props: Props["createWhileStatement"]): import("typescript").WhileStatement;
export declare function ForStatement(props: Props["createForStatement"]): import("typescript").ForStatement;
export declare function ForInStatement(props: Props["createForInStatement"]): import("typescript").ForInStatement;
export declare function ForOfStatement(props: Props["createForOfStatement"]): import("typescript").ForOfStatement;
export declare function ContinueStatement(props: Props["createContinueStatement"]): import("typescript").ContinueStatement;
export declare function BreakStatement(props: Props["createBreakStatement"]): import("typescript").BreakStatement;
export declare function ReturnStatement(props: Props["createReturnStatement"]): import("typescript").ReturnStatement;
export declare function WithStatement(props: Props["createWithStatement"]): import("typescript").WithStatement;
export declare function SwitchStatement(props: Props["createSwitchStatement"]): import("typescript").SwitchStatement;
export declare function LabeledStatement(props: Props["createLabeledStatement"]): import("typescript").LabeledStatement;
export declare function ThrowStatement(props: Props["createThrowStatement"]): import("typescript").ThrowStatement;
export declare function TryStatement(props: Props["createTryStatement"]): import("typescript").TryStatement;
export declare function DebuggerStatement(): import("typescript").DebuggerStatement;
export declare function VariableDeclaration(props: Props["createVariableDeclaration"]): import("typescript").VariableDeclaration;
export declare function VariableDeclarationList(props: Props["createVariableDeclarationList"]): import("typescript").VariableDeclarationList;
export declare function FunctionDeclaration(props: Props["createFunctionDeclaration"]): import("typescript").FunctionDeclaration;
export declare function ClassDeclaration(props: Props["createClassDeclaration"]): import("typescript").ClassDeclaration;
export declare function InterfaceDeclaration(props: Props["createInterfaceDeclaration"]): import("typescript").InterfaceDeclaration;
export declare function TypeAliasDeclaration(props: Props["createTypeAliasDeclaration"]): import("typescript").TypeAliasDeclaration;
export declare function EnumDeclaration(props: Props["createEnumDeclaration"]): import("typescript").EnumDeclaration;
export declare function ModuleDeclaration(props: Props["createModuleDeclaration"]): import("typescript").ModuleDeclaration;
export declare function ModuleBlock(props: Props["createModuleBlock"]): import("typescript").ModuleBlock;
export declare function CaseBlock(props: Props["createCaseBlock"]): import("typescript").CaseBlock;
export declare function NamespaceExportDeclaration(props: Props["createNamespaceExportDeclaration"]): import("typescript").NamespaceExportDeclaration;
export declare function ImportEqualsDeclaration(props: Props["createImportEqualsDeclaration"]): import("typescript").ImportEqualsDeclaration;
export declare function ImportDeclaration(props: Props["createImportDeclaration"]): import("typescript").ImportDeclaration;
export declare function ImportClause(props: Props["createImportClause"]): import("typescript").ImportClause;
export declare function AssertClause(props: Props["createAssertClause"]): import("typescript").AssertClause;
export declare function AssertEntry(props: Props["createAssertEntry"]): import("typescript").AssertEntry;
export declare function NamespaceImport(props: Props["createNamespaceImport"]): import("typescript").NamespaceImport;
export declare function NamespaceExport(props: Props["createNamespaceExport"]): import("typescript").NamespaceExport;
export declare function NamedImports(props: Props["createNamedImports"]): import("typescript").NamedImports;
export declare function ImportSpecifier(props: Props["createImportSpecifier"]): import("typescript").ImportSpecifier;
export declare function ExportAssignment(props: Props["createExportAssignment"]): import("typescript").ExportAssignment;
export declare function ExportDeclaration(props: Props["createExportDeclaration"]): import("typescript").ExportDeclaration;
export declare function NamedExports(props: Props["createNamedExports"]): import("typescript").NamedExports;
export declare function ExportSpecifier(props: Props["createExportSpecifier"]): import("typescript").ExportSpecifier;
export declare function ExternalModuleReference(props: Props["createExternalModuleReference"]): import("typescript").ExternalModuleReference;
export declare function JSDocAllType(): import("typescript").JSDocAllType;
export declare function JSDocUnknownType(): import("typescript").JSDocUnknownType;
export declare function JSDocNonNullableType(props: Props["createJSDocNonNullableType"]): import("typescript").JSDocNonNullableType;
export declare function JSDocNullableType(props: Props["createJSDocNullableType"]): import("typescript").JSDocNullableType;
export declare function JSDocOptionalType(props: Props["createJSDocOptionalType"]): import("typescript").JSDocOptionalType;
export declare function JSDocVariadicType(props: Props["createJSDocVariadicType"]): import("typescript").JSDocVariadicType;
export declare function JSDocNamepathType(props: Props["createJSDocNamepathType"]): import("typescript").JSDocNamepathType;
export declare function JSDocFunctionType(props: Props["createJSDocFunctionType"]): import("typescript").JSDocFunctionType;
export declare function JSDocTypeLiteral(props: Props["createJSDocTypeLiteral"]): import("typescript").JSDocTypeLiteral;
export declare function JSDocTypeExpression(props: Props["createJSDocTypeExpression"]): import("typescript").JSDocTypeExpression;
export declare function JSDocSignature(props: Props["createJSDocSignature"]): import("typescript").JSDocSignature;
export declare function JSDocTemplateTag(props: Props["createJSDocTemplateTag"]): import("typescript").JSDocTemplateTag;
export declare function JSDocTypedefTag(props: Props["createJSDocTypedefTag"]): import("typescript").JSDocTypedefTag;
export declare function JSDocParameterTag(props: Props["createJSDocParameterTag"]): import("typescript").JSDocParameterTag;
export declare function JSDocPropertyTag(props: Props["createJSDocPropertyTag"]): import("typescript").JSDocPropertyTag;
export declare function JSDocCallbackTag(props: Props["createJSDocCallbackTag"]): import("typescript").JSDocCallbackTag;
export declare function JSDocAugmentsTag(props: Props["createJSDocAugmentsTag"]): import("typescript").JSDocAugmentsTag;
export declare function JSDocImplementsTag(props: Props["createJSDocImplementsTag"]): import("typescript").JSDocImplementsTag;
export declare function JSDocSeeTag(props: Props["createJSDocSeeTag"]): import("typescript").JSDocSeeTag;
export declare function JSDocNameReference(props: Props["createJSDocNameReference"]): import("typescript").JSDocNameReference;
export declare function JSDocMemberName(props: Props["createJSDocMemberName"]): import("typescript").JSDocMemberName;
export declare function JSDocLink(props: Props["createJSDocLink"]): import("typescript").JSDocLink;
export declare function JSDocLinkCode(props: Props["createJSDocLinkCode"]): import("typescript").JSDocLinkCode;
export declare function JSDocLinkPlain(props: Props["createJSDocLinkPlain"]): import("typescript").JSDocLinkPlain;
export declare function JSDocTypeTag(props: Props["createJSDocTypeTag"]): import("typescript").JSDocTypeTag;
export declare function JSDocReturnTag(props: Props["createJSDocReturnTag"]): import("typescript").JSDocReturnTag;
export declare function JSDocThisTag(props: Props["createJSDocThisTag"]): import("typescript").JSDocThisTag;
export declare function JSDocEnumTag(props: Props["createJSDocEnumTag"]): import("typescript").JSDocEnumTag;
export declare function JSDocAuthorTag(props: Props["createJSDocAuthorTag"]): import("typescript").JSDocAuthorTag;
export declare function JSDocClassTag(props: Props["createJSDocClassTag"]): import("typescript").JSDocClassTag;
export declare function JSDocPublicTag(props: Props["createJSDocPublicTag"]): import("typescript").JSDocPublicTag;
export declare function JSDocPrivateTag(props: Props["createJSDocPrivateTag"]): import("typescript").JSDocPrivateTag;
export declare function JSDocProtectedTag(props: Props["createJSDocProtectedTag"]): import("typescript").JSDocProtectedTag;
export declare function JSDocReadonlyTag(props: Props["createJSDocReadonlyTag"]): import("typescript").JSDocReadonlyTag;
export declare function JSDocOverrideTag(props: Props["createJSDocOverrideTag"]): import("typescript").JSDocOverrideTag;
export declare function JSDocDeprecatedTag(props: Props["createJSDocDeprecatedTag"]): import("typescript").JSDocDeprecatedTag;
export declare function JSDocUnknownTag(props: Props["createJSDocUnknownTag"]): import("typescript").JSDocUnknownTag;
export declare function JSDocText(props: Props["createJSDocText"]): import("typescript").JSDocText;
export declare function JSDocComment(props: Props["createJSDocComment"]): import("typescript").JSDoc;
export declare function JsxElement(props: Props["createJsxElement"]): import("typescript").JsxElement;
export declare function JsxSelfClosingElement(props: Props["createJsxSelfClosingElement"]): import("typescript").JsxSelfClosingElement;
export declare function JsxOpeningElement(props: Props["createJsxOpeningElement"]): import("typescript").JsxOpeningElement;
export declare function JsxClosingElement(props: Props["createJsxClosingElement"]): import("typescript").JsxClosingElement;
export declare function JsxFragment(props: Props["createJsxFragment"]): import("typescript").JsxFragment;
export declare function JsxText(props: Props["createJsxText"]): import("typescript").JsxText;
export declare function JsxOpeningFragment(): import("typescript").JsxOpeningFragment;
export declare function JsxJsxClosingFragment(): import("typescript").JsxClosingFragment;
export declare function JsxAttribute(props: Props["createJsxAttribute"]): import("typescript").JsxAttribute;
export declare function JsxAttributes(props: Props["createJsxAttributes"]): import("typescript").JsxAttributes;
export declare function JsxSpreadAttribute(props: Props["createJsxSpreadAttribute"]): import("typescript").JsxSpreadAttribute;
export declare function JsxExpression(props: Props["createJsxExpression"]): import("typescript").JsxExpression;
export declare function CaseClause(props: Props["createCaseClause"]): import("typescript").CaseClause;
export declare function DefaultClause(props: Props["createDefaultClause"]): import("typescript").DefaultClause;
export declare function HeritageClause(props: Props["createHeritageClause"]): import("typescript").HeritageClause;
export declare function CatchClause(props: Props["createCatchClause"]): import("typescript").CatchClause;
export declare function PropertyAssignment(props: Props["createPropertyAssignment"]): import("typescript").PropertyAssignment;
export declare function ShorthandPropertyAssignment(props: Props["createShorthandPropertyAssignment"]): import("typescript").ShorthandPropertyAssignment;
export declare function SpreadAssignment(props: Props["createSpreadAssignment"]): import("typescript").SpreadAssignment;
export declare function EnumMember(props: Props["createEnumMember"]): import("typescript").EnumMember;
export declare function SourceFile(props: Props["createSourceFile"]): import("typescript").SourceFile;
export declare function Bundle(props: Props["createBundle"]): import("typescript").Bundle;
export declare function NotEmittedStatement(props: Props["createNotEmittedStatement"]): import("typescript").NotEmittedStatement;
export declare function PartiallyEmittedExpression(props: Props["createPartiallyEmittedExpression"]): import("typescript").PartiallyEmittedExpression;
export declare function CommaListExpression(props: Props["createCommaListExpression"]): import("typescript").CommaListExpression;
export declare function Comma(props: Props["createComma"]): import("typescript").BinaryExpression;
export declare function Assignment(props: Props["createAssignment"]): import("typescript").AssignmentExpression<import("typescript").EqualsToken>;
export declare function LogicalOr(props: Props["createLogicalOr"]): import("typescript").BinaryExpression;
export declare function LogicalAnd(props: Props["createLogicalAnd"]): import("typescript").BinaryExpression;
export declare function BitwiseOr(props: Props["createBitwiseOr"]): import("typescript").BinaryExpression;
export declare function BitwiseXor(props: Props["createBitwiseXor"]): import("typescript").BinaryExpression;
export declare function BitwiseAnd(props: Props["createBitwiseAnd"]): import("typescript").BinaryExpression;
export declare function StrictEquality(props: Props["createStrictEquality"]): import("typescript").BinaryExpression;
export declare function StrictInequality(props: Props["createStrictInequality"]): import("typescript").BinaryExpression;
export declare function Equality(props: Props["createEquality"]): import("typescript").BinaryExpression;
export declare function Inequality(props: Props["createInequality"]): import("typescript").BinaryExpression;
export declare function LessThan(props: Props["createLessThan"]): import("typescript").BinaryExpression;
export declare function LessThanEquals(props: Props["createLessThanEquals"]): import("typescript").BinaryExpression;
export declare function GreaterThan(props: Props["createGreaterThan"]): import("typescript").BinaryExpression;
export declare function GreaterThanEquals(props: Props["createGreaterThanEquals"]): import("typescript").BinaryExpression;
export declare function LeftShift(props: Props["createLeftShift"]): import("typescript").BinaryExpression;
export declare function RightShift(props: Props["createRightShift"]): import("typescript").BinaryExpression;
export declare function UnsignedRightShift(props: Props["createUnsignedRightShift"]): import("typescript").BinaryExpression;
export declare function Add(props: Props["createAdd"]): import("typescript").BinaryExpression;
export declare function Subtract(props: Props["createSubtract"]): import("typescript").BinaryExpression;
export declare function Multiply(props: Props["createMultiply"]): import("typescript").BinaryExpression;
export declare function Divide(props: Props["createDivide"]): import("typescript").BinaryExpression;
export declare function Modulo(props: Props["createModulo"]): import("typescript").BinaryExpression;
export declare function Exponent(props: Props["createExponent"]): import("typescript").BinaryExpression;
export declare function PrefixPlus(props: Props["createPrefixPlus"]): import("typescript").PrefixUnaryExpression;
export declare function PrefixMinus(props: Props["createPrefixMinus"]): import("typescript").PrefixUnaryExpression;
export declare function PrefixIncrement(props: Props["createPrefixIncrement"]): import("typescript").PrefixUnaryExpression;
export declare function PrefixDecrement(props: Props["createPrefixDecrement"]): import("typescript").PrefixUnaryExpression;
export declare function BitwiseNot(props: Props["createBitwiseNot"]): import("typescript").PrefixUnaryExpression;
export declare function LogicalNot(props: Props["createLogicalNot"]): import("typescript").PrefixUnaryExpression;
export declare function PostfixIncrement(props: Props["createPostfixIncrement"]): import("typescript").PostfixUnaryExpression;
export declare function PostfixDecrement(props: Props["createPostfixDecrement"]): import("typescript").PostfixUnaryExpression;
export declare function ImmediatelyInvokedFunctionExpression(props: Props["createImmediatelyInvokedFunctionExpression"]): import("typescript").CallExpression;
export declare function ImmediatelyInvokedArrowFunction(props: Props["createImmediatelyInvokedArrowFunction"]): import("typescript").CallExpression;
export declare function VoidZero(): import("typescript").VoidExpression;
export declare function ExportDefault(props: Props["createExportDefault"]): import("typescript").ExportAssignment;
export declare function ExternalModuleExport(props: Props["createExternalModuleExport"]): import("typescript").ExportDeclaration;
