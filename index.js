// Global References to page elements.


// Divs:
var mainBodyDiv = $("#mainBodyDiv");
var webDiv = $("#webDiv");
var animationDiv = $("#animationDiv");
var resumeDiv = $("#resumeDiv");
var contactDiv = $("#contactDiv");
var aboutMeDiv = $("#aboutMeDiv");

// Links:
var webLink = $("#webLink");
var animationLink = $("#animationLink");
var resumeLink = $("#resumeLink");
var contactLink = $("#contactLink");
var aboutMeLink = $("#aboutMeLink");

// Div currently showing:
var currentDiv = webDiv;

webLink.click(function() {
    transitionDiv(webDiv);
});

animationLink.click(function() {
    transitionDiv(animationDiv);
});

resumeLink.click(function() {
    transitionDiv(resumeDiv);
});

contactLink.click(function() {
    transitionDiv(contactDiv);
});

aboutMeLink.click(function() {
    transitionDiv(aboutMeDiv);
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

$(window).on('load',function(){
    $('#coverDiv').modal('show');
});


