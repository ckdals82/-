const fs = require('fs');
const input = fs
  .readFileSync('stdin.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let su = input.shift();
let solution = input.sort((a, b) => a - b);

for (i = 0; i < su; i++) {
  console.log(solution[i]);
}
