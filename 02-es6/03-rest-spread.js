/* freeCodeCamp JavaScript
ES6
The rest and spread operators
*/

/* ES6 Rest and Spread
*/

/* Use the Rest Operator with Function Parameters
In order to help us create more flexible functions, ES6 introduces the rest operator for function parameters.

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}

The rest operator eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.
*/

console.log(`
=== Use the Rest Operator with Function Parameters ===
`);


console.log(`Checking how many arguments:`)
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.


console.log(`Using the Rest Operator in a function to sum N number of arguments:`);
const sumAll = (function() {
  "use strict";
  return function sumAll(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  };
})();
console.log(sumAll(1, 2, 3, 4)); // 6
console.log(sumAll(1, 2, 3, 4, 5)); // 15
console.log(sumAll(7, 21, 34, 60)); // 122

console.log(`
Using it with array methods, filter and map.
The next function will:
- Receive any number of arguments
- Filter arguments only for integers above 0
- Map the elements and run math to get the square.

console.log(spreadSquare(3.5, 10, -1, 4, 6, -4)) should return:
100, 16, 32

Checking the answer: `);

const spreadSquare = (...nums) => {
  return nums.filter(num => Number.isInteger(num) && num > 0).map(num => num * num);
}
console.log(spreadSquare(3.5, 10, -1, 4, 6, -4));
