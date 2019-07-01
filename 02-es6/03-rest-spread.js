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

console.log(`
=== Use the spread operator to evaluate arrays in place ===
`);

/*
Not using the spread operator, to get the max value of a number in an array we have to do this:

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89

We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array.

The spread operator makes this syntax much better to read and maintain.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89

...arr returns an unpacked array. In other words, it spreads the array.

However, the spread operator only works in-place, like in an argument to a function or in an array literal.
*/

const numsArr = [7, 42, 9, 6, 64, 20];
const minNum = Math.min(...numsArr);
const maxNum = Math.max(...numsArr);
console.log(`Getting min and max value in the array ${numsArr} using the spread operator:
Min = ${minNum}
Max = ${maxNum}
`);

const someCars = ['Eclipse', 'Bugatti Veyron'];
const favoriteCars = ['Lambo Veneno', 'Lambo Murcielago', 'Porsche GT3 RS'];
const allCars = ['Subaru WRX', ...favoriteCars, ...someCars];

console.log(`Now we will create one array with one element and get all the elements from other two arrays:
someCars = ${someCars};
favoriteCars = ${favoriteCars};
allCars will include it's own car and spread the other two arrays to get their elements:
allCars = ${allCars}.
`);

console.log(`Using a function to multiply all the elements of an array to the first element:`);

const multiplyFirst = (multiplier, ...args) => {
  return args.map(element => multiplier * element);
}

console.log(multiplyFirst(3, 1, 5, 10, 15));

console.log(`
With a matrix (an array with more arrays inside it) the spread operator will still spread the elements, but the arrays inside it will be copied to the new array. We can target the array index[x] to be spreaded and it will work.`);

const multiArr = [1, 2, 3, [4, 5, 6], ['Hugs', 'Kisses']];
console.log(multiArr);
const spreadedMultiArr = [0, ...multiArr, 'new element'];
console.log(spreadedMultiArr);

// Spreading it and adding more to the array.

const spreadFirst = [...multiArr[3], ...multiArr[4]];
const getOthers = [multiArr[0], multiArr[2], multiArr[2]];
const newArr = [-1, 0, ...getOthers, ...spreadFirst];
console.log(newArr);