$(document).ready(function(){
    
    $('#slides').superslides({
        animation: 'fade',
        play: 6000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["My Portfolio"],
        typeSpeed: 100,
        loop: true,
        startDelay: 1000,
    });

    $('.owl-carousel').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:60,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        responsive:{
            600:{
                items:4
            }
        }
    });

    $("[data-fancybox]").fancybox();

});