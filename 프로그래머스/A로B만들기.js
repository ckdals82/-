function solution(before, after) {
  var answer = 0;
  const beforeWord = before.split("").sort().join("");
  const afterWord = after.split("").sort().join("");
  beforeWord === afterWord ? (answer = 1) : (answer = 0);
  return answer;
}
