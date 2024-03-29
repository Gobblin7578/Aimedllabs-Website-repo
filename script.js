$(document).ready(function() {
    "use strict";
    $(".main-nav").headroom(),
    $("a[href='#top']").click(function() {
        return $("html, body").animate({
            scrollTop: 0
        }, "slow"),
        !1
    }),
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    }),
    $("a.scroll-to").on("click", function(e) {
        var t = $(this);
        $("html, body").stop().animate({
            scrollTop: $(t.attr("href")).offset().top - 50
        }, 1e3),
        e.preventDefault()
    }),
    window.innerWidth > 767 && ($(".service .service-item").matchHeight({
        byRow: 0
    }),
    $(".blog-post-item").matchHeight({
        byRow: 0
    })),
    $(".screenshots-slider").slick({
        infinite: !0,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: !0,
        arrows: !1,
        centerMode: !0,
        centerPadding: "0px",
        autoplay: !0,
        speed: 500,
        autoplaySpeed: 700,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }),
    $(".hero-punch-slider").slick({
        infinite: !0,
        arrows: !1,
        autoplay: !0,
        speed: 500,
        adaptiveHeight: !0,
        fade: !0,
        cssEase: "linear",
        pauseOnHover: !1,
        autoplaySpeed: 1500
    }),
    $(".case-study-feature-slider").slick({
        infinite: !0,
        arrows: !1,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: !0,
        speed: 300,
        adaptiveHeight: !0,
        variableWidth: !0,
        dots: !0,
        cssEase: "linear",
        centerMode: !0,
        pauseOnHover: !0,
        autoplaySpeed: 1500
    }),
    $(".slick-3-horizontal-dotted").slick({
        autoplay: !0,
        autoplaySpeed: 0,
        cssEase: "linear",
        infinite: !0,
        autoplay: !0,
        speed: 8e3,
        speed: 5e3,
        variableWidth: !0,
        centerMode: !0,
        autoplaySpeed: 0
    }),
    $(".marquee").slick({
        autoplay: !0,
        autoplaySpeed: 0,
        cssEase: "linear",
        infinite: !0,
        autoplay: !0,
        speed: 8e3,
        speed: 5e3,
        variableWidth: !0,
        centerMode: !0,
        autoplaySpeed: 0
    }),
    $(".testimonial-slider").slick({
        slidesToShow: 1,
        centerMode: !0,
        slidesToScroll: 1,
        infinite: !0,
        arrows: !0,
        autoplay: !1,
        speed: 500,
        prevArrow: '<div class="fa fa-solid fa-circle-arrow-left"></div>',
        nextArrow: '<div class="fa fa-solid fa-circle-arrow-right"></div>',
        responsive: [{
            breakpoint: 575,
            settings: {
                prevArrow: '<div class="arrow-mobile-left fa-solid fa-circle-arrow-left"></div>',
                nextArrow: '<div class="arrow-mobile-right fa fa-solid fa-circle-arrow-right"></div>',
                arrows: !0,
                variableWidth: !0
            }
        }]
    }),
    AOS.init({
        disable: "mobile"
    }),
    $(".footer-tooltip").tooltip()
}),
$(window).on("scroll", function() {
    $(window).scrollTop() ? $("nav").addClass("nav-bg") : $("nav").removeClass("nav-bg")
});
function sendDataToTeams(e) {
    const t = "https://aimedlabs.webhook.office.com/webhookb2/dd2f12bc-adf5-4b22-99f4-c8d6771a7f51@84920b77-c202-406a-91a5-da49b9a79faa/IncomingWebhook/3a6653a67b2143709916d834cc83013d/0ad3a4c0-7915-4cf1-9752-1d6c84ac7a69";
    return fetch(t, {
        mode: "no-cors",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: e
        })
    })
}
