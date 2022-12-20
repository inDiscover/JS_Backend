//* Execute only after the HTML is parsed and DOM tree is ready
document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("app-root");

  const template = `
  <div>
    <input id="todo-input" type="text" placeholder="Enter text here"/>
    <button id="add-button">Add</button>
  </div>
  
  <ul id="item-list"></ul>
  `;

  //* Process the given string and convert tho DOM elements
  root.insertAdjacentHTML("beforeend", template);

  const addButton = document.querySelector("#add-button");
  const todoInput = document.querySelector("#todo-input");
  const itemList = document.querySelector("#item-list");

  //* Dynamic add using button click
  addButton.addEventListener("click", () => {
    //? Prepare the li element
    const item = `<li>${todoInput.value}</li>`;

    //? Add it
    itemList.insertAdjacentHTML("beforeend", item);

    //? Make input null again
    todoInput.value = "";
  });
});
