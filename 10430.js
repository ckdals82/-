let fs = require('fs');
let input = fs
  .readFileSync('stdin.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

//console.log(input);
console.log((input[0] + input[1]) % input[2]);
console.log(((input[0] % input[2]) + (input[1] % input[2])) % input[2]);
console.log((input[0] * input[1]) % input[2]);
console.log(((input[0] % input[2]) * (input[1] % input[2])) % input[2]);
