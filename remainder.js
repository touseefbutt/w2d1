// ========= REMAINDER OPERATOR ===========

// MDN Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder

// Remainder operator (often and sometimes called modulo HOWEVER apparently it's not the same) returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.

// It's common in most programming languages to use the % as the remainder operator. The remainder will ALWAYS be less than the divisor.

console.log('REMAINDERS')

// 3 goes into 4 once with will return a remainder of 1
// console.log(4 % 3)  // 1

// 2 goes into 20 10 times with no remainder
console.log(20 % 2) // 0

// 9 goes into 20 2 times with a remainder of 2
console.log(20 % 9) // 2

// Use case: often used to find out if something is odd or even by dividing the number by 2. In math, everything divisible by 2 without a remainder are even numbers. All odd numbers are always going to have a remainder of 1.

// Syntax: x % 2

// 2 goes into 15 7 times with a remainder of 1
// console.log(15 % 2) // returns 1

// 2 goes into 24 12 times with a remainder of 0
// console.log(24 % 2) // returns 0

// Often used with the equality operator to return a boolean.

// Syntax: x % 2 === 0

// Returns false because left side returns 1 and we compare it with 0. 
// console.log(15 % 2 === 0) // returns false

// Returns true because left side returns 0 and we compare it with 0.
// console.log(24 % 2 === 0) // returns true

// ===== LET'S SPRINKLE SOME MORE =====

// MDN Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

// Task: Determine whether a number is positive or even. Print number is positive if it's positive and number is negative if it's negative. Use string interpolation.

// if/else statement answer: 

// ===== TERNARY OPERATOR =====

// Alternative to if/else statement

// Syntax: condition ? exprIfTrue : exprIfFalse

// Examples:
const age = 26
// const beverage = age >= 21 ? console.log('Cheers!') : console.log("Sorry you're a minor.")

// Task: Take above task and write it in ternary

// SIDE NOTES
// Just like any other if else statements, it can be chained such as if ... else if ... else if ...else chain:

/* 

condition1 ? value1 
: condition2 ? value 2
: condition3 ? value 3
: value 4

equivalent to:

if(condition1) {
    value1
} else if(condition2) {
    value2
} else if(condition3) {
    value3
} else {
    value4
}

*/

// Note that it's a lot harder to read chained ternary operators. They're best for quick and simple if/else statements.