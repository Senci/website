$('#background').enllax();

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - $("#navbar").outerHeight(true) - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
