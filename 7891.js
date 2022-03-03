const input = require('fs')
  .readFileSync('stdin.txt')
  .toString()
  .trim()
  .split('\n');

// console.log(input);
// console.log(Number(input[0]));
let index = 0;
for (i = 1; i <= Number(input[0]); i++) {
  let sum = input[i].split(' ').map(Number);

  console.log(sum[0] + sum[1]);
}
