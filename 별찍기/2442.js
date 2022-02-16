const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const num = line;

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num - i; j++) {
      process.stdout.write(' ');
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      process.stdout.write('*');
    }
    console.log();
  }
  rl.close();
}).on('close', function () {
  process.exit();
});
