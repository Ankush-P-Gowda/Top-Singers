var audio1 = $('.first .col-4:nth-of-type(1) > .audio');
var player1 = $('.first .col-4:nth-of-type(1)');

var audio2 = $('.first .col-4:nth-of-type(2) > .audio');
var player2 = $('.first .col-4:nth-of-type(2)');

var audio3 = $('.first .col-4:nth-of-type(3) > .audio');
var player3 = $('.first .col-4:nth-of-type(3)');

var audio4 = $('.second .col-4:nth-of-type(1) > .audio');
var player4 = $('.second .col-4:nth-of-type(1)');

var audio5 = $('.second .col-4:nth-of-type(2) > .audio');
var player5 = $('.second .col-4:nth-of-type(2)');

var audio6 = $('.second .col-4:nth-of-type(3) > .audio');
var player6 = $('.second .col-4:nth-of-type(3)');

var audio7 = $('.third .col-4:nth-of-type(1) > .audio');
var player7 = $('.third .col-4:nth-of-type(1)');

var audio8 = $('.third .col-4:nth-of-type(2) > .audio');
var player8 = $('.third .col-4:nth-of-type(2)');


var audio10 = $('.third .col-4:nth-of-type(3) > .audio');
var player10 = $('.third .col-4:nth-of-type(3)');

var audio11 = $('.fourth .col-4:nth-of-type(1) > .audio');
var player11 = $('.fourth .col-4:nth-of-type(1)');

var audio12 = $('.fourth .col-4:nth-of-type(2) > .audio');
var player12 = $('.fourth .col-4:nth-of-type(2)');

var audio13 = $('.fourth .col-4:nth-of-type(3) > .audio');
var player13 = $('.fourth .col-4:nth-of-type(3)');



player1.on('click', function () {
    audio1.prop("currentTime", 0);
    audio1.trigger('play');
});

player2.on('click', function () {
    audio2.prop("currentTime", 0);
    audio2.trigger('play');
});

player3.on('click', function () {
    audio3.prop("currentTime", 0);
    audio3.trigger('play');
});

player4.on('click', function () {
    audio4.prop("currentTime", 0);
    audio4.trigger('play');
});

player5.on('click', function () {
    audio5.prop("currentTime", 0);
    audio5.trigger('play');
});

player6.on('click', function () {
    audio6.prop("currentTime", 0);
    audio6.trigger('play');
});

player7.on('click', function () {
    audio7.prop("currentTime", 0);
    audio7.trigger('play');
});

player8.on('click', function () {
    audio8.prop("currentTime", 0);
    audio8.trigger('play');
});


player10.on('click', function () {
    audio10.prop("currentTime", 0);
    audio10.trigger('play');
});

player11.on('click', function () {
    audio11.prop("currentTime", 0);
    audio11.trigger('play');
});

player12.on('click', function () {
    audio12.prop("currentTime", 0);
    audio12.trigger('play');
});

player13.on('click', function () {
    audio13.prop("currentTime", 0);
    audio13.trigger('play');
});




player1.on('mouseleave', function () {
    audio1.trigger('pause');
});

player2.on('mouseleave', function () {
    audio2.trigger('pause');
});

player3.on('mouseleave', function () {
    audio3.trigger('pause');
});

player4.on('mouseleave', function () {
    audio4.trigger('pause');
});

player5.on('mouseleave', function () {
    audio5.trigger('pause');
});

player6.on('mouseleave', function () {
    audio6.trigger('pause');
});

player7.on('mouseleave', function () {
    audio7.trigger('pause');
});

player8.on('mouseleave', function () {
    audio8.trigger('pause');
});


player10.on('mouseleave', function () {
    audio10.trigger('pause');
});

player11.on('mouseleave', function () {
    audio11.trigger('pause');
});

player12.on('mouseleave', function () {
    audio12.trigger('pause');
});

player13.on('mouseleave', function () {
    audio13.trigger('pause');
});

window.setInterval(function () {

    var randomColor = '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);

    $('body').css({
        'background-color': randomColor,
    });

}, 2000);