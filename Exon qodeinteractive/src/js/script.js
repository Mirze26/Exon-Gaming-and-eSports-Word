
let swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesToScroll: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
  });


  