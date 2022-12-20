// classes are syntactical sugar is wrong, because functions in class has no protoype (husband one)
// So this means that class is optimizing the use of memory better way.

class Account {
  #priv = 10; //! A fie;d prepended with # is considered PRIVATE

  constructor(accountNumber, holdersName, balance) {
    //? FIELDS
    this.accountNumber = accountNumber;
    this.holdersName = holdersName;
    this.balance = balance;
  }

  //! DO NOT USE LAMBDA INSIDE THE CLASS, THEY WILL GO TO EVERY SINGLE OBJECT
  lambda = () => {
    console.log("I am FAT");
  };

  //! METHODS automatically goes into property
  withdraw(amount) {
    // these functions are like lambda, they do not have husband prototype. the only difference is they have this keyword usable.
    this.balance -= amount;
  }

  deposit(amount) {
    this.balance += amount;
  }

  print() {
    console.log("Account #: ", this.accountNumber);
    console.log("Holder's Name: ", this.holdersName);
    console.log("Account Balance: ", this.balance);
  }

  #privateMethod() {
    console.log("Account #: ", this.accountNumber);
    console.log("Holder's Name: ", this.holdersName);
    console.log("Account Balance: ", this.balance);
  }
}

var eich = new Account(1, "Brendan", 10_000);
eich.deposit(10_000);
eich.withdraw(5_000);
eich.print();
console.log("function account", typeof Account);
