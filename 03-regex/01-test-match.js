/* freeCodeCamp JavaScript
Regular Expressions
*/

/*
REGEX - Index
19 - The .test() method
38 - Match a Literal String with Different Possibilities
47 - Ignore case while matching
55 - Extract Matches
65 - Find More Than the First Match
75 - Match Anything with Wildcard Period




*/

// Using the .test() method
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

// Match a Literal String with Different Possibilities
console.log(`
=== Match a Literal String with Different Possibilities ===`)

const string2 = 'Does the cat eats birds?'
const myRegex2 = /dog|bird/
const test2 = myRegex2.test(string2)
console.log(test2)

// Ignore case while matching
console.log(`
=== Ignore case while matching ===`)
const string3 = 'This is UsiNG lowER and UPPer case'
const myRegex3 = /using/i
const test3 = myRegex3.test(string3)
console.log(`Does ${myRegex3} matches: ${string3}? ${test3}`)

// Extract Matches
console.log(`
=== Extract Matches ===`)
const string4 = 'I have a case match right here'.match(/here/)
console.log(string4)
console.log('Another way:')
const string5 = 'Just another string to match'
const myRegex4 = /another/
console.log(string5.match(myRegex4))

// Find More Than the First Match
console.log(`
=== Find More Than the First Match ===`)
const repeatString = 'This is a string that repeats, repeats and also, it repeats again! Repeats a lot!'
const myRegex5 = /repeats/g // Pay attention to the g (for group) here!
const mixingRegex = /repeats/gi // g for group and also i, for case insensitive
console.log(repeatString.match(myRegex5))
console.log('Using both the /g/ for group and /i/ for insensitive')
console.log(repeatString.match(mixingRegex))

// Match Anything with Wildcard Period
console.log(`
=== Match anything with the (.), the wildcard period ===`)
const unString = 'Would be fun to learn React, starting next week'
const unRegex = /.un/
console.log(unString.match(unRegex))
const bakeCake = 'To eat a cake, you must first bake. Got it Jake?'
const cakeRegex = /.ake/g
console.log(bakeCake.match(cakeRegex))