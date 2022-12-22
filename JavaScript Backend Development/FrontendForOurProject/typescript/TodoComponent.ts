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

    // Read back from localstorage
    // this.todoList = JSON.parse(localStorage.getItem("todolist") ?? "[]");
    this.todoList = this.todoService.getAllTodos();
    this.todoList.forEach((todo: Todo) => {
      const item = `<li>${todo.todoItem}</li>`;
      this.itemList.insertAdjacentHTML("beforeend", item);
    });

    console.log(this.todoList);

    //* Dynamic add using button click
    addButton?.addEventListener("click", () => {
      this.renderTodo(this.todoService.createTodo(this.todoInput?.value));
      this.todoInput.value = "";
      //* Capture the todo text, create a Todo object and add to todoList
      // const todo = new Todo(todoInput?.value);
      const todo = this.todoService.createTodo(this.todoInput?.value);
      this.todoList.push(todo);

      //? Make input null again
      this.todoInput.value = "";

      console.log(this.todoList);

      // Write the data to local storage
      // localStorage.setItem("todolist", JSON.stringify(this.todoList));
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

    //? Prepare the li element
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
