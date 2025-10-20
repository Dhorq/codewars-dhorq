let uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  if (typeof iterable === "String") {
    let splittedString = iterable.split("");
  } else {
    let splittedString = iterable;
    let result = [];
    for (let i = 0; i < splittedString.length; i++) {
      if (splittedString[i] !== splittedString[i - 1]) {
        result.push(splittedString[i]);
      }
    }
    return result;
  }
};
