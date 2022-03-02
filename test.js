"use strict";
exports.__esModule = true;
var ts = require("typescript");
var index_1 = require("./index");
function render(node) {
    var file = ts.createSourceFile("", "", ts.ScriptTarget.ESNext, false, ts.ScriptKind.TS);
    var printer = ts.createPrinter();
    return printer.printNode(ts.EmitHint.Unspecified, node, file);
}
function createElement(fn, props) {
    var _a, _b, _c, _d;
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    if (children.length) {
        props !== null && props !== void 0 ? props : (props = {});
        (_a = props.body) !== null && _a !== void 0 ? _a : (props.body = children);
        (_b = props.members) !== null && _b !== void 0 ? _b : (props.members = children);
        (_c = props.statements) !== null && _c !== void 0 ? _c : (props.statements = children);
        (_d = props.declarations) !== null && _d !== void 0 ? _d : (props.declarations = children);
    }
    console.log(fn.name, Object.keys(props));
    return fn(props);
}
console.log(render(createElement(index_1.FunctionDeclaration, { name: "getBalls" },
    createElement(index_1.Block, null,
        createElement(index_1.VariableStatement, null,
            createElement(index_1.VariableDeclarationList, { flags: ts.NodeFlags.Const },
                createElement(index_1.VariableDeclaration, { name: "cock", type: createElement(index_1.TypeReferenceNode, { typeName: "string" }), initializer: createElement(index_1.StringLiteral, { text: "balls" }) })))))));
