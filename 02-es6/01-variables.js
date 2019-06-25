/* freeCodeCamp JavaScript
ES6
Variables
*/

/* One of the biggest problems with declaring variables with the var keyword is that you can overwrite variable declarations without an error.
 */


console.log(`=== Basic ES6, variables ===`);
var name = 'James';
var name = 'Camper';

console.log(name);

// let camper = 'James';
// let camper = 'David'; // throws an error
/* Let will not allow you to declare the same variable twice. You can create a better code
using 'use strict' in your file, to help you catch common mistakes.  */

// Use strict to avoid problems:

let catName;
let quote;
function catTalk() {
  "use strict";
  catName = "Oliver";
  return quote = catName + " says Meow!";
}
console.log(catTalk());

/* Compare Scopes of the var and let Keywords */
console.log(`
=== Compare Scopes of the var and let Keywords ===`);

function checkScope() {
  "use strict";
    let i = "function scope"; // function scope i
    if (true) {
      let i = "block scope"; // declaring another i, but block scope
      console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
console.log(checkScope());

/* With the function below it is possible to see a problem happening with the use of var.
The loop will run for the last time and update the i, but will not keep running when it notices that i is === 3. With let, would return 2, with var it returns 3. */
// var printNumTwo;
// for (var i = 0; i < 3; i++) {
//   if(i === 2){
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// returns 3

console.log(`
=== Declaring constant variables with 'const' ===`);

const FIRST_DAY = 'Sunday';
// FIRST_DAY = 'Monday' // returns an error | Assignment to constant variable.
console.log(`First day of the week is ${FIRST_DAY}`);
function printManyTimes(str) {
  "use strict";

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=4) {
    console.log(SENTENCE);
  }
}
printManyTimes("freeCodeCamp");

/* Mutate an Array declared with const

"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]
*/
console.log(`
=== Mutate an Array declared with 'const' ===`);

const s = [5, 7, 2];
console.log(`'s' is an array declared with 'const'. It's value is now: ${s}.
Below we will use a function to change the array an see the new value.`)
function editInPlace(index, num) {
  "use strict";

  s[index] = num;

}
editInPlace(2, 45);
console.log(`Since 's' is a constant, we cannot change it's value, but we can change instances of the array if we want.
Now 's' is: ${s}`);

/* Prevent Object mutation! */
console.log(`
=== Prevent Object Mutation ===`)

function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Freezing the constant to avoid object mutation
  Object.freeze(MATH_CONSTANTS);

  // Code below will throw the error in the console.
  // change code above this line
  // try {
  //   MATH_CONSTANTS.PI = 99;
  // } catch( ex ) {
  //   console.log(ex);
  // }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(`value of PI is ${freezeObj()} if we try to change it, it will not work now.`);
console.log(`Check line 101 and below to undestand how it is done.`);