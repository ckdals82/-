let fs = require('fs');
let input = fs.readFileSync('stdin.txt').toString().trim().split('\n');
// console.log(input);

let N = input[0].split(' ').map(Number);
// console.log(N);
let suyeal = input[1].split(' ').map(Number);
// console.log(suyeal);

let result = suyeal.filter((el) => el < N[1]);
console.log(...result);
