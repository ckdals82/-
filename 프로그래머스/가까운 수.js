const answerArr = [];
//findIndex는 조건이 맞는 첫번째를 리턴한다.
//가장 가까운수 === 나는 문제 풀이를 n과 정수 배열 인덱스 차이가 가장 적은 수를 답으로 선택하는 알고리즘을 작성.
//그 가장 가까운 수가 여러 개일 경우 더 작은 수를 리턴 => 	[4, 5, 4, 10, 3, 5, 8, 6] 이런 배열에서
//n = 7  이면 8, 6 중에 6이 출력되어야하는데 findIndex 내장함수는 조건이 맞는 8을 리턴하게됨
// 오름차순으로 정렬후 문제해결
function solution(array, n) {
  array.sort((a, b) => a - b);
  array.map((index) => answerArr.push(Math.abs(n - index)));
  const answer = Math.min(...answerArr);

  return array[answerArr.indexOf(answer)];
}
