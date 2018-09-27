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

	$(".collapse__group.active").find(".collapse__group-body").slideDown();

	$('.collapse').on('click', '.collapse__group-header', function(){
		var collapseInner = $(this).parents('.collapse').find('.collapse__group');

		$(this)
			.parent()
			.toggleClass('active');

		$(this)
			.next()
			.slideToggle('slow');

		collapseInner
			.not($(this).parent())
			.removeClass('active');

		collapseInner
			.children('.collapse__group-body')
			.not($(this).next())
			.slideUp("slow");

	});

	$('#treners-carousel').owlCarousel({
		loop: false,
		nav: true,
		items: 1,
		dots: false,
		navContainerClass: 'treners__carousel-nav',
		navClass: [
			"treners__carousel-btn treners__carousel-btn_prev btn btn_brand-1 effect effect_bounce-bottom", 
			"treners__carousel-btn treners__carousel-btn_next btn btn_brand-1 effect effect_bounce-bottom"
		],
		responsive: {
			1025: {
				items: 3,
				margin: 15
			},
			1200: {
				items: 3,
				margin: 15
			}
		}
	});

	$('#reviews-carousel').owlCarousel({
		loop: false,
		nav: true,
		items: 1,
		dots: false,
		navContainerClass: 'reviews__carousel-nav',
		navClass: [
			"reviews__carousel-btn reviews__carousel-btn_prev btn btn_brand-1 effect effect_bounce-bottom", 
			"reviews__carousel-btn reviews__carousel-btn_next btn btn_brand-1 effect effect_bounce-bottom"
		],
	});

	$('[data-action="modal"]').click(function(){
		var text = $(this).text();
		var open = $(this).attr('data-open');
		$(open).find('button[type="submit"]').text(text);
	});
	
});	