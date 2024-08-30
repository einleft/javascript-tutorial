const readline = require('readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({
    input,
    output
});

console.log('\nthis is a basic calculator within terminal\nplease type your sum\n\n')

let number1;

rl.question('', (number1) => {
    if(typeof number1 === 'number' && number1[1].includes('+' || '-' || '/' || 'x')) {
        console.log('so far seems valid');
    }
})