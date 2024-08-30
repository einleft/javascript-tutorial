console.log('hello'); console.log('world'); // seperated into one like with a semicolon

// statements written on separate lines make code more readable
console.log('hello');
console.log('world');

// example of an implicit semicolon, where javascript knows not to add a semicolon to a newline
console.log(3 +
1
+ 2);

// example of explicit semicolon fails in javascript before the []
console.log('hello') ; // remove the semicolon to reproduce the error
[1, 2].forEach(console.log);

// fixed
console.log('hello');
[1, 2].forEach(console.log);


