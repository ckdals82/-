let fs = require('fs');

let input = fs.readFileSync('stdin.txt').toString();
// console.log(input);
const INPUT = Number(input);
let answer = '';

for (let i = INPUT; i >= 1; i--) {
  answer += i + '\n';
}

console.log(answer);
//형변환을 하지 않고 string 으로 for문을 돌림
//출력 형식이 잘못되었습니다 라는 에러가 떴음.
