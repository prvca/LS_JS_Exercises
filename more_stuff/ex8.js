function isNotANumber(value) {
  let temp = value;
  if (value ===  temp) return false;
  else return true;
}

console.log(isNotANumber(17));
console.log(isNotANumber(NaN));
console.log(isNotANumber(0/0));
