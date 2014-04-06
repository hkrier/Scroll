$(document).ready(function () {
	$('body').height($(window).height() * 3);
	$('#container').height($(window).height());
	var initialBoatBottom = $('#boat').data('initial-bottom');
	
	$(window).on('scroll', function () {
		var scrollTop = $(this).scrollTop();
	
		$('.moving').each(function () {
			var initialLeft = $(this).data('initial-left');
			var initialBottom = $(this).data('initial-bottom');
			$(this).css('left', initialLeft * Math.sin(scrollTop / initialLeft) - initialLeft);
			$(this).css('bottom', (initialBottom / 10) * Math.sin(scrollTop / initialBottom) - initialBottom);
		});
		
		$('#boat').css('right', scrollTop);
		$('#boat').css('bottom', 10 * Math.sin(scrollTop / 20) + initialBoatBottom);
	});
});