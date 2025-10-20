function spinWords(string) {
  //TODO Have fun :)
  let words = string.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
    if (words[i].length > 4) {
      let word = words[i].split("").reverse().join("");
      result.push(word);
    } else {
      result.push(words[i]);
    }
  }
  let final = result.join(" ");
  return final;
}
