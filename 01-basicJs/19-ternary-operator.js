// Free Code Camp | Basic JavaScript: The ternary operator

/* The syntax is:
condition ? statement-if-true : statement-if-false;
*/

console.log(`=== Conditional (Ternary) Operator ===`);

const goOut = (weather) => {
  return weather === 'sunny' ? 'Go out!' : 'Stay home.';
}

console.log(`Today it's rainy, I should: ${goOut('rainy')}`);
console.log(`Today it's sunny, I should: ${goOut('sunny')}`);

/* Use Multiple Conditional (Ternary) Operators */
console.log(`
Use Multiple Conditional (Ternary) Operators
`);

const findEqual = (a,b) => {
  return a === b ? 'They are equals' : (a > b) ? 'A is greater than B' : 'A is smaller than B';
}
console.log(findEqual(1,1));
console.log(findEqual(1,2));
console.log(findEqual(4,2));
