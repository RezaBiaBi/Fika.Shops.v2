new Swiper('#blog-slider-section #blog-slider.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    preloadImages: false,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});