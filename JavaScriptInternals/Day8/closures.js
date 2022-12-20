//* Some languages allow classes inside classes.
//* C++, Java, Python, C#
//* JS does not allow class inside another class.

//* Some languages allow function inside function.
//* Ex: JavaScript and Python
//* Java, C++, C# does not allow that.

//* The only languages supports both class inside class and function inside class is Python among popular languages.

function outerFunction() {
  //! Lexical scope begins for inner.
  const v = 10;
  console.log("Outer");
  //! Lexical scoper ends here.
  function innerFunction() {
    console.log("inner", v); //* Day_8 1:20:00 dakikasina bak: Since v here is from lexical scope, it is normally not available, but it is available thanks to closure.
  }
  //! All local variables of outerFunction are destroyed at this point
  return innerFunction; //* Higher order function (HoF) either takes a function or returns a function
}

//* CLOSURE IS AN OBJECT OF AN INNER FUNCTION, IT IS NOT A FUNCTION ITSELF. IT CONTAINS THE DUPLICATED VARIABLES BELONG TO LEXICAL SCOPE (OUTSIDE OF THE INNER FUNCTION, INSIDE OF THE OUTER FUNCTION)
//* CLOSURE IS CREATED WHEN YOU TRY TO ACCESS LEXICAL ENVIRONMENT, NO NEED TO RETURN A VALUE TO CREATE A CLOSURE.

//* Lexical scope is outside of the function.

//? In order to access the inner function, we need to return it first, then we need to assign to a variable and invoke later like below
const inner = outerFunction();
inner(); // this executes only inner function

//! innerFunction() // this won't work, not possible to call function from outside.
//! outerFunction.innerFunction() // this won't work, not possible to call function from outside.
//! outerFunction().innerFunction() // this won't work, not possible to call function from outside.


//* WHY DO WE NEED CLOSURES?
//* When JS was all about functions, closures were playing the role of fields in programming languages with class concept.
//* In order to fill this gap, closures exist. This way we have a field/method inside of a function. Similar to a class with a method in it. 
//* React hooks are creating closure for example 

//* A variable inside lexical scope gets normally destroyed when it is not pointed by a closure.
//* So closure says this to the var in lexical scope, 'Biz varsak siz de varsiniz, biz yoksak siz de yoksunuz.'

//* Once a variable inside an outer function has been pointed by a closure, the same closure will be used by all other inner functions. So it is not created multiple times.