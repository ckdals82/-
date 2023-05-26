function solution(my_string) {
  const numbers = my_string.match(/\d+/g); // Extract all numbers from the string
  let sum = 0;

  if (numbers) {
    for (let i = 0; i < numbers.length; i++) {
      const currentNumber = parseInt(numbers[i]);
      sum += currentNumber;
    }
  }

  // sum = numbers.reduce((acc, cur)=> Number(acc) + Number(cur) )

  return sum;
}
