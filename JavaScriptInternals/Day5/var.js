//! Only var and function declaration is hoisted, not classes!!!

console.log(v);
var fn;

var v; //! Hoisted, lifted up

doSomething(); //! Hoisted -> function declaration
fn(); // not hoisted because this function is expression

function doSomething() {
  // function declaration
  console.log("do something");
}

fn = function () {}; // function expression -> this is not hoisted

class Person {}

//! var can be recreated
var a = 12
var a = 'Name'
var a = "Mehmet"