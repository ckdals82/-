function solution(s) {
  var answer = "";
  let divide = 0;
  if (s.length === 1) return s[0];
  if (s.length % 2 === 0) {
    // answer = s.split('').splice(1,2).join('')
    answer = s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    divide = Math.floor(s.length / 2);

    answer = s[divide];
  }

  return answer;
}
