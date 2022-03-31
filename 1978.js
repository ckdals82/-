const fs = require('fs');
const input = fs.readFileSync('stdin.txt').toString().trim().split('\n');

// For local test

const T = parseInt(input.shift());
const numbers = input
  .shift()
  .split(' ')
  .map((num) => parseInt(num));
let counter = 0;
console.log(numbers);
function primeNumber(n) {
  if (n < 2) {
    return;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return;
    }
  }
  counter++;
}

for (let i = 0; i < T; i++) {
  primeNumber(numbers[i]);
}

console.log(counter);
