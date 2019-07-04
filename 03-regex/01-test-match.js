/* freeCodeCamp JavaScript
Regular Expressions
*/

/* REGEX Using the .test() method
*/

console.log(`
=== Regular expressions ===
Using the .test() method:
`);

const string1 = 'freeCodeCamp';
let myregex1 = /Code/;
const test1 = myregex1.test(string1); // case sensitive!
console.log(test1);

console.log(`
=== Match a Literal String with Different Possibilities ===`)
const string2 = 'Does the cat eats birds?'
let myregex2 = /dog|bird/
const test2 = myregex2.test(string2);
console.log(test2);