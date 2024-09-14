//Инициализация свайпера
var swiper = new Swiper('.main-swiper', {
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 195,
  speed: 2500,
  initialSlide: 1,
  breakpoints: {
    1250: {
      spaceBetween: 195,
    },
    1100: {
      spaceBetween: 155,
    },
    1000: {
      spaceBetween: 130,
    },
    769: {
      spaceBetween: 120,
    },
    360: {
      spaceBetween: 10,
      slidesPerView: 1,
      initialSlide: 0,
    },
    0: {
      spaceBetween: 5,
      slidesPerView: 1,
      initialSlide: 0,
    },
  },
  navigation: {
    nextEl: '.main-slider_button-next',
    prevEl: '.main-slider_button-prev',
  },
});

//Определение величин высоты и ширины блоков и создание переменных для них
let bodyParam = document.querySelector('body');

let swiperSlide = document.querySelector('.swiper-slide');
let widthSwiperSlide = swiperSlide.offsetWidth;
let heightSwiperSlide = swiperSlide.offsetHeight;
bodyParam.style.setProperty('--widthSwiperSlide', `${widthSwiperSlide}px`);
bodyParam.style.setProperty('--heightSwiperSlide', `${heightSwiperSlide}px`);

let slideImg = document.querySelector('.swiper-slide img');
let heightSlideImg = slideImg.offsetHeight;
bodyParam.style.setProperty('--heightSlideImg', `${heightSlideImg}px`);

let slideArticle = document.querySelector('.article');
let heightSlideArticle = slideArticle.offsetHeight;
bodyParam.style.setProperty('--heightSlideArticle', `${heightSlideArticle}px`);

let container = document.querySelector('.container');
let widthContainer = container.offsetWidth;
bodyParam.style.setProperty('--widthContainer', `${widthContainer}px`);

//Переключение между категориями товаров
let categoryItems = document.querySelectorAll('.category-item');
let slederItems = document.querySelectorAll('.main-swiper');

function targetSlider(nameSlider) {
  for (i = 0; i < slederItems.length; i++) {
    slederItems[i].style.display = 'none';
    categoryItems[i].classList.remove('active');
  }

  document.getElementById(nameSlider).style.display = 'block';
  document
    .getElementsByClassName(nameSlider)
    .namedItem(nameSlider)
    .classList.add('active');
}

//Скрытие стрелок при перемещении слайда
let nextButtons = document.querySelectorAll('.main-slider_button-next');
let prevButtons = document.querySelectorAll('.main-slider_button-prev');

function opacityArrow() {
  const clickButton = this;
  const sliderContainer = clickButton.closest('.swiper');
  let nextButton = sliderContainer.querySelector('.main-slider_button-next');
  let prevButton = sliderContainer.querySelector('.main-slider_button-prev');

  nextButton.style.opacity = 0;
  prevButton.style.opacity = 0;

  setTimeout(() => {
    nextButton.style.opacity = 1;
    prevButton.style.opacity = 1;
  }, 2200);
}

nextButtons.forEach((button) => {
  button.addEventListener('click', opacityArrow);
});

prevButtons.forEach((button) => {
  button.addEventListener('click', opacityArrow);
});

// Скрытие кнопок при загрузке страницы
function hideButtonsOnLoad() {
  let nextButtons = document.querySelectorAll('.main-slider_button-next');
  let prevButtons = document.querySelectorAll('.main-slider_button-prev');

  nextButtons.forEach((button) => {
    button.style.opacity = 0;
  });

  prevButtons.forEach((button) => {
    button.style.opacity = 0;
  });

  setTimeout(() => {
    nextButtons.forEach((button) => {
      button.style.opacity = 1;
    });

    prevButtons.forEach((button) => {
      button.style.opacity = 1;
    });
  }, 500);
}

nextButtons.forEach((button) => {
  button.addEventListener('click', opacityArrow);
});

prevButtons.forEach((button) => {
  button.addEventListener('click', opacityArrow);
});

window.addEventListener('load', hideButtonsOnLoad);
