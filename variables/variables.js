// variables is named storage for data
let message;
message = 'hello'; // storing hello into message

let messageOne = 'hello';

// declare multiple variables in one line
let user = 'john', age = 25, messageTwo = 'hello';

// multiline variant
let userA = 'john';
let ageA = 25;
let messageA = 'hello';

// another multiline style
let userB = 'john',
    ageB = 25,
    messageB = 'hello';

// comma-first style
let userC = 'john'
    , ageC = 25
    , messageC = 'hello';

let box = 'hello!';
box = 'world!'; // box gets resigned
console.log(box);

// copying data from one variable to another
let hello = 'Hello world!';
let copy;

copy = hello; // copy is given the same value as hello
console.log(hello);
console.log(copy);

// declaring a variable twice triggers an error
let iAmCausingAnError;
let iAmCausingAnError1; // remove the 1 to trigger the error

// variable naming
let test1234;
let testUser;
let _testingHere;
let $TESTING;
// these are valid names

let $ = 1,
    _ = 2;

console.log($ + _);

// incorrect variable names
// let 1a;  cannot start with a number
// let my-name;  hyphens are not allowed

// non-latin letters are allowed, but not recommended
let имя = '...';
let 我 = '...';

// reserved names which cannot be used as a variable because they are used by the language itself
let let1 = 5;
let return1 = 5;
// delete the 1 to replicate issue

// when using, use strict a variable cannot just be assigned without declaring the variable type even when called
num = 5; // error: num is not defined

// without use strict
_num = 5;
console.log(_num); // will automatically create the variable type for us

// constants are unchanging variables
const myBirthday = '18.05.1982';
// myBirthday = '01.0.1.2001'; cannot be changed

// uppercase constants, these are usually used for difficult-to-remember values
const COLOR_RED = '#F00',
    COLOR_GREEN = '#0F0',
    COLOR_BLUE = '#00F',
    COLOR_ORANGE = '#FF7F00';

let color = COLOR_RED;
console.log(color);

// pageLoadTime is named normally since the value isn't known yet, and it doesn't change after the
// assignment value
const pageLoadTime = '';

let admin;
let name;

name = "John";
admin = name;
console.log(admin);

// giving the correct human-readable names
let ourPlanetName = "Earth";
let currentUserName = "John";

const birthday = '18.04.1982';
const bAge = someCode(birthday);

// bAge changes whilst birthday stays the same so it should be uppercase
const BIRTHDAY = '18.04.1982';
const bAge = someCode(BIRTHDAY); // the value of bAge changes due to the someCode function
                                 // therefor bAge does change and isn't a set value