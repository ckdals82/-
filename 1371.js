const input = require('fs').readFileSync('stdin.txt').toString().split('');
const arr = new Array(26).fill(0);
for (let x of input) {
  const char = x.charCodeAt();
  if (char >= 97 && char <= 122) {
    arr[char - 97]++;
  }
}
const max = Math.max(...arr);
let answer = '';
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === max) {
    answer += String.fromCharCode(i + 97);
  }
}
console.log(answer);
