/* CONDITIONS AND COMPARISONS
- Booleans
- If Statements
- Equality and Inequality operators */

/* Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is "on" and false is "off." These two states are mutually exclusive. */

console.log("Booleans test!\n");
var lightIsOn = true;
function checkLight() {
    if (lightIsOn) {
        console.log("Yes, the light is on!");
    } else {
        console.log("No, the light is off!");
    }
}
checkLight();
console.log("switched lights");
lightIsOn = false;
checkLight();

/* CONDITIONS - IF STATEMENTS
Already using it in the function above. */