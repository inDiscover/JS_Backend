//! Array itself can behave like various data structures.
const array = [5, 7, 1];

//! 1. Like an array
console.log(array[0]);
array[0] = 5;
console.log(array);

//! 2. Like LinkedList / Stack(LIFO)
const pushing = array.push(9);
console.log("pushing an array returns:", pushing); // push(e) returns the length of the array
console.log("push(9)", array);

var result = array.pop(); // pop() returns the popped element
console.log("pop() result", result);
console.log(array);

//! 3. Like Queue (FIFO)
const unshifting = array.unshift(8);
console.log(unshifting); // unshift(e) returns the length of the array
console.log("unshift(8)", array);
var result = array.pop();
console.log(array);

//! 4. Like Double Ended Queue
var result = array.shift(); // shift() returns the shifted element
console.log("shift()", result);
console.log(array);

// NOTE: If we use methods to add element to an array, this operation returns the added element itself, 
// when we remove and element from the array, this operation returns the length of the remaining array.
