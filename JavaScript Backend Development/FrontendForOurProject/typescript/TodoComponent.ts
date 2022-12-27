//! M - V - CONTROLLER

import { Todo } from "./TodoModel";
import { TodoService } from "./TodoService";

export class TodoComponent {
  private todoList: Todo[] = [];
  private todoService = new TodoService();
  private itemList: HTMLUListElement;
  private todoInput: HTMLInputElement;

  constructor(selector: string) {
    //! M - VIEW - C
    this.createView(document.querySelector(selector) ?? document.body);

    //* Store <input>, <ul>, and <button> in instance variables for later use
    const addButton = document.querySelector(
      "#add-button"
    ) as HTMLButtonElement;
    this.todoInput = document.querySelector("#todo-input") as HTMLInputElement;
    this.itemList = document.querySelector("#item-list") as HTMLUListElement;

    //* Dynamic add using button click
    addButton?.addEventListener("click", () => {
      this.renderTodo(this.todoService.createTodo(this.todoInput?.value));

      //? Make input null again
      this.todoInput.value = "";
    });

    this.todoService.getAllTodos().forEach((todo: Todo) => {
      this.renderTodo(todo);
    });
  }

  private createView(root: HTMLElement) {
    //* Process the given string and convert to DOM elements
    const template = `
  <div>
    <input id="todo-input" type="text" placeholder="Enter text here"/>
    <button id="add-button">Add</button>
  </div>
  
  <ul id="item-list"></ul>
  `;

    root?.insertAdjacentHTML("beforeend", template);
  }

  private renderTodo(todo: Todo) {
    const buttonStyle = `
    color:red;
    background-color:transparent;
    border:none;
    `;

    //? Prepare the li element and add it
    const item = `<li id="todo-${todo.todoKey}">
                    ${todo.todoItem}
                      <button style='${buttonStyle}'>X</button>
                  </li>`;

    //? Add it
    this.itemList.insertAdjacentHTML("beforeend", item);

    //* Find the recently added button and add click handler to it
    this.itemList
      .querySelector(`#todo-${todo.todoKey} > button`)
      ?.addEventListener("click", () => {
        //! Ask service to remove the todo
        this.todoService.deleteTodo(todo.todoKey);

        //! Remove it from DOM Tree as well
        this.itemList.querySelector(`#todo-${todo.todoKey}`)?.remove();
      });
  }
}

// module.exports = TodoComponent;
