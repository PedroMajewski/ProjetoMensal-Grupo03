$(document).ready(function(){
    if ($(window).width() < 900) { 
        $('#portfolio-imagens').slick({ 
            slidesToShow: 1, 
            slidesToScroll: 1, 
            autoplay: true, 
            autoplaySpeed: 2000,
            arrows: false
        });
    }
});