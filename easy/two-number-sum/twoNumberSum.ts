// sum two pair of number equal to the target number

// method 01 - bruteforce
// complexity - time -> O(n^2) & space -> O(1)

function twoNumSum(arr: number[], targetNum: number): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    const firstNum = arr[i];

    for (let j = 1; j < arr.length; j++) {
      const secondNum = arr[j];
      const sum = firstNum + secondNum;

      if (sum === targetNum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

console.log(twoNumSum([1, 3, 4, 5, 7, 8], 9));

// method 02 - by sorting array
// complexity - time -> O(nlogn), space -> O(n)

function twoNumSum2(arr: number[], targetNum: number): number[] {
  const sortedArr = arr.sort(); // nlogn

  let leftIndex = 0;
  let rightIndex = sortedArr.length - 1;

  while (leftIndex < rightIndex) {
    const firstNum = sortedArr[leftIndex];
    const secondNum = sortedArr[rightIndex];

    const sum = firstNum + secondNum;

    if (sum > targetNum) {
      rightIndex--;
    } else if (sum < targetNum) {
      leftIndex++;
    } else {
      return [firstNum, secondNum];
    }
  }
  return [];
}

console.log(twoNumSum2([1, 3, 4, 5, 7, 8], 10));

// method 02 - using map
// complexity - time -> O(n), space -> O(n)

function twoNumSum3(arr: number[], targetNum: number): number[] {
  const nums = {};

  for (let i = 0; i < arr.length; i++) {
    const firstNum = arr[i];
    const otherNum = targetNum - arr[i];

    if (nums[otherNum]) {
      return [firstNum, otherNum];
    }

    nums[firstNum] = true;
  }

  return [];
}

console.log(twoNumSum3([-1, 3, 4, 5, 7, 8], 2));
