/**
 * Loops are also near-identical to C/C++/JavaScript, so we won't
 * spend much time on it.
 */

console.log("Here's a loop counting from 0-4:");
for (var i = 0; i < 5; i++) {
    console.log(i);
}

// For loops go great with arrays.
var a = ["Spider-Man", "is", "the", "best", "super", "hero"];
for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}

// And of of course there's while loops.
console.log("It's like a while loop - with more lines!");
var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}