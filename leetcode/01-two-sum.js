/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const firstNum = nums[i];
    const secondNum = target - firstNum;

    if (map[secondNum]) {
      const secondNumIdx = nums.indexOf(secondNum);
      return [i, secondNumIdx];
    }

    map[firstNum] = true;
  }
};
