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
    transitionDiv(webDiv);
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

// Prevent nav links from acting as a hyperlink.
$(".nav-link").click(function (e) {
    e.preventDefault();
    return false;
});


