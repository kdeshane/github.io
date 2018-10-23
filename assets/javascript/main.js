// JavaScript source code

$(document).ready(function () {
    $('.employee').hover(function (e) {
        $(e.currentTarget).find('.employee-quote').fadeIn();
    }, function (e) {
        $(e.currentTarget).find('.employee-quote').fadeOut();
    });
});