let fs = require('fs');

let input = fs.readFileSync('stdin.txt').toString();
// console.log(input);
let answer = '';

for (let i = 1; i <= input; i++) {
  answer += i + '\n';
}

console.log(answer);
