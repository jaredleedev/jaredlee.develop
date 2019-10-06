// Global References to page elements.

// Buttons:
var checkItOutButton = $("#checkItOutButton");

// Divs:
var coverDiv = $("#coverDiv");
var webDiv = $("#webDiv");
var animationDiv = $("#animationDiv");
var resumeDiv = $("#resumeDiv");
var contactDiv = $("contactDiv");
var aboutMeDiv = $("#aboutMeDiv");

// Div currently showing:
var currentDiv = coverDiv;

// Hides cover div and shows Web Design/Programming div.
checkItOutButton.click(function() {
    // Hide cover and show webDiv.
    transitionDiv(webDiv);
});

// Transitions from current div to desired div.
function transitionDiv(newDiv) {
    hideElement(currentDiv);
    showElement(newDiv);
    updateCurrentDiv(newDiv);
}

// Sets given element display property to none.
function hideElement(elem) {
    elem.prop("display", "none");
}

// Sets given element display property to visible.
function showElement(elem) {
    elem.prop("display", "flex");
}

// Updates currentDiv to given div.
function updateCurrentDiv(newDiv) {
    if (newDiv != undefined) {
        currentDiv = newDiv;
    }

    else {
        console.log("Error: newDiv is undefined!");
    }
}