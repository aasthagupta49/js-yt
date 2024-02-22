// console.log(2>"3"); //false
// console.log("02">1); //true
// console.log(null>0) //false 
// console.log(null == 0) //false
// console.log(null>=0) //true

// In the first comparison, null == 0, the abstract equality operator (==) performs type coercion. However, null is a special case in JavaScript. When comparing null with a numeric value, such as 0, the coercion rules cause null to be treated as equal to undefined, but it does not get coerced to a number. As a result, the comparison evaluates to false.

// In the second comparison, null >= 0, the greater than or equal operator (>=) also performs type coercion. In this case, null is coerced to the number 0 before the comparison is made. When comparing null or undefined with a numeric value using the greater than or equal operator, they are treated as equal to 0. Therefore, the comparison evaluates to true.

// console.log(undefined ==0)
// console.log(undefined >=0)
// console.log(undefined <0) //all false

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)