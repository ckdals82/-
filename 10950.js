let fs = require('fs');

let input = fs.readFileSync('stdin.txt').toString().split('\n');
console.log(input);
console.log();

let input2 = fs.readFileSync('stdin.txt').toString();
console.log(input2);
console.log();

let input3 = fs.readFileSync('stdin.txt');
console.log(input3);
console.log();
//['5', '1 1', '2 3', '3 4', '9 8', '5 2']

// console.log(input)
let T = Number(input[0]); // 무슨 type?? (int)

for (let i = 1; i <= T; i++) {
  // input[i] -> '1 1'

  let data = input[i].split(' ');
  // console.log(data)
  // [ '1', '1' ]
  // [ '2', '3' ]
  // [ '3', '4' ]
  // [ '9', '8' ]
  // [ '5', '2' ]

  let A = Number(data[0]);
  let B = Number(data[1]);

  console.log(A + B);
}
