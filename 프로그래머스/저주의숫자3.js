function solution(n) {
  var answer = [];

  //조건 3으로 나뉘어 지지않고 3이 포함되지 않는 수들을 배열로 담는다.
  for (i = 1; answer.length <= n + 2; i++) {
    const arr = String(i).split("");
    if (!arr.includes("3") && i % 3 !== 0) {
      answer.push(i);
    }
  }
  console.log(answer);
  //배열에서 입력 숫자 n의 자릿수를 조회.
  return answer[n - 1];
}
