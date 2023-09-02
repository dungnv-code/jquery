$(document).ready(function () {
    function addE() {
        $('.text-success').addClass('BouIn')
    }
    function removeE() {
        $('.text-success').removeClass('BouIn')
    }

    $('.btn').click(function () {
        $('#textField').select();
        document.execCommand('copy');
        addE();
        setTimeout(() => {
            removeE()
        }, 2000)
    })
})