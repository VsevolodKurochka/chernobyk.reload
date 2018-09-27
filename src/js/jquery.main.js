$(document).ready(function(){

	function scroll(scrollLink, speed){
		$('html, body').animate({
			scrollTop: scrollLink.offset().top
		}, speed);
		return false;
	}
	$('.anchor').click(function(e){
		e.preventDefault();
		scroll($( $(this).attr('href') ), 1500);
	});

	// Collapse

	if($(window).width() > 1025){
		$('.parallax-image').parally({
			speed: 0.2,
			mode: 'transform'
		});
	}

	$('[data-action="modal"]').click(function(){
		var text = $(this).text();
		var open = $(this).attr('data-open');
		$(open).find('button[type="submit"]').text(text);
	});
	
});	