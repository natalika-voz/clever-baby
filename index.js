import Swiper, { Navigation } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

const teachersSlider = new Swiper('.teachers-slider', {
  modules: [Navigation],
  navigation: {
    nextEl: 'swiper-button-next',
    prevEl: 'swiper-button-prev',
  }
});
