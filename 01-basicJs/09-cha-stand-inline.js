/* CHALLENGE - STAND IN LINE
In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed. */

/* Working solutions below: */
// var queue = [1, 2, 3, 4, 5];
// function nextInLine(arr, item) {
//     arr.push(item);
//     return arr.shift();
// }
// console.log(nextInLine(queue, 6));
// console.log(queue);
// console.log(nextInLine(queue, 7));
// console.log(queue);

function nextInLine(arr, item) {
    // Your code here
    arr.push(item);
    return arr.shift();  // Change this line - done
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

/* Trying a better solution! */
var longerQueue = [25, 26, 27, 28, 29];
var empty = 0;
function betterQueue(arr) {
    if (arr <= 0) {
        return "Queue is empty, go rest!";
    } else {
        let next = arr[arr.length - 1] + 1;
        arr.push(next);
        return arr.shift();
    }
}
console.log("Better Queue Before: " + JSON.stringify(longerQueue));
console.log(betterQueue(longerQueue));
console.log("Better Queue After: " + JSON.stringify(longerQueue));
console.log(betterQueue(empty));