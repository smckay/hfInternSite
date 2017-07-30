$(document).ready(function(){
    var scrollSpeed = 1200;
    var posNext = 400;
/*
    var $leftItems = $(".about-left li");
    $leftItems.click(function(){
	$leftItems.removeClass('act');
	$(this).addClass('act');
    });
*/
    $("#goToInternProgram").click(function(){
	$(".section-right").animate({
	    scrollTop: 0}, scrollSpeed);
    });

    $("#goToMentoring").click(function(){
	$('.section-right').animate({
	    scrollTop: posNext}, scrollSpeed);
    });

    $("#goToRoundtables").click(function(){
	$('.section-right').animate({
	    scrollTop: posNext*2}, scrollSpeed);
   });

    $("#goToProjects").click(function(){
	$('.section-right').animate({
	    scrollTop: posNext*3}, scrollSpeed);
    });

    $("#goToCollaterol").click(function(){
	$('.section-right').animate({
	    scrollTop:posNext*4}, scrollSpeed);
    });

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
