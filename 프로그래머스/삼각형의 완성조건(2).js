function solution(sides) {
  const sidesSum = sides[0] + sides[1];
  let maxSides = [];
  let unknownNumber = [];
  const max = Math.max(...sides);

  const maxIndex = sides.indexOf(max);
  sides.splice(sides.indexOf(max), 1);

  for (i = max - sides[0] + 1; i <= max; i++) {
    if (i + sides[0] > max) {
      maxSides.push(i);
    }
  }

  for (i = max + 1; i < sidesSum; i++) {
    unknownNumber.push(i);
  }
  return maxSides.length + unknownNumber.length;
}
