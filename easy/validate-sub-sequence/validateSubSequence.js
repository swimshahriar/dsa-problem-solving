// validate a sub-sequence
// using for loop
// complexity - time -> O(n), space -> O(1)
function validateSubSequence(mainArr, sequence) {
    var seqIdx = 0;
    for (var i = 0; i < mainArr.length; i++) {
        if (seqIdx === sequence.length) {
            break;
        }
        if (sequence[seqIdx] === mainArr[i]) {
            seqIdx++;
        }
    }
    return seqIdx === sequence.length;
}
console.log(validateSubSequence([1, 2, 4, 55, 60, 90], [2, 55, 90]));
// using while loop
// complexity - time -> O(n), space O(1)
function validateSubSequence2(mainArr, sequence) {
    var mainArrIdx = 0;
    var seqIdx = 0;
    while (mainArrIdx < mainArr.length && seqIdx < sequence.length) {
        if (mainArr[mainArrIdx] === sequence[seqIdx]) {
            seqIdx++;
        }
        mainArrIdx++;
    }
    return seqIdx === sequence.length;
}
console.log(validateSubSequence2([1, 2, 4, 55, 60, 90], [2, 55, 0]));
