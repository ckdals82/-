let fs = require('fs');

let input = fs.readFileSync('stdin.txt').toString();
let number = parseInt(input);

let answer = 0;
for (let i = 1; i <= number; i++) {
  answer = answer + i;
  //   let data = arr[0].split();
}
console.log(answer);
