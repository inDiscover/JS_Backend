function longRun(ms) {
  const start = new Date(); // if constructor has no parameters you do not have to provide paranthesis
  while (new Date() - start < ms);
}

function doLater() {
  //*setTimeout will NOT start until we finish our function
  setTimeout(longRun, 0, 0);
  console.log("Just did longRun");
}

doLater();
const time = new Date();

while (new Date() - time < ms) {}
console.log("Program ends");

//! IMPORTANT: setTimeout can run when do not have any other function running. setTimeout can not in parallel, or in backround etc.
//! setTimeout runs only by sequence not parallel, or in different thread.
