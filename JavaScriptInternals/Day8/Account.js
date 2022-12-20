class Account {
  constructor(accountNunber, holdersName, balance) {
    this.accountNunber = accountNunber;
    this.holdersName = holdersName;
    this.balance = balance;
  }

  //! METHODS go into Account prototype

  withdraw(amount) {
    this.balance -= amount;
  }

  //! SWITCH CASE AND IF-ELSE-IF ladder are evil.
  //! Problem creating non-maintenable code

  deposit(amount) {
    this.balance += amount;
  }

  print() {
    console.log("Account #: ", this.accountNunber);
    console.log("Holder's Name: ", this.holdersName);
    console.log("Account Balance: ", this.balance);
  }
}

//! New type of account
class SavingAccount extends Account {
  //? Inheritance
  //* Overriding
  withdraw(amount) {
    console.log("SA withdraw happening");
    if (this.balance - amount < 500) {
      // throw new Error("Insufficient Balance");
      super.withdraw(amount);
    }
  }
}

var eich = new Account(1, "Brendan Eich", 20_000);
var marc = new SavingAccount(2, "Marc Andreesen", 30_000);
eich.deposit(5_000);
marc.withdraw(30_000);
marc.print();
