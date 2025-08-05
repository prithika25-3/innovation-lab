//task 1
const number=12;
const name=`js`;
const iscloudy=true;

console.log(number+" "+name+" "+iscloudy);
document.write(number+" "+name+" "+iscloudy);

//task 2
console.log(typeof(number));
console.log(typeof(name));
console.log(typeof(iscloudy));

//task 3
//addition
//const a=12;
//const b=31;
const a=prompt(("enter the first value"));
const b=prompt(("enter the second number"));
alert(a+b);
console.log(a+b);
document.write(a+b);

//subtraction
console.log(a-b);
document.write(a-b);

//multiplication
console.log(a*b);
document.write(a*b);

//division
console.log(a/b);
document.write(a/b);

//task 4
// Simple Calculator Program

// Getting user input (convert prompt input to numbers)
var number1 = Number(prompt("Enter the first number:"));
var number2 = Number(prompt("Enter the second number:"));

// Constants for operation names
const ADD = 'Addition';
const SUBTRACT = 'Subtraction';
const MULTIPLY = 'Multiplication';
const DIVIDE = 'Division';
const MODULUS = 'Modulus';

// Perform arithmetic operations
let addition = number1 + number2;
let subtraction = number1 - number2;
let multiplication = number1 * number2;

// Conditional operator to check division by zero
let division = number2 !== 0 ? (number1 / number2) : 'Error: Division by zero';
let modulus = number2 !== 0 ? (number1 % number2) : 'Error: Modulus by zero';

// Display results
console.log(`--- Calculator Results ---`);
console.log(`${ADD}: ${number1} + ${number2} = ${addition}`);
console.log(`${SUBTRACT}: ${number1} - ${number2} = ${subtraction}`);
console.log(`${MULTIPLY}: ${number1} * ${number2} = ${multiplication}`);
console.log(`${DIVIDE}: ${division}`);
console.log(`${MODULUS}: ${modulus}`);
console.log(`--------------------------`);
