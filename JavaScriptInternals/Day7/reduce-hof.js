const array = [11, 23, 36];

//! Imperative Style
let total = 0;
for (let i = 0; i < array.length; i++) {
  total += array[i];
  console.log(total);
}

//! Functional Style
//* reduce -> take each element of an array, perform some op and reduce it to a single value

//? [11, 23, 36]
//?           |
//?           v
console.log(array.reduce((total, element)   => total + element));
//?  |                      11      23      =>  11   +  23 -> 34
//?  v                      34      36      =>  11   +  23 -> 34
//?  70                     

// ternary operator
// console.log(array.reduce((total, element) => ));

// if else statement