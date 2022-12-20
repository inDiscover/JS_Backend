//! Arrays inside objects

const student = {
  rollNumber: 12145,
  name: "Brendan Eich",
  marks: [35, 78, 99],
  print() {
    console.log(
      this.rollNumber,
      this.name,
      this.marks[0] + this.marks[1] + this.marks[2]
    );
  },
};

student.print();

//! Objects inside arrays
const expenses = [
  { txn: 101, desc: "Zomato", amount: 540 },
  { txn: 102, desc: "Uber", amount: 786 },
  { txn: 103, desc: "Amazon", amount: 2200 },
];

console.log(expenses);

let sum = 0;
for (let i = 0; i < expenses.length; i++) {
  console.log(expenses[i].amount);
  sum += expenses[i].amount;
}

console.log(sum)

//! Instead of writing the above for loop, we can benefit from funcitonal programming concepts

console.log('Total', expenses.reduce((total, exp) => total + exp.amount, 0))
