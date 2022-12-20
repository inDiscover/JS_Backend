// Every function is an object in JS

function add(a, b) {
  // as soon as you create an object, Js creates 2 objects: 1- function object 2- prototype object
}

add();

// function constructor
function Account(i, n, b) {
  this.id = id;
  this.n = n;
  this.b = b;
}

// Function is an object along with a prototype pair

function Employee(id, name) {
  //? instance members go into the child object
  this.id = id;
  this.name = name;

  //! We should not do this, the function will be in every child object
  this.print = function () {
    console.log(this.id, this.name);
  };
}

//* Function object members go into Employee
Employee.count = 0;

//! Prototype members are added only ONCE
Employee.prototype.baseSalary = 50000;
Employee.prototype.printDetails = function () {
  console.log(this.id, this.name);
};

var eich = new Employee(1, "Brendan");

// Function is a mother, prototype is a husband object, when you use new, it creates a kid object. 

// __proto__ and [[Prototype]] is the same thing