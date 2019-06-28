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
