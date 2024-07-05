const swiper = new Swiper(".mySwiper", {
      pagination: {
    el: ".swiper-pagination",
        clickable: true,
      },
});
    
const menuSwiper = new Swiper(".menuSwiper", {
  slidesPerView: 'auto',
  spaceBetween: 67,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})