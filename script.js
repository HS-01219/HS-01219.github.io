$(document).ready(function(){

    /* 플로팅메뉴 */
    var floatPosition = parseInt($("#floatMenu").css('top'));

    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var newPosition = scrollTop + floatPosition + "px";

        $("#floatMenu").stop().animate({
            "top" : newPosition
        }, 400);
    });

    /* swiper */
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        allowTouchMove : true,
        centeredSlides : true,
        slidesPerView: 3,
        spaceBetween: 20,
        autoplay : true,
        on : {
            click : function() {
                alert("준비중입니다.")
            }
        }
    });
});