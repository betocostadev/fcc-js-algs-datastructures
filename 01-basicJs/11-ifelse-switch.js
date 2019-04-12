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
