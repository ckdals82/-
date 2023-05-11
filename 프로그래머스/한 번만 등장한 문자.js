function solution(s) {
  let ans = [];

  let sArr = s.split("");

  sArr.forEach((item) => {
    if (s.indexOf(item) === s.lastIndexOf(item)) {
      console.log(s.indexOf(item), "index", item);
      console.log(s.lastIndexOf(item), "lastindex", item);

      ans.push(item);
    }
  });

  return ans.sort().join("");
}
