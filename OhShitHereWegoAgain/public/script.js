// Get the button and the heading elements
const button = document.getElementById("changeTextButton");
const heading = document.getElementById("heading");

// Add a click event listener to the button
button.addEventListener("click", function () {
  // Change the text of the heading
  heading.textContent = "You clicked the button!";
});
