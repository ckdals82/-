const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  for (let i = 0; i < line; i++) {
    //
    for (let j = 0; j < i + 1; j++) {
      //process.stdout.write("*")

      process.stdout.write('*');
    }
    console.log('');
  }

  rl.close();
}).on('close', function () {
  process.exit();
});
