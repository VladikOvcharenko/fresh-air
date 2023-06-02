import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])

const swiperClient = new Swiper('.client__swiper', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    nextEl: '.client__next',
    prevEl: '.client__prev',
  },

  // breakpoints: {
  //   576: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   770: {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //   },
  //   970: {
  //     slidesPerView: 4,
  //     spaceBetween: 30,
  //   },
  // },
})

const swiperPartners = new Swiper('.portfolio__swiper', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  navigation: {
    nextEl: '.portfolio__slider-next',
    prevEl: '.portfolio__slider-prev',
  },

  // breakpoints: {
  //   576: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   770: {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //   },
  //   970: {
  //     slidesPerView: 4,
  //     spaceBetween: 30,
  //   },
  // },
})
