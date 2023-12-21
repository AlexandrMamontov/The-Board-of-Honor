let mainSlider = new Swiper('.board__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><span>стр. </span>' + (index + 1).toString().padStart(2, '0') + '</div>';
    },
  },

  observer: true,
  observeParents: true,
  observeSlideChildren: true,

  mousewheel: {
    sensitivity: 1,
  },

  slidesPerView: 1,

  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
  },

  speed: 1000,
  spaceBetween: 30,
  direction: 'vertical',
  effect: 'slide',

  breakpoints: {
    768: {
      direction: 'vertical',
    },
    320: {
      direction: 'horizontal',
    },
  },
})

let textSlider = new Swiper('.board__cite', {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,

  slidesPerView: 1,

  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
  },

  mousewheel: {
    sensitivity: 1,
  },

  speed: 1000,
  direction: 'horizontal',
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
})
