// using recursion method
const rFib = (n) => {
  if (n < 0) {
    console.log('Input cannot be less than zero!');
  } else if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};

console.log(rFib(4));

// using dynamic programming
const dFib = (n) => {
  const f = [0, 1];

  for (let i = 2; i <= n; i++) {
    f.push(f[i - 1] + f[i - 2]);
  }
  return f[n];
};

console.log(dFib(4), dFib(4)[4]);
