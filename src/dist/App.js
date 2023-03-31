"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
function App() {
    var _a = react_1.useState(""), value = _a[0], setValue = _a[1];
    var _b = react_1.useState([]), todos = _b[0], setTodos = _b[1];
    var handleChange = function (e) {
        setValue(e.target.value);
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        var newTodo = {
            value: value,
            id: todos.length,
            checked: false
        };
        setTodos(__spreadArrays([newTodo], todos));
    };
    var handleEdit = function (id, value) {
        var newTodos = todos.map(function (todo) {
            if (todo.id === id) {
                todo.value = value;
            }
            return todo;
        });
        setTodos(newTodos);
    };
    var handleDelete = function (id) {
        var newTodos = todos.filter(function (todo) { return todo.id !== id; });
        setTodos(newTodos);
    };
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("h2", null, "todolist"),
        react_1["default"].createElement("form", { onSubmit: handleSubmit },
            react_1["default"].createElement("input", { type: "text", onChange: handleChange }),
            react_1["default"].createElement("input", { type: "submit", value: "\u4F5C\u6210" })),
        react_1["default"].createElement("ul", null, todos.map(function (todo) { return (react_1["default"].createElement("li", null,
            react_1["default"].createElement("input", { type: "text", value: todo.value, onChange: function (e) { return handleEdit(todo.id, e.target.value); } }),
            react_1["default"].createElement("input", { type: "checkbox" }),
            react_1["default"].createElement("button", { onClick: function () { return handleDelete(todo.id); } }, "\u524A\u9664"))); }))));
}
exports["default"] = App;

//# sourceMappingURL=App.js.map
