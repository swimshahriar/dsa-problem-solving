/*
 * Create the function factorial here
 */
const factorial = (n) => {
  let sum = n;

  if (1 <= n && n <= 10) {
    for (let i = n - 1; i >= 1; i--) {
      sum = sum * i;
    }
  }

  return sum;
};
