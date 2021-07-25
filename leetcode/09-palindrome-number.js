/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (Math.pow(-2, 31) <= x <= Math.pow(2, 31) - 1) {
    if (x < 0) {
      return false;
    } else {
      let number = x; // 121
      let reverseNum = 0;

      while (number > 0) {
        reverseNum = reverseNum * 10 + (number % 10); // 0 + 1 = 1 -> 10 + 2 = 12 -> 120 + 1 = 121
        number = parseInt(number / 10); // 12 -> 1 -> 0
      }

      return x === reverseNum; // true
    }
  }
  return false;
};
