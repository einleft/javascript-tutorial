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

// BIGINT TODO
// 2^53-1 = 9007199254740991
