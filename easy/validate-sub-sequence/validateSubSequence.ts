// validate a sub-sequence

// using for loop
// complexity - time -> O(n), space -> O(1)

function validateSubSequence(mainArr: number[], sequence: number[]): boolean {
  let seqIdx = 0;

  for (let i = 0; i < mainArr.length; i++) {
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

function validateSubSequence2(mainArr: number[], sequence: number[]): boolean {
  let mainArrIdx = 0;
  let seqIdx = 0;

  while (mainArrIdx < mainArr.length && seqIdx < sequence.length) {
    if (mainArr[mainArrIdx] === sequence[seqIdx]) {
      seqIdx++;
    }
    mainArrIdx++;
  }
  return seqIdx === sequence.length;
}

console.log(validateSubSequence2([1, 2, 4, 55, 60, 90], [2, 55, 90]));
