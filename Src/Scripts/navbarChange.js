(function($) { "use strict";  
    $(function() {
        var header = $(".navbar");
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            
            if (scroll >= 10) {
                header.removeClass('start-style').addClass("scroll-on");
            } else {
                header.removeClass("scroll-on").addClass('start-style');
            }
        });
    });		
})(jQuery); 
 