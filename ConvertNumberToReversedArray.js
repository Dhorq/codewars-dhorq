function digitize(n) {
  //code here
  const reverseArray = n.toString().split("").reverse().join("").split("");
  const result = reverseArray.map((number) => Number(number));
  return result;
}
