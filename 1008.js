const fs = require('fs');

let input = fs.readFileSync('stdin.txt').toString().split(' ');

// console.log(input);

let a = Number(input[0]);
let b = Number(input[1]);

function divide(a, b) {
  return a / b;
}
console.log(divide(a, b));
