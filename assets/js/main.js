(function ($) {
    "use strict";
    var windowOn = $(window);


    /*-----------------------------------------------------------------------------------

        Template Name: Medilix - Healthcare & Medical HTML5 Template
        Author: RRDevs
        Support: https://support.rrdevs.net
        Description: Medilix - Healthcare & Medical HTML5 Template
        Version: 1.0
        Developer: Sabbir Ahmmed (https://github.com/ahmmedsabbirbd)

    -----------------------------------------------------------------------------------
    
    /*======================================
    Data Css js
    ========================================*/
    $("[data-background]").each(function() {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
        );
    });

    $("[data-width]").each(function() {
        $(this).css("width", $(this).attr("data-width"));
    });

    class GSAPAnimation {
        static Init() {
            /*title-animation*/
            $('.title-animation').length && this.sectionTitleAnimation('.title-animation'); 
        }

        
        static sectionTitleAnimation(activeClass) {
            let sectionTitleLines = gsap.utils.toArray(activeClass);

            sectionTitleLines.forEach(sectionTextLine => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionTextLine,
                        start: 'top 90%',
                        end: 'bottom 60%',
                        scrub: false,
                        markers: false,
                        toggleActions: 'play none none none'
                    }
                });

                const itemSplitted = new SplitText(sectionTextLine, { type: "chars, words" });
                gsap.set(sectionTextLine, { perspective: 100 });
                itemSplitted.split({ type: "words" })
                tl.from(itemSplitted.words, {
                    opacity: 0, 
                    autoAlpha: 0, 
                    transformOrigin: "top center -50",
                    y: "10px",
                    duration: 0.9,
                    stagger: 0.1,
                    ease: "power2.out",
                });
            });
        }
    }
    class RRDEVS {
        static LoadedAfter() {
            $('#preloader').delay(1).fadeOut(500);
            
            /*GSAPAnimation*/
            GSAPAnimation.Init();
        }
    }


    /*======================================
      Preloader activation
      ========================================*/
    $(window).on('load', RRDEVS.LoadedAfter);
    $(".preloader-close").on("click",  RRDEVS.LoadedAfter)

    window.addEventListener('resize', function() {
        gsap.globalTimeline.clear();
    });

    /*======================================
      Mobile Menu Js
      ========================================*/
    $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
        meanExpand: ['<i class="fa-regular fa-angle-right"></i>'],
    });

    /*======================================
      Sidebar Toggle
      ========================================*/
    $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
        $(".offcanvas__area").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");
    });
    // Scroll to bottom then close navbar
    $(window).scroll(function(){
        if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
            $(".offcanvas__area").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        }
    });
    $(".sidebar__toggle").on("click", function () {
        $(".offcanvas__area").addClass("info-open");
        $(".offcanvas__overlay").addClass("overlay-open");
    });

    /*======================================
      Body overlay Js
      ========================================*/
    $(".body-overlay").on("click", function () {
        $(".offcanvas__area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
    });

    /*======================================
      Sticky Header Js
      ========================================*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#header-sticky").addClass("rr-sticky");
        } else {
            $("#header-sticky").removeClass("rr-sticky");
        }
    });

    /*======================================
      MagnificPopup image view
      ========================================*/
    $(".popup-image").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });
    /*======================================
    Button scroll up js
    ========================================*/
    var progressPath = document.querySelector(".backtotop-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
    "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";
    var updateProgress = function() {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on("scroll", function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery(".backtotop-wrap").addClass("active-backtotop");
        } else {
            jQuery(".backtotop-wrap").removeClass("active-backtotop");
        }
    });
    jQuery(".backtotop-wrap").on("click", function(event) {
        event.preventDefault();
        jQuery("html, body").animate({
            scrollTop: 0
        }, duration);
        return false;
    });

    /*======================================
	One Page Scroll Js
	========================================*/
    /*** Scroll Nav */
    var link = $('.onepagenav #mobile-menu ul li a, .onepagenav .mean-nav ul li a');

    link.on('click', function(e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top - 76
        }, 600);
        $(this).parent().addClass('active');
        e.preventDefault();
    });

    $(window).on('scroll', function(){
        scrNav();
    });

    function scrNav() {
        var sTop = $(window).scrollTop();
        $('section').each(function() {
            var id = $(this).attr('id'),
                offset = $(this).offset().top-1,
                height = $(this).height();
            if(sTop >= offset && sTop < offset + height) {
                link.parent().removeClass('active');
                $('.main-menu').find('[href="#' + id + '"]').parent().addClass('active');
            }
        });
    }
    scrNav();

    /*======================================
	Smoth animatio Js
	========================================*/
    $(document).on('click', '.smoth-animation', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 300);
    });

    ////////////////////////////////////////////////////
    // 21. Counter Js
    if(document.querySelector('.knob')) {
        new PureCounter();
    }

    /*feedback__active***/
    let feedback__active = new Swiper(".feedback__active", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            prevEl: ".feedback__item__button-prev",
            nextEl: ".feedback__item__button-next",
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });


    let swiper1 = new Swiper(".banner__slider-1", {
        direction: "vertical",
            slidesPerView: "auto",
            spaceBetween: 20,
            speed: 7e3,
            loop: !0,
            autoplay: {
                delay: 0.5,
                disableOnInteraction: !1
            }
        }),
        swiper2 = new Swiper(".banner__slider-2", {
            direction: "vertical",
            spaceBetween: 20,
            speed: 8e3,
            loop: !0,
            slidesPerView: "auto",
            autoplay: {
                delay: 0.5,
                disableOnInteraction: !1
            }
        }),
        swiper3 = new Swiper(".banner__slider-3", {
            direction: "vertical",
            spaceBetween: 20,
            speed: 13e3,
            loop: !0,
            slidesPerView: "auto",
            autoplay: {
                delay: 0.5,
                disableOnInteraction: !1
            }
        });

    $(".multipage-page").show();
    $(".onepage-page").hide();

    function togglePages(showClass, hideClass, activeBtn, inactiveBtn) {
        $(showClass).show();
        $(hideClass).hide();
        $(activeBtn).addClass("active");
        $(inactiveBtn).removeClass("active");
    }

    // Handle click on MULTI PAGE button
    $("#multipage-btn").click(function () {
        togglePages(".multipage-page", ".onepage-page", "#multipage-btn", "#onepage-btn");
    });
    $("#onepage-btn").click(function () {
        togglePages(".onepage-page", ".multipage-page", "#onepage-btn", "#multipage-btn");
    });


    
})(jQuery);