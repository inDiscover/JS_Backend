const array = [1,5,3,8,4,9]

function find5(element) {
  return element == 5;
}

//! find() is a HOF (pass function to it)
// Here are the pultiple ways to use HoF find()
var result = array.find(find5);
var result = array.find(function find5  ( element )    { return element == 5 });
var result = array.find(                ( element ) => { return element == 5 });
var result = array.find(                  element   =>         (element == 5));
var result = array.find(                  element   =>          element == 5);

console.log(result);

//! Functional methods of array
var result = array.findIndex(element => element == 5);
console.log(result);

//! Not functional... old style
for (let i = 0; i < array.length; i++) {
    if(array[i]) {
        console.log(i);
    }
}