/* freeCodeCamp JavaScript
Regular Expressions - Part 3 - Advanced Match cases
*/

/*
REGEX - Index
18 - Specify Upper and Lower Number of Matches
38 - Specify Only the Lower Number of Matches
55 - Specify Exact Number of Matches
69 - Check for All or None
84 - Positive and Negative Lookahead
109 - Reuse Patterns Using Capture Groups
123 - Use Capture Groups to Search and Replace
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

// Check for All or None
console.log(`
=== Check for All or None ===
`)
// Use ? after the element. It checks for one or zero elements
// gri?lo = matches: grlo, grelo, grilo, etc.
const favWord1 = "favorite";
const favWord2 = "favourite";
const favWord3 = "favrite";
let favRegex = /favou?rite/; // Change this line
console.log(favRegex.test(favWord1)) // true
console.log(favRegex.test(favWord2)) // true
console.log(favRegex.test(favWord3)) // false


// Positive and Negative Lookahead
console.log(`
=== Positive and Negative Lookahead ===
`)
// A positive lookahead will look to make sure the element in the search pattern IS THERE
// Positive lookahead (?=...)
// A negative lookahead will look to make sure the element in the search pattern IS NOT THERE
// Negative lookahead (?!=...)
console.log('Negative Lookahead')
const negativeGre = "Must not contain grelo"
const negativeRegex = /gr(?!elo)/
console.log(negativeRegex.test(negativeGre)) // false
console.log(negativeGre.match(negativeRegex)) // null

// A simple password: At least 5 characters and must end with 2 numbers
console.log('Positive Lookahead')
const password1 = "bana12"
const password2 = "astronaut"
const password3 = "abc123"
const pwRegex = /(?=\w{5,})(?=\D*\d{2})/
console.log(pwRegex.test(password1)) // true
console.log(pwRegex.test(password2)) // false
console.log(password2.match(pwRegex)) // null
console.log(pwRegex.test(password3)) // true

// Reuse Patterns Using Capture Groups
console.log(`
=== Reuse Patterns Using Capture Groups ===
`)
// we use \num for repeating:
// to check for repeating bb like: "bb bb " = /(bb)\s\1
const repeatBB = "bb bb"
const bBRegex = /(bb)\s\1/
console.log(bBRegex.test(repeatBB)) // true
const repeatNum = "42 42 42"
const reRegex = /^(\d+)\s\1\s\1$/
console.log(reRegex.test(repeatNum)) // true
console.log(repeatNum.match(reRegex)) // '42 42 42'

// Use Capture Groups to Search and Replace
console.log(`
=== Use Capture Groups to Search and Replace ===
`)
const huhText = "This sandwich is bad. Or maybe, Im in a bad mood!";
const fixRegex = /bad/g; // Using /g to change all instances
const replaceText = "good";
const goodSand = huhText.replace(fixRegex, replaceText);
console.log(goodSand)

// Change the order of words.
const fccStr = 'free Code Camp'
console.log(fccStr)
const changeFcc = /(\w+)\s(\w+)\s(\w+)/ // matches free(space)code(space)camp
console.log(changeFcc.test(fccStr)) // true
console.log(fccStr.replace(changeFcc, '$2 $3 $1')) // Code Camp free

// Challenge: Remove Whitespace from Start and End (No Trim)
console.log(`
=== Challenge: Remove Whitespace from Start and End (No Trim) ===
`)
const hello = "    Hello, World!      "
const wsRegex = /^\s+|\s+$/g
const regTrim = hello.replace(wsRegex, '')
console.log(`Before: ${hello}
After: ${regTrim}`)
