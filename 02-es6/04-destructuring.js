/* freeCodeCamp JavaScript
ES6
The rest and spread operators
*/

/* ES6 Destructuring
Breaking the structure of an object.
*/
console.log(`
=== Use Destructuring Assignment to Assign Variables from Objects ===
`);

/* Consider the following ES5 code:

var voxel = {x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54
Here's the same assignment statement with ES6 destructuring syntax:

const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54
 */

const person = {
  name: 'Beto',
  age: 33,
  cityToLive: 'Vancouver'
}
console.log(person);
console.log(`The object person:`);
const { name : nome, age, cityToLive : cidade } = person; // name : alias | Only if needed.
// console.log(`After destructuring: ${person}`);
console.log(`Now, after destructuring it into three separate variables:`);
console.log(nome);
console.log(age);
console.log(cidade);

console.log(`
The FCC Function:
`);

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const { tomorrow : tempOfTomorrow} = avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

// Destructuring Assignment to Assign Variables from Nested Objects
console.log(`
=== Destructuring Assignment to Assign Variables from Nested Objects ===
`);
const jet = {
  name: '737-Max',
  engines: {
    qty: 2,
    model: 'LEAP-1B'
  }
}
console.log(`Jet:`);
console.log(jet);

const { engines : { qty: b737NumEng, model: b737EngModel } } = jet;
console.log(`Destructured engine quantity and model:`);
console.log(`The Boeing 737-Max have ${b737NumEng}, ${b737EngModel} engines.`);

console.log(`
Using it for the forecast function:
`);

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const { tomorrow: { max: maxOfTomorrow}} = forecast; // change this line
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6


// Use Destructuring Assignment to Assign Variables from Arrays
console.log(`
=== Use Destructuring Assignment to Assign Variables from Arrays ===
`);

const [a1, b1] = [1, 2, 3, 4, 5, 6];
console.log(a1, b1); // 1, 2

// To get other elements we use comma:
const [, Bugatti, ,, Lambo] = ['Ferrari', 'Bugatti', 'Mitsubish', 'Alfa', 'Lambo', 'Koenigsegg'];
console.log(Bugatti);
console.log(Lambo);

console.log('Replace the values of some variables:');
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [b, a] = [a, b];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8



console.log(`
=== Destructuring with the Rest Operator to Reassign Array Elements ===
`);

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  const [a, b, ...arr] = list; // It will remove the first two itens and copy the rest.
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];


console.log(`
=== Destructuring to Pass an Object as a Function's Parameters ===
`)
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return function half({ max, min}) {
    // use function argument destructuring
    return (max + min) / 2.0;
  };
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

const profileOne = {
  firstName: 'Peter',
  lastName: 'Parker',
  age: 20
}

console.log(`
Another example:
`);
const changeAge = (profileData) => {
  const {firstName, lastName, age} = profileData;
  const nameLength = firstName.length;
  const lastNameLength = lastName.length;
  return `${firstName} has ${nameLength} characters.
${lastName} has ${lastNameLength} characters.
He/she is ${age} years old;`
}

console.log(changeAge(profileOne));