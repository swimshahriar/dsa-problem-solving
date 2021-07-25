/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const s1 = s.split("");
  const stack = [];

  const startPattern = ["(", "{", "["];

  // length check 1 <= s1.length <= 10^4
  if (1 <= s1.length <= 10 ** 4) {
  } else {
    return false;
  }

  for (let i = 0; i < s1.length; i++) {
    if (startPattern.includes(s1[i])) {
      // (, {, [
      stack.push(s1[i]);
    } else {
      // ], }, )
      if (stack.length <= 0) {
        return false;
      }

      const lastBrace = stack.pop();
      const currentBrace = s1[i];

      if (lastBrace === "(" && currentBrace === ")") {
      } else if (lastBrace === "{" && currentBrace === "}") {
      } else if (lastBrace === "[" && currentBrace === "]") {
      } else {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};

console.log(isValid("({[]})"));
console.log(isValid("({])"));
