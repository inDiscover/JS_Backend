'use strict'; // No globals are allowed, if you use it, the this keywords point to the global object is undefined and throws error.
// Always use 'use strict'

// In JS this keyword refers to global object if there is no object in place.
// This is unique to JS and you should be careful when using the this keyword.

(function lfn() {
    this.count = 1
  console.log("lfn", this.count); // Outer this points to the global object
})();

var gfn = function () {
    this.count++;
  console.log("gfn", this.count); // Outer this points to the global object
};

gfn();

var person = {
  id: 1,
  name: "Brendan",
  print: function () {
    this.count+=2;
    console.log(`person ${this.count}`); // this keyword will point to person object since it is in the person object
  },
};

person.print();

console.log("globalThis", globalThis.count) // points to the global object
console.log('this', this.count) // this returns {}

