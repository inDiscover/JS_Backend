g = 10; // global

var x = 5;
var y = 7;

function add(a, b) {
  var c; // local variable
  c = a + b;
  return c;
}

var result = add(6,8) // function call creates a stack frame -> Function Execution Context
console.log(result)
