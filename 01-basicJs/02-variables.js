/* We can use some kinds of keywords to declare our variables:
- var | general purpose: Not recommended due to being available in the global scope, still
var is function scoped.
- let | recommended way to declare variables, block scoped.
- const | recommended way to declare constants, block scoped. */

// var example:
console.log('Trying var = i');
for (var i = 1; i < 5; i++) { // scope declaration
    console.log(i);
}

// should not be available here, but...
console.log('var i, after the loop: ' + i + '\n');
// Output 6... So, the var i is available after the loop.

// THE WEIRD THING:
// If we declare inside a function, then it will not be available, but inside a loop it will.
console.log('The same, but using the counter function:')
function counter() {
    var index = 1; // scope declaration - function scope
    for (index; index < 5; index++) {
        console.log(index);
    }
}
counter();
console.log('Now if we try to get the index value, we get: ReferenceError: index is not defined');

// let example
console.log('Now with let = j');
for (let j = 1; j < 5; j++) {
    console.log(j);
}
// is not available after the loop because it is scoped to the loop only.
console.log('after the loop: ReferenceError: j is not defined ' + '\n');

// const - The loop below is 'deactivated' because it would result in:
// TypeError: Assignment to constant variable.
// That is because it is a constant, it's value cannot change.

/* for (const constante = 1; constante < 10; constante ++) {
    console.log(constante);
} */

// But there are some catches here. Take the example below

const myArray = [2, 4, 6];
console.log(`const myArray is:`);
console.log(myArray);

// The array is constant, but it's values are not, see below:
for (let i = 1; i < 7; i += 2) {
    myArray.push(i);
}
myArray.sort();
console.log('myArray is a const, should not change the value right? No. Take a look now:');
console.log(myArray);
console.log(`We cannot change an object, array, variable, etc., with const, but we can change the values we have inside objects or arrays, since it will still be a const object or array. See the example below:
`);

const obj = {
    person: 'unhappy'
};
console.log(`The const person is ${obj.person} now`);
obj.person = 'happy';
console.log(`We made a change!
Now the const person is ${obj.person}!`);


/* As you can see, the array now have the other values. That is because since myArray is a const
it can change the values inside the array, but still it is an array, so it is still constant.
You cannot change the array to an object, boolean, etc., but you can change the content inside the array. */

// myArray = { person: 'coder' };
// TypeError: Assignment to constant variable.

console.log('\n Conclusion: \n')
console.log(`As MPJ says on FunFunFunction:
- We want to MINIMIZE MUTABLE STATE!
So, unless you have very specific reasons to use var, use only const!
If the value needs to change, use let.`);

/* BONUS:
If we declare the for loop and forget to declare the variable, like below:
 (function () {
    for (i = 0; i < 5; i++) { // our problem here, forget to declare the i.
        console.log(i);
    }
})()

The JavaScript would understand:
for (var i = 1);

But because of the hoisting, this var would go up to the start of the could and, would be
available for the entire code, even after the function.

We can AVOID this with 'use strict'; !!!
*/