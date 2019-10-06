// Global References to page elements.

// Buttons:
var checkItOutButton = $("#checkItOutButton");

// Divs:
var coverDiv = $("#coverDiv");
var mainBodyDiv = $("#mainBodyDiv");
var webDiv = $("#webDiv");
var animationDiv = $("#animationDiv");
var resumeDiv = $("#resumeDiv");
var contactDiv = $("contactDiv");
var aboutMeDiv = $("#aboutMeDiv");

// Div currently showing:
var currentDiv = coverDiv;

// Hides cover div and shows Web Design/Programming div.
checkItOutButton.click(function() {
    // This is a special case where transitionDiv function doesn't work.
    // Must force coverDiv to hide using forceHideElem.
    //forceHideElem(currentDiv);

    transitionDiv(webDiv);
    mainBodyDiv.show();
    //webDiv.show();
    //currentDiv = webDiv;
});

// Transitions from current div to desired div.
function transitionDiv(newDiv) {
    currentDiv.hide();
    newDiv.show();
    updateCurrentDiv(newDiv);
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

// Force hide elem (.hide() doesn't work).
function forceHideElem(elem) {
    elem.css("display", "none !important");
}

// Show cover div when page is ready.
$(document).ready(function () {
    currentDiv.show();
});