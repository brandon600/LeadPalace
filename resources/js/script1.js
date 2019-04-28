$(document).ready(function() {

    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeInUp'); 
    }, {
        offset: '50%'
    });


    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeIn'); 
    }, {
        offset: '50%'
    });


    $('.js--nav-icon').click(function() {
        var nav = $('.js--nav-bar');
        var iconDiv = $('.js--nav-icon');
        var icon = $('.js--nav-icon i');
        var header = $('.js--head-sec');
        var logo = $('.js--nav-logo');

        nav.slideToggle(175);


        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
            header.addClass('nav-mobile-height');
            logo.addClass('logo-remove');
            iconDiv.addClass('navi-btn-margin-remove');

        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
            header.removeClass('nav-mobile-height');
            logo.removeClass('logo-remove');
            iconDiv.removeClass('navi-btn-margin-remove');
        }


    });




});


