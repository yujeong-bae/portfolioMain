$(document).ready(function () {
    $('.pf-dmt-sub').stop().slideUp(10);



    //pc용 햄버거
    function isMobile() {
        var filter = "win32|win64|mac|macintel";
        if (navigator.platform) {
            if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
                //mob
                //    모바일 nav클릭시 꺼지기
                $('.pf-dmt-sub li a').click(function () {
                    $('header nav').stop().removeClass('active');

                });

            } else {
                $('.pf-dmt-main').hover(function () {
                    $('.pf-dmt-sub').stop().slideDown(200);
                });
                $('.pf-dmt-main').mouseleave(function () {
                    $('.pf-dmt-sub').stop().slideUp(800);
                });

                $(window).scroll(function () {
                    var scrollTop = $(window).scrollTop();
                    var screen = $(window).scrollTop() + $(window).height();

                    $('section').each(function () {

                        var $sec = $(this);
                        //active addclass 사용시
                        if (($sec.offset().top + $sec.height() - 550) < screen) {
                            $sec.find('.container').each(function () {
                                var num = $(this).index();
                                $(this).delay(num * 1000).addClass('active', 1000);
                            });
                        } else {
                            $sec.find('.container').each(function () {
                                var num = $(this).index();
                                $(this).delay(num * 1000).removeClass('active', 100);
                            });
                        }
                    });
                    if (scrollTop > 600) {
                        //header에 sticky추가
                        $('.up').addClass('active');
                    } else {
                        $('.up').removeClass('active');
                    }
                    $('.up').click(function () {
                        $('html,body').stop().animate({
                            scrollTop: 0
                        }, 800);
                    });
                });
            }
        }
    }
    isMobile();


    $('.fake').on('click', function (e) {
        e.preventDefault();
    });

    //햄버거
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        $('header nav').toggleClass('active');
    });
});
