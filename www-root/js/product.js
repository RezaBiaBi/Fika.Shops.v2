const ProductSlidersBreakPoint = {
    1300: {
        slidesPerGroup: 4,
        slidesPerView: 5,
        spaceBetween: 35,
    },
    1200: {
        slidesPerGroup: 4,
        slidesPerView: 5,
        spaceBetween: 25,
    },
    960: {
        slidesPerGroup: 3,
        slidesPerView: 4,
        spaceBetween: 30,
    },
    640: {
        slidesPerGroup: 2,
        slidesPerView: 3,
        spaceBetween: 25,
    },
    550: {
        speed: 300,
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 60,
    },
    420: {
        speed: 300,
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 15,
    },
    340: {
        speed: 300,
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 10,
    }
}
    


new Swiper('#img-container .swiper-container', {
    loop: false,
    lazy: true,
    spaceBetween: 7,
    centeredSlides: false,
    grabCursor: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
        draggable: false,
    },
    breakpoints: {
        1200: {
            slidesPerGroup: 1,
            slidesPerView: 6,
            spaceBetween: 7,
        },
        960: {
            slidesPerGroup: 1,
            slidesPerView: 5,
            spaceBetween: 7,
        },
        640: {
            slidesPerGroup: 1,
            slidesPerView: 4,
            spaceBetween: 7,
        },
        320: {
            slidesPerGroup: 1,
            slidesPerView: 3,
            spaceBetween: 7,
        }
    }
});

new Swiper('#related-products.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    speed: 900,
    spaceBetween: 25,
    slidesPerView: 1,
    cssWidthAndHeight: true,
    visibilityFullFit: true,
    freeMode: false,
    autoResize: true,
    lazy: {
        loadPrevNext: true,
        loadOnTransitionStart: false
    },
    breakpoints: ProductSlidersBreakPoint,
    // pagination: {
    //     el: '#most-signed-demands .swiper-pagination',
    //     type: 'progressbar',
    //     clickable: true
    // },
    navigation: {
        nextEl: '#related-products-section .swiper-button-next',
        prevEl: '#related-products-section .swiper-button-prev',
    },
    // navigation: {
    //     nextEl: '#most-signed-demands .hb-swiper-prev',
    //     prevEl: '#most-signed-demands .hb-swiper-next',
    // }
});


$(document).on('contextmenu', function (e) {
    // e.preventDefault();
});
$(document).ready(function () {
    setTimeout(function() {
        randomOpenComments();
    },1500);
    if (window.innerWidth > 960) {
        //var h = 0;
        //setTimeout(function () {
        //    h = $('#prd-detail').height();
        //}, 20)
        //setTimeout(function () {
        //    $('.pg-side-left > div').height(h);
        //    $('#img-container').css('max-height', h);
        //    $('#img-container').mCustomScrollbar({
        //        theme: "dark-thin",
        //        autoHideScrollbar: true
        //    });
        //}, 30);
        $("#main-img").elevateZoom({
            zoomWindowPosition: 10,
            zoomWindowOffetx: -120,
            zoomWindowFadeIn: 300,
            zoomWindowFadeOut: 300,
            lensFadeIn: 300,
            lensFadeOut: 300,
            borderSize: 3,
            borderColour: '#0183FF',
            easing: true,
            easingDuration: 1000,
            cursor: 'crosshair'
        });
    }
});






function showFilterMenu() {
    var filterForm = $('#products-filter-section');
    var btnFilter = $('#products-filter-section #products-filter-btn');
    var btnIcon = $('#products-filter-section #products-filter-btn .btn-icon');
    var btnText = $('#products-filter-section #products-filter-btn .btn-text');
    var filterBoxs = $('#products-filter-section .products-filter-box');
    var productsContent = $('#products-content .products-content-wrapper > div.products-content-grid');
    
    if (filterForm.hasClass('dm-open-menu')) {
        filterForm.removeClass('dm-open-menu');
        btnIcon.css('margin-right', '0 !important');
        btnText.css('display', 'none');
        
        filterBoxs.fadeOut(50);
        filterForm.addClass('dm-close-menu');
        filterForm.css('width', '70px');
        filterForm.css('max-width', 'unset !important');
        filterForm.css('max-width', 'unset !important');
        filterForm.css('transition', 'all 0.25s ease !important');


        if (productsContent.hasClass('uk-child-width-1-4@m')) {
            productsContent.removeClass('uk-child-width-1-4@m');
        }
        productsContent.addClass('uk-child-width-1-5@m');
    }
    else {
        filterForm.removeClass('dm-close-menu');
        // btnIcon.css('margin-right', '5px !important');
        btnText.css('display', 'inline-block');
        
        filterBoxs.fadeIn(350);
        filterForm.addClass('dm-open-menu');
        filterForm.css('width', '300px');
        filterForm.css('max-width', '300px');
        filterForm.css('max-width', '300px');
        filterForm.css('transition', 'all 0.25s ease !important');

        
        if (productsContent.hasClass('uk-child-width-1-5@m')) {
            productsContent.removeClass('uk-child-width-1-5@m');
        }
        productsContent.addClass('uk-child-width-1-4@m');
    }
}