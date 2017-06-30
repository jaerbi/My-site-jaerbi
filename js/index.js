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
            
            for (var i = 1; i <= 12; i++) {
                $('.content .exp_slowmo:nth-child(' + i + ')').delay(1000 + (i * 650)).animate({
                    opacity: 1,
                }, "slow");
            }
        }
    });
    
});