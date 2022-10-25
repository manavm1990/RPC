// Get all the buttons on the page
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
