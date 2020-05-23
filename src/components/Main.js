import React, {Component} from "react";
import $ from 'jquery'
var currentIndex = 0

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        $(window).scroll(function () {
            $('.parallax-container').each(function (i) {
                var scrollTop = $(window).scrollTop() + 0;
                var elementOffset = $(this).offset().top;
                if (scrollTop > elementOffset) {
                    $(this).css("opacity", 1 - (scrollTop - elementOffset) / 786);
                }
            });
        });
        if ($(window).width() > 767) {
            $('.page-section').addClass('parallax-container');
            $('.parallax-container-parent').addClass('parallax-container')
        } else {
            $('.page-section').removeClass('parallax-container');
             $('.parallax-container-parent').removeClass('parallax-container')
        }

        $(window).on('resize', function () {
            if ($(window).width() < 767) {
                $('.parallax-container-parent').removeClass('parallax-container')
            } else {
                $('.parallax-container-parent').addClass('parallax-container')
            }
        });


        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > 900) {
                $('.header-sticky').addClass('fadeInDown');
                $('.header-sticky').removeClass('fadeOutUp');
                $('.header-sticky').addClass('animated');
            } else {
                $('.header-sticky').addClass('fadeOutUp');
                $('.header-sticky').removeClass('fadeInUp');
                $('.header-sticky').removeClass('animated');
            }
        });

        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > 10) {
                $('.content-description').addClass('fadeInDown');
                $('.content-description').removeClass('fadeOutUp');
                $('.content-description').addClass('animated');
            } else {
                $('.content-description').addClass('fadeOutUp');
                $('.content-description').removeClass('fadeInUp');
                //$('.content-description').removeClass('animated');
            }
        });


        $("#menuToggle").click(function () {
            $("#menu1").fadeIn();
        });
        $(".close").click(function () {
            $("#menu1").fadeOut();
        });

        initSlick();


        $(".full_screen_modal_close").click(function () {
            $(".full_screen_modal_close").hide();
            $(".wrapper").addClass('test');
            $(".wrapper").removeClass('full_screen');
            $("#carousel-page").slick('unslick');
            initSlick();
        });

        function initSlick() {
            if ($("#carousel-page").length) {
                $("#carousel-page").slick({
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            }

            $('#carousel-page').on('afterChange', function(slick, slide){
                console.log("changing index");
                // left
            });

            $(".slick-slide").click(function (event) {
                currentIndex = parseInt($(this).attr('data-slick-index'));
                $("#carousel-page").slick('unslick');
                $(".wrapper").addClass('full_screen');
                $(".full_screen_modal_close").show();
                $("#carousel-page").not('.slick-initialized').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,
                    initialSlide: currentIndex,
                    speed: 300,
                    cssEase: 'linear',
                });
            });
        }
    }

    render() {
        return (
            < div > < /div>
    )
    }

}

export default Main