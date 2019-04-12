/* CONDITIONS AND COMPARISONS
- Booleans
- If Statements
- Equality and Inequality operators */

/* Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is "on" and false is "off." These two states are mutually exclusive. */

console.log("Booleans test!\n");
var lightIsOn = true;
function checkLight() {
    if (lightIsOn) {
        console.log("Yes, the light is on!");
    } else {
        console.log("No, the light is off!");
    }
}
checkLight();
console.log("switched lights");
lightIsOn = false;
checkLight();

/* CONDITIONS - IF STATEMENTS
Already using it in the function above. */

console.log("\nComparison operators | ==, ===, !=, !==, <, >, <=, >=");
/* COMPARISON OPERATORS
There are many Comparison Operators in JavaScript. All of these operators return a boolean true or false value.

In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as "Type Coercion". Once it does, however, it can compare terms as follows:

1 == 1 // true
1 == 2 // false
1 == '1' // true
"3" == 3 // true

== equality
=== strict equality (no type coersion)
!= inequality
!== strict inequality (no type coersion) */

var threeSt = "3";
var three = 3;
console.log("Is var threeSt == var three ?");
if (threeSt == three) {
    console.log(`threeSt is:${threeSt} and three is:${three}, so, they are equals.`)
} else {
    console.log("threeSt and three are NOT equals");
}
console.log("\nnow using ===, no type coersion. Are they strictly equals?");

if (threeSt === three) {
    console.log(`threeSt is:${threeSt} and three is:${three}, yes, they are equals.`);
} else {
    console.log(`threeSt is:${threeSt} and three is:${three}, so, they are NOT STRICTLY equals.`);
}

/* Attention, the type coension is something that many programmers dislike about JavaScript, but
it can come in handy. If we need a user to place a value like 3 in a web page and the browser then
returns "3", maybe we just want to know if it is 3, wheater be 3 or "3".
If we need to be an exactly match, then we can use the strictly equal and convert the type
before the comparison.
Like the example below: */
console.log("\nConverting the variable type before the comparison.\n");
let convertThree = 3;
parseInt(convertThree);
if (convertThree === three) {
    console.log(`convertThree was converted into Int, now it IS STRICTLY EQUAL to three`);
}

/* Like the equality operator, greater, lesser than or equal to operator will convert data types while comparing. */


/* THE LOGICAL AND (&&) OPERATOR
Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true. */
console.log("\nNow, the logical AND (&&) operator.\n");

/* Simple way to check both conditions. If it is rainning and i'm want to go out, I will
take the Umbrella with me. */

var isRainning = true;
var wantToLeave = true;
/* By the way, when using booleans, we don't even need to compare the true and false, like
if (is rainning = true). Just by writing if (isRainning) is enough. */
console.log("I feel like I want to go out, but it's rainning, what should I do?");
if (isRainning && wantToLeave) {
    console.log("Just go, since you want to, but it's rainning take the umbrella!\n");
}

/* THE LOGICAL OR (||) OPERATOR
Sometimes you will need to test more than one thing at a time, BUT if only ONE is them is true, it's good enough for you. The logical OR operator (||) returns true if only ONE of the conditions is true. */
console.log("\n Testing the logical OR:\n");
var isSunny = false;
if (isSunny || wantToLeave) {
    console.log(`Since you want to leave, go out. But take the umbrella, because
    "isSunny" == ${isSunny}`);
}
