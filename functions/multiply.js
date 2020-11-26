function multiply(num1, num2) {
  return num1 * num2;
}

function getNumberInput(prompt) {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(prompt));
}


let number1 = getNumberInput('Enter the first number: ');
let number2 = getNumberInput('Enter the second number: ');
console.log(`${number1} * ${number2} = ${multiply(number1, number2)}`);
