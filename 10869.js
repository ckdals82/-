let fs = require('fs');
let input = fs
  .readFileSync('stdin.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(input);

console.log(input[0] + input[1]);
console.log(input[0] - input[1]);
console.log(input[0] * input[1]);
console.log(Math.floor(input[0] / input[1]));
console.log(input[0] % input[1]);
