'use strict';

$(document).ready(function () {

	$.fn.hasAttr = function (name) {
		return this.attr(name) !== undefined;
	};

	function scroll(scrollLink, speed) {
		$('html, body').animate({
			scrollTop: scrollLink.offset().top
		}, speed);
		return false;
	}
	$('.anchor').click(function (e) {
		e.preventDefault();
		scroll($($(this).attr('href')), 1500);
	});

	// Collapse

	if ($(window).width() > 1025) {
		$('.parallax-image').parally({
			speed: 0.4,
			mode: 'transform'
		});
	}

	$('[data-action="modal"]').click(function () {
		var text = $(this).hasAttr('data-text') ? $(this).attr('data-text') : $(this).text();
		var open = $(this).attr('data-open');
		$(open).find('button[type="submit"]').text(text);
	});
});