function solution(dot) {
  var answer = 0;
  //x,y 좌표 변수명 설정
  const coordinateX = dot[0];
  const coordinateY = dot[1];

  if (coordinateX > 0) {
    coordinateY < 0 ? (answer = 4) : (answer = 1);
  } else {
    coordinateY < 0 ? (answer = 3) : (answer = 2);
  }
  return answer;
}

//다른 사람의 풀이
//구조분해할당으로 변수를 할당받고
//식별 가능한 값으로 삼항연산자 리턴문 처리
//나와의 차이 조건문의 유무와 식별가능한 값을 괄호 처리하여 삼항연산자를 2중으로 처리함.
// function solution(dot) {
//     const [num,num2] = dot;
//     const check = num * num2 > 0;
//     return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
// }
