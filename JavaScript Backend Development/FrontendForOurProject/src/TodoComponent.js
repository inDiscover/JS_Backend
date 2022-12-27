"use strict";
//! M - V - CONTROLLER
exports.__esModule = true;
exports.TodoComponent = void 0;
var TodoService_1 = require("./TodoService");
var TodoComponent = /** @class */ (function () {
    function TodoComponent(selector) {
        var _this = this;
        var _a;
        this.todoList = [];
        this.todoService = new TodoService_1.TodoService();
        //! M - VIEW - C
        this.createView((_a = document.querySelector(selector)) !== null && _a !== void 0 ? _a : document.body);
        //* Store <input>, <ul>, and <button> in instance variables for later use
        var addButton = document.querySelector("#add-button");
        this.todoInput = document.querySelector("#todo-input");
        this.itemList = document.querySelector("#item-list");
        //* Dynamic add using button click
        addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", function () {
            var _a;
            _this.renderTodo(_this.todoService.createTodo((_a = _this.todoInput) === null || _a === void 0 ? void 0 : _a.value));
            //? Make input null again
            _this.todoInput.value = "";
        });
        this.todoService.getAllTodos().forEach(function (todo) {
            _this.renderTodo(todo);
        });
    }
    TodoComponent.prototype.createView = function (root) {
        //* Process the given string and convert to DOM elements
        var template = "\n  <div>\n    <input id=\"todo-input\" type=\"text\" placeholder=\"Enter text here\"/>\n    <button id=\"add-button\">Add</button>\n  </div>\n  \n  <ul id=\"item-list\"></ul>\n  ";
        root === null || root === void 0 ? void 0 : root.insertAdjacentHTML("beforeend", template);
    };
    TodoComponent.prototype.renderTodo = function (todo) {
        var _this = this;
        var _a;
        var buttonStyle = "\n    color:red;\n    background-color:transparent;\n    border:none;\n    ";
        //? Prepare the li element and add it
        var item = "<li id=\"todo-".concat(todo.todoKey, "\">\n                    ").concat(todo.todoItem, "\n                      <button style='").concat(buttonStyle, "'>X</button>\n                  </li>");
        //? Add it
        this.itemList.insertAdjacentHTML("beforeend", item);
        //* Find the recently added button and add click handler to it
        (_a = this.itemList
            .querySelector("#todo-".concat(todo.todoKey, " > button"))) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            var _a;
            //! Ask service to remove the todo
            _this.todoService.deleteTodo(todo.todoKey);
            //! Remove it from DOM Tree as well
            (_a = _this.itemList.querySelector("#todo-".concat(todo.todoKey))) === null || _a === void 0 ? void 0 : _a.remove();
        });
    };
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
// module.exports = TodoComponent;
