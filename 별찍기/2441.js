let fs = require('fs');
let n = fs.readFileSync('/dev/stdin').toString().split(' ')[0];

for (let i = 0; i < n; i++) {
  let star = '';

  for (let j = 0; j < i; j++) star += ' ';
  for (let j = 0; j < n - i; j++) star += '*';

  console.log(star);
}
