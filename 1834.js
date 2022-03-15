const input = require('fs').readFileSync('stdin.txt').toString();
console.log(input);

const N = Number(input);
let answer = BigInt(0);
for (let i = 0; i < N; i++) {
  answer += BigInt(N * i + i);
}
console.log(answer.toString());
