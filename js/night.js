 $('.dark_btn').click(function () {
        if ($('.dark_btn p').html() == "ON!!") {
            $('.dark_btn p').stop().html('OFF!!');
            $('body').addClass('dark');
            $('header').addClass('dark');
            $('header .logo img').addClass('dark');
            $('header nav ul li a').addClass('dark');
            $('section:nth-child(5)').addClass('dark');
            $('section:nth-child(7)').addClass('dark');
            $('section:nth-child(9)').addClass('dark');
            $('section .Right h3').addClass('dark');
            $('h3').addClass('dark');
            $('h5').addClass('dark');
            $('a').addClass('dark');
            $('header a').addClass('dark');
            $('p').addClass('dark');
            $('.up').addClass('dark');
            $('section .Right a').addClass('dark');
            $('.Right').addClass('dark');
            $('section .footer_wrap').addClass('dark');
            $('.dark_btn').addClass('dark');
        } else {
            $('.dark_btn p').stop().html('ON!!');
            $('body').removeClass('dark');
            $('header').removeClass('dark');
            $('header .logo img').removeClass('dark');
            $('header nav ul li a').removeClass('dark');
            $('section:nth-child(5)').removeClass('dark');
            $('section:nth-child(7)').removeClass('dark');
            $('section:nth-child(9)').removeClass('dark');
            $('section .Right h3').removeClass('dark');
            $('h3').removeClass('dark');
            $('h5').removeClass('dark');
            $('a').removeClass('dark');
            $('header a').removeClass('dark');
            $('p').removeClass('dark');
            $('.up').removeClass('dark');
            $('section .Right a').removeClass('dark');
            $('.Right').removeClass('dark');
            $('section .footer_wrap').removeClass('dark');
            $('.dark_btn').removeClass('dark');
        }
    });