const [, ...input] = require('fs')
  .readFileSync('stdin.txt')
  .toString()
  .trim()
  .split('\n');
console.log(input);
let easiest = Number.MAX_SAFE_INTEGER;

console.log(easiest);

let name;
input.forEach((el) => {
  let [problem, star] = el.split(' ');
  console.log([problem, star]);
  if (easiest > star) {
    console.log(star);
    easiest = star;
    name = problem;
  }
});
console.log(name);
