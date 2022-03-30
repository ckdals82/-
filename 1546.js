let fs = require('fs');
let input = fs.readFileSync('stdin.txt').toString().trim().split('\n');

let arr = input[1].split(' ');
// console.log(arr);
let maxValue = Math.max(...arr);
// console.log(maxValue);
let sumArr = [];
for (i = 0; i < input[0]; i++) {
  sumArr.push((arr[i] / maxValue) * 100);
}

// console.log(sumArr);
const sum = sumArr.reduce((cur, acc) => cur + acc);
console.log(sum / input[0]);

// let count = +input();
// let array = input().split(' ').map(v => +v);
// let maxValue = Math.max(...array);
// const average = array.map(v => v * 100 / maxValue).reduce((a,b) => a + b) / count;
// console.log(average);
