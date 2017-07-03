$(document).ready(function() {

    const WINDOW_MAX_HEIGHT_Skills = 1690;
    const WINDOW_MAX_HEIGHT_Exp = 2100;
    const NUM_OF_EXP = 12;
    const DELAY_TIME = 200;
    const MAX_HEIGHT_btn = 100;
    const TIME_SCROL = 1000;
    const TIME_BURGER_SLIDE = 300;
    const WINDOW_MAX_WIDTH_menu = 900;

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

    //Check window position
    $(window).scroll(function() {
        if ($(this).scrollTop() > MAX_HEIGHT_btn) {
            $('.scrollUp').fadeIn();
        }
        else {
            $('.scrollUp').fadeOut();
        }
    });

    //Motion up animation on click
    $('.scrollUp').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, TIME_SCROL);
        return false;
    });

    //Burger mobile menu
    $('.burger_menu').click(function() {
        $('.header__menu .header__menu-list').slideToggle(TIME_BURGER_SLIDE);
    });
    
    $(window).resize(function() {
        if ( $(window).width() > WINDOW_MAX_WIDTH_menu) {
            $('.header__menu').removeClass('burger_triger');
        }
    });

});
