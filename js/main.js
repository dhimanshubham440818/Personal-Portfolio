AOS.init({
	duration: 800,
	easing: 'slide'
});
(function ($) {
	"use strict";
	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();
	$.Scrollax();
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();
	$.Scrollax();
	var burgerMenu = function () {
		$('body').on('click', '.js-fh5co-nav-toggle', function (event) {
			event.preventDefault();

			if ($('#ftco-nav').is(':visible')) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}
		});
	};
	burgerMenu();
	var onePageClick = function () {
		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
			event.preventDefault();
			var href = $.attr(this, 'href');
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - 70
			}, 500, function () {
			});
		});

	};
	onePageClick();
	var carousel = function () {
		var owl = $('.home-slider').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 0,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: false,
			autoplayHoverPause: false,
			items: 1,
			navText: [
				"<span class='ion-md-arrow-back'></span>",
				"<span class='ion-chevron-right'></span>"
			],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
		owl.on('changed.owl.carousel', function (event) {
			var currentItem = $(event.target).find('.owl-item').eq(event.item.index);
			currentItem.find('.item').addClass('zoomIn'); // Custom animation class for zoomIn
			currentItem.siblings().find('.item').removeClass('zoomIn'); // Remove animation from other slides
			currentItem.find('.item').addClass('fadeIn');
			currentItem.siblings().find('.item').removeClass('fadeIn');
		});
	};
	carousel();
	
	function typingEffect(element, text, speed) {
		let i = 0;
		let txt = ''; // Text that will appear on the screen
		let isDeleting = false;
		let isTyping = true; // Flag to track if it's typing or deleting
	
		function type() {
			if (isTyping) {
				if (i < text.length) {
					txt += text.charAt(i);
					i++;
				} else {
					isTyping = false; // Once the text is typed, start deleting
				}
			} else {
				if (txt.length > 0) {
					txt = txt.substring(0, txt.length - 1);
				} else {
					isTyping = true; // Once the text is deleted, start typing again
					i = 0; // Reset the index to start from the beginning
				}
			}
	
			element.html(txt);
	
			// Continue the typing or deleting process
			setTimeout(type, isTyping ? speed : speed / 2);
		}
	
		type();
	}
	
	var element = $('#typing-text');
	var text = "Welcome to Our Website!"; // Text to be typed
	var speed = 200; // Typing speed (ms)
	typingEffect(element, text, speed); // Call typing effect
		
	$('nav .dropdown').hover(function () {
		var $this = $(this);
		timer;
		clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function () {
		var $this = $(this);
		timer;
		timer = setTimeout(function () {
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		}, 100);
	});
	$('#dropdown04').on('show.bs.dropdown', function () {
		console.log('show');
	});
	var counter = function () {
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint(function (direction) {
			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					$this.animateNumber(
						{
							number: num,
							numberStep: comma_separator_number_step
						}, 4000
					);
				});
			}
		}, { offset: '95%' });
	}
	counter();
	var contentWayPoint = function () {
		var i = 0;
		$('.ftco-animate').waypoint(function (direction) {
			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
				i++;
				$(this.element).addClass('item-animate');
				setTimeout(function () {
					$('body .ftco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});
				}, 100);
			}
		}, { offset: '95%' });
	};
	contentWayPoint();
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
})(jQuery);
var popup = function (event) {
	alert("something want wrong on server");
	event.preventDefault();
};