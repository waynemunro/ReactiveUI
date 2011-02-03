$(document).ready(function() {
		
		//contact form modal window
	   $("#form-trigger").fancybox({
		'width'				: 600,
		'height'			: 526,
        'autoScale'     	: true,
        'transitionIn'		: 'fade',
		'transitionOut'		: 'fade'
	});
	
	//button hover events
	jQuery(".button").hover(function () {
	    jQuery(this).animate({
		    opacity: 0.8
	    }, "fast");
    },
    function () {
    	jQuery(this).animate({
    		opacity: 1
    	}, "fast");
    });
});