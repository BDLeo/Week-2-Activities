// Activity 1

let age = 18;

if (age > 17){
    console.log("Yes, I can serve you.");
} else {
    console.log("Sorry, you aren't old enough");
}

// Activity 2

const Pep = "pepperoni";
const Pin = "pineapple";
const Che = "cheese";
const Ham = "ham";
let pizzaTopping = Che;

switch(pizzaTopping){
    case Che:
        console.log(`I don't mind having ${Che} on my pizza.`);
        break;
    case Pep:
        console.log(`${Pep} doesn't belong on pizza.`);
        break;
    case Pin:
        console.log(`${Pin} doesn't belong on pizza.`);
        break;
    case Ham:
        console.log(`${Ham} doesn't belong on pizza.`);
        break;
    default: 
        console.log("Wait, you put what on pizza?");
}

// Activity 3

let Password = "AGoodPassword"
if (Password < 8){
    console.log("Your password is too short.");
} else {
    console.log(Password);
}

// Activity 3 stretch

let Num = 21

if (Num % 3 === 0 || Num % 5 === 0){
    console.log("This number is divisible by 3 or 5");
} else {
    console.log("This number is not divisible by 3 or 5.");
}

// Activity 4

let NumTwo = 15

if (NumTwo % 3 === 0 && NumTwo % 5 === 0){
    console.log("Fizz Buzz");
} else if (NumTwo % 3 === 0){
    console.log("fizz");
} else if (NumTwo % 5 === 0){
    console.log("buzz");
}

// Activity 5

let numThree = 102
let numString = numThree.toString().split('').join()
let numReverse = numThree.toString().split('').reverse().join()
if (numString === numReverse){
    console.log("This number is a palindrome")
} else {
    console.log("This number is not a palindrome.")
}

// Activity 6
let timeOfDay = 23
const placeOfHome = "Lancaster"
const placeOfWork = "Code Nation"
if (timeOfDay < 8) {
    console.log(`You are at ${placeOfHome}`)
} else if (timeOfDay === 8 || timeOfDay === 17){
    console.log (`You are commuting.`)
} else if (timeOfDay < 17) {
    console.log(`You are at ${placeOfWork}`)
} else if (timeOfDay > 24){
    console.log("Invalid time of day. Please input a valid time.")
}  else {
    console.log(`You are at ${placeOfHome}`)
}

// Activity 7
let longString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
vowelIndex = [
    longString.lastIndexOf("a"),
    longString.lastIndexOf("e"),
    longString.lastIndexOf("i"),
    longString.lastIndexOf("o"),
    longString.lastIndexOf("u")
]
lastVowel = vowelIndex[0]
for (let index = 0; index < vowelIndex.length; index++) {
    if (lastVowel < vowelIndex[index]){
        lastVowel = vowelIndex[index];
    }
}
console.log(lastVowel)

// Activity 8

let word = "aVeryLongString"
let firstLetter = word[0]
let lastLetter = word[0]
let wordIndex = 0
for (let index = 0; index < word.length; index++) {
    lastLetter = word[index]
}
if (firstLetter === lastLetter) {
    console.log(`The first and last letters of the word ${word} are the same.`)
} else {
    console.log(`The first and last letters of the word ${word} are not the same.`)
}

// Activity 9

aNineNumOne = 3
aNineNumTwo = 2
if ((aNineNumOne + aNineNumTwo) % 2 === 0) {
    console.log(aNineNumOne + aNineNumTwo)
} else {
    console.log(aNineNumOne * aNineNumTwo)
}
