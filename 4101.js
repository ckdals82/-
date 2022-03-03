const input = require('fs')
  .readFileSync('stdin.txt')
  .toString()
  .trim()
  .split('\n');

console.log(input);

let sum = '';

for (i = 0; i < input.length; i++) {
  if (input[i] === '0 0') break;

  let number = input[i].split(' ').map(Number);
  console.log(number);

  sum += number[0] > number[1] ? 'Yes\n' : 'No\n';
  console.log(sum);
}
console.log(sum);
