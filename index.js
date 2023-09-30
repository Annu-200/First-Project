var swiper = new Swiper(".testMoni", {
    slidesPerView:2,
    spaceBetween: 20,
    centeredSlides: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const mobile_nav = document.querySelector('.moblie-icons');
  const head_bar = document.querySelector('#header');

  const toggleNav = ()=>{
    head_bar.classList.toggle('active')
  }

  mobile_nav.addEventListener('click', ()  => toggleNav() )
