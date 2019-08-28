/* Some tests using Regular expressions

10 - Credit card test



*/

// Credit card check - nnnn-nnnn-nnnn-nnnn
const card1 = "1124";
const card2 = "6657-0938"
const card3 = "6657-0938-948a"
const card4 = "ab57-0938-948c"
const card5 = "6532-0938-0384-0293"
const card6 = "6532-0938-0384-0293se"
const card7 = "6532-0938-0384-0293-0092"
const creditCardRegex = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/
console.log('card 1:', creditCardRegex.test(card1))
console.log('card 2:', creditCardRegex.test(card2))
console.log('card 3:', creditCardRegex.test(card3))
console.log('card 4:', creditCardRegex.test(card4))
console.log('card 5:', creditCardRegex.test(card5))
console.log('card 6:', creditCardRegex.test(card6))
console.log('card 7:', creditCardRegex.test(card7))
console.log(card5.match(creditCardRegex))

