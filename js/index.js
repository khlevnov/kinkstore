import Swiper from 'swiper';
import MenuCatalog from './blocks/MenuCatalog.js';

var menu = new MenuCatalog;

var mainpageSlider = new Swiper('.slider', {
    autoplay: 3000,
    autoplayDisableOnInteraction: false,
    effect: document.documentElement.clientWidth > 960 ? 'fade' : 'slide',
    lazyLoading: true,
    loop: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    speed: 700,
});
