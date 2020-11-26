function allMatches(arrayOfWords, regex) {
  return arrayOfWords.filter(word => regex.test(word));
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /rat/));
console.log(allMatches(words, /lab/));
console.log(allMatches(words, /la/));
