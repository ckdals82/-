const [...input] = require('fs')
  .readFileSync('stdin.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

//console.log(input);

if (input[0] === input[1]) {
  console.log(1);
} else {
  console.log(0);
}
