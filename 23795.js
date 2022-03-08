let [N, M] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(Number);

let min = Math.min(N, M);

console.log(Math.floor(min / 2));
