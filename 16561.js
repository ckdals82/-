let fs = require('fs');
let input = fs.readFileSync('stdin.txt').toString().split();
// console.log(input);
// console.log(input.length);
for (i = 0; i < input.length; i++) input[i] = Number(input[i]);

let N = input[0];
let div = N / 3;
let count = 0;

if (div >= 3) {
  for (i = 0; i < div - 1; i++) count = count + (div - i - 2);
}
console.log(count);
