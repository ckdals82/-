const input = require('fs')
  .readFileSync('stdin.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(input);
for (let i = 1; i <= input[0]; i++) {
  console.log(`Hello World, Judge ${i}!`);
}
