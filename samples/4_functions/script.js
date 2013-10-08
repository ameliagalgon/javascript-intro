/**
 * Functions in JavaScript are first-class citizens. That means that 
 * they can be stored in variables, passed in to other functions,
 * and just generally treated as another object.
 */

// Here's one way to declare a function
function dog() {
    console.log("Woof.");
}
dog();

// Here's another - you return data the same way as in C/C++/Java
var cat = function() {
    return "Meow";
}
console.log(cat());

// You can pass arguments, and because there's no datatypes, you just
// give the names. There's no default values or function overloads
// in JavaScript.
function cow(food) {
    console.log("I just ate " + food + ". Moo.");
}
cow("Chinese Food");

// Because functions are first-class citizens, you can pass them in
// as argument to functions
function speak(name, soundFunction) {
    console.log("The " + name + " goes " + soundFunction());
}
speak("cat", cat);

// You can have a function execute itself immediately.
// This is referred to by many names, but is most correctly called a
// "Immediately Invoked Function Expression," or IIFE for short
// (pronounced "iffy").
(function(){
    console.log("You can't hold me!");
})()