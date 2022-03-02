const fs = require('fs');

let input = fs.readFileSync('stdin.txt').toString().split(' ').map(Number);

console.log(input[0] + input[1]);
