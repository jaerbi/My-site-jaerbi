// for skills progress animations
$(window).scroll(function() {
    if ($(this).scrollTop() > 1690) {
        $('#skills__list').removeClass('skills__list');
    }
});
