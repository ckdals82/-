const input = require('fs')
  .readFileSync('stdin.txt')
  .toString()
  .trim()
  .split('')
  .map(Number);
//console.log(input);

for (let i = 1; i <= 9; i++) {
  console.log(`${input[0]} * ${i} = ${input[0] * i} `);
}
