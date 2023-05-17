function solution(quiz) {
  var answer = [];
  for (const quizIndex of quiz) {
    const quizIndexSplit = quizIndex.split(" ");

    quizIndexSplit.forEach((el, index) => {
      const firstIndex = Number(quizIndexSplit[0]);
      const lsatIndex = Number(quizIndexSplit[quizIndexSplit.length - 1]);
      const calValue = Number(quizIndexSplit[index + 1]);
      console.log(el);
      if (el === "+") {
        firstIndex + calValue === lsatIndex
          ? answer.push("O")
          : answer.push("X");
      }
      if (el === "-") {
        firstIndex - calValue === lsatIndex
          ? answer.push("O")
          : answer.push("X");
      }
    });
  }
  return answer;
}
