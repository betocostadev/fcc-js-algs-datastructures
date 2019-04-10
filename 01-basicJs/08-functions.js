/* In JavaScript, we can divide up our code into reusable parts called functions.

Here's an example of a function:

function functionName() {
  console.log("Hello World");
}
You can call or invoke this function by using its name followed by parentheses, like this:

functionName(); */

/* Functions can receive parameters and do what they should with these parameters, see below: */

function square(n) {
    // This function will square the number you passa as an argument (n);
    console.log(n * n);
}

function cube(n) {
    // This function will take the cube of the number will pass (n);
    console.log(n * n * n);
}

// Now, let's call the function:
square(2); // Output 4
cube(3); // Output 27

// We can pass as many arguments as we need to a function:
function sum(a, b) {
    // "a" will be the first number
    // "b" will be the second number
    // So, if a = 20 and b = 35, then function will do:
    // 20 + 35 = 55.
    console.log(a + b);
}
sum(20, 35);

/*
GLOBAL SCOPE AND FUNCTIONS
In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are used without the var keyword are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with var.

NOTE: REMEMBER THAT THIS IS PRE ES6, AVOID USING VAR, USE CONST AND IF YOU NEED TO CHANGE THE VALUE LATER, USE LET. */

// Copied from FCC:
// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();