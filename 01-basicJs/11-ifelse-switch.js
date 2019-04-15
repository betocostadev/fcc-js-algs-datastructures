/* IF ELSE and SWITCH Statements
File 10-cond-compare.js contains some If else statements, but mostly IF.
In this file we will take a look at using If and Else statements and also the Switch statement. */

/* When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed. */
var firstNum = 9;
console.log("Else statement test:");
if (firstNum > 10) {
    console.log("Bigger than 10");
  } else {
    console.log("10 or Less");
}

/* ELSE IF - For more complex conditions we can chain the else if statement */
console.log("\nElse if statement test:");
var secondNum = 4;
if (secondNum > 15) {
    console.log("Bigger than 15");
  } else if (secondNum < 5) {
    console.log("Smaller than 5");
  } else {
    console.log("Between 5 and 15");
}

/* LOGICAL ORDER IN IF ELSE STATEMENTS

Order is important in if, else if statements.
The function is executed from top to bottom so you will want to be careful of what statement comes first. */
console.log(`Look the output we will receive. While the functions look almost equals, the order
is important, that's why we have different outputs!
`);
var thirdNum = 0;
function foo(x) {
    if (x < 1) {
      console.log("Less than one");
    } else if (x < 2) {
      console.log("Less than two");
    } else {
      console.log("Greater than or equal to two");
    }
}

function bar(y) {
    if (y < 2) {
      console.log("Less than two");
    } else if (y < 1) {
      console.log("Less than one");
    } else {
      console.log("Greater than or equal to two");
    }
}

foo(thirdNum);
bar(thirdNum);

console.log('\n Switch Statements:\n');
/* SWITCH STATEMENTS */
/* Switch statements test various values until they find a break to stop the execution.
If you don't add breaks to cases, if more than one case matches, then the switch will execute every other statements after the "true" statement until it reaches a break;

switch(num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  case valueN:
    statementN;
    break;
}
 */

/* Switch case example */
function getRoman(letter) {
  let answer = '';
  switch (letter) {
    case 'a':
    answer = 'alpha';
    break;
    case 'b':
    answer = 'beta';
    break;
    case 'c':
    answer = 'charlie';
    break;
    default:
    answer = 'no letter found'
    break;
  }
  return answer;
}
console.log(getRoman('b'));
console.log(getRoman('c'));
console.log(getRoman('d'));

/* Multiple Switch statements with the same value: */
function sequentialSizes(val) {
  var answer = "";
  switch(val) {
    case 1:
    case 2:
    case 3:
    answer = "Low";
    break;
    case 4:
    case 5:
    case 6:
    answer = "Mid";
    break;
    case 7:
    case 8:
    case 9:
    answer = "High";
    break;
    default:
    answer = "Not valid!"
  }
  // Only change code above this line
  return answer;
}

console.log(sequentialSizes(1));
console.log(sequentialSizes(2));
console.log(sequentialSizes(4));
console.log(sequentialSizes(7));


/* RETURN BOOLEANS FROM FUNCTIONS
We can use a simpler way instead of an if in a function if we do like below: */
console.log('\nReturning booleans from functions\n');
let morning = 'sun';
let night = 'rain';

function isEqual(first, second) {
  return first === second;
}
console.log(`Is ${morning} equal ${night}?
Answer returned from function: ${isEqual(morning, night)}`);