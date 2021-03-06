/* freeCodeCamp JavaScript
ES6
Functions
*/

/* ES6 Function Syntax
*/

console.log(`=== ES6 Functions syntax ===`);

// An ES5 function
console.log(`ES5 number + number:`);
const sum2 = function (num) {
  return num + num;
}
console.log(`${sum2(5)}`);

// ES6 arrow function with no arguments
console.log(`ES6 arrow function with no arguments`);
const showTime = () => {
  "use strict";
  return new Date();
};
console.log(showTime());

// ES6 arrow function with arguments
console.log(`ES6 number + number:`);
const sum2Es6 = num => {
  return num + num;
}
console.log(`${sum2Es6(5)}`);

// ES6 arrow function with more arguments
console.log(`ES6 sum two numbers as arguments:`);
const sumMoreEs6 = (num1, num2) => {
  return num1 + num2;
}
console.log(`${sumMoreEs6(6, 4)}`);

// ES6 One line arrow function
console.log(`ES6 one line arrow function. No need for a return statement:`)
const square = num => num * 2;
console.log(`${square(3)}`);

// Higher Order Arrow Functions
console.log(`
=== Higher Order Arrow Functions ===
`)
// Numbers array
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

/* Solving the problem:
Remove all numbers that are NOT integers using ES5.
Multiply the numbers to get the square. */
const squareList = (arr) => {
  "use strict";
  // Create a new array
  const newArr = [];
  // Use a for each to change each element
  arr.forEach(num => {
    if (Number.isInteger(num) && num > 0) {
      let newNum = num * num;
      newArr.push(newNum);
    }
  });
  const squaredIntegers = newArr;
  return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

/* Solving the problem:
Remove all numbers that are NOT integers and multiply them to get the square.
Use ES6 filter and map */
const squareListES6 = (arr) => {
  "use strict";
  const fixedArr = arr.filter(num => Number.isInteger(num) && num > 0).map(num => num * num);
  const squaredIntegers = fixedArr;
  return squaredIntegers;
};
// test your code
const squaredIntegersES6 = squareListES6(realNumberArray);
console.log(squaredIntegersES6);

/* Set Default Parameters for Your Functions
In order to help us create more flexible functions, ES6 introduces default parameters for functions.

function greeting(name = "Anonymous") {
  return "Hello " + name;
}
The default parameter kicks in when the argument is not specified (it is undefined) */

console.log(`
=== Set Default parameters for functions ===
`);

const sayHello = (name = 'Anonymous') => {
  return `Hello ${name}`
}
console.log(`Using the default paramenter: ${sayHello()}
Providing a parameter: ${sayHello('Beto')}`);

console.log(`
=== Using ES6 Sintax for object methods ===
`);

// ES5

const event = {
  name: 'Party',
  guestList: ['Beto', 'Carol', 'Rita'],
  printGuestList: function () {
    console.log(`Event name: ${this.name}`);
  }
}
event.printGuestList();

console.log(`Using ES6 Syntax for the method:
`);

const newEvent = {
  name: 'Party',
  guestList: ['Beto', 'Carol', 'Rita'],
  printGuestList() {
    // The this below will not work because each this.name will have its own binding, so
    // in this case, all of them will return undefined
    // this.guestList.forEach(function (guest) {
    //   console.log(`${guest} is attending to ${this.name}`);
    //   })
    // ES6 way
    this.guestList.forEach(guest => console.log(`${guest} is attending to ${this.name}`))
    // Now it works :D
  }
}
newEvent.printGuestList();