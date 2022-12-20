// Question:
// What is the meaning of having null and undefined as 2 different types in JavaScript?

// Answer: Neither should have existed according to Brandon Eich. He added null to make JS interoperable with Java
// We use null if we know the variable exists but we have not put a value.
// Undefined, the variable itself may not exist.
// null is an intentional absence of value.
let a = null;
a = {}

console.log(a)