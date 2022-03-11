let fs = require('fs');

let input = fs.readFileSync('stdin.txt').toString().split('');
console.log(input);

let m = input.filter(
  (x) => x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u'
).length;

console.log(m);
