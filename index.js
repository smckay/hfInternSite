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
}

$(document).ready(function(){
    var scrollSpeed = 1200; //constants
    var posNext = 580;
    var secNext = 50;
// SECTION VARIABLES: Insert the class name of the auto scrolling sections in their respective variables.
// --------------------------------------------------------------------------
    var aboutSection = ".section-about-right";
    var internSection = ".section-intern-right";
    var aboutHeight = $(window).height();
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

    smoothScrollTo("#nav_scrollToAboutIntern", "html, body", $("#About").offset().top+secNext, scrollSpeed);
    
// SECTION: ABOUT
// All jQuery/Javascript functions pertaining to ABOUT section
// --------------------------------------------------------------------------
    smoothScrollTo("#goToInternProgram", aboutSection, 0, scrollSpeed);
    smoothScrollTo("#goToMentoring", aboutSection, aboutHeight-100, scrollSpeed);
    smoothScrollTo("#goToRoundtables", aboutSection, aboutHeight-200, scrollSpeed);
    smoothScrollTo("#goToProjects", aboutSection, aboutHeight, scrollSpeed);
    smoothScrollTo("#goToCollaterol", aboutSection, aboutHeight, scrollSpeed);
    
    smoothScrollTo("#scrollToExperience", "html, body", $("#Experience").offset().top + secNext, scrollSpeed);

    smoothScrollTo("#nav_scrollToExperience", "html, body", $("#Experience").offset().top + secNext, scrollSpeed);
// --------------------------------------------------------------------------

// SECTION: INTERN
// All jQuery/Javascript functions pertaining to INTERN section
// --------------------------------------------------------------------------
    smoothScrollTo("#goToInternExperience", internSection, 0, scrollSpeed);
    smoothScrollTo("#goToVideos", internSection, posNext, scrollSpeed);
    smoothScrollTo("#goToTestimonials", internSection, posNext*2, scrollSpeed);


    smoothScrollTo("#nav_scrollToAboutHF", "html, body", $("#AboutHF").offset().top+secNext, scrollSpeed);

    smoothScrollTo("#nav_scrollToFAQ", "html, body", $("#FAQ").offset().top+secNext, scrollSpeed);

    smoothScrollTo("#nav_scrollToConnect", "html, body", $("#Connect").offset().top+secNext, scrollSpeed);

    smoothScrollTo("#scrollToAboutHF", "html, body", $("#AboutHF").offset().top+secNext, scrollSpeed);

    smoothScrollTo("#scrollToFAQ", "html, body", $("#FAQ").offset().top+secNext, scrollSpeed);

    smoothScrollTo("#scrollToConnect", "html, body", $("#Connect").offset().top+secNext, scrollSpeed);

    smoothScrollTo("#backToTop", "html, body", 0, scrollSpeed);
// --------------------------------------------------------------------------
});

function rH(divtag) {
    $(window).resize(function() {
	var newHeight = $(window).height() * 0.505;
	$(divtag).height(newHeight);
    }).resize();
}

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
