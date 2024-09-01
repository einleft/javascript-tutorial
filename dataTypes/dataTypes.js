// any data type is able to be in a variable
let message = 'hello';
message = 12345; // you are able to assign a different data type to a variable

// number data type
let n = 123;
n = 12.345;
// number data type represents both integers and floating point numbers

// there are many operators and so on for numbers
console.log(1+1);
console.log(2-2);
console.log(3*3);
console.log(4/4);

// besides regular numbers there are also special numeric values which also belong
// in the number data type

// NaN, Infinity, -Infinity

// Infinity
console.log(1/0);
console.log(Infinity);

// NaN
console.log('i am a string' / 2); // NaN, not a number this would be erroneous
console.log(NaN + 1); // NaN
console.log('im a string' / 2 - 1); // NaN

// the number data type cannot represent
// an integer value larger than (2^53-1) (that's 9007199254740991) or less than
// (-2^53-1)

// two numbers right above the safe range are the same
console.log(9007199254740991 + 1);
console.log(9007199254740991 + 2); // this doesn't go above the +1

// creating a bigInt
const bigInt = 1234567890123456789012345678901234567890n; // the 'n' at the end represents the bigInt

// String
let str = "hello";
let str2 = 'single quote';
let phrase = `can embed another ${str}` // using backticks

// Embedded variables
let name = 'john';
console.log(`hello, ${name}`);
console.log(`the result is: ${1 + 2}`);
console.log("the result is: ${1 + 2}"); // cannot embed the expression

// Booleans
let nameFieldChecked = true;
let ageFieldChecked = false;
// booleans are only to check true or false

// boolean values also come as a result of comparisons
let isGreater = 4 > 1;
console.log(isGreater); // 4 is greater than 1 true

isGreater = 4 > 6
console.log(isGreater); // false, 4 is not greater than 6

// NULL VALUES TODO