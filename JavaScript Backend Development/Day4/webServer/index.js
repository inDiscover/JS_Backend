console.log("Hello, Frontend");

//* Execute only after the HTML is parsed and DOM tree is ready
document.addEventListener("DOMContentLoaded", () => { // DOMContentLoaded is used when script tag needs to be run after the DOM. This is needed if script tag is not below body tag
  const div = document.createElement("div");
  div.innerHTML = "Hello";
  const root = document.querySelector("app-root");
  root.appendChild(div);
});
