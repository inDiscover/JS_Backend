const array = [11, 23];
array[5] = 36;
console.log(array); // [ 11, 23, <3 empty items>, 36 ]

array[-1] = "Brendan Eich"; // this does not complain but not considered as index and added to the length
array.boo = "yeah";
array["7"] = 5;
array[true] = false;
console.log(array); // everything above is printed

//! 1. c-style for (statement; expression; expression)
console.log("_______c style for______");
for (let i = 0; i < array.length; i++) {
  const e = array[i];
  console.log(i, ":", e);
}

//! 2. for in (index)
console.log("_______for in________");
for (const index in array) {
  console.log(index, ":", array[index]);
}

//! 3. for of (value of)
console.log("_______for of_______");
for (const value of array) {
  console.log(value);
}

//! 4. forEach
console.log('_______forEach()_______');
array.forEach((value, index) => console.log(index, ':', value));