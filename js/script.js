const swiperOfNumbers = new Swiper('.swiperOfNumbers', {
    slidesPerView: 6,
    spaceBetween: 40,
    loop: 'true',
    slideToClickedSlide: 'true',
    grabCursor: true,
    breakpoints: {
        1480: {
            slidesPerView: 6,
            spaceBetween: 40,
        },

        1024: {
            slidesPerView: 5,
            spaceBetween: 40,
        },

        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },

        480: {
            slidesPerView: 3,
            spaceBetween: 30,
        },

        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        0: {
            slidesPerView: 2,
        },
    }
    // direction: 'vertical',
    // loop: true,

    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: 'true'
    // },

    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});

const swiperOfClients = new Swiper('.swiperOfClients', {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: 'true',
    grabCursor: true,
    breakpoints: {
        1400: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 3,
        },

        768: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
});

// const gridSwiper__projects = new Swiper('.gridSwiper__projects', {
//     slidesPerView: 4,
//     slidesPerGroup: 4,
//     // loopFillGroupWithBlank: 'true',
//     loop: 'true',
//     grid: {
//         rows: 2,
//         fill: 'row',
//     },
//     breakpoints: {
//         1024: {
//             grid: {
//                 rows: 2,
//                 fill: 'row',
//             },
//             slidesPerView: 4,
//             slidesPerGroup: 4,
//         },

//         768: {
//             grid: {
//                 rows: 1,
//             },
//             slidesPerView: 2,
//             slidesPerGroup: 1,
//         },

//         480: {
//             grid: {
//                 rows: 1,
//             },
//             slidesPerView: 2,
//             slidesPerGroup: 1,
//         },
//         0: {
//             grid: {
//                 rows: 1,
//             },
//             slidesPerView: 1,
//         },
//     },
// });



// if (window.matchMedia('(max-width: 1400px)').matches) {
//     heightToWidht();
// }
// if (window.matchMedia('(max-width: 1024px)').matches) {
//     heightToWidht();
// }
// if (window.matchMedia('(max-width: 768px)').matches) {
//     heightToWidht();
// }
// if (window.matchMedia('(max-width: 480px)').matches) {
//     heightToWidht();
// }
// if (window.matchMedia('(max-width: 320px)').matches) {
//     heightToWidht();
// }

setInterval(heightToWidht, 300);

function heightToWidht() {
    const projWrapperImgClasses = document.querySelectorAll(".image-wrapper");
    
    // console.log(projImgItems);
    projWrapperImgClasses.forEach(element => {
        let projWrapperImgWidht = element.clientWidth;
        element.setAttribute('style', `height: ${projWrapperImgWidht}px`);
        
    });

    const projImgItems = document.querySelectorAll(".image-wrapper img");
        projImgItems.forEach(element => {
            let projImgHeight = element.clientHeight;
            element.setAttribute('style', `width: ${projImgHeight}px`);
        });

    // const projImg = document.querySelectorAll(".image-wrapper img");
    // projImg.forEach(element => {
    //     let projImgWidth = element.clientWidth;
    //     element.setAttribute('style', `widht: ${projImgWidth}px`);
    // });
}

// const projWrapperImgClasses = document.querySelectorAll(".image-wrapper");
// // console.log(projWrapperImgClasses);

// projWrapperImgClasses.forEach(element => {
//     let projWrapperImgWidht = element.clientWidth;
//     // console.log(projWrapperImgWidht);
//     element.setAttribute('style', `height: ${projWrapperImgWidht}px`);
//     // element.style.height = `${projWrapperImgWidht}px`;
//     // element.clientHeight = projWrapperImgWidht;
// });

// wpapperImgProj.style.height = '400px';

// document.getElementsByClassName("image-wrapper").style.height = '300px';