function solution(polynomial) {
  var answer = "";
  let xCnt = 0;
  let numCnt = 0;
  const polynomialSplit = polynomial.split(" ");
  for (const el of polynomialSplit) {
    if (el === "x") {
      xCnt++;
      console.log("x만", el);
    } else if (el.includes("x") && el.length > 1) {
      const number = el[0];
      xCnt += Number(number);

      console.log("x", el);
    } else if (el !== "+") {
      numCnt += Number(el);
      console.log(el, "numC");
    }
    console.log(xCnt, "cnt");
  }

  answer = xCnt > 0 ? `${xCnt}x` : `${xCnt}`;
  answer = answer === "1x" ? (answer = "x") : answer;
  answer = numCnt > 0 ? (answer += ` + ${numCnt}`) : answer;
  console.log(answer);
  console.log(answer[0], "cj");
  return answer;
}
