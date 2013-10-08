/**
 * So the neat thing about JavaScript variables are that they are
 * all untyped. Just use the 'var' keyword to declare them.
 *
 * Throughout this and the rest of the samples, we'll be using
 * the function 'console.log()' to show output. To see this,
 * you need to open up your console in the browser. In Chrome,
 * you can get to this by going to the menu button (looks like three
 * bars) -> Tools -> JavaScript Console. On Mac, that's cmd+option+j.
 * On Windows, it's F11.
 */

// Here we just do some arithmetic. Because JavaScript is weakly
// typed, you can never specify int/long/double/float/whatever.
// Gift and a curse.
var num1 = 2;
var num2 = 3;
var num3 = num1 + num2;
console.log(num1 + " + " + num2 + " = " + num3);


// This shows that there's no such thing as 'integer division' in 
// JavaScript. It'll find the result like you would expect from a
// calculator.
var div1 = 1;
var div2 = 4;
var div3 = 1/4;
console.log(div1 + " / " + div2 + " = " + div3);


// Here we use strings and show how you can still use the '+'
// operator to concatenate them.
var firstname = "Peter";
var lastname = "Parker";
var fullname = firstname + " " + lastname;
console.log("Your full name is: " + fullname);


// Bools work like normal and use the same operators as C/C++/Java
var bool1 = true;
var bool2 = false;
var bool3 = bool1 && bool2;
console.log(bool1 + " && " + bool2 + " = " + bool3);


// Arrays in JavaScript don't have to have a pre-defined length, and
// and they can hold mixed datatypes. You also get some stack-like
// methods for free. And like Java, you get a nice 'length' property.
var array = ["Spider-Man", 5, true, "Mary Jane"];
console.log(array[0] + ", " + array[1] + ", " + array[2] + ", " + array[3]);
console.log("array length: " + array.length);

// Adds item to the end of the array
array.push("Venom"); 

// Removes and returns the last element of the array
console.log(array.pop());


// The 'undefined' keyword is for when a variable hasn't been assigned a value.
// The only time a variable is 'null' is if the programmer defined it to be.
var u;
var n = null;
console.log("u: " + u);
console.log("n: " + n);



