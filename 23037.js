const [...input] = require('fs')
  .readFileSync('stdin.txt')
  .toString()
  .trim()
  .split('');
// console.log(input);

let arr = [];

input.forEach((el) => {
  let ell = el * el * el * el * el;
  arr.push(ell);
  //   console.log(arr);
});

// console.log(arr);

result = arr.reduce((acc, cur) => {
  //   console.log(acc, cur);
  return acc + cur;
}, 0);

console.log(result);

// let input2 = require('fs')
//   .readFileSync('stdin.txt')
//   .toString()
//   .trim()
//   .split('\n');
// console.log(input2);
// console.log([...input2[0]]);
// let [q, w, e, r, t] = [...input2[0]].map(Number).map((i) => i ** 5);
// console.log(q + w + e + r + t);

let w = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

res = w.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(res);
