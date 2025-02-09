$(document).ready(function(){

    /* 플로팅메뉴 */
    var floatPosition = parseInt($("#floatMenu").css('top'));

    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var newPosition = scrollTop + floatPosition + "px";

        $("#floatMenu").stop().animate({
            "top" : newPosition,
            "opacity": 1
        }, 400);
    });

    checkWidth();

    $(window).resize(function() {
        checkWidth();
    });

    /* swiper */
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        allowTouchMove : true,
        centeredSlides : true,
        slidesPerView: 3,
        spaceBetween: 20,
        autoplay : true,
        breakpoints : {
            1024 : {
                slidesPerView : 3,
                centeredSlides : true,
            },
            768 : {
                slidesPerView : 2,
                centeredSlides : false,
            },
            0 : {
                slidesPerView : 1,
            }
        },
        on : {
            click : function() {
                alert("준비중입니다.")
            }
        }
    });
});

function checkWidth() {
    if ($(window).width() <= 768) {
        $("#floatMenu").css({
            "visibility": "hidden",
            "opacity": 0 
        });

        $('.nav_head').css({
            "display": "block" 
        });
    } else {
        $("#floatMenu").css({
            "visibility": "visible",
            "opacity": 1 
        });

        $('.nav_head').css({
            "display": "none" 
        });
    }
}