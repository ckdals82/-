function solution(s) {
  const stringArray = s.trim().split(" ");
  const answerArray = [];

  for (index of stringArray) {
    index === "Z" ? answerArray.pop() : answerArray.push(Number(index));
  }
  console.log(answerArray);
  const result = answerArray.reduce((acc, cur, idx) => {
    return (acc += cur);
  }, 0);
  return result;
}
