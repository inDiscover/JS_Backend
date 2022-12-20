g = 10; // Global scope
var x = 5; // Local to anonymous function
var y = 7; // Local to anonymous function

function add(a, b) {
  var c; // local to add function
  c = a + b;
  return c;
}

var result = add(x, 7);
console.log(result)
console.log(add.toString());
