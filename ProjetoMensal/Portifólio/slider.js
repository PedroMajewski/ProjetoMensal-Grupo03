$(document).ready(function(){
    if ($(window).width() < 1100) { 
        $('#div-portifolio').slick({ 
            slidesToShow: 1, 
            slidesToScroll: 1, 
            autoplay: true, 
            autoplaySpeed: 2000,
            arrows: false
        });
    }
});