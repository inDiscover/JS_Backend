import { Todo } from "./TodoModel";

export class TodoComponent {
  private todoList: Todo[] = [];

  constructor(selector: string) {
    const template = `
  <div>
    <input id="todo-input" type="text" placeholder="Enter text here"/>
    <button id="add-button">Add</button>
  </div>
  
  <ul id="item-list"></ul>
  `;

    //* Process the given string and convert to DOM elements
    const root = document.querySelector(selector);
    root?.insertAdjacentHTML("beforeend", template);

    const addButton = document.querySelector(
      "#add-button"
    ) as HTMLButtonElement;
    const todoInput = document.querySelector("#todo-input") as HTMLInputElement;
    const itemList = document.querySelector("#item-list") as HTMLUListElement;

    // Read back from localstorage 
    this.todoList = JSON.parse(localStorage.getItem("todolist") ?? "[]");
    console.log(this.todoList);

    //* Dynamic add using button click
    addButton.addEventListener("click", () => {
      //* Capture the todo text, create a Todo object and add to todoList
      const todo = new Todo(todoInput?.value);
      this.todoList.push(todo);

      //? Prepare the li element
      const item = `<li>${todoInput?.value}</li>`;

      //? Add it
      itemList.insertAdjacentHTML("beforeend", item);

      //? Make input null again
      todoInput.value = "";

      console.log(this.todoList);

      // Write the data to local storage
      localStorage.setItem("todolist", JSON.stringify(this.todoList));
    });
  }
}

// module.exports = TodoComponent;
