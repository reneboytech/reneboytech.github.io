$(function(){

    $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $(window).on("load", function(){
        if($('.wow-hidden').length > 0){
            new WOW().init();
        }

        if($('.video').length > 0){
            $('.video > .items .caption > .subtitle1').addClass('wow fadeInDown');

            $('.video > .items .caption > .title').addClass('wow fadeInUp');
            $('.video > .items .caption > .title').attr('data-wow-delay', '.5s');

            $('.video > .items .socials .share').addClass('wow fadeInLeft');
            $('.video > .items .socials .share').attr('data-wow-delay', '1s');

            $('.video > .items .scroll-down > .btn-scroll .text').addClass('wow fadeInLeft');
            $('.video > .items .scroll-down > .btn-scroll .text').attr('data-wow-delay', '1.5s');

            $('.video > .items .scroll-down > .btn-scroll .icon').addClass('wow fadeInRight');
            $('.video > .items .scroll-down > .btn-scroll .icon').attr('data-wow-delay', '2s');
            new WOW().init();
        }
    });

    //shrink header
    $(document).on("scroll", function(){

        if($(document).scrollTop() > 150){

            $(".wsmainfull").addClass("nav-stick-top");
            $(".wsmainfull .top-bar").hide();

        }else{

            $(".wsmainfull").removeClass("nav-stick-top");
            $(".wsmainfull .top-bar").show();
        }

    });

    $('.btn-scroll').on('click', function(e){
        e.preventDefault();
        var position = $('.scrolly').offset().top - $('.wsmainfull').height();

        $('html,body').animate({
            scrollTop: position
        }, 700);
    });

    if($('.slider').length > 0){
        $('.slider').bxSlider({
            auto: true,
            preloadImages: 'all',
            controls: false,
            pager: false,
            pause: 8000,
            onSliderLoad: function(){
                $('.slider > .items .caption').eq(1).addClass('active-slide');
                $('.caption.active-slide > .subtitle1').addClass('wow fadeInDown');

                $('.caption.active-slide > .title').addClass('wow fadeInUp');
                $('.caption.active-slide > .title').attr('data-wow-delay', '.5s');

                $('.slider > .items .socials').eq(1).addClass('active-slide');
                $('.socials.active-slide > .share').addClass('wow fadeInLeft');
                $('.socials.active-slide > .share').attr('data-wow-delay', '1s');

                $('.slider > .items .scroll-down').eq(1).addClass('active-slide');
                $('.scroll-down.active-slide > .btn-scroll .text').addClass('wow fadeInLeft');
                $('.scroll-down.active-slide > .btn-scroll .text').attr('data-wow-delay', '1.5s');

                $('.scroll-down.active-slide > .btn-scroll .icon').addClass('wow fadeInRight');
                $('.scroll-down.active-slide > .btn-scroll .icon').attr('data-wow-delay', '2s');
                new WOW().init();
            },
            onSlideAfter: function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject){
                $('.active-slide').removeClass('active-slide');
                $('.slider > .items .caption').eq(currentSlideHtmlObject + 1).addClass('active-slide');
                $('.caption.active-slide > .subtitle1').addClass('wow fadeInDown');

                $('.caption.active-slide > .title').addClass('wow fadeInUp');
                $('.caption.active-slide > .title').attr('data-wow-delay', '.5s');

                $('.slider > .items .socials').eq(currentSlideHtmlObject + 1).addClass('active-slide');
                $('.socials.active-slide > .share').addClass('wow fadeInLeft');
                $('.socials.active-slide > .share').attr('data-wow-delay', '1s');

                $('.slider > .items .scroll-down').eq(currentSlideHtmlObject + 1).addClass('active-slide');
                $('.scroll-down.active-slide > .btn-scroll .text').addClass('wow fadeInLeft');
                $('.scroll-down.active-slide > .btn-scroll .text').attr('data-wow-delay', '1.5s');

                $('.scroll-down.active-slide > .btn-scroll .icon').addClass('wow fadeInRight');
                $('.scroll-down.active-slide > .btn-scroll .icon').attr('data-wow-delay', '2s');
                new WOW().init();
            },
            onSlideBefore: function(){
                $('.caption.active-slide > .subtitle1').removeClass('wow fadeInDown');
                $('.caption.active-slide > .title').removeClass('wow fadeInUp');
                $('.caption.active-slide > .share').removeClass('wow fadeInLeft');
                $('.caption.active-slide > .subtitle1').removeAttr('style');
                $('.caption.active-slide > .title').removeAttr('style');

                $('.socials.active-slide > .share').removeAttr('style');

                $('.scroll-down.active-slide > .btn-scroll .text').removeClass('wow fadeInLeft');
                $('.scroll-down.active-slide > .btn-scroll .icon').removeClass('wow fadeInRight');
                $('.scroll-down.active-slide > .btn-scroll .text').removeAttr('style');
                $('.scroll-down.active-slide > .btn-scroll .icon').removeAttr('style');
            }
        });
    }

    $('.advisory').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 9000,
        autoplayHoverPause: true,
        responsiveClass: true,
        dots: false,
        navText: [
            '<i class="fas fa-fw fa-angle-left"></i>',
            '<i class="fas fa-fw fa-angle-right"></i>'
        ],
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: false,
            },
            992: {
                nav: false,
            },
            1200: {
                nav: true,
            },
            1300: {
                nav: true,
            }
        }
    });

    if($('.promos-owl').length > 0){
        $('.promos-owl').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 9000,
            autoplayHoverPause: true,
            responsiveClass: true,
            dots: false,
            nav: true,
            navText: [
                '<i class="ti ti-arrow-left"></i>',
                '<i class="ti ti-arrow-right"></i>'
            ]
        });
    }

    if($('.products-owl').length > 0){
        $('.products-owl').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 9000,
            autoplayHoverPause: true,
            responsiveClass: true,
            dots: false,
            nav: true,
            margin: 20,
            nav: true,
            navText: [
                '<i class="fas fa-angle-left"></i>',
                '<i class="fas fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    if($('.news-owl').length > 0 && $('.featured-products-owl').length > 0){
        $('.news-owl, .featured-products-owl').owlCarousel({
            loop: false,
            rewind: true,
            autoplay: true,
            autoplayTimeout: 9000,
            autoplayHoverPause: true,
            responsiveClass: true,
            dots: false,
            nav: false,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    var contentWayPoint = function(){
        var i = 0;
        if($('.probootstrap-animate').length > 0 ){
            $('.probootstrap-animate').waypoint(function(direction){

                if(direction === 'down' && !$(this.element).hasClass('probootstrap-animated')){
                    i++;

                    $(this.element).addClass('item-animate');
                    setTimeout(function(){

                        $('body .probootstrap-animate.item-animate').each(function(k){
                            var el = $(this);
                            setTimeout( function () {
                                var effect = el.data('animate-effect');
                                if ( effect === 'fadeIn') {
                                    el.addClass('fadeIn probootstrap-animated');
                                } else if ( effect === 'fadeInLeft') {
                                    el.addClass('fadeInLeft probootstrap-animated');
                                } else if ( effect === 'fadeInRight') {
                                    el.addClass('fadeInRight probootstrap-animated');
                                } else if ( effect === 'fadeInDown') {
                                    el.addClass('fadeInDown probootstrap-animated');
                                } else {
                                    el.addClass('fadeInUp probootstrap-animated');
                                }
                                el.removeClass('item-animate');
                            },  k * 50, 'easeInOutExpo' );
                        });

                    }, 50);

                }

            }, { offset: '95%' });
        }
    };
    contentWayPoint();

    $(document).on('submit' , '#frmContact' , function(e){
    e.preventDefault();

        $.ajax({
            type : 'POST',
            url  : base_url + '/send-mail',
            data : $('#frmContact').serialize(),
            dataType : 'json',
            cache : false,

            beforeSend : function(){
                $('.ajax-response').hide();
            },
            complete : function(){
            },
            success : function(data){

                if(data.status){

                    $('[name="email"]').val('');
                    $('[name="number"]').val('');
                    $('[name="subject"]').val('');
                    $('[name="message"]').val('');

                    $('.ajax-response').show();
                    $('.ajax-message').html(data.message);

                    setTimeout(function(){
                        $('.ajax-response').fadeOut();
                    },5000);

                }else{

                    $('.ajax-response').show();
                    var html = '';
                    html += '<div class="alert alert-danger">';
                    $(data.message).each(function(a, b){
                        html += b +'<br>';
                    });
                    html += '</div>';
                    $('.ajax-message').html(html);

                    setTimeout(function(){
                        $('.ajax-response').fadeOut();
                    },9000);
                }

            },
            error : function(){
                alert("Unable to connect to server. Please reload your page.");
            }

        });

        return false;

    });

    $(function () {
        $(document).off('click.bs.tab.data-api', '[data-hover="pill"]');
        $(document).on('mouseenter.bs.tab.data-api', '[data-toggle="pill"], [data-hover="pill"]', function () {
            $(this).tab('show');
        });

        $('.nav-links').on('click', function(){
            window.location.href = $(this).data('href');
        });
    });

    jsSocials.shares.facebook = {
        label: "Facebook",
        logo: "fa fa-facebook",
        shareUrl: "https://www.facebook.com/landbankofficial"
    };

    jsSocials.shares.twitter = {
        label: "twitter",
        logo: "fa fa-twitter",
        shareUrl: "https://twitter.com/LBP_official"
    };

    jsSocials.shares.instagram = {
        label: "Instagram",
        logo: "fa fa-instagram",
        shareUrl: "https://instagram.com/landbankofficial"
    };

    jsSocials.shares.youtube = {
        label: "YouTube",
        logo: "fa fa-youtube-play",
        shareUrl: "https://www.youtube.com/channel/UCRN8fX9AqoBXk47Gcc8_Blw"
    };

    $(".share").jsSocials({
        showLabel: false,
        showCount: false,
        shares: ["facebook", "twitter", "instagram", "youtube"]
    });

    $(".inner-share").jsSocials({
        showLabel: false,
        showCount: false,
        shares: ["twitter", "facebook", "googleplus"]
    });

});
