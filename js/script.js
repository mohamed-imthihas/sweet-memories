function fillPhotosInPhotoSection() {
    var grids = $('.photo-list li');
    for (var i = 0; i < grids.length; i++) {
        var cell = $(grids[i]);
        cell.css('background-image', 'url(' + cell.find('img').attr('src') + ')');
    }
}

function resizePhotoGridCell() {
    var cellWidth = $('.photo-list li.width-1').width();
    $('.photo-list').css('grid-auto-rows', cellWidth + 'px');
}

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
    fillPhotosInPhotoSection();
    resizePhotoGridCell();
    $(window).resize(function() {
        resizePhotoGridCell();
    })
    $('.video-holder .play-button').click(playVideo);
});