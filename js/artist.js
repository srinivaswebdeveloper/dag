
jQuery(document).ready(function() {
jQuery(".artist-info, .interview-info, .artisttabs").mCustomScrollbar();	

    jQuery('.slideList2 ').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: false,
			asNavFor: '.thumSlider2'	
     });
	jQuery('.thumSlider2').slick({
	slidesToShow: 6,
	slidesToScroll: 1,
	asNavFor: '.slideList2',
	dots: false,
	arrows: false,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 500,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '0',
				slidesToShow: 3
			}
		}
	]
});
});


	
jQuery(document).ready(function() {
    jQuery(".tabs-menu a").click(function(event) {
        event.preventDefault();
        jQuery(this).parent().addClass("current");
        jQuery(this).parent().siblings().removeClass("current");
        var tab = jQuery(this).attr("href");
        jQuery(".tab-content").not(tab).css("display", "none");
        jQuery(tab).fadeIn();
    });
		
});

jQuery( window ).on( "orientationchange", function( event ){		
		 jQuery('.thumSlider2').slick('resize');
});

