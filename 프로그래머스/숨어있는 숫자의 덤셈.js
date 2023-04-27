function solution(my_string) {
  var answer = 0;
  answer = my_string
    .split("")
    .filter((index) => !isNaN(index))
    .reduce((acc, cur) => Number(acc) + Number(cur));
  return answer;
}
