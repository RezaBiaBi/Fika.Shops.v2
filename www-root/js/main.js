var Berakpoints1 = {
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

const mainSlider = new Swiper('#main-slider', {
    // Optional parameters
    direction: 'horizontal',
    cssWidthAndHeight: true,
    slidesPerView: 1,
    visibilityFullFit: false,
    freeMode: false,
    autoResize: false,
    loop: false,
    lazy: true,
    autoplay: true,
    speed: 1000,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

const newestProducts = new Swiper('#newest-products.swiper-container', {
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
    breakpoints: Berakpoints1,
    // pagination: {
    //     el: '#most-signed-demands .swiper-pagination',
    //     type: 'progressbar',
    //     clickable: true
    // },
    navigation: {
        nextEl: '#newest-products-section .swiper-button-next',
        prevEl: '#newest-products-section .swiper-button-prev',
    },
    // navigation: {
    //     nextEl: '#most-signed-demands .hb-swiper-prev',
    //     prevEl: '#most-signed-demands .hb-swiper-next',
    // }
});



const gallerySlider = new Swiper('#gallery-slider', {
    direction: 'horizontal',
    autoplay: true,
    cssWidthAndHeight: true,
    visibilityFullFit: false,
    spaceBetween: 10,
    freeMode: false,
    autoResize: false,
    loop: false,
    lazy: true,
    speed: 500,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});
//
const technologiesSlider = new Swiper('#video-gallery-slider', {
    direction: 'horizontal',
    autoplay: true,
    cssWidthAndHeight: true,
    visibilityFullFit: false,
    spaceBetween: 32.5,
    freeMode: false,
    autoResize: false,
    loop: false,
    lazy: true,
    speed: 1000,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});
//
const WebsitesSlider = new Swiper('#website-slider', {
    // Optional parameters
    direction: 'horizontal',
    cssWidthAndHeight: true,
    autoplay: true,
    spaceBetween: 20,
    slidesPerView: 5,
    visibilityFullFit: false,
    freeMode: false,
    autoResize: false,
    loop: false,
    lazy: true,
    speed: 900,
    breakpoints: {
        1200: {
            slidesPerGroup: 5,
            slidesPerView: 3
        },
        1100: {
            slidesPerGroup: 2.5,
            slidesPerView: 2.5
        },
        960: {
            slidesPerGroup: 2,
            slidesPerView: 2
        },
        640: {
            slidesPerGroup: 1,
            slidesPerView: 1
        },
        425: {
            slidesPerGroup: 1,
            slidesPerView: 1
        },
        300: {
            slidesPerView: 2
        }
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});
//
const RelatedPosts = new Swiper('#related-posts', {
    // Optional parameters
    direction: 'horizontal',
    cssWidthAndHeight: true,
    autoplay: true,
    spaceBetween: 20,
    visibilityFullFit: false,
    freeMode: false,
    autoResize: false,
    loop: false,
    lazy: true,
    speed: 900,
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        680: {
            slidesPerView: 2,
        },
        300 : {
            slidesPerView: 1,
        }
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});
//
const BlogCategories = new Swiper('#blog-categories', {
    // Optional parameters
    direction: 'horizontal',
    cssWidthAndHeight: true,
    autoplay: true,
    spaceBetween: 20,
    visibilityFullFit: false,
    freeMode: false,
    autoResize: false,
    loop: false,
    lazy: true,
    speed: 1000,
    breakpoints: {
        1200: {
            slidesPerView: 8
        },
        980: {
            slidesPerView: 6
        },
        680: {
            slidesPerView: 4
        },
        450: {
            slidesPerView: 3
        },
        300: {
            slidesPerView: 2
        }
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});
//
const BlogGalleryThumbnailsSlider = new Swiper('#blog-gallery-thumbnails-slider', {
    // Optional parameters
    direction: 'horizontal',
    cssWidthAndHeight: true,
    autoplay: true,
    spaceBetween: 10,
    visibilityFullFit: false,
    autoResize: false,
    loop: false,
    lazy: true,
    speed: 1000,
    freeMode: true,
    breakpoints: {
        1200: {
            slidesPerView: 6,
        },
        960: {
            slidesPerView: 5,
        },
        680: {
            slidesPerView: 4,
        },
        300: {
            slidesPerView: 3,
        }
    },
    watchSlidesProgress: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});
const BlogGallerySlider = new Swiper("#blog-gallery-slider", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: BlogGalleryThumbnailsSlider,
    },
});
//
const ProfileLastNews = new Swiper('#profile-last-news', {
    // Optional parameters
    direction: 'horizontal',
    cssWidthAndHeight: true,
    slidesPerView: 1,
    visibilityFullFit: false,
    freeMode: false,
    autoResize: false,
    loop: false,
    lazy: true,
    autoplay: true,
    speed: 1000,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});
//
const OtherAboutKarajCategory = new Swiper('#other-about-karaj-category', {
    // Optional parameters
    direction: 'horizontal',
    cssWidthAndHeight: true,
    slidesPerView: 3,
    spaceBetween: 30,
    visibilityFullFit: false,
    freeMode: false,
    autoResize: false,
    loop: false,
    lazy: true,
    autoplay: true,
    speed: 1000,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});
//
const CouncilHistoryGallery = new Swiper('#council-history-gallery', {
    // Optional parameters
    direction: 'horizontal',
    cssWidthAndHeight: true,
    slidesPerView: 3,
    visibilityFullFit: false,
    freeMode: false,
    autoResize: false,
    loop: false,
    lazy: true,
    autoplay: true,
    speed: 1000,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

//
// Start My Voice Buttons Functions
function myplay(audio,btnPlay,totalTime,currentTime,podcastRange) {
    var audio = document.getElementById(audio);
    var Play = document.getElementById(btnPlay);
    // let btn_play = document.getElementById(btnPlay);
    audio.ontimeupdate = function () {
        var current = Math.floor(audio.currentTime);
        document.getElementById(podcastRange).setAttribute("value", current);
        var duration = audio.duration;
        if (duration > 60) {
            durationMinute = Math.floor(duration / 60);
            durationSecond = Math.floor((duration / 60 - durationMinute) * 60);
            document.getElementById(totalTime).innerHTML = durationMinute + " : " + durationSecond;
        }
        if (current > 60) {
            var current = Math.floor(audio.currentTime);
            currentminute = Math.floor(current / 60);
            currentsecond = Math.floor((current / 60 - currentminute) * 60);
            if (currentsecond < 10) {
                document.getElementById(currentTime).innerHTML =
                     currentminute  + " : " + "0" +currentsecond;
            } else if (currentsecond > 10) {
                document.getElementById(currentTime).innerHTML =
                    currentminute + " : " + currentsecond;
            }
        } else {
            if (current < 10) {
                var currentsec = "0" + Math.floor(audio.currentTime) + " : 00";
                document.getElementById(currentTime).innerHTML = currentsec;
            } else {
                var currentsec = Math.floor(audio.currentTime) + " : 00";
                document.getElementById(currentTime).innerHTML = currentsec;
            }
        }
    };
    if (audio.duration > 0 && !audio.paused) {
        Play.children[0].classList.remove("ph-pause");
        Play.children[0].classList.add("ph-play");
        audio.pause();
        // equalizer.classList.add("disable-animation");
    } else {
        Play.children[0].classList.remove("ph-play");
        Play.children[0].classList.add("ph-pause");
        audio.play();
        // equalizer.classList.remove("disable-animation");
    }
}

function selectedTime(podcastRange,podcast) {
    var selectedDuration = document.getElementById(podcastRange).value;
    var audio = document.getElementById(podcast);
    audio.currentTime = selectedDuration;
}

function ForwardPodcast(podcast) {
    var audio = document.getElementById(podcast);
    var currentTime = audio.currentTime;
    currentTime = currentTime + 5;
    if (currentTime < audio.duration) {
        audio.currentTime = currentTime;
    }
}

function BackwardPodcast(podcast) {
    var audio = document.getElementById(podcast);
    var currentTime = audio.currentTime;
    currentTime = currentTime - 5;
    if (currentTime > 0) {
        audio.currentTime = currentTime;
    }
}

// End My Voice Buttons Functions
let darkMode = window.matchMedia('(prefers.color.scheme:dark)');
if (darkMode) {
    
}


// Show More Content Of Service Category
function showMore() {
    // debugger;
    var box = document.getElementById('category-info');
    var btn = document.getElementById("more-category-info-btn");
    if (box.classList[4] === "dm-close-category-info") {
        box.classList.remove("dm-close-category-info");
        box.classList.add("dm-open-category-info");
        btn.textContent = "مشاهده کمتر";
    } else {
        box.classList.remove("dm-open-category-info");
        box.classList.add("dm-close-category-info");
        btn.textContent = "مشاهده بیشتر";
    }
}