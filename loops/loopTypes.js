//     begin	let i = 0	Executes once upon entering the loop.
//     condition	i < 3	Checked before every loop iteration. If false, the loop stops.
//     body	alert(i)	Runs again and again while the condition is truthy.
//     step	i++	Executes after the body on each iteration.

// for loop (begin, condition, step, body)
for (let i = 0; i < 6; i++) {
    console.log(`repeated ${i}x`);
}

// while loop (begin, condition, body, step)
let a = 0;
while (a < 6) {
    console.log('a is still less than 6');
    a++;
}

// do loop (body, step, condition)
let b = 0;
do {
    console.log('reverse while loop')
    b++;
} while (b < 6)

// dumbed down loop

let c = 0;
if (c < 3) {
    console.log('dumbed down loop');
    c++;
}
if (c < 3) {
    console.log('dumbed down loop');
    c++;
}
if (c < 3) {
    console.log('dumbed down loop');
    c++;
}

// declaring the variable within the for loop means it stays within that scope and body
for (let staysInLoop = 0; staysInLoop < 1; staysInLoop++) {
    console.log('variable can only be called within this scope');
}

let outLoop;
for (outLoop = 0; outLoop < 1; outLoop++) {
    console.log('variable can be called outside of this scope');
}