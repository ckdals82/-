const input = require('fs')
  .readFileSync('stdin.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
console.log(input);

//함수 안에 배열 객체나 이름을 바로 넣어서 사용은 안되는구나 스프래드 연산자로 펼처서 사용

// console.log(Math.max(...input));

const max = Math.max.apply(null, input);

console.log(max);

//index는 무조건 0 부터 시작한다. 1 부터 첫번째 인덱스를 생각한다하면 1을 더 해야한다.

console.log(input.indexOf(max) + 1);
