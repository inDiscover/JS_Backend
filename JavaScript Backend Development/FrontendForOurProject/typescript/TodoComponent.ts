export class TodoComponent {
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

    const addButton = document.querySelector("#add-button") as HTMLButtonElement;
    const todoInput = document.querySelector("#todo-input") as HTMLInputElement;
    const itemList = document.querySelector("#item-list") as HTMLUListElement;

    //* Dynamic add using button click
    addButton.addEventListener("click", () => {
      //? Prepare the li element
      const item = `<li>${todoInput?.value}</li>`;

      //? Add it
      itemList.insertAdjacentHTML("beforeend", item);

      //? Make input null again
      todoInput.value = "";

    
    });
  }
}

// module.exports = TodoComponent;
