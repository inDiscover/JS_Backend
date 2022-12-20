function factorial(value) {
  if (value === 0) return 1;

  const result = value * factorial(value - 1);
  return result;
}

const answer = factorial(5)

console.log(answer)

