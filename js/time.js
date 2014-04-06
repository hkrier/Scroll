$(document).ready(function () {
	$('body').height($(window).height() * 2);

	$(window).on('scroll', function () {
		var scrollTop = $(this).scrollTop();
	
		$('.direction1').css('left', 15 * Math.sin(scrollTop / 100));
		$('.direction2').css('left', -15 * Math.sin(scrollTop / 100));	
	});
});
