const orderFeddbackSlider = new Swiper('#order-feedbacks.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    cssWidthAndHeight: true,
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 10,
    visibilityFullFit: false,
    autoResize: false,
    grabCursor: true,
    loop: false,
    lazy: true,
    speed: 1000,
    freeMode: false,
    watchSlidesProgress: false,
    // Navigation arrows
    navigation: {
        nextEl: '#order-feedbacks-section .navigation-container .dm-button-next',
        prevEl: '#order-feedbacks-section .navigation-container .dm-button-prev',
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
    effect: 'slide',
    slideEffect: {
        slideShadows: false,
    },
});
const orderLatestSlider = new Swiper('#order-latest-slider.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    cssWidthAndHeight: true,
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 10,
    visibilityFullFit: false,
    autoResize: false,
    grabCursor: true,
    loop: false,
    lazy: true,
    speed: 1000,
    freeMode: false,
    watchSlidesProgress: false,
    // Navigation arrows
    navigation: {
        nextEl: '#order-latest-section .order-box-title .navigation-container .dm-button-next',
        prevEl: '#order-latest-section .order-box-title .navigation-container .dm-button-prev',
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
    effect: 'slide',
    slideEffect: {
        slideShadows: false,
    },
});