/*
  smoothScrollTo::
    @itemClick: id/class name the user will click on, activating a scroll event.
    @itemScrollActiv: section in which the scrolling will occur.
    @posValue: position coordinates in which the scrolling should scroll to.
    @scrollSpeed: speed of scrolling.
*/
function smoothScrollSectionTo(itemClick, itemScrollActiv, posValue, scrollSpeed) {
    $(itemClick).click(function(){
	$(itemScrollActiv).animate({
	    scrollTop: $(posValue).offset().top - $(itemScrollActiv).offset().top + $(itemScrollActiv).scrollTop()}, scrollSpeed);
    });

    
}

function smoothScrollTo(itemClick, itemScrollActiv, posValue, scrollSpeed) {
    $(itemClick).click(function(){
	$(itemScrollActiv).animate({
	    scrollTop: posValue}, scrollSpeed);
    });
}

/*
  resizeHeight::
    @divtag: id/class name that is intended to be responsive for autoscrolling purposes
*/

/*
function rH(divtag) {
    $(window).resize(function() {
	var newHeight = $(window).height() * 0.505;
	$(divtag).height(newHeight);
    }).resize();
}
*/


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
/*    
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
*/
    
    smoothScrollTo("#scrollToAboutIntern", "html, body", $("#About").offset().top + ($("#About").offset().top/4), scrollSpeed);
    smoothScrollTo("#scrollToExperience", "html, body", $("#Experience").offset().top + 50, scrollSpeed);
    smoothScrollTo("#scrollToAboutHF", "html, body", $("#AboutHF").offset().top + 150, scrollSpeed);
    smoothScrollTo("#scrollToFAQ", "html, body", $("#FAQ").offset().top+secNext, scrollSpeed);
    smoothScrollTo("#scrollToConnect", "html, body", $("#Connect").offset().top+secNext, scrollSpeed);

    smoothScrollTo("#nav_scrollToAboutIntern", "html, body", $("#About").offset().top + ($("#About").offset().top/4), scrollSpeed);
    smoothScrollTo("#nav_scrollToExperience", "html, body", $("#Experience").offset().top + secNext, scrollSpeed);
    smoothScrollTo("#nav_scrollToAboutHF", "html, body", $("#AboutHF").offset().top+secNext, scrollSpeed);
    smoothScrollTo("#nav_scrollToFAQ", "html, body", $("#FAQ").offset().top+secNext, scrollSpeed);
    smoothScrollTo("#nav_scrollToConnect", "html, body", $("#Connect").offset().top+secNext, scrollSpeed);

    smoothScrollTo("#backToTop", "html, body", 0, scrollSpeed);

// --------------------------------------------------------------------------
    
// SECTION: ABOUT
// All jQuery/Javascript functions pertaining to ABOUT section
// --------------------------------------------------------------------------
    smoothScrollSectionTo("#goToInternProgram", aboutSection, "#_internProgram", scrollSpeed);
    smoothScrollSectionTo("#goToMentoring", aboutSection, "#_mentoring", scrollSpeed);
    smoothScrollSectionTo("#goToRoundtables", aboutSection, "#_roundtables", scrollSpeed);
    smoothScrollSectionTo("#goToProjects", aboutSection, "#_projects", scrollSpeed);
    smoothScrollSectionTo("#goToNetworking", aboutSection, "#_networking", scrollSpeed);
// --------------------------------------------------------------------------

// SECTION: INTERN
// All jQuery/Javascript functions pertaining to INTERN section
// --------------------------------------------------------------------------
    smoothScrollSectionTo("#goToVideos", internSection, "#_videos", scrollSpeed);
    smoothScrollSectionTo("#goToTestimonials", internSection, "#_testimonials", scrollSpeed);
// --------------------------------------------------------------------------

// SECTION: ABOUT HF
// All jQuery/Javascript functions pertaining to ABOUT_HF section    
// --------------------------------------------------------------------------

    smoothScrollSectionTo("#goToAboutHF", aboutHFsection, "#_aboutHF", scrollSpeed);
    smoothScrollSectionTo("#goToMission", aboutHFsection, "#_ourMission", scrollSpeed);
    smoothScrollSectionTo("#goToValues", aboutHFsection, "#_ourValues", scrollSpeed);
});

function mouseOverOne(){
	if($('#answer1').css('display') == 'block'){
		document.getElementById("answer1").style.display = "none";
		document.getElementById("plusone").src="https://vignette4.wikia.nocookie.net/scribblenauts/images/9/97/Plus_Sign.png/revision/latest?cb=20140409201237";
	}
	else{
		document.getElementById("answer1").style.display = "block";
		document.getElementById("plusone").src="https://d30y9cdsu7xlg0.cloudfront.net/png/8299-200.png";
	}
}

function mouseOverTwo(){
	if($('#answer2').css('display') == 'block'){
		document.getElementById("answer2").style.display = "none";
		document.getElementById("plustwo").src="https://vignette4.wikia.nocookie.net/scribblenauts/images/9/97/Plus_Sign.png/revision/latest?cb=20140409201237";
	}
	else{
		document.getElementById("answer2").style.display = "block";
		document.getElementById("plustwo").src="https://d30y9cdsu7xlg0.cloudfront.net/png/8299-200.png";
	}
}

function mouseOverThree(){
	if($('#answer3').css('display') == 'block'){
		document.getElementById("answer3").style.display = "none";
		document.getElementById("plusthree").src="https://vignette4.wikia.nocookie.net/scribblenauts/images/9/97/Plus_Sign.png/revision/latest?cb=20140409201237";
	}
	else{
		document.getElementById("answer3").style.display = "block";
		document.getElementById("plusthree").src="https://d30y9cdsu7xlg0.cloudfront.net/png/8299-200.png";
	}
}

function mouseOverFour(){
	if($('#answer4').css('display') == 'block'){
		document.getElementById("answer4").style.display = "none";
		document.getElementById("plusfour").src="https://vignette4.wikia.nocookie.net/scribblenauts/images/9/97/Plus_Sign.png/revision/latest?cb=20140409201237";
	}
	else{
		document.getElementById("answer4").style.display = "block";
		document.getElementById("plusfour").src="https://d30y9cdsu7xlg0.cloudfront.net/png/8299-200.png";
	}
}

function mouseOverFive(){
	if($('#answer5').css('display') == 'block'){
		document.getElementById("answer5").style.display = "none";
		document.getElementById("plusfive").src="https://vignette4.wikia.nocookie.net/scribblenauts/images/9/97/Plus_Sign.png/revision/latest?cb=20140409201237";
	}
	else{
		document.getElementById("answer5").style.display = "block";
		document.getElementById("plusfive").src="https://d30y9cdsu7xlg0.cloudfront.net/png/8299-200.png";
	}
}

function mouseOverSix(){
	if($('#answer6').css('display') == 'block'){
		document.getElementById("answer6").style.display = "none";
		document.getElementById("plussix").src="https://vignette4.wikia.nocookie.net/scribblenauts/images/9/97/Plus_Sign.png/revision/latest?cb=20140409201237";
	}
	else{
		document.getElementById("answer6").style.display = "block";
		document.getElementById("plussix").src="https://d30y9cdsu7xlg0.cloudfront.net/png/8299-200.png";
	}
}

function mouseOverSeven(){
	if($('#answer7').css('display') == 'block'){
		document.getElementById("answer7").style.display = "none";
		document.getElementById("plusseven").src="https://vignette4.wikia.nocookie.net/scribblenauts/images/9/97/Plus_Sign.png/revision/latest?cb=20140409201237";
	}
	else{
		document.getElementById("answer7").style.display = "block";
		document.getElementById("plusseven").src="https://d30y9cdsu7xlg0.cloudfront.net/png/8299-200.png";
	}
}

function mouseOverEight(){
	if($('#answer8').css('display') == 'block'){
		document.getElementById("answer8").style.display = "none";
		document.getElementById("pluseight").src="https://vignette4.wikia.nocookie.net/scribblenauts/images/9/97/Plus_Sign.png/revision/latest?cb=20140409201237";
	}
	else{
		document.getElementById("answer8").style.display = "block";
		document.getElementById("pluseight").src="https://d30y9cdsu7xlg0.cloudfront.net/png/8299-200.png";
	}
}

function mouseOverNine(){
	if($('#answer9').css('display') == 'block'){
		document.getElementById("answer9").style.display = "none";
		document.getElementById("plusnine").src="https://vignette4.wikia.nocookie.net/scribblenauts/images/9/97/Plus_Sign.png/revision/latest?cb=20140409201237";
	}
	else{
		document.getElementById("answer9").style.display = "block";
		document.getElementById("plusnine").src="https://d30y9cdsu7xlg0.cloudfront.net/png/8299-200.png";
	}
}

function mouseOverTen(){
	if($('#answer10').css('display') == 'block'){
		document.getElementById("answer10").style.display = "none";
		document.getElementById("plusten").src="https://vignette4.wikia.nocookie.net/scribblenauts/images/9/97/Plus_Sign.png/revision/latest?cb=20140409201237";
	}
	else{
		document.getElementById("answer10").style.display = "block";
		document.getElementById("plusten").src="https://d30y9cdsu7xlg0.cloudfront.net/png/8299-200.png";
	}
}

function mouseOverEleven(){
	if($('#answer11').css('display') == 'block'){
		document.getElementById("answer11").style.display = "none";
		document.getElementById("pluseleven").src="https://vignette4.wikia.nocookie.net/scribblenauts/images/9/97/Plus_Sign.png/revision/latest?cb=20140409201237";
	}
	else{
		document.getElementById("answer11").style.display = "block";
		document.getElementById("pluseleven").src="https://d30y9cdsu7xlg0.cloudfront.net/png/8299-200.png";
	}
}

function mouseOverTwelve(){
	if($('#answer12').css('display') == 'block'){
		document.getElementById("answer12").style.display = "none";
		document.getElementById("plustwelve").src="https://vignette4.wikia.nocookie.net/scribblenauts/images/9/97/Plus_Sign.png/revision/latest?cb=20140409201237";
	}
	else{
		document.getElementById("answer12").style.display = "block";
		document.getElementById("plustwelve").src="https://d30y9cdsu7xlg0.cloudfront.net/png/8299-200.png";
	}
}

function mouseOverThirteen(){
	if($('#answer13').css('display') == 'block'){
		document.getElementById("answer13").style.display = "none";
		document.getElementById("plusthirteen").src="https://vignette4.wikia.nocookie.net/scribblenauts/images/9/97/Plus_Sign.png/revision/latest?cb=20140409201237";
	}
	else{
		document.getElementById("answer13").style.display = "block";
		document.getElementById("plusthirteen").src="https://d30y9cdsu7xlg0.cloudfront.net/png/8299-200.png";
	}
}

