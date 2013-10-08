/**
 * Using a regular object to mimic a class in JavaScript poses some problems.
 * There aren't really any immediately obvious ways to have a transparent
 * constructor and private variables. Instead of using objects, we use
 * functions, which can be treated like objects themselves. Here we'll 
 * go through an example.
 */

// The function signature can be considered the constructor
var Person = function(name, age) {
    // The 'this' keyword refers to the public properties of this
    // function. 
    this.name = name;
    this.age = age;

    // Variables declared in a function have their scope limited
    // to that function, so this variable is essentially private
    var soul = 42;

    // Here we're adding some more public properties, this time in the
    // form of a function. 
    this.speak = function() {
        console.log("My name is " + this.name);
    }
    this.showSoul = function() {
        console.log("My soul looks like this: " + soul);
    }

    // Here's an example of a private function
    function invisible() {
        console.log("You can only access me from inside here.");
    }
}

var peter = new Person("Peter Parker", 15);
var maryjane = new Person("Mary Jane", 15);

peter.speak();
maryjane.speak();

peter.showSoul();
peter.soul = 5;
peter.showSoul();
