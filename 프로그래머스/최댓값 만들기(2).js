function solution(numbers) {
  let answer = 0;
  const arr = numbers.sort(function (a, b) {
    return b - a;
  });

  arr[0] * arr[1] > arr[arr.length - 1] * arr[arr.length - 2]
    ? (answer = arr[0] * arr[1])
    : (answer = arr[arr.length - 1] * arr[arr.length - 2]);
  return answer;
}
