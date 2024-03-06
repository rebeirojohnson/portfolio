function clearDefaultValue(input) {
    if (input.value === input.defaultValue) {
        input.value = '';  // Clear default value only when the user starts typing
         
    }

}

function toggleAdditionalInfo(clickedElement) {
    // Find the closest parent list item (<li>)
    var listItem = clickedElement.closest('li');

    // Toggle the 'selected' class on the list item
    listItem.classList.toggle('selected');

    // Toggle the 'selected' class on the additional info container
    var additionalInfo = listItem.querySelector('.additonal-info');
    additionalInfo.classList.toggle('selected');

    // Toggle the image source based on the 'selected' class
    var toggleIcon = listItem.querySelector('.toogle-icon');

    toggleIcon.src = (listItem.classList.contains('selected')) ? 'src/img/icons8-minus-32.png' : 'src/img/icons8-plus-24.svg';
}

// document.addEventListener("DOMContentLoaded", function() {
// var yourElement = document.getElementById("education-container");

// // Scroll to the element with different behaviors
// yourElement.scrollIntoView({ behavior: "auto" });
// // Uncomment the line below to try "smooth" behavior
// // yourElement.scrollIntoView({ behavior: "smooth" });
// });
