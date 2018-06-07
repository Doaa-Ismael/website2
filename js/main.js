$(function () {

    new WOW().init(); 
    $(window).scroll(function () {
        
        if($(window).scrollTop() >= $('#about').position().top)
        {
           /* $('.navbar').css({
                'position': 'fixed', 
                'z-index': 333
            });
            */
            $('.navbar').addClass('blackk');
            $('.navbar').addClass('shadow');
        }
        else {
            $('.navbar').removeClass('blackk');
            $('.navbar').removeClass('shadow');
        }
        if($(window).scrollTop() >= $('#about').position().top) {
            
        }
    });
       



});