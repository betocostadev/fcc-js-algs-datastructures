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

/* OBJECTS FOR LOOKUPS */
/* If you have something like a table, instead of using a switch or an IF-Else statement
you can use an object to store the data you need and then access it: */
console.log('\nObject lookup:\n');
// Setup
function phoneticLookup(val) {
  var result = "";
  /* Instead of IF-Else or Switch, the object */
  var lookup = {
    alpha: 'Adams',
    bravo: 'Boston',
    charlie: 'Chicago',
    delta: 'Denver',
    echo: 'Easy',
    foxtrot: 'Frank'
  }
  result = lookup[val];
  return result;
}
console.log(phoneticLookup("charlie"));
console.log(phoneticLookup("bravo"));

/* TESTING OBJECTS FOR PROPERTIES */
/* We can use object methods to do many changes to objects. One is to check if an object
has a property. We use objName.hasOwnProperty('theProperty'); to check. */
console.log(`
Testing objects for properties:
`);
// Setup
var someStuff = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(objName, checkProp) {
  if (objName.hasOwnProperty(checkProp)) {
    return objName[checkProp];
  }
  return 'Not Found!';
}

// Test your code by modifying these values
console.log(checkObj(someStuff, 'pet'));
console.log(checkObj(someStuff, 'bed'));
console.log(checkObj(someStuff, 'house'));

/* NESTED OBJECTS:
Like arrays, objects can be nested inside of other objects (and arrays).
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": {
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2; // "secrets"
ourStorage.desk.drawer; // "stapler"
Example: */
// Setup
console.log('\nAccessing nested objects:\n');
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside['glove box']; // Change this line
console.log(gloveBoxContents);

/* ACCESSING NESTED ARRAYS
As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays. */
console.log('\nAccessing a nest array inside an object:\n');
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);