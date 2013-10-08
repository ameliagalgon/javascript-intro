/**
 * When it comes down to it, the who point of JavaScript is to manipulate 
 * the DOM (i.e. structure of a web page). We show how to interact with
 * elements on the page here and make a little app that prints out the 
 * first n Fibonacci numbers.
 */


// JavaScript is run when it's first encountered in the DOM. So, we 
// want to wait for the whole page to render before doing any work
// (othewise we'll be trying to interact with buttons that don't exist.)
// Waiting for the onload event will solve this.
window.onload = function() {
    // We can grab elements by id this way
    var button = document.getElementById("js-button");

    // Event listeners are really neat. You specify an event (in this case
    // "click") and give it a function to call when that event happens (in
    // this case, "buttonClick")
    button.addEventListener("click", buttonClick);
}

function buttonClick(e) {
    var textbox = document.getElementById("js-textbox");
    var output = document.getElementById("js-output");

    // Print out the first n Fibonacci numbers. The deails of the algorithm
    // aren't important. Focus on how we get the value of the textbox and how
    // we set the text of the div.
    var out = "";
    var n = textbox.value;
    var last = 1;
    var curr = 0;
    for (var i = 0; i < n; i++) {
        out += curr;
        if (i < n-1) out += ", "; // Put in a fancy comma
        var temp = curr;
        curr = curr + last;
        last = temp;
    }
    output.innerText = out;

    // Why didn't we append the innerText every iteration? It's actually quite
    // expensive to change the innerText of innerHTML of an element. The browser
    // has to re-render the page in consideration of the new layout. Therefore,
    // we wait until the end to set the innerHTML.
}