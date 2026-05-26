//your JS code here. If required.
// Get button
let button = document.querySelector('input[type="button"]');

// Add click event
button.addEventListener("click", function () {

    // Get select element
    let select = document.getElementById("colorSelect");

    // Remove selected option
    select.remove(select.selectedIndex);
});