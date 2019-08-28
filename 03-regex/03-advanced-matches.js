/* freeCodeCamp JavaScript
Regular Expressions - Part 3 - Advanced Match cases
*/

/*
REGEX - Index
19 - Specify Upper and Lower Number of Matches
39 - Specify Only the Lower Number of Matches
56 - Specify Exact Number of Matches
67 -
87 -
112 -
130 -
141 -


*/

// Specify Upper and Lower Number of Matches
console.log(`=== Specify Upper and Lower Number of Matches ===
`)
/* For example, to match only the letter a appearing between 3 and 5 times in the string "ah", your regex would be /a{3,5}h/. */
const sample1 = "aaaah"
const sample2 = "ah"
const ahRegex = /a{3,5}h/
const test1 = ahRegex.test(sample1)
const test2 = ahRegex.test(sample2)
console.log(test1)
console.log(test2)

const ohStr = "Ohhh no";
const longOh = "Ohhhhhhh no";
const ohRegex = /Oh{3,6}\sno/; // /s space.
const resultOh1 = ohRegex.test(ohStr);
const resultOh2 = ohRegex.test(longOh)
console.log(resultOh1); // true
console.log(resultOh2); // false

// Specify Only the Lower Number of Matches
console.log(`
=== Specify Only the Lower Number of Matches ===
`)
// To only specify the lower number of patterns, keep the first number followed by a comma.
// {n,}
// Match only Hazzzzah if have at least 4 "Z" before "Ah".
const haStr1 = "Hazzzzah"; // true
const haStr2 = "Hazzzah"; // false
const haStr3 = "Hazah"; // false
const haStr4 = "Hazzzzzzzzzzah"; // true
const haRegex = /Haz{4,}ah/;
console.log(haRegex.test(haStr1))
console.log(haRegex.test(haStr2))
console.log(haRegex.test(haStr3))
console.log(haRegex.test(haStr4))

// Specify Exact Number of Matches
console.log(`
=== Specify Exact Number of Matches ===
`)
// To only specify the exact number of patterns, use only one number.
// {n}
const timStr1 = "Timmmmber"; // true
const timStr2 = "Timmber"; // false
const timStr3 = "Timmnnmber"; // true
const timRegex = /m{4}/;
console.log(timRegex.test(timStr1))
console.log(timRegex.test(timStr2))
console.log(timRegex.test(timStr3))