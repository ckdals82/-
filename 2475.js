const fs = require('fs');

let input = fs.readFileSync('stdin.txt').toString().split(' ');

// console.log(input);

const map1 = input.map((x) => Number(x) * x);
// console.log(map1);

let sum = map1[0];

for (let i = 1; i <= input.length - 1; i++) {
  //   console.log(map1[i]);
  sum = sum + map1[i];
}
console.log(sum % 10);
