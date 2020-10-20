'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
const PI = Math.PI;
function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.

    const r = readLine();

    const area = PI * Math.pow(r, 2);
    const perimeter = 2 * PI * r;
    
    // Print the area of the circle:
    console.log(area);
    
    // Print the perimeter of the circle:
    console.log(perimeter)

    try {    