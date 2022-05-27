import Swiper, { Pagination } from 'swiper';

Swiper.use([Pagination]);

import 'swiper/css';

const productSlider = new Swiper('.product__slider .swiper', {
  // direction: 'vertical',
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.product__slider .swiper-pagination',
    clickable: true,
  },
});