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

  on: {
    slideChange: function () {
      let activeSlide = this.slides[this.activeIndex];
      let newText = activeSlide.querySelector('.board__cite').innerHTML;
      document.querySelector('.board__text').style.opacity = '0';
      document.querySelector('.board__text').style.transition = 'opacity .3s ease-in-out';
      setTimeout(() => {
        document.querySelector('.board__text').innerHTML = newText;
        document.querySelector('.board__text').style.opacity = '1';
      }, 500)
    }
  }
})
