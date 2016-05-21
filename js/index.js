import Swiper from 'swiper';

import './blocks/MenuCatalog.js';

var mainpageSlider = new Swiper('.slider', {
    autoplay: 3000,
    loop: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    speed: 700,
});
