function memoize(targetFn) {
  const cache = {}; //~? Closure

  return function memFn(arg) {
    if (cache[arg]) {
      console.log("returning from cache");
      return cache[arg];
    }

    cache[arg] = targetFn(arg);
    return cache[arg];
  };
}
function isPrime(num) {
  const max = Math.sqrt(num);
  for (let div = 2; div < max; div++) if (num % div == 0) return false;
  return true;
}

const memoized = memoize(isPrime);
console.log(memoized(999_999_999_989));
console.log(memoized(999_999_999_989));
