function solution(numbers, num1, num2) {
  var answer = [];

  answer.push(...numbers.slice(num1, num2 + 1));

  console.log(answer);
  return answer;
}
