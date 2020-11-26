function oddLengths(stringsArray) {
  let lengthsArray = stringsArray.map(string => string.length);
  let oddLengths = lengthsArray.filter(length => length % 2 === 1);
  return oddLengths;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
