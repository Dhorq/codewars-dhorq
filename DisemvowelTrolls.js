function disemvowel(str) {
  return str
    .split("")
    .filter((i) => !i.match(/[aeiou]/gi))
    .join("");
}
