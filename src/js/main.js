import './_vendor'
import vars from './_vars'
import './_functions'
import './_components'

import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])

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

// const header

// upSelector - класс появляющейся кнопки, передается агрументом при вызове функции (скролл топ)

const scrolling = (upSelector) => {
  const upElement = document.querySelector(upSelector)
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      console.log(1)
      upElement.classList.add('active')
    } else {
      upElement.classList.remove('active')
    }
  })

  // Scrolling with request animation
  // плавный скролл по всем ссылкам вниз

  let links = document.querySelectorAll('[href^="#"]'),
    speed = 0.4

  links.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault()

      let widthTop = document.documentElement.scrollTop
      let hash = this.hash
      let toBlock = document.querySelector(hash).getBoundingClientRect().top
      let start = null

      requestAnimationFrame(step)

      function step(time) {
        if (start === null) {
          start = time
        }

        let progress = time - start
        let r =
          toBlock < 0
            ? Math.max(widthTop - progress / speed, widthTop + toBlock)
            : Math.min(widthTop + progress / speed, widthTop + toBlock)

        document.documentElement.scrollTo(0, r)

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step)
        } else {
          location.hash = hash
        }
      }
    })
  })
}
scrolling('.page-up')
