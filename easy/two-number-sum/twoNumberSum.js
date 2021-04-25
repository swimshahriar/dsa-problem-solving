// sum two pair of number equal to the target number
// method 01 - bruteforce
// complexity - time -> O(n^2) & space -> O(1)
function twoNumSum(arr, targetNum) {
    for (var i = 0; i < arr.length - 1; i++) {
        var firstNum = arr[i];
        for (var j = 0; j < arr.length; j++) {
            var secondNum = arr[j];
            var sum = firstNum + secondNum;
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
function twoNumSum2(arr, targetNum) {
    var sortedArr = arr.sort(); // nlogn
    var leftIndex = 0;
    var rightIndex = sortedArr.length - 1;
    while (leftIndex < rightIndex) {
        var firstNum = sortedArr[leftIndex];
        var secondNum = sortedArr[rightIndex];
        var sum = firstNum + secondNum;
        if (sum > targetNum) {
            rightIndex--;
        }
        else if (sum < targetNum) {
            leftIndex++;
        }
        else {
            return [firstNum, secondNum];
        }
    }
    return [];
}
console.log(twoNumSum2([1, 3, 4, 5, 7, 8], 10));
// method 02 - using map
// complexity - time -> O(n), space -> O(n)
function twoNumSum3(arr, targetNum) {
    var nums = {};
    for (var i = 0; i < arr.length; i++) {
        var firstNum = arr[i];
        var otherNum = targetNum - arr[i];
        if (nums[otherNum]) {
            return [firstNum, otherNum];
        }
        nums[firstNum] = true;
    }
    return [];
}
console.log(twoNumSum3([-1, 3, 4, 5, 7, 8], 2));
