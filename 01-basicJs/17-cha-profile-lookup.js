/* Basic JavaScript: Profile Lookup
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return "No such contact"

If prop does not correspond to any valid properties of a contact found to match name then return "No such property" */

//Setup
var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];

/*
First Function: Deactivated!
Wrong approach. It was looking for the firstName also, and it should.
A working and simpler version was made below this one.

// function lookUpProfile(name, prop)
function lookUpProfile(name, prop){
// Only change code below this line
  var data = contacts;
  for (i = 0; i < data.length; i++) {
      if (data[i]['firstName'] === name) {
          if (data[i].hasOwnProperty('lastName') && prop == 'lastName') {
              return data[i]['lastName'];
          } else if (data[i].hasOwnProperty('number') && prop == 'number') {
              return data[i]['number'];
          } else if (data[i].hasOwnProperty('likes') && prop == 'likes') {
              return data[i]['likes'];
          } else {
              return 'No such property';
          }
          // return data[i];
      } else {
          // return ('No such contact');
          }
      }
  // return contacts;
} */


/* Function 2 - Simpler and better */
function lookUpProfile(name, prop){
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (name === contacts[i].firstName) {
        if (contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        } else {
            return "No such property"
        }
    }
  }
    return "No such contact"
// Only change code above this line
}

console.log(lookUpProfile('Harry', 'lastName'));
console.log(lookUpProfile('Harry', 'number'));
console.log(lookUpProfile('Harry', 'likes'));
console.log(lookUpProfile('Harry', 'dislikes'));
console.log(lookUpProfile('John', 'lastName'));