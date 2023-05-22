function solution(my_string) {
  var answer = [];

  my_string.split("").map((el) => {
    const resultWord = el.toLowerCase();
    answer.push(resultWord);
  });

  return answer.sort().join("");
}
