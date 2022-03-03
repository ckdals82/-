const input = require('fs')
  .readFileSync('stdin.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number)
  .sort(function (a, b) {
    return a - b;
  });

console.log(input[1]);
