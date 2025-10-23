function squareDigits(num) {
  const list = num.toString().split("");
  const result = Number(list.map((v) => v * v).join(""));
  return result;
}
