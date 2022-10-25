// TODO: Make a reference to the first button on the page
// const buttons = document.querySelectorAll("button");
// in the () can be any css selector youd like

// TODO: Do something whenever a button is clicked
// Functions in JS are first class (anything you can do with a string you can do with an array) can put a function inside another function
// const button = document.querySelector("button");

// This method is going to listen for a specific event - this will look for a click event
// This is called a call back function - a func thats called back by another func
// button.addEventListener("click", function () {
//   console.log("Button clicked!");
// });

// Another way to do a loop over an array
// Specify a parameter inside the function ()
// buttons.forEach(function (button) {
//   console.log("button");
// });

// Get all buttonos on the page
const buttons = document.querySelectorAll("button");

// Loop through the buttons and add a click event listener
buttons.forEach(function (button) {
  button.addEventListener(
    "click",

    // Callback function
    function () {
      console.log("Button clicked!");
    }
  );
});
