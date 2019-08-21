/* freeCodeCamp JavaScript
Regular Expressions
*/

/*
REGEX - Index
24 - The .test() method
43 - Match a Literal String with Different Possibilities
52 - Ignore case while matching
60 - Extract Matches
70 - Find More Than the First Match
80 - Match Anything with Wildcard Period
90 - Match a Single Character with Multiple Possibilities
109 - Match Letters of the Alphabet
116 - Match Numbers and Letters of the Alphabet
124 - Match Single Characters Not Specified (negate characters)
133 - Match Characters that Occur One or More Times
148 - Match Characters that Occur Zero or More Times
169 - Find Characters with Lazy Matching
184 - Challenge: Find One or More Criminals in a Hunt

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

// Match a Single Character with Multiple Possibilities
console.log(`
=== Match a Single Character with Multiple Possibilities ===`)
console.log(`More flexibility with character classes`)
// Match all the characters inside the [ one, two, three] only.
const theBString = 'In a big castle, there was a bug, but not a bog!'
console.log(theBString)
console.log('Match only big and bug, but not bog.')
const bRegex = /b[iu]g/g
console.log(theBString.match(bRegex)) // big, bug

console.log(`
Find the vowels below:`)
const quote1Sample = "Beware of bugs in the above code; I have only proved it correct, not tried it."
const vowelRegex = /[aeiou]/g
const result1 = quote1Sample.match(vowelRegex)
console.log(result1)

// Easier way
// Match All the letters of the Alphabet
console.log(`Find all the letters from a to z [a-z]:`)
const quote2Sample = "The quick brown fox jumps over the lazy dog."
const alphabetRegex = /[a-z]/gi; // looks for a, b, c, d, e ... group and case A/a.
const result2 = quote2Sample.match(alphabetRegex)
console.log(result2)

// Match Numbers and Letters of the Alphabet
console.log(`
=== Match Numbers and Letters of the Alphabet ===`)
const userMadruga = 'Madruga098832-1'
const findMadruga = /[a-z0-9]/gi
const result3 = userMadruga.match(findMadruga)
console.log(result3)

// Match Single Characters Not Specified (negate characters)
console.log(`
=== Match Single Characters Not Specified (negate characters) ===`)
const quote3Sample = "3 42 18 Godzilla killed the blind mice."
// Negate all vowels, spaces and numbers
const negator1 = /[^aeiou0-9 ]/gi // notice the space, also negated
const result4 = quote3Sample.match(negator1)
console.log(result4)

// Match Characters that Occur One or More Times
console.log(`
=== Match Characters that Occur One or More Times ===`)
const quote4Sample = 'More than one \'a\' in Aadvark'
console.log(quote4Sample)
const quote5Sample = 'Characters not in a row, xbxb'
const repeatingAs = /a+/gi
const repeatXs = /x+/gi
const result5 = quote4Sample.match(repeatingAs)
const result6 = quote5Sample.match(repeatXs)
console.log(result5)
console.log('For the x, will find 2, not in a row because the /x+/ will look only for the x')
console.log(quote5Sample)
console.log(result6)

// Match Characters that Occur Zero or More Times
console.log(`
=== Match Characters that Occur Zero or More Times ===`)
const chewieQuote = 'Aaaaaaaarrrgh!'
const chewieRegex = /Aa*/gi
const resultChewie = chewieQuote.match(chewieRegex)
console.log(resultChewie)
console.log(`To recap:
char+ = One or more characters before the +
char* = Zero or more characters before the *`)

const someGPhrase = 'goooooal!'
const someOPhrase = 'gut feeling'
const zeroOrMoreRegex = /go*/
console.log(someGPhrase)
console.log(someGPhrase.match(zeroOrMoreRegex))
console.log(someOPhrase)
console.log(someOPhrase.match(zeroOrMoreRegex))

// Find Characters with Lazy Matching
console.log(`
=== Find Characters with Lazy Matching ===`)
console.log(`In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.`)
const textHTML = '<h1>Winter is coming</h1>'
const regexHTMLTag = /<*h1>/g
const resultHTMLTagRegex = textHTML.match(regexHTMLTag)
console.log(resultHTMLTagRegex)

const titanic = 'titanic'
const titanicRegex = /t[a-z]*i/
const lazyTitanicRegex = /t[a-z]*?i/
const resultLazyTitanic = titanic.match(lazyTitanicRegex)
const resultTitanic = titanic.match(titanicRegex)
console.log(resultTitanic)
console.log(resultLazyTitanic)

// Challenge: Find One or More Criminals in a Hunt
console.log(`
=== Challenge: Find One or More Criminals in a Hunt ===`)
// example crowd gathering
const crowd = 'P1CP2CCP3CCCP4P5CCCCP6P7P8CCCCCCCP9P10P11';

const reCriminals = /c+/gi; // Change this line

const matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);