const fs = require('fs');

// let input = fs.readFileSync('stdin.txt').toString().split(' ');

// // 빈문자열이 배열 첫번째 인자일때 반복문 조건값
// let max = input.length - 1;

// //빈문자열 배열 길이 변수
// let arrLength = 0;

// if (input[0] == '' || input[input.length - 1] == '') {
//   for (let i = 1; i <= max; i++) {
//     arrLength = i;
//   }
//   console.log(arrLength);

// } else {
//   console.log(input.length);

// }

let input = fs.readFileSync('stdin.txt').toString().split('\n');

console.log(input);
let str = input[0].split(' ');
console.log(str);

let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] !== ' ') {
    count++;
  }
  if (str[i] === '') {
    count--;
  }
}
console.log(count);

// const fs=require('fs')
const line = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const arr = line.filter((el) => el !== '');
console.log(arr.length);
