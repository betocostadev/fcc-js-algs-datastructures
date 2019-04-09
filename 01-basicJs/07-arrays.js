/* JavaScript Arrays
With JavaScript array variables, we can store several pieces of data in one place.

You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:

var sandwich = ["peanut butter", "jelly", "bread"]. */

var simpleArray1 = ["Beto", 33];
// Neste array, also called Multidimensional array:
var nestedArray1 = [["Bulls", 23], ["White Sox", 45]];
console.log(simpleArray1);
console.log(nestedArray1);

/* Access Array data with indexes */
/* Example
var array = [50,60,70];
array[0]; // equals 50
var data = array[1]; // equals 60
 */
console.log(nestedArray1[0][0]);

/* Modify Array data with indexes */
var changedNestedArray1 = nestedArray1;
changedNestedArray1[0][0] = "Bovinos";
console.log(nestedArray1);
console.log(changedNestedArray1);
/* You should notice that by default, the original array was also changed!
There are ways to create a copy that doesn't make the changes to the original, we will
learn about that later. */

/* Array Methods - PUSH - adds data to the END of the array */
changedNestedArray1.push(["Black Sox", 50]);
changedNestedArray1.push("No team here!");
changedNestedArray1.push(["Black Sox", 50]);
console.log(`Nested array after the push method 3 times:`);
console.log(changedNestedArray1);

/* Array Methods - POP - Removes the element from the END of the array */
changedNestedArray1.pop();
changedNestedArray1.pop();
console.log(`Nested array after the .pop():`);
console.log(changedNestedArray1);

/* It is important to notice that if we need to use a value from the array we can take the value and put it into another variable, BUT, this will change the original array. */
console.log(`Using the value from the array and placing it in another variable:`);
var blackSox = nestedArray1.pop();
console.log(blackSox);

/* It is important to notice that the original array was changed  */
console.log(`The changedNestedArray after we removed the last part with .pop()`);
console.log(changedNestedArray1);

/* Array Methods - SHIFT It's the same as pop, it removes the element from the
array, but .shift() removes the FIRST element of the array. */
console.log(`Now, lets use .shift()`);
changedNestedArray1.shift();
console.log(changedNestedArray1);

/* Array Methods - UNSHIFT It's the same as push, it adds an element to the
array, but .unshift() adds the item as the FIRST element of the array. */
console.log(`Adding elements in the first position of the array with .unshift():`);
changedNestedArray1.unshift(["Greleiros", 99]);
console.log(changedNestedArray1);