/* freeCodeCamp JavaScript
ES6
Write more concise code and objects
*/

// ES6 Template Literals
/*
Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

Consider the code below:

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old. */

console.log(`=== ES6 Template Literals ===`);

const jamal = {
  name: 'Jamal',
  school: 'Khan',
}

const schoolGrade = (n1, n2) => {
  return (n1 + n2) / 2;
}

console.log(`Hi, my name is ${jamal.name} and I study on ${jamal.school}.
My grade for the semester is: ${schoolGrade(8, 7)}`);

console.log(`
=== Write Concise Object Literal Declarations Using Simple Fields ===
`);

/* const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
// Same thing with a concise code:
const getMousePosition = (x, y) => ({ x, y });
*/

const createPerson = (name, age, gender) => {
  "use strict";
  return { name, age, gender };
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

// Write Concise Declarative Functions with ES6
console.log(`
=== Write Concise Declarative Functions with ES6 ===
`)
const totalPrice = (price, taxPercent) => price * (taxPercent / 100) + price;
console.log(totalPrice(300, 15));

const somePerson = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
console.log(somePerson.sayHello());

/* Class Syntax to Define a Constructor Function
In ES5, we usually define a constructor function, and use the new keyword to instantiate an object.

var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
The class syntax simply replaces the constructor function creation:

class SpaceShuttle {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
*/

console.log(`
=== Class Syntax to Define a Constructor Function ===
`);

class RaceCar {
  constructor(make, model) {
    this.make = make,
    this.model = model
  }
}
const aventador = new RaceCar('Lamborghini', 'Aventador');
console.log(aventador);
function makeClassVeg() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClassVeg();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'

/* Use getters and setters to Control Access to an Object

Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer(){
    return this._author;
  }
  // setter
  set writer(updatedAuthor){
    this._author = updatedAuthor;
  }
}
const lol = new Book('anonymous');
console.log(lol.writer);  // anonymous
lol.writer = 'wut';
console.log(lol.writer);  // wut */

console.log(`
=== Use getters and setters to Control Access to an Object ===
`);

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(temperature) {
      this._temperature = temperature;
    }
    get temperature() {
      return this._temperature = 5 / 9 * (this._temperature - 32);
    }
    set temperature(temp) {
      this._temperature = 5 / 9 * (this._temperature - 32);
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
let hot = new Thermostat(113); // 113 FF
let hotInC = hot.temperature; // convert to C
console.log(hotInC); // 45 C
console.log(temp); // 24.44
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C / -20 in F
console.log(temp);