const num1 = parseInt(prompt("enter the first number:"));
const num2 = parseInt(prompt("enter the second number:"));
const sum = num1 + num2;
const sub = num1 - num2;
const mul = num1 * num2;
let quotient;
let remainder;

if (num2 !== 0) {
  quotient = num1 / num2;
  remainder = num1 % num2;
} else {
  quotient = "cannot divide by zero";
  remainder = "cannot divide by zero";
}

console.log("Addition:", sum);
console.log("Subtraction:", sub);
console.log("Multiplication:", mul);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);
