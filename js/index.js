$(document).ready(function() {

    const WINDOW_MAX_HEIGHT_Skills = 1690;
    const WINDOW_MAX_HEIGHT_Exp = 2200;
    const NUM_OF_EXP = 12;
    const DELAY_TIME = 545;
    
    // for skills progress animations
    $(window).scroll(function() {
        if ($(this).scrollTop() > WINDOW_MAX_HEIGHT_Skills) {
            $('#skills__list').removeClass('skills__list');
        }
    });

    // Text animation slowly to show up
    $(window).scroll(function() {
        if ($(this).scrollTop() > WINDOW_MAX_HEIGHT_Exp) {
            for (var i = 1; i <= NUM_OF_EXP; i++) {
                $('.exp_slowmo:nth-child(' + i + ')').delay(i * DELAY_TIME).animate({
                    opacity: 1,
                }, "slow");
            }
        }
    });

});