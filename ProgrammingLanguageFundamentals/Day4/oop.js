class Mmn {
  print() {
    console.log("Memo");
  }
}

const m = new Mmn();

console.log(typeof Mmn); // function
console.log(typeof m); // object

m.print()
