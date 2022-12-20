// When a variabe is created, the the value field of the dictionary is not pointing to a value directly
// it points to a property descriptor which is another dictionary.

// property descriptor is like:
// value: "Bla bla"
// enumarable: true
// writeable: true

class Person {
  constructor(id, name) {
    //! Define property by simple assignment
    // this.id = id;
    // this.name = name;

    //! Define properties one by one (but with writeable/enumerable)
    // Object.defineProperty(this, "id", {
    //   value: id,
    //   writeable: false,
    //   enumerable: true,
    // });

    // Object.defineProperty(this, "name", {
    //   value: name,
    //   writeable: false,
    //   enumerable: true,
    // });

    //! Define multiple properties in one go
    Object.defineProperties(this, {
      id: { value: id, writable: true, enumerable: true, configurable: false },
      name: {
        value: name,
        writable: false,
        enumerable: true,
        configurable: false,
      },
    });
  }
}

var eich = new Person(1, "Brendan");
var marc = new Person(2, "Andereessen");

eich.id = 100; // id will remain 1 because the writable property is set to false.
console.log(eich);
marc.name = "Marc";
console.log(marc);
