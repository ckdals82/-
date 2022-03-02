const fs = require('fs');
const input = fs.readFileSync('stdin.txt').toString().trim().split('\n');

// let con = input;
console.log(input);

input.forEach((element) =>
  // console.log(parseInt(element))
  console.log(parseInt(element.split(' ')))
);

let a = input[0];
let b = input[1];

// while
// if (a > b) {
//   console.log('YES');
// } else if (a < b) {
//   console.log('NO');
// }
