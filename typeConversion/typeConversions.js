let value = true;
console.log(typeof value); // boolean

value = String(value);
console.log(typeof value); // converts to string

value = Boolean(value);
console.log(typeof value); // converts to boolean

value = Number(value);
console.log(typeof value); // converts to number

console.log('6' / '2'); // 3, strings are converted to numbers when involving mathematical functions

let str = '123';
console.log(typeof str);
let num = Number(str)
console.log(typeof num); // turns string to a number


// useful since it converts strings to a number so if it is a number that is in a string format
// like a text form it converts it to a number
let age = Number('an arbitrary string instead of a number');
if (isNaN(age)) {
    console.log('this format is incorrect');
} else {
    console.log(`correct!! bingo!! your age is: ${age}`)
}

console.log('     123    ') // THIS WILL HAVE SPACES IS STRING
console.log(Number('     123    ')); // 123 IS NOT STRING
console.log(Number('123z')); // NaN error reading number at 'z'
console.log(Number(true)); // 1 converts to the memory aka number
console.log(Number(false)); // 0

console.log(Boolean('hello')); // true since the string isn't empty
console.log(Boolean('')); // false since it's empty
