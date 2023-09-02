$(document).ready(function () {
    setInterval(() => {
        var hour = new Date().getHours();
        var minute = new Date().getMinutes();
        var second = new Date().getSeconds();
        if (hour > 12) {
            $('#period').text('AM')
            hour = hour - 12;
        } else {
            $('#period').text('PM')
        }
        hour = hour < 10 ? '0' + hour : hour;
        minute = minute < 10 ? '0' + minute : minute;
        second = second < 10 ? '0' + second : second;

        $('#hour').text(hour)
        $('#minute').text(minute)
        $('#second').text(second)


    }, 1000)
})