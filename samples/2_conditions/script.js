/**
 * Conditions in JavaScript are near-identical to C/C++/JavaScript.
 *
 * However, we'll also take a look at the === operator and see what
 * it means and how it can be tricky.
 */

var a = 3;
var b = 5;
var c = 7;

if (a == 3) {
    console.log("a is " + a);
}

if (a < b && c > b) {
    console.log("a < b && c > b");
}

if (b < a) {
    console.log("Impossible!");
}
else {
    console.log("b < a");
}


// So let's look at this new === operator. Basically, == will
// do all possible type conversions before giving back a final
// answer, whereas === will not. So, you can compare strings and
// numbers with ==, but not with ===.
// 
// In general, you should always use === unless you have a very 
// good reason. Because of all of the type conversios, == is
// slower than ===, and it can also get you into trouble.
var xNum = 5;
var xString = "5";

console.log("xNum == xString -> " + (xNum == xString));
console.log("xNum === xString -> " + (xNum === xString));