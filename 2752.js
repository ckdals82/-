const fs = require('fs');
let input = fs
  .readFileSync('stdin.txt')
  .toString()
  .split(' ')
  .map(Number)
  .sort((a, b) => {
    return a - b;
  });
console.log(input);
// let arr = input.sort((a, b) => {
//   return a - b;
// });

console.log(...input);
