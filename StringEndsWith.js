function solution(str, ending) {
  if (ending === "") return true;

  const strEnd = str.slice(-ending.length);

  return strEnd === ending;
}
