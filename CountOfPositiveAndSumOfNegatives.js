function countPositivesSumNegatives(input) {
  // your code here
  let arr = [];
  let p = 0;
  let n = 0;
  if (!input || input.length === 0) {
    return [];
  } else {
    for (i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        p++;
      } else {
        number = Number(input[i]);
        n += number;
      }
    }
    arr.push(p);
    arr.push(n);
    let [positiveSum, negativeSum] = arr;
    return arr;
  }
}
