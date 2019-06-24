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
