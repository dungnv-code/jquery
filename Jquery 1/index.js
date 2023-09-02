$(document).ready(function () {
    $('.btn').click(() => {
        var typePsw = $('#psw').attr('type');
        console.log(typePsw);
        if (typePsw == 'password') {
            $('.btn').text('show');
            $('#psw').attr('type', 'text');
            ispaw = false
        } else if (typePsw == 'text') {
            $('.btn').text('hide');
            $('#psw').attr('type', 'password');
        }
    })
})