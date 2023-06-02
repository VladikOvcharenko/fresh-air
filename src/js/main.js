import './_vendor'
import vars from './_vars'
// import './_functions'
// import './_components'
import openModal from './functions/modal'
import swiperClient from './functions/swiper'
import scrolling from './functions/scrolling'

window.addEventListener('DOMContentLoaded', () => {
  scrolling('.page-up')
  openModal('.open-modal', '.modal-info__overlay', '.modal__close-btn')
  openModal('.open-modal-info', '.modal__overlay', '.modal__close-btn')
})
