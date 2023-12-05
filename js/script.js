new Swiper('.swiper-container', {
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

  // autoplay: {
  //   // Пауза между прокруткой
  //   delay: 1000,
  //   // Закончить на последнем слайде
  //   stopOnLastSlide: false,
  // },

  speed: 1000,
  spaceBetween: 30,
  direction: 'vertical',
  effect: 'slide',
})


let tabsBtn = document.querySelectorAll('.board__btn');
let tabsStages = document.querySelectorAll('.board__slider');

tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn) {
      btn.classList.remove('board__btn-post--active')
    });

    e.currentTarget.classList.add('board__btn-post--active');

    tabsStages.forEach(function(element) {
      element.classList.remove('board__slider--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('board__slider--active');
  });
});

document.querySelector(`[data-path="one"]`).addEventListener('click', function() {
  mast.classList.remove('board__btn--active')
  spec.classList.add('board__btn--active')
})

document.querySelector(`[data-path="two"]`).addEventListener('click', function() {
  spec.classList.remove('board__btn--active')
  mast.classList.add('board__btn--active')
})

let spec = document.querySelector('.board-specialist');
let mast = document.querySelector('.board-master');
spec.addEventListener('click', function() {
  spec.classList.remove('board__btn--active')
  mast.classList.add('board__btn--active')
})
mast.addEventListener('click', function() {
  mast.classList.remove('board__btn--active')
  spec.classList.add('board__btn--active')
})
