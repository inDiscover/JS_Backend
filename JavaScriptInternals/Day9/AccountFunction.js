function Account() {
  //! F I E L D S (closure variable)

  var balance = 0;

  function deposit(amount) {
    balance += amount;
  }

  function withdraw(amount) {
    balance -= amount;
  }

  function print() {
    console.log(balance);
  }

  deposit(1000);
  withdraw(500);
  print();
}

Account();
