$(function()
{
	$('.js-menu-catalog-button').on('click', function() {
		if($(this).hasClass('is-active')) {
			$('.js-menu-catalog').removeClass('visible');
			$('.wrapper').removeClass('hidden');
			$('.js-menu-catalog-button').removeClass('is-active');
		} else {
			$('.js-menu-catalog').addClass('visible');
			$('.wrapper').addClass('hidden');
			$('.js-menu-catalog-button').addClass('is-active');
		}
	});
	$('.js-catalog-section-button').on('click', function() {
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).next().removeClass('visible');
		} else {
			$(this).addClass('active');
			$(this).next().addClass('visible');
		}
	});
/*
	$('#mainpage-slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true,
		infinite: true,
		fade: true,
		cssEase: 'linear',
		speed: 500,
	});
*/
});
