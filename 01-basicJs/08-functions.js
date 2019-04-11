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

/*
LOCAL SCOPE AND FUNCTIONS
Variables declared inside a function declaration have local scope, which means they are available only inside that function, after that, they "die", meaning, their space in memmory is not used anymore.
*/
function myLocScope() {
  var loc = "foo";
  console.log(loc);
}
myLocScope(); // logs "foo"
//console.log(loc); // loc is not defined

/* GLOBAL VS. LOCAL SCOPE VARIABLES
When you do this, the local variable takes precedence over the global variable.
 */
var justAVar = 20;
function globalLocal() {
  var justAVar = 10;
  console.log("Var justAVar inside the function: " + justAVar);
  return justAVar;
}
console.log("The variable justAVar before the function is called:");
console.log(justAVar);
globalLocal();
console.log("The variable justAVar after the function is called:");
console.log(justAVar);
console.log(`The variable keeps the same value because it is not considered the same variable
since it was declared again inside the function. Even returning the value in the end of the
function. Only the variable inside the function have a different value.`);

/* RETURN A VALUE FROM A FUNCTION WITH "RETURN"
We can pass values into a function with arguments. You can use a return statement to send a value back out of a function. */

console.log("Returning a value from a function: ");
function doubleIt(num) {
  return num * 2;
}
console.log(doubleIt(21));

/* UNDEFINED VALUE FROM A FUNCTION
A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined. */
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5;
}


// Only change code above this line
var returnedValue = addFive();
console.log("Since we have not returned any value from the function, it will be: ");
console.log(returnedValue);

/* ASSIGNMENT WITH A RETURNED VALUE
We can assign a new value to an existing variable by returning it from the function */

var aSimpleVar = 35;
console.log("Our var before the function: ");
console.log(aSimpleVar);
function processArg() {
  return aSimpleVar + 8;
}
aSimpleVar = processArg();
console.log(aSimpleVar);