/* freeCodeCamp JavaScript
ES6
Import and Export
*/

/* ES6 gives us a very handy tool known as import. With it, we can choose which parts of a module or file to load into a given file, saving time and memory.

Consider the following example. Imagine that math_array_functions has about 20 functions, but I only need one, countItems, in my current file. The old require() approach would force me to bring in all 20 functions. With this new import syntax, I can bring in just the desired function, like so:

import { countItems } from "math_array_functions"
A description of the above code:

import { function } from "file_path_goes_here"

// We can also import variables the same way!

There are a few ways to write an import statement, but the above is a very common use-case.

Note
The whitespace surrounding the function inside the curly braces is a best practice - it makes it easier to read the import statement.

Note
The lessons in this section handle non-browser features. import, and the statements we introduce in the rest of these lessons, won't work on a browser directly. However, we can use various tools to create code out of this to make it work in browser.

Note
In most cases, the file path requires a ./ before it; otherwise, node will look in the node_modules directory first trying to load it as a dependency.
*/
console.log(`
=== ES6 Import and Export ===
`)
console.log(`ATTENTION:
import and export does not work with Node.js by default.
For this to work, the files need to have the .mjs extension and to run the code, use:
node --experimental-modules 'file.mjs'
`)

"use strict";
import { capitalizeString } from "./modules/capt-string.mjs";

console.log(capitalizeString("hello!"));
console.log(capitalizeString('croxura!'));


/* Using exports in the other files:
The following is what we refer to as a named export. With this, we can import any code we export into another file with the import syntax you learned in the last lesson. Here's an example:

const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export { capitalizeString } //How to export functions.
export const foo = "bar"; //How to export variables.

Alternatively, if you would like to compact all your export statements into one line, you can take this approach:

const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const foo = "bar";
export { capitalizeString, foo }
*/

console.log(`
=== Use * import to import everything from a file ===
`)

/* Suppose you have a file that you wish to import all of its contents into the current file. This can be done with the import * syntax.

Here's an example where the contents of a file named "math_functions" are imported into a file in the same directory:

import * as myMathModule from "math_functions";
myMathModule.add(2,3);
myMathModule.subtract(5,3);
And breaking down that code:

import * as object_with_name_of_your_choice from "file_path_goes_here"
object_with_name_of_your_choice.imported_function
*/

import * as MathModule from "./modules/math_functions.mjs"

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(MathModule.add(5, 10));
console.log(MathModule.subtract(33, 18));
console.log(MathModule.sumArr(myArr));