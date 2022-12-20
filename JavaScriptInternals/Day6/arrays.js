const arr = [1, 5, 6, 3, 2, 5, 78, 9, 998];

// arr.forEach(console.log);

const greaterThanFour = (element) => element > 999;
console.log(arr.findIndex(greaterThanFour)); // returns the index number for first matching condition or -1 if there is no value

console.log(arr.find(greaterThanFour)) // returns the value for a given condition or undefined if there is no matching condition 

console.log(arr.reduce((total, value) => (total += value), 0));
