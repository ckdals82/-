const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const num = line;
  let star = '';
  let blank = '';
  for (let i = 0; i <= num - 1; i++) {
    for (let j = 1; j <= num - i; j++) {
      process.stdout.write('*');
    }
    console.log();
  }
  rl.close();
}).on('close', function () {
  process.exit();
});
