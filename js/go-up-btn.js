const MAX_HEIGHT = 80;
const TIME_SCROL = 1000;

$(window).scroll(function() {
    if ($(this).scrollTop() > MAX_HEIGHT) {
        $('.scrollUp').fadeIn();
    }
    else {
        $('.scrollUp').fadeOut();
    }
});

$('.scrollUp').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, TIME_SCROL);
    return false;
});