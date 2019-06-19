// Free Code Camp | Basic JavaScript: Random numbers and Parse Int
/* Generate Random Fractions with JavaScript
Random numbers are useful for creating random behavior.

JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and not quite up to 1 (exclusive). Thus Math.random() can return a 0 but never quite return a 1
*/
console.log('FCC Basic JS: Random Numbers\n');
function randomFraction() {
  // Only change code below this line.
  return Math.random();
  // Only change code above this line.
}
console.log(`return from randomFraction: ${randomFraction()}`);

const randomWholeNum = () => {
  // 0.0 up to 0.99 * 10. Result will never be 10 or more, max 9.
  return Math.floor(Math.random() * 10);
}
console.log(`return from randomWholeNum: ${randomWholeNum()}`);

/* Generate Random Whole Numbers within a Range
Use a function with arguments for min and max values that can be returned. */

const randomRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(`return from randomRange: ${randomRange(1, 60)}`);

console.log(`
The lottery test:
`);

/* Lottery */
const lottery = (minNum, maxNum, total) => {
  let generatedNumbers = [];
  for (let i = 1; i <= total; i++) {
    generatedNumbers.push(randomRange(minNum, maxNum));
  }
  return generatedNumbers;
}
console.log(lottery(1, 60, 6));

/* CONVERTING STRINGS TO NUMBERS */

let bond = '007'
console.log(`
Converting strings to numbers.

Bond is: ${bond}, it's type is: ${typeof bond}`);

const convertToInt = (str) => {
  let newNum = parseInt(str);
  return newNum;
}

const newBond = convertToInt(bond);

console.log(`Bond is now: ${newBond}, it's type is: ${typeof newBond}`);

console.log(`
parseInt with a Radix:`);

function convertWithRadix(str) {
  let radix = parseInt(str, 2);
  return radix;
}

/* The radix variable says that "11" is in the binary system, or base 2. This example converts the string "11" to an integer 3. */
console.log(convertWithRadix("11")); // 3
console.log(convertWithRadix("10011")); // 19
console.log(convertWithRadix("111001")); // 57