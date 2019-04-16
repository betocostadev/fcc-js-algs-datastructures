/* JAVASCRIPT OBJECTS
Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

Here's a sample cat object:

var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
}; */
console.log('JavaScript Objects:');
var myDog = {
    name: 'Meg',
    legs: 4,
    tails: 1,
    friends: ['dogs', 'people'],
    sound: function () {
        return ('au au');
    }
};
/* If you already know the property that you want to access, you may call it using
DOT NOTATION.
Like: myDog.name */

console.log(myDog.name);
console.log(myDog.legs);
console.log(myDog.tails);
console.log(myDog.friends);
console.log(myDog.sound());

/* Assign an object value to a variable. */
console.log('new variable dog tails:');
var dogTails = myDog.tails;
console.log(dogTails);

/* Access object properties with [] bracket notation
The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
However, you can still use bracket notation on object properties without spaces.
Note that property names with spaces in them must be in quotes (single or double).
 */
console.log('\nAccess the obj properties with [] bracket notation:\n');
var location = {
    country: 'Brazil',
    'city state': 'São Paulo SP'
}
console.log(location['country']);
console.log(location['city state']);

/* ACCESSING OBJECT PROPERTIES WITH VARIABLES
Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.
 */
console.log('\nUsing variables to access object properties:\n');
var dogs = {
    Fido: "Mutt", Hunter: "Doberman", Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"

/* Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:

var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"
*/

/* We can also update the object property value by assgning it a new value */
console.log('Updating values:');
var someOtherObj = {
    name: 'Johnson',
    number: 9
};
console.log(someOtherObj.number);
console.log('\nUpdating the object property \n');
someOtherObj.number = 10;
console.log(someOtherObj['number']);

console.log('Using a function to update an object value');
var players = {
    10: 'John',
    11: 'Jamal',
    12: 'Cornelius'
};
function updatePlayers (num, newName) {
    return players[num] = newName;
}
console.log(`Player 10: ${players[10]}`);
console.log(`Player 11: ${players[11]}`);
console.log(`Player 12: ${players[12]}`);
updatePlayers(12, 'Cornholio');
console.log('Player 12 after the update:');
console.log(`Player 12: ${players[12]}`);

/* ADD PROPERTIES TO OBJECTS */
players.location = 'Brasa';
console.log('\nPlayer object now: \n');
console.log(players);

/* DELETE OBJECT PROPERTIES WITH DELETE */
console.log('\nDeleting an object property using the "delete" keyword:');
delete players.location;
console.log(players);