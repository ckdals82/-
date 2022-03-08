const [A, B, C] = require('fs')
  .readFileSync('stdin.txt')
  .toString()
  .split('\n')
  .map((n) => Number(n));
console.log([A, B, C]);
const answer = Array.from({ length: 10 }, (v) => 0);
console.log(answer);
(BigInt(A) * BigInt(B) * BigInt(C))
  .toString()
  .split('')
  .map((n) => answer[Number(n)]++);

console.log(answer.join('\n'));

// for (let i=0; i <total.length; i++){
//     result[total[i]] += 1
// }

// total = '17037300'
// total[0] => '1'
// total.length => 8

// result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// i == 0, total[0] => ?? , result[ total[i] ] += 1, result[1] += 1, result = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0]

// i == 1, total[1] => ??, result[ total[i] ] += 1, result[7] += 1, result = [0, 1, 0, 0, 0, 0, 1, 0, 0, 0]

// i == 2, total[2] => ??, result[ total[i] ] += 1, result[???], result = [1, 1, 0, 0, 0, 0, 1, 0, 0, 0]

// i == 3, total[3] => 3, result[ total[i] ] += 1, result[3] += 1, result = [1, 1, 0, 1, 0, 0, 1, 0, 0, 0]

// i == 4, total[4] => 7, result[ 7] +=1 , result[7] += 1, result = [1, 1, 0, 1, 0, 0, 1, 1, 0, 0]

// i == 5 total[5] => 3, result[ 3] +=1 , result[3] += 1, result = [1, 1, 0, 2, 0, 0, 1, 1, 0, 0]

// i == 6 total[6] => 0, result[ 0] +=1 , result[0] += 1, result = [2, 1, 0, 2, 0, 0, 1, 1, 0, 0]

// i == 7 total[7] => 0, result[ 0] +=1 , result[0] += 1, result = [3, 1, 0, 2, 0, 0, 1, 1, 0, 0]

// # 문제 풀이 방법
// 1. 인덱스 접근을 통해 얻은 숫자들을 기록해주는 어떤 공간을 만들어야 됨, => result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// 2. 일단 ㅈㄴ 곱한다
// 3. 곱한 값의 길이를 구한다. ex) total.length
// 4. 길이를 이용해서 반복문을 돌린다. for (let i = 0; i < total.length; i ++)
// 5. 반복문을 돌리면서 i로 ㅈㄴ 곱한 값에 index 접근을 한다. ex) total = '1234567', total[0] => 1, total[6] => 7
//     5-1. 반복문을 도는 과정에서 인덱스 접근한 애들을 기록판에 카운트를 해준다.
//     total[i], i=0, total[0] = 1
//     result[1] += 1, [0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
//     ...
//     result[6] += 1, [0, 1, 1, 1, 1, 1, 1, 1, 0, 0]
