function solution(numbers) {
  let numStr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  numStr.forEach((str, idx) => {
    console.log(str, idx, "str", "idx");
    numbers = numbers.replaceAll(str, idx);
  });
  console.log(Number(numbers), "numbers", "idx");
  return Number(numbers);
}
