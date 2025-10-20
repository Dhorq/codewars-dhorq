function squareSum(numbers) {
  let result = 0;
  for (let i of numbers) {
    i = i * i;
    result += i;
  }
  return result;
}
