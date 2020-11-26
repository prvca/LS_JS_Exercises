
// // Using forEach
// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };
//
// let objKeys = Object.keys(obj);
// let uppercaseKeys = [];
//
// objKeys.forEach(key => uppercaseKeys.push(key.toUpperCase()));
// console.log(uppercaseKeys);


// Using Map method

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);

let uppercaseKeys = objKeys.map(key => key.toUpperCase());

console.log(uppercaseKeys);
console.log(objKeys);
