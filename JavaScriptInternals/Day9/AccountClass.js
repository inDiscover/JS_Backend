class Account {
  //! F I E L D
  balance = 0;

  //! M E T H O D S
  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  print() {
    console.log(this.balance);
  }
}

const eich = new Account();

eich.deposit(1000);
eich.withdraw(500);
eich.print();
