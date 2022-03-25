let fs = require('fs');
let input = fs.readFileSync('index.txt').toString().trim();

// console.log(input);
// let Number = input[0];
for (let i = 1; i <= input; i++) {
  for (k = 1; k <= input - i; k++) {
    process.stdout.write(' ');
  }
  for (j = 1; j <= 2 * i - 1; j++) {
    process.stdout.write('*');
  }
  console.log();
}
