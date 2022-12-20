// Lambda Expression

//! Function declaration
function sqrt(x) {
  return x * x;
}

//* Function expression
const sqr2 = function (x) {
  return x * x;
};

//? Lambda expression 1
const sqrt3 = (x) => x * x;

//? Lambda expression 2
const sqrt4 = (x) => x * x;

// PURE FUNCTIONS: Functions which neither use nor modify external variables. Neither they modify the input parameters.

function accumulate(total, num) {
  return total + num;
}


// HIGHER ORDER FUNCTIONS
// Functions take other functions as input or return functions.

const expenses = [
  { txn: 1, desc: "Zomato", amount: 350 },
  { txn: 2, desc: "Amazon", amount: 2100 },
  { txn: 3, desc: "Uber", amount: 450 }
];


function accumulates(total, exp) {
    return total + exp.amount;
}

const sum = expenses.reduce(accumulate, 0)