let fs = require('fs');

let input = fs.readFileSync('stdin.txt').toString().split('\n');
console.log(input);

const MAX = input[0];

let numbers = input[1].split(' ').map((x) => Number(x));
let max = numbers[0];
let min = numbers[0];

console.log(numbers);
for (let i = 1; i <= MAX; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }

  if (min > numbers[i]) {
    min = numbers[i];
  }
}

console.log(`${min} ${max}`);
