;(function($) {
    "use strict";
    
    /*----------------------------------------------------*/
    /* WOW js
    /*----------------------------------------------------*/
 
    function bodyScrollAnimation() {
        var scrollAnimate = $('body').data('scroll-animation');
        if (scrollAnimate === true) {
            new WOW({
                mobile: false
            }).init()
        }
    }
    bodyScrollAnimation();
    
    
})(jQuery)
