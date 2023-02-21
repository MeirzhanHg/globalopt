$('.review__slider-track').slick({
	centerMode: true,
	centerPadding: '10px',
	slidesToShow: 3,
    // adaptiveHeight: true,
    prevArrow: $('.review__prev'),
    nextArrow: $('.review__next'),
	responsive: [
	  {
		breakpoint: 768,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '40px',
		  slidesToShow: 3
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '40px',
		  slidesToShow: 1
		}
	  }
	]
  });