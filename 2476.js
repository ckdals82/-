const input = require('fs')
  .readFileSync('stdin.txt')
  .toString()
  .trim()
  .split('\n');
input.shift();
console.log(input);
let answer = 0;
for (let i = 0; i < input.length; i++) {
  const [a, b, c] = input[i].split(' ').map(Number);
  let prize;
  if (a === b && a === c) {
    prize = 10000 + 1000 * a;
  } else if (a === b) {
    prize = 1000 + a * 100;
  } else if (a === c) {
    prize = 1000 + a * 100;
  } else if (b === c) {
    prize = 1000 + b * 100;
  } else {
    prize = 100 * Math.max(a, b, c);
  }

  if (answer < prize) {
    answer = prize;
  }
}
console.log(answer);
