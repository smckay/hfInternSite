/*
  smoothScrollTo::
    @itemClick: id/class name the user will click on, activating a scroll event.
    @itemScrollActiv: section in which the scrolling will occur.
    @posValue: position coordinates in which the scrolling should scroll to.
    @scrollSpeed: speed of scrolling.
*/
function smoothScrollTo(itemClick, itemScrollActiv, posValue, scrollSpeed) {
    $(itemClick).click(function(){
	$(itemScrollActiv).animate({
	    scrollTop: posValue}, scrollSpeed);
    });
    console.log($(window).height());
}

/*
  resizeHeight::
    @divtag: id/class name that is intended to be responsive for autoscrolling purposes
*/

function rH(divtag) {
    $(window).resize(function() {
	var newHeight = $(window).height() * 0.505;
	$(divtag).height(newHeight);
    }).resize();
}

$(document).ready(function(){

// VARIABLES (just to avoid repeatedly replacing values in parameters when a minor change comes along)
// --------------------------------------------------------------------------    
    var aboutHeight = $(window).height();    
    var scrollSpeed = 1200;
    var posNext = 580;
    var secNext = 50;

    var aboutSection = ".section-about-right";
    var internSection = ".section-intern-right";
    var aboutHFsection = ".section-HF-right";
// -------------------------------------------------------------------------- 

// GENERAL HTML
// THESE FUNCTIONS EFFECT OVERALL HTML PAGE
// --------------------------------------------------------------------------
    
    rH(".section-about-left");
    rH(".section-about-right");
    rH(".section-about-middle");
    rH(".section-intern-left");
    rH(".section-intern-right");
    rH(".section-intern-middle");
    rH(".section-HF-left");
    rH(".section-HF-right");
    rH(".section-HF-middle");
    rH(".section-left");
    rH(".section-right");
    rH(".section-middle");
    
    smoothScrollTo("#scrollToAboutIntern", "html, body", $("#About").offset().top+secNext, scrollSpeed);
    smoothScrollTo("#scrollToExperience", "html, body", $("#Experience").offset().top + secNext, scrollSpeed);
    smoothScrollTo("#scrollToAboutHF", "html, body", $("#AboutHF").offset().top+secNext, scrollSpeed);
    smoothScrollTo("#scrollToFAQ", "html, body", $("#FAQ").offset().top+secNext, scrollSpeed);
    smoothScrollTo("#scrollToConnect", "html, body", $("#Connect").offset().top+secNext, scrollSpeed);

    smoothScrollTo("#nav_scrollToAboutIntern", "html, body", $("#About").offset().top+secNext, scrollSpeed);
    smoothScrollTo("#nav_scrollToExperience", "html, body", $("#Experience").offset().top + secNext, scrollSpeed);
    smoothScrollTo("#nav_scrollToAboutHF", "html, body", $("#AboutHF").offset().top+secNext, scrollSpeed);
    smoothScrollTo("#nav_scrollToFAQ", "html, body", $("#FAQ").offset().top+secNext, scrollSpeed);
    smoothScrollTo("#nav_scrollToConnect", "html, body", $("#Connect").offset().top+secNext, scrollSpeed);

    smoothScrollTo("#backToTop", "html, body", 0, scrollSpeed);

// --------------------------------------------------------------------------
    
// SECTION: ABOUT
// All jQuery/Javascript functions pertaining to ABOUT section
// --------------------------------------------------------------------------
    smoothScrollTo("#goToInternProgram", aboutSection, 0, scrollSpeed);
    smoothScrollTo("#goToMentoring", aboutSection, 570, scrollSpeed);
    smoothScrollTo("#goToRoundtables", aboutSection, 1900, scrollSpeed);
    smoothScrollTo("#goToProjects", aboutSection, 2780, scrollSpeed);
    smoothScrollTo("#goToNetworking", aboutSection, 3800, scrollSpeed);
// --------------------------------------------------------------------------

// SECTION: INTERN
// All jQuery/Javascript functions pertaining to INTERN section
// --------------------------------------------------------------------------
    smoothScrollTo("#goToInternExperience", internSection, 0, scrollSpeed);
    smoothScrollTo("#goToVideos", internSection, posNext, scrollSpeed);
    smoothScrollTo("#goToTestimonials", internSection, posNext*2, scrollSpeed);
// --------------------------------------------------------------------------

// SECTION: ABOUT HF
// All jQuery/Javascript functions pertaining to ABOUT_HF section    
// --------------------------------------------------------------------------

    smoothScrollTo("#goToAboutHF", aboutHFsection, 0, scrollSpeed);
    smoothScrollTo("#goToMission", aboutHFsection, 520, scrollSpeed);
    smoothScrollTo("#goToValues", aboutHFsection, 890, scrollSpeed);
});

function mouseOverOne(){
	document.getElementById("answer1").style.display = "block";
}

function mouseOutOne(){
	document.getElementById("answer1").style.display = "none";
}

function mouseOverTwo(){
	document.getElementById("answer2").style.display = "block";
}

function mouseOutTwo(){
	document.getElementById("answer2").style.display = "none";
}

function mouseOverThree(){
	document.getElementById("answer3").style.display = "block";
}

function mouseOutThree(){
	document.getElementById("answer3").style.display = "none";
}

function mouseOverFour(){
	document.getElementById("answer4").style.display = "block";
}

function mouseOutFour(){
	document.getElementById("answer4").style.display = "none";
}

function mouseOverFive(){
	document.getElementById("answer5").style.display = "block";
}

function mouseOutFive(){
	document.getElementById("answer5").style.display = "none";
}

function mouseOverSix(){
	document.getElementById("answer6").style.display = "block";
}

function mouseOutSix(){
	document.getElementById("answer6").style.display = "none";
}

function mouseOverSeven(){
	document.getElementById("answer7").style.display = "block";
}

function mouseOutSeven(){
	document.getElementById("answer7").style.display = "none";
}

function mouseOverEight(){
	document.getElementById("answer8").style.display = "block";
}

function mouseOutEight(){
	document.getElementById("answer8").style.display = "none";
}

function mouseOverNine(){
	document.getElementById("answer9").style.display = "block";
}

function mouseOutNine(){
	document.getElementById("answer9").style.display = "none";
}

function mouseOverTen(){
	document.getElementById("answer10").style.display = "block";
}

function mouseOutTen(){
	document.getElementById("answer10").style.display = "none";
}

