const input = require('fs')
  .readFileSync('stdin.txt')
  .toString()
  .trim()
  .split(' ');
let arr = input.map((el) => el.split(' ').map(Number));
console.log(arr);
console.log(arr.length);
let max = -1;
let row; //행
let column; //열
for (let n = 0; n < arr.length; n++) {
  for (let i = 0; i < arr[n].length; i++) {
    if (max < arr[n][i]) {
      max = arr[n][i];
      row = n + 1;
      column = i + 1;
    }
  }
}
//내부 로직에서 i +1을 한 이유는 index는 0부터 시작이고 행과 열은 1부터 시작이다.
console.log(max);
console.log(row, column);
