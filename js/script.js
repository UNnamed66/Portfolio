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
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

});