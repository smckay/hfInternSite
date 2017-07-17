$("#goToProjects li").click(function() {
    $('html, body').animate({
	scrollTop: $("#_projects").offset().top}, 'slow');
});
