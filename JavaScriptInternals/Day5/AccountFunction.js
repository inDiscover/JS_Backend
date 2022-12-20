// CONSTRUCTOR
function Account(accountNumber, holdersName, balance) {
  //? FIELDS
  this.accountNumber = accountNumber;
  this.holdersName = holdersName;
  this.balance = balance;
}

//! PROTOTYPE FUNCTIONS >>> NOT METHODS
Account.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

Account.prototype.deposit = function (amount) {
  this.balance += amount;
};

Account.prototype.print = function () {
    console.log("Account #: ", this.accountNumber);
    console.log("Holder's Name: ", this.holdersName);
    console.log("Account Balance: " , this.balance);
}

var eich = new Account(1, "Brendan", 10_000) 
eich.deposit(10_000)
eich.withdraw(5_000)
eich.print()
console.log("function account", typeof Account);