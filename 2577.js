let fs = require('fs');
let input = fs.readFileSync('stdin.txt').toString().trim().split('\n');

const total = '' + input[0] * input[1] * input[2];
let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// console.log(typeof total);
// console.log(total.length);
// console.log(total[0]);

for (i = 0; i < total.length; i++) {
  result[total[i]] += 1;
}
console.log(result.join());
