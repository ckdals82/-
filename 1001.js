const fs = require('fs');

let input = fs.readFileSync('stdin.txt').toString().split(' ').map(Number);

let a = input[0];

let b = input[1];

function minus(x, y) {
  return x - y;
}

console.log(minus(a, b));
