const arr = [11, 2, 3, 5, 644, 3];
console.log(arr);

function numericSort(a, b) {
  console.log("sort passed", a, b);
  if (a > b) return +1;
  if (b > a) return -1;
  return 0;

  // instead the following code could be used:
  // return a-b;
}

// sort is a higher order function
arr.sort(); // sorts as if they are text
console.log(arr);

arr.sort(numericSort);
console.log(arr);
