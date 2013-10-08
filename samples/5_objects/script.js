/**
 * When we talk about objects, we're not talking about classical objects 
 * like in C++/Java. In JavaScript, objects are more like maps. They're 
 * key-value datastores. The values can be functions, so you can still 
 * mimic classical objects, but that's a process we'll describe later.
 */

// Objects are defined as a list of key-value pairs. Don't forget the commas!
var cat = {
    name: "Peter",
    color: "red",
    age: 15
}
console.log("I own a " + cat.color + " cat named " + cat.name + ". He is " + cat.age + " years old.");

// You can also store functions in objects
var dog = {
    name: "Parker",
    speak: function() {
        console.log("Woof!");
    },
    age: 10
}
dog.speak();

// You can append to objects after they have been made.
cat.speak = function() {
    console.log("Meow.");
}
cat.speak();

// And you can alternatively access and assign properties
// via the array accessor operator.
console.log("The cat is " + cat["age"] + " years old.");
cat["tail"] = "long";
console.log("The cat has a " + cat["tail"] + " tail.");

// We can loop over the keys in objects
console.log("Here's everything in my dog!");
for (var k in dog) {
    console.log(k + ": " + dog[k]);
}