const [...input] = require('fs')
  .readFileSync('stdin.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

// console.log(input);

let sum = 0;
// console.log(input.length);
for (i = 0; i < input.length - 1; i++) {
  sum += input[i];
}

console.log(sum);
