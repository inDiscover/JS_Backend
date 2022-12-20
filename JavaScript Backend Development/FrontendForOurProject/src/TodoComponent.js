"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoComponent = void 0;
class TodoComponent {
    constructor(selector) {
        const template = `
  <div>
    <input id="todo-input" type="text" placeholder="Enter text here"/>
    <button id="add-button">Add</button>
  </div>
  
  <ul id="item-list"></ul>
  `;
        //* Process the given string and convert to DOM elements
        const root = document.querySelector(selector);
        root === null || root === void 0 ? void 0 : root.insertAdjacentHTML("beforeend", template);
        const addButton = document.querySelector("#add-button");
        const todoInput = document.querySelector("#todo-input");
        const itemList = document.querySelector("#item-list");
        //* Dynamic add using button click
        addButton.addEventListener("click", () => {
            //? Prepare the li element
            const item = `<li>${todoInput === null || todoInput === void 0 ? void 0 : todoInput.value}</li>`;
            //? Add it
            itemList.insertAdjacentHTML("beforeend", item);
            //? Make input null again
            todoInput.value = "";
        });
    }
}
exports.TodoComponent = TodoComponent;
// module.exports = TodoComponent;
