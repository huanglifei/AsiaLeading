$(function() {
    //导航菜单
    function showMenu() {

        $('.J-navli').hover(function() {
            var _this = $(this);
            if (_this.find('.J-sub-nav').length > 0) {
                console.log(_this.find('.J-sub-nav').length);
                _this.find('.J-sub-nav').fadeIn();
            }
        }, function() {
            var _this = $(this);
            _this.find('.J-sub-nav').fadeOut('slow/400/fast', function() {

            });;
        });
    }

    showMenu();



    // swiper轮播
    function setSwiper(objparent) {
        var swiper = new Swiper(objparent, {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    setSwiper('.J-swiper-a');


    //右侧悬浮

    function setHscroll() {

        if ($(".Right-suspension-con").length > 0) {
            var topheight = $(".Right-suspension-con").offset().top - 40;
            $(window).scroll(function() {
                var deviation = $(document).scrollTop();

                if (deviation >= topheight) {
                    $('.Right-suspension-con').css({
                        'position': 'fixed',
                        'top': '40px'

                    });

                } else {

                	if($('.flagindex').length > 0){
                		$('.Right-suspension-con').css({
	                        'position': 'absolute',
	                        'top': '760px'

	                    });
                	}else{
                		$('.Right-suspension-con').css({
	                        'position': 'absolute',
	                        'top': '280px'

	                    });
                	}

                   

                }
            });
        }








        //日期倒计时
        $.leftTime("2019/2/21 09:00:00", function(d) {
            if (d.status) {
                var $dateShow1 = $("#dateShow1");
                $dateShow1.find(".d").html(d.d);
                $dateShow1.find(".h").html(d.h);
                $dateShow1.find(".m").html(d.m);
                $dateShow1.find(".s").html(d.s);
            }
        });

    }

    setHscroll();




});