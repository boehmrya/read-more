$(document).ready( function() {

	var intro = $('.intro');
	var more = $('.read-more');

	//If the read more section exists, hide it and add the read more link
	if (more.length) {
		intro.after('<a class="more-link" href="#">Read More</a>');
		var moreLink = $('.more-link');

		moreLink.click( function() {
			if (more.css('display') == 'none') {
				more.slideDown();
				more.after(moreLink);
		  	}
		  	else {
		  		more.slideUp();
		  	}
		});
	}


});

