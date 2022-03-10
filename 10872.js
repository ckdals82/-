let fs = require('fs');
let input = fs
  .readFileSync('stdin.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);
// console.log(input);

let n = [];

for (i = input[0]; i >= 1; i--) {
  n.push(i);
}
// console.log(n);
if (n.length > 1) {
  let factorial = n.reduce((acc, cur) => acc * cur);
  console.log(factorial);
} else {
  console.log(1);
}
