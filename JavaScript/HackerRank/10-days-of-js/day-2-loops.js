'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  const vowels = [];
  const consonats = [];

  const inputArr = s.split('');

  inputArr.forEach((alphabet) => {
    if (
      alphabet === 'a' ||
      alphabet === 'e' ||
      alphabet === 'i' ||
      alphabet === 'o' ||
      alphabet === 'u'
    ) {
      vowels.push(alphabet);
    } else {
      consonats.push(alphabet);
    }
  });

  vowels.forEach((vowel) => console.log(vowel));
  consonats.forEach((consonat) => console.log(consonat));
}
