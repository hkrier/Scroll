var initialBoatBottom = 0;

function positionElements() {
	// set up scrolling
	$('body').height($(window).height() * 3);
	$('#container').height($(window).height());
	
	// position boat
	initialBoatBottom = $(window).height() - $('#wave3').position().top - 20;
	$('#boat').css('bottom', initialBoatBottom);
}

// after the last wave loads, position the boat and the container
$(document).on('load', '#wave3', function () {
	positionElements();
});

// reposition everything when the window is resized
$(window).on('resize', function () {
	positionElements();
});

$(window).on('scroll', function () {
	var scrollTop = $(this).scrollTop();
	
	// move the waves
	$('.wave').each(function () {
		var initialLeft = parseInt($(this).data('initial-left'));
		var initialBottom = parseInt($(this).data('initial-bottom'));
		$(this).css('left', initialLeft * Math.sin(scrollTop / (initialLeft * 10)) + initialLeft + '%');
		$(this).css('bottom', (initialBottom / 10) * Math.sin(scrollTop / initialBottom) + initialBottom + '%');
	});
		
	// move the boat	
	$('#boat').css('right', scrollTop);
	$('#boat').css('bottom', 10 * Math.sin(scrollTop / 20) + initialBoatBottom);
});

	
