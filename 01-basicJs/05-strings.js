/* JavaScript Strings
Previously we have used the code
var myName = "your name";
"your name" is called a string literal. It is a string because it is a series of zero or more characters enclosed in single or double quotes.
 */

var myName = "beto costa";
console.log(myName);

/* Basic JavaScript: Escaping Literal Quotes in Strings
Since we need to use "" double quotes or '' single quotes to start and end strings, if we need
to use a double quote inside a double quote string we can use the scape character (\).*/
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);
// You can mix quotes if you don't want to use a scape character.
var mixedQuote = "I'm a happy learner!";
console.log(mixedQuote);

/* goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
badStr = 'Finn responds, "Let's go!"'; // Throws an error
 */
var myLink = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myLink);
/*
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	backspace
\f	form feed
*/

// String concatenation
var oneQuote = "Memento" + " Mori";
oneQuote += " | Remember that you will die";
console.log(oneQuote)

// Building strings using variables
var myNombre = "Beto";
var myCosita = "My name is " + myNombre + " and I am well!";
console.log(myCosita);

/* STRING METHODS */
// Length
var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length;
console.log(firstNameLength);

/* Bracket notation is a way to get a character at a specific index within a string.
For example, the character at index 0 in the word "Charles" is "C". So if var firstName = "Charles", you can get the value of the first letter of the string by using firstName[0]. */
var umNombre = "Charles";
var secondLetter = umNombre[1];
console.log(umNombre);
console.log(secondLetter);