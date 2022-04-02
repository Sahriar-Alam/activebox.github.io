;
(function ($) {
    "use strict";
    $(document).on('ready', function () {


        $('#one').hover(function () {
            $('#one').toggleClass('yellow');
            $('#one').toggleClass('middle');
        });
        $('#two').hover(function () {
            $('#two').toggleClass('yellow');
            $('#two').toggleClass('middle');
        });
        $('#three').hover(function () {
            $('#three').toggleClass('yellow');
            $('#three').toggleClass('middle');
        });
        $('#four').hover(function () {
            $('#four').toggleClass('yellow');
            $('#four').toggleClass('middle');
        });
        $('#five').hover(function () {
            $('#five').toggleClass('yellow');
            $('#five').toggleClass('middle');
        });




        /*-- Mobile-Menu-Active --*/

        $('.menu-triger').on('click', function () {
            $('.menu-triger').toggleClass('active');

        });


        $('.primary-menu').slicknav({
            label: '',
            duration: 500,
            prependTo: '',
            closedSymbol: '<i class="fa fa-angle-right"></i>',
            openedSymbol: '<i class="fa fa-angle-right"></i>',
            appendTo: '.mainmenu-area',
            menuButton: '.menu-triger',
            closeOnClick: 'true' // Close menu when a link is clicked.

        });

        /*-- WoW-Animation-JS --*/
        new WOW().init();

        $('.testimonial-slider').slick({
            dots: true,
            arrows: false,
            prevArrow: '<button class="slick-prev"  type="button"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button class="slick-next" type="button"><i class="fa fa-angle-right"></i></button>',
            infinite: true,
            centerMode: false,
            autoplay: true,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }

            ]
        });

        $(document).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('#container-header').addClass('change-color');
            } else {
                $('#container-header').removeClass('change-color');
            }
        });

        $(".scroll-top").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, "fast");
            return false;
        });



        let blinkTextMenuLinks = document.querySelectorAll(".blink-text-menu li a");
        blinkTextMenuLinks.forEach(link => {
            let letters = link.textContent.split("");
            link.textContent = "";
            letters.forEach((letter, i) => {
                i += 1;
                let span = document.createElement("span");
                let delay = i / 20;
                if (i % 2 === 0) {
                    delay -= 0.1;
                } else {
                    delay += 0.05;
                }
                let letterOut = document.createElement("span");
                letterOut.textContent = letter;
                letterOut.style.transitionDelay = `${delay}s`;
                letterOut.classList.add("out");
                span.append(letterOut);
                let letterIn = document.createElement("span");
                letterIn.textContent = letter;
                letterIn.style.transitionDelay = `${delay}s`;
                letterIn.classList.add("in");
                span.append(letterIn);
                link.append(span);
            });
        });


    });


})(jQuery);
