$(document).ready(function () {
    let directionPage = $("html").attr("dir");
    let owlDirection = false;
    if (directionPage == "rtl") {
        owlDirection = true;

    } else {
        owlDirection = false;

    }

    $('#wallet .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        rtl: owlDirection,

        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 3
            },
            500: {
                items: 3
            },
            700: {
                items: 4
            }
        }
    })
    $("#wallet .owl-prev").empty();//
    $("#wallet .owl-prev").append("<i class='fas fa-angle-left' id='prevWallet'></i>")
    $("#wallet .owl-next").empty();
    $("#wallet .owl-next").append("<i class='fas fa-angle-right' id='nextWallet'></i>")



    $('.Vertical-Slider').slick({
        autoplay: true,
        autoplaySpeed: 100000000,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 2,
        pauseOnHover: false,
        arrows: false,
        cssEase: 'linear',
        vertical: true,
        verticalSwiping: true,
    });
})