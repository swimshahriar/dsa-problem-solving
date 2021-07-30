/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let output = [];

  // constrain check
  if (1 > n > 10 ** 4) return ["out of boundary number."];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("FizzBuzz");
    } else if (i % 3 === 0 && i % 5 !== 0) {
      output.push("Fizz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      output.push("Buzz");
    } else {
      output.push(i + "");
    }
  }

  return output;
};

console.log(fizzBuzz(5));
