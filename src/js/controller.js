window.addEventListener("load", function () {
    $('.bxslider').removeClass('invisible')
    $('.bxslider').bxSlider({
        auto: true,
        slideMargin: '0px',
        easing: 'ease-out',
        speed: '750',
        pause: '10000',
        captions: true,
        preloadImages: 'visible',
        controls: false
    })
});
