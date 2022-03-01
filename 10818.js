let fs = require('fs');

let input = fs.readFileSync('stdin.txt').toString().split('\n');

const MAX = input[0];
//내 코드에서는 map을 사용할 생각을 못하고 for 반복문에서 형변환을 할 생각으로 알고리즘을 작성했음
//배열 내의 모든 요소에 변화를 일으키고 싶다면 map 내장함수를 사용해야겠다.

//map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
let numbers = input[1].split(' ').map((x) => Number(x));

//출력에 사용할 최대, 최소값 변수를 선언 및 초기화/
//20 10 35 30 7
//각 변수에 20을 넣어줌
let max = numbers[0];
let min = numbers[0];

//20 10 35 30 7
for (let i = 1; i <= MAX; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }

  if (min > numbers[i]) {
    min = numbers[i];
  }
}

console.log(`${min} ${max}`);
