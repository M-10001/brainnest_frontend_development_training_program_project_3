let inputFirstNumber = prompt("Input first number for comparing with second:");
let firstNumber = parseFloat(inputFirstNumber);

while (isNaN(firstNumber) || (inputFirstNumber.length !== firstNumber.toString().length)) {
  inputFirstNumber = prompt("Wrong input try entering first number to compare with second again: ");
  firstNumber = parseFloat(inputFirstNumber);
}

console.log()
let inputSecondNumber = prompt("Input second number for comparing with first:");
let secondNumber = parseFloat(inputSecondNumber);

while (isNaN(secondNumber) || (inputSecondNumber.length !== secondNumber.toString().length)) {
  inputSecondNumber = prompt("Wrong input try entering second number to compare with first again: ");
  secondNumber = parseFloat(inputSecondNumber);
}

console.log();

if (firstNumber === secondNumber) {
  console.log(`Both numbers are same: ${firstNumber}, ${secondNumber}`);
} else if (firstNumber > secondNumber) {
  console.log(`First number is larger: ${firstNumber}`);
} else {
  console.log(`Second number is larger: ${secondNumber}`);
}

console.log();
let inputInteger = prompt("Input integer for checking if it even or odd:");
let integer = parseInt(inputInteger);

while (isNaN(integer) || (inputInteger.length !== integer.toString().length)) {
  inputInteger = prompt("Wrong input try entering integer to check if it is even or odd again:");
  integer = parseInt(inputInteger);
}

console.log();

if ((integer % 2) === 0) {
  console.log(`Input integer is even, and integer was: ${integer}`);
} else {
  console.log(`Input integer is odd, and integer was: ${integer}`);
}
