let fs = require('fs');

let input = fs.readFileSync('stdin.txt').toString();
console.log(input);

// for (let i = 1; i <= T; i++) {
//   // input[i] -> '1 1'

//   let data = input[i].split(' ');
//   // console.log(data)
//   // [ '1', '1' ]
//   // [ '2', '3' ]
//   // [ '3', '4' ]
//   // [ '9', '8' ]
//   // [ '5', '2' ]

//   let A = Number(data[0]);
//   let B = Number(data[1]);

//   console.log(A + B);
// }
