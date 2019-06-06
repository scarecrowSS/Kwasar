$(document).ready(function () {
	if ($(window).width() < 480) {
		$(".steps__line").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: true
		});

		$(".portf-container").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: true
		});

		$(".services").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: true
		});
	}

	else if ($(window).width() < 768) {
		$(".portf-container").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: true
		});

		$(".steps__line").slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			dots: false,
			arrows: true
		});

		$(".services").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: true
		});
	}

	else if ($(window).width() < 992) {
		$(".portf-container").slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			dots: false,
			arrows: true
		});

		$(".steps__line").slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows: true
		});

		$(".services").slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows: true
		});
	}

	else if ($(window).width() > 1279 & $(window).width() < 1320) {

		$(".services").slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows: true
		});
	};
});