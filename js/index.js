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

    // When the user scrolls down 100px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction()
    };
    
    const MAX_HEIGHT_btn = 100;
    function scrollFunction() {
        if (document.body.scrollTop > MAX_HEIGHT_btn || document.documentElement.scrollTop > MAX_HEIGHT_btn) {
            document.getElementById("btn-top").style.display = "block";
        }
        else {
            document.getElementById("btn-top").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }