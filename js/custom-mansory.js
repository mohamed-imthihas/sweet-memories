function fillPhotosInPhotoSection() {
    var grids = $('.photo-list li');
    for (var i = 0; i < grids.length; i++) {
        var cell = $(grids[i]);
        cell.css('background-image', 'url(' + cell.find('img').attr('src') + ')');
    }
}

function resizePhotoGridCell() {
    // var ischrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());
    // var issafari = /safari/.test(navigator.userAgent.toLowerCase());
    // if (ischrome || issafari) {
    //     var cellWidth = $('.photo-list li.width-1').width();
    //     $('.photo-list').css('grid-auto-rows', cellWidth + 'px');
    // } else {
    var outerWidth = $('.photo-list').width();
    var cellWidth = 0;
    if (outerWidth > 992) {
        cellWidth = outerWidth / 7;
    } else {
        cellWidth = outerWidth / 4;
    }

    $('.photo-list li.width-1').each(function() {
        $(this).css('width', cellWidth + 'px');
    });
    $('.photo-list li.width-2').each(function() {
        $(this).css('width', 2 * cellWidth + 'px');
    });
    $('.photo-list li.height-1').each(function() {
        $(this).css('height', cellWidth + 'px');
    });
    $('.photo-list li.height-2').each(function() {
        $(this).css('height', 2 * cellWidth + 'px');
    });
    $('.photo-list').masonry({
        itemSelector: '.photo-list li',
        columnWidth: cellWidth
    });
    //}
}
$(document).ready(function() {
    fillPhotosInPhotoSection();
    resizePhotoGridCell();
    $(window).resize(function() {
        resizePhotoGridCell();
    })
});