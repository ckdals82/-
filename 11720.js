let fs = require('fs');

let input = fs.readFileSync('stdin.txt').toString().split('\n');
//console.log(input);

let T = Number(input[0]);

const res = input[1].split('');

//console.log(res);

let sum = 0;

for (let i = 0; i < T; i++) {
  sum = sum + Number(res[i]);
}

console.log(sum);
