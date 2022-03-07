const input = require('fs')
  .readFileSync('stdin.txt')
  .toString()
  .split('/')
  .map(Number);

if (input[0] + input[2] < input[1] || input[1] == 0) {
  console.log('hasu');
} else {
  console.log('gosu');
}
