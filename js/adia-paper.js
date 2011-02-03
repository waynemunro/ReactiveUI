$(document).ready(function() {

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
