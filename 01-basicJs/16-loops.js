/* Iterate with JavaScript

WHILE LOOPS

You can run the same code multiple times by using a loop.
The first type of loop we will learn is called a "while" loop because it runs "while" a specified condition is true and stops once that condition is no longer true. */

console.log('==WHILE LOOPS==');
var ourArray = [];
var ind = 0;
while (ind < 5) {
    ourArray.push(ind);
    ind++;
}
console.log(ourArray);

/* FOR LOOPS
The most common type of JavaScript loop is called a "for loop" because it runs "for" a specific number of times.

For loops are declared with three optional expressions separated by semicolons:

for ([initialization]; [condition]; [final-expression])*/
console.log('==FOR LOOPS==');
var someArr = [];
for (let i = 0; i < 5; i++) {
    someArr.push(i);
}
console.log(someArr);

/* For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.

We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2. */
console.log("Even numbers iteration with a for loop");
var evenArr = [];
for(let i = 0; i < 11; i += 2) {
    evenArr.push(i);
}
console.log(evenArr);

/* COUNTING BACKWARDS WITH A FOR LOOP */
console.log('Counting backwards:');
let arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('arr10 before the loop: ', arr10);
for(let i = 10; i > 0; i -= 2) {
    arr10.pop();
}
console.log('arr10 after the loop: ', arr10);

/* ITERATE THROUGH AN ARRAY */
/* A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop.
Remember that Arrays have zero-based numbering, which means the last index of the array is length - 1. Our condition for this loop is i < arr.length, which stops when i is at length - 1. */
console.log('\nIterate through an array\n');
let anotherArr = [2, 3, 4, 5, 6];
for(let i = 0; i < anotherArr.length; i++) {
    console.log('anotherArr element is: ', i);
}
/* Another example */
console.log('Sum the elements of an array:\n');
let craps = [2, 4, 5, 6, 12, 13];
let total = 0;
for(let i = 0; i < craps.length; i++) {
  total += craps[i];
}
console.log(total);

/* NESTING LOOPS */
/* If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array. */
console.log('\nNesting loops:\n');
let multiArr = [[1,2], [3,4], [5,6]];
console.log(multiArr);
// Logging it with only one loop
console.log('\nUsing only one loop:');
for (let i = 0; i < multiArr.length; i++) {
    console.log(multiArr[i]);
}
// Using the function below to execute a nested loop and display all the items.
function nestedCheck(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++)
        console.log(arr[i][j]);
    }
}
console.log('\nChecking all the elements of the nested arrays and displaying then:')
nestedCheck(multiArr);

/* Nested loop example on FCC */
function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for(var i = 0; i < arr.length; i++) {
      for(var j = 0; j < arr[i].length; j++) {
        // console.log(arr[i][j]);
        product *= arr[i][j];
      }
    }
// Only change code above this line
    return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));

/* ITERATE WITH DO...WHILE LOOPS */
/* The next type of loop you will learn is called a "do...while" loop because it first will "do" one pass of the code inside the loop no matter what, and then it runs "while" a specified condition is true and stops once that condition is no longer true. Let's look at an example. */

/* The main difference of the Do...while loop is that the first 'pass' will always run, so
it will execute the code block inside the loop for the first time, no matter what, then, if
the conditions are not match on the second iteration, it will stop. */
console.log('\nDo While Loop:\n');

var whileArr1 = [];
var adding = 5;
do {
    whileArr1.push(adding);
    adding++;
} while (adding < 5);
// It should not work since the adding is already + than 5, but it will run the first time.
console.log(whileArr1);
/* Essentially, a do...while loop ensures that the code inside the loop will run at least once. */
