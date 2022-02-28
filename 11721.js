let fs = require('fs');

let input = fs.readFileSync('stdin.txt').toString();

// console.log(input);
// console.log(input.length);

for (let i = 0; i <= input.length; i += 10) {
  console.log(input.slice(i, i + 10));
}
