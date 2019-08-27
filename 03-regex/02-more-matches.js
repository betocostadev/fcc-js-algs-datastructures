/* freeCodeCamp JavaScript
Regular Expressions - Part 2 - More Match cases
*/

/*
REGEX - Index
21 - Match Beginning String Patterns
35 - Match Ending String Patterns
44 - Match All Letters and Numbers
67 - Match Everything But Letters and Numbers
87 - Match All Numbers - Shorthand (\d)
112 - Challenge - Restrict Possible user names
130 - Match Whitespace Characters
141 - Match Non-Whitespace Characters


*/

console.log(`fCodeCamp JS - Regular Expressions 2
`)
// Match Beginning String Patterns
console.log(`
=== Match Beginning String Patterns ===
`)
const firstString = "Ricky is first and can be found."
const firstRegex = /^Ricky/
const testOne = firstRegex.test(firstString)
console.log(testOne)

const secondString = `You can't find Ricky now, since it is not the first thing here!`
const secondRegex = /^Ricky/
const testTwo = secondRegex.test(secondString)
console.log(testTwo)

// Match Ending String Patterns
console.log(`
=== Match Ending String Patterns ===
`)
const thirdString = `Very useful for file extensions such as file.txt`
const thirdRegex = /.txt$/
const testThree = thirdRegex.test(thirdString)
console.log(testThree) // true

// Match All Letters and Numbers
console.log(`
=== Match All Letters and Numbers ===
`)
const quoteSample1 = 'The five boxing wizards jump quickly.'
const noMatch1 = `... Doesn't get characters besides _`
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
const longHandResult = quoteSample1.match(longHand);
const shortHandResult = quoteSample1.match(shortHand);
console.log(longHandResult) // The
console.log(shortHandResult) // The
console.log(noMatch1.match(longHand)) // Doesn
console.log(noMatch1.match(shortHand)) // Doesn

const quoteSample2 = "The five boxing wizards jump quickly.";
console.log(`Quote Sample 2 length is: ${quoteSample2.length}`)
let alphabetRegexV2 = /\w/gi;
let result1 = quoteSample2.match(alphabetRegexV2).length;
console.log(`Alphabet Regex will give a different value, since it will not count the spaces, periods, etc.
alphabetRegexV2 test length is: ${result1}`)


// Match Everything But Letters and Numbers
console.log(`
=== Match Everything But Letters and Numbers ===
`)
const shortHandNotAlpha = /\W/;
const someNumber = '42%';
const someSentence = 'Coding!';
const numberTest = someNumber.match(shortHand); // Returns ["%"]
const sentenceTest = someSentence.match(shortHand); // Returns ["!"]
console.log(numberTest)
console.log(sentenceTest)

// Testing a string with no alphanumerics
const weirdString = `-/\-.,;:*-`
const weirdRegex = /\W/
const weirdRegexTest = weirdRegex.test(weirdString)
const weirdMatch = weirdString.match(weirdRegex)
console.log(weirdRegexTest)
console.log(weirdMatch)

// Match All Numbers - Shorthand (\d)
console.log(`
=== Match All Numbers - Shorthand (\d) ===
`)
const allNumbers = `My phone number is 555-8748-222`
const allNumbersRegex = /\d/
const allNumbersTest = allNumbers.match(allNumbersRegex)
console.log(allNumbersTest) // '5'

const getPhoneNumber = (stringToSearch) => {
  const phoneNumberRegex = /\d*-\d*-\d*/
  const result = stringToSearch.match(phoneNumberRegex)
  return result.join()
}
console.log(getPhoneNumber(allNumbers)) // 555-8748-222

// Match All Non-Numbers - Shorthand (\D)
console.log(`
=== Match All Non-Numbers - Shorthand (\D) ===
`)
const nonNumberString = `To win the lottery go for 13-16-28-42-43-58`
const nonNumRegex = /\D*/ // Will get everything until it finds the number sequence.
const nonNumbersTest = nonNumberString.match(nonNumRegex)
console.log(nonNumbersTest) // 'To win the lottery go for '

// Challenge - Restrict Possible user names
console.log(`
=== Challenge - Restrict Possible user names ===
`)
const userOne = "JackOfAllTrades"
const userTwo = "Oceans11"
const userThree = "RegexGuru"
const userForbid1 = "007"
const userForbid2 = "J"

const userCheck = /^[A-Za-z]+[A-Za-z]/i;

console.log(userCheck.test(userOne)); // true
console.log(userCheck.test(userTwo)); // true
console.log(userCheck.test(userThree)); // true
console.log(userCheck.test(userForbid1)); // false
console.log(userCheck.test(userForbid2)); // false

// Match Whitespace Characters
console.log(`
=== Match Whitespace Characters ===
`)
const sampleWhiteSpace = "Whitespace is important in separating words"
const regexWhiteSpace = /\s/g
const countWhiteSpace = sampleWhiteSpace.match(regexWhiteSpace).length
const whiteSpaceMatch = sampleWhiteSpace.match(regexWhiteSpace)
console.log(countWhiteSpace) // 5
console.log(whiteSpaceMatch) // [ ' ', ' ', ' ', ' ', ' ' ]

// Match Non-Whitespace Characters
console.log(`
=== Match Non-Whitespace Characters ===
`)
const sampleNoWhitespace = "Whitespace is important in separating words"
const regexNoWhiteSpace = /\S/g
const noWhiteSpace = sampleNoWhitespace.match(regexNoWhiteSpace)
console.log(noWhiteSpace)