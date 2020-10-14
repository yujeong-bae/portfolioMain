$(document).ready(function () {


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


   
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        $('header nav').toggleClass('active');
    });


   

});
