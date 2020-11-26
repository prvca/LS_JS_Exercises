function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

let firstFactorial = times(1, 1);
let secondFactorial = times(2, firstFactorial);
let thirdFactorial = times(3, secondFactorial);
let fourthFactorial = times(4, thirdFactorial);
let fifthFactorial = times(5, fourthFactorial);
