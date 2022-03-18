let fs = require('fs');
let input = fs
  .readFileSync('stdin.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(input - 1946);
