function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}

function solution(balls, share) {
  var answer = 0;
  const ball = factorial(balls);
  const divide = factorial(share);
  answer = Math.floor(((factorial(balls - share) * divide) / ball) * 10);
  return answer;
}
