var swiper = new Swiper('.swiper-container', {
	centeredSlides: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});