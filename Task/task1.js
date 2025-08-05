const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const operation = prompt("Enter operation (+, -, *, /):");
let result;

switch (operation) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      result = "Cannot divide by zero!";
    }
    break;
  default:
    result = "Invalid operation!";
}

alert("Result: " + result);
