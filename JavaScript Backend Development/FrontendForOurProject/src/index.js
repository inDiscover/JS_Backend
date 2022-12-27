"use strict";
// const TodoComponent = require("./TodoComponent");
exports.__esModule = true;
var TodoComponent_1 = require("./TodoComponent");
//* Execute only after the HTML is parsed and DOM tree is ready...
document.addEventListener("DOMContentLoaded", function () {
    var todoComponent = new TodoComponent_1.TodoComponent("app-todo");
});
