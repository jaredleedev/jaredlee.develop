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
var currentNavLink = webLink;

webLink.click(function() {
    transitionDiv(webDiv);
    currentNavLink.removeClass("active");
    webLink.addClass("active");

    currentNavLink = webLink;
});

animationLink.click(function() {
    transitionDiv(animationDiv);

    currentNavLink.removeClass("active");
    animationLink.addClass("active");

    currentNavLink = animationLink;
});

resumeLink.click(function() {
    transitionDiv(resumeDiv);

    currentNavLink.removeClass("active");
    resumeLink.addClass("active");

    currentNavLink = resumeLink;
});

contactLink.click(function() {
    transitionDiv(contactDiv);

    currentNavLink.removeClass("active");
    contactLink.addClass("active");

    currentNavLink = contactLink;
});

aboutMeLink.click(function() {
    transitionDiv(aboutMeDiv);

    currentNavLink.removeClass("active");
    aboutMeLink.addClass("active");

    currentNavLink = aboutMeLink;
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


