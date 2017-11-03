function initialize() {
    $("html").easeScroll();
    $(".button-collapse").sideNav();
    $('.carousel.carousel-slider').carousel({ fullWidth: true, duration: 100 });
    $('.slider').slider({ indicators: false });
}

function playVideo() {
    $('.video-holder .promo-video').get(0).play();
    $('.video-holder .promo-video').get(1).play();
    $('.video-holder .play-button').hide();
}


$(document).ready(function() {
    initialize();
    $(window).scroll(function() {
        $('.navbar-fixed').toggleClass('navbar-transparent', $(this).scrollTop() < 100);
    })
    window.scrollBy(0, 1);
    $('.video-holder .play-button').click(playVideo);
});