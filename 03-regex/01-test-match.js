/* freeCodeCamp JavaScript
Regular Expressions
*/

/*
REGEX Using the .test() method
*/

console.log(`
=== Regular expressions ===
Using the .test() method:
`);

const string1 = 'freeCodeCamp';
const myRegex1 = /Code/;
const test1 = myRegex1.test(string1); // case sensitive!
console.log(`Does ${string1} contains ${myRegex1}?`)
console.log(test1);

console.log(`Getting the position of the found Regex in a string: `)
if (myRegex1) {
  const regex1String = String(myRegex1).substring(1, 5);
  // console.log(regex1String)
  console.log(string1.indexOf(regex1String))
}

console.log(`
=== Match a Literal String with Different Possibilities ===`)

const string2 = 'Does the cat eats birds?'
const myRegex2 = /dog|bird/
const test2 = myRegex2.test(string2)
console.log(test2)

console.log(`
=== Ignore case while matching ===`)
const string3 = 'This is UsiNG lowER and UPPer case'
const myRegex3 = /using/i
const test3 = myRegex3.test(string3)
console.log(`Does ${myRegex3} matches: ${string3}? ${test3}`)
