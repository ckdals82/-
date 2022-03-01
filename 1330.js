const fs = require('fs');

let input = fs.readFileSync('stdin.txt').toString().split(' ').map(Number);

// console.log(input);

if (input[0] > input[1]) {
  console.log('>');
} else if (input[0] < input[1]) {
  console.log('<');
} else {
  console.log('==');
}
