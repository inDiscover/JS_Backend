//! Promises are SYNCHRONOUS

function longRun(ms) {
  const start = new Date();
  while (new Date() - start < ms);
}

function executor(resolve, reject) {
  resolve("Promise fulfilled");
  longRun(1000);
}

//! Promise object itself wont be created until the executor returns back
const pakka = new Promise(executor); //* executor us SYNCHRONOUS
console.log("promise created");

//* Thus will be deferred (NOT parallel or background)
pakka.then((result) => console.log("Yay! " + result));

longRun(5000);
console.log("Program ends");

//! You leave... .then promise code is executed