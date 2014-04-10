var initialBoatBottom = 0;

function setContainerHeight() {
	// set up scrolling
	$('body').height($(window).height() * 3);
	$('#container').height($(window).height());
}

function positionBoat() {
	// position boat
	initialBoatBottom = $(window).height() - $('#wave3').position().top - 20;
	$('#boat').css('bottom', initialBoatBottom);
}

$(document).ready(function () {
	setContainerHeight();
	
	// after the last wave loads, position the boat
	$('#wave3').on('load', function () {
		positionBoat();
	});
});

// reposition everything when the window is resized
$(window).on('resize', function () {
	setContainerHeight();
	positionBoat();
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

	
