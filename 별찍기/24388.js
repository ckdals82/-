let fs = require('fs');
let input = fs
  .readFileSync('index.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

for (i = 0; i < input; i++) {
  for (k = 0; k < i + 1; k++) {
    process.stdout.write('*');
  }
  console.log();
}
