let messages = [
    "You are not a burden for requesting accomodations",
    "You are deserving of respect and understanding",
    "You are not a burden for needing clarification",
    "You are not alone in navigating challenges",
    "Your sensitivity is a gift that adds beauty to the world",
    "Be proud of your achievements, big and small",
    "Your ability to see patterns brings clarity to complex situations",
    "Celebrate your unique stims; they bring calm to the world around you",
    "You deserve love and acceptance exactly as you are",
    "Embracing your sensory needs should be encouraged",
    "You have unique strengths that contribute to society"
];

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Get the <span> elements that close the modals
let spans = document.getElementsByClassName("close");

// When the user clicks on the button, open the corresponding modal
const clickButton = document.getElementById("clickButton");
clickButton.onclick = function () {
    modal.style.display = "block";
    document.querySelector("body").style.overflow = 'hidden'; //prevents background scrolling while modal is open
    displayRandomMessageInModal();
}

// When the user clicks on <span> (x), close the corresponding modal
for (let i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
        this.parentElement.parentElement.style.display = "none";
        document.querySelector("body").style.overflow = 'visible'; //make background scrollable again
    }
}

// When the user clicks anywhere outside of the modals, close them
window.onclick = function (event) {
    if (event.target == modal) {
        event.target.style.display = "none";
        document.querySelector("body").style.overflow = 'visible'; //make background scrollable again
    }
}

// Function to display a random capitalized message in a modal
function displayRandomMessageInModal() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const modal = document.getElementById("modal");
    const messageDisplay = document.getElementById("messageDisplay");
    const randomMessage = capitalizeFirstLetter(messages[randomIndex]);
    messageDisplay.textContent = randomMessage;
    modal.style.display = "block";
}

// Close the modal when the close button is clicked
function closeModal() {
    const modal = document.getElementById("modal");
}


