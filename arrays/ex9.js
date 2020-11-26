let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

numbers1.includes(3);
numbers2.includes(3);
numbers3.includes(3);

/*
// complicated version before I remembered there was an includes() method

function checkFor3(numberArr) {
  return numberArr.map(number => {
    if (number === 3)
      return true;
    else return false;
  });
}

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(checkFor3(numbers1));
console.log(checkFor3(numbers2));
console.log(checkFor3(numbers3));
*/
