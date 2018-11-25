jQuery(function($) {
    $('body').on('click', '.scroll-down', function(event){
        event.preventDefault();

        $('html, body').animate({
            scrollTop:( $( $.attr(this, 'href') ).offset().top - 150)
        }, 800);
    });

});