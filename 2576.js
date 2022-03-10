const input = require('fs')
  .readFileSync('stdin.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
// console.log(input);

// const holsu = input.filter((el) => el % 2 !== 0);

// let sum = holsu.reduce((acc, cur) => acc + cur, 0);

// const min = Math.min.apply(null, holsu);

// if (jjasu) {
//   console.log(-1);
// } else {
//   console.log(sum);
//   console.log(min);
// }
const arr = input.filter((v) => v % 2 !== 0);
console.log(arr);

if (arr.length > 0) {
  const sum = arr.reduce((acc, cur) => acc + cur);
  console.log(sum);
  console.log(Math.min(...arr));
} else {
  console.log(-1);
}
