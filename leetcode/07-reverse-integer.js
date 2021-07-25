/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0) return 0;
  // x -> absolute value -> toString -> split -> reverse -> join
  const revInt =
    (x < 0 ? -1 : 1) * Math.abs(x).toString().split("").reverse().join("");

  if (revInt < -2147483648 || revInt > 2147483647) {
    return 0;
  }

  return revInt;
};
