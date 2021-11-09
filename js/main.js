/*
-----------------------------
|   | Services Section
-----------------------------
*/
$(function () {
	new WOW().init();
});

/*
-----------------------------
|   | Pop Up
-----------------------------
*/
$(function () {
	$("#work").magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		}
	});
});
/*
-----------------------------
|   | Team Section
-----------------------------
*/

$(function () {
	$("#team-members").owlCarousel({
		items: 3,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		responsive:{
			0: {
				items: 1
			},			
			480: {
				items: 2
			},			
			768: {
				items: 3
			}
		}
	});
});

/*
-----------------------------
|   | Testimonial
-----------------------------
*/
$(function () {
	$("#customer-testimonial").owlCarousel({
		items: 1,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true
		
	});
});
/*
-----------------------------
|   | Counter
-----------------------------
*/
$(function () {
	$('.counter').counterUp({
		delay: 30,
		time: 2000
	});
});

/*
-----------------------------
|   | Clients
-----------------------------
*/

$(function () {
	$("#clients-list").owlCarousel({
		items: 4,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		responsive:{
			0: {
				items: 1
			},			
			480: {
				items: 3
			},			
			768: {
				items: 5
			},			
			992: {
				items: 6
			},
		}
	});
});
/*
-----------------------------
|   | Navigation
-----------------------------
*/

$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() < 50) {
			//$('nav').removeClass('vesco-top-nav');
			$('#back-to-top').fadeOut();
		} else {
			//$('nav').addClass('vesco-top-nav');

			$('#back-to-top').fadeIn();
		}
	});
});
//Close Mobile Menu of click
$(function () {
	$(".navbar-collapse li a").on("click touch", function(){
		$(".navbar-toggler").click();
	});
});

//Smooth Scroll
$(function () {
	$('a.smooth-scroll').click(function (event) {
		event.preventDefault();

		var section = $(this).attr('href');

		$('html , body').animate({
			scrollTop: $(section).offset().top - 64
		}, 1000, "easeInOutExpo");
	});
});