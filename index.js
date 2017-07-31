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

// SECTION VARIABLES: Insert the class name of the auto scrolling sections in their respective variables.
// --------------------------------------------------------------------------
    var aboutSection = ".section-about-right";
    var internSection = ".section-intern-right";
// -------------------------------------------------------------------------- 

// SECTION: ABOUT
// All jQuery/Javascript functions pertaining to ABOUT section
// --------------------------------------------------------------------------
    smoothScrollTo("#goToInternProgram", aboutSection, 0, scrollSpeed);
    smoothScrollTo("#goToMentoring", aboutSection, posNext, scrollSpeed);
    smoothScrollTo("#goToRoundtables", aboutSection, (posNext*2)-55, scrollSpeed);
    smoothScrollTo("#goToProjects", aboutSection, (posNext*3)-120, scrollSpeed);
    smoothScrollTo("#goToCollaterol", aboutSection, posNext*4, scrollSpeed);
// --------------------------------------------------------------------------

// SECTION: INTERN
// All jQuery/Javascript functions pertaining to INTERN section
// --------------------------------------------------------------------------
    smoothScrollTo("#goToInternExperience", internSection, 0, scrollSpeed);
    smoothScrollTo("#goToVideos", internSection, posNext, scrollSpeed);
    smoothScrollTo("#goToTestimonials", internSection, posNext*2, scrollSpeed);
// --------------------------------------------------------------------------
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
