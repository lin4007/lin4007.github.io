$(document).ready(function () {
    
    /*
     * Home slider
     */
    
    $('.home-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    });
    
    /*
     * Product Carousal
     */
    
    $('.mg-product-carousal').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
    
    /*
     * Video PopUp
     */
    
    $('.mg-video-popup').magnificPopup({
        type: 'iframe',
        closeOnContentClick: true,
        gallery: {
            enabled: true,
            preload: [0, 1]
        }
    });
    
    /*
     * Partner slider
     */
    
    $('.mg-partner-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
});