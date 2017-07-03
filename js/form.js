$(function() {
    $('#btn-send').click(sendForm);
});

function sendForm(e) {
    e.preventDefault();
    $.ajax({
            url: "https://formspree.io/jaerbi42@gmail.com",
            method: "POST",
            data: {
                name: $('#user-name').val(),
                email: $('#user-email').val(),
                wish: $('#user-wish').val()
            },
            dataType: "json"
        })
        .done(function() {
            document.getElementById("myForm").reset();
            $('.my-form').html('Дякую! Ваше повідомлення відправлено');
        });
}
