$(document).ready(function() {

    // for skills progress animations
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1690) {
            $('#skills__list').removeClass('skills__list');
        }
    });

    // Text animation slowly appeared
    $(window).scroll(function() {
        if ($(this).scrollTop() > 2200) {
            for (var i = 1; i <= 6; i++) {
                $('.exp_slowmo:nth-child(' + i + ')').delay(100 + (i * 545)).animate({
                    opacity: 1,
                }, "slow");
            }
        }
    });

});