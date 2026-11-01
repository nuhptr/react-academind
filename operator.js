// plus
let plus = (a, b) => a + b
// minus
let minus = (a, b) => a - b
// multiply
let multiply = (a, b) => a * b
// divide
let divide = (a, b) => a / b

// plus 2 string
let plusString = "hello" + " world"

// ===
let equal = (a, b) => a === b
// !==
let notEqual = (a, b) => a !== b
// >
let greaterThan = (a, b) => a > b
// <
let lessThan = (a, b) => a < b
// >=
let greaterThanEqual = (a, b) => a >= b
// <=
let lessThanEqual = (a, b) => a <= b
// && (and)
let and = (a, b) => a && b
// || (or)
let or = (a, b) => a || b
// ! (not)
let not = (a) => !a

console.log(plus(1, 2)) // 3
console.log(minus(1, 2)) // -1
console.log(multiply(1, 2)) // 2
console.log(multiply(2, 3)) // 6
console.log(divide(1, 2)) // 0.5

console.log(plusString) // hello world
console.log(equal(1, 2)) // false
console.log(notEqual(1, 2)) // true
console.log(greaterThan(1, 2)) // false
console.log(lessThan(1, 2)) // true
console.log(greaterThanEqual(1, 2)) // false
console.log(lessThanEqual(1, 2)) // true
console.log(and(true, false)) // false
console.log(or(true, false)) // true
console.log(not(true)) // false
