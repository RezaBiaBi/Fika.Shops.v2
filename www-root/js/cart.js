const orderFeddbackSlider = new Swiper('#order-feedbacks.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    cssWidthAndHeight: true,
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 10,
    visibilityFullFit: false,
    autoResize: false,
    loop: false,
    lazy: true,
    speed: 1000,
    freeMode: false,
    watchSlidesProgress: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: {
        invert: false,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});