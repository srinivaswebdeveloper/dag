
  jQuery(document).ready(function(){

    jQuery('.pdp-slider-padd').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
  });
  jQuery('.pdp-thumSlider1').slick({
    slidesToShow: 8,
    slidesToScroll: false,
    asNavFor: '.slider-for',
    centerMode: false,
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToScroll: true,
        arrows: true,
        centerMode: false,
        centerPadding: '10px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToScroll: true,
        arrows: true,
        centerMode: false,
        centerPadding: '10px',
        slidesToShow: 2
      }
    }
  ]
  });


jQuery('.pdpSlider ').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }    
  ]
   }); 
    


  /*jQuery('#Details').addClass('active'); 
  jQuery('#Description,#Provenances ').removeClass('active');
  jQuery('#prodctDetailes').show(); 
  jQuery('#prodctProvenances,#prodctDescription ').hide();  

 
  jQuery("#Details").click(function(){
    jQuery('#Details').addClass('active'); 
    jQuery('#Description,#Provenances ').removeClass('active');
    jQuery('#prodctDetailes').show(); 
    jQuery('#prodctProvenances,#prodctDescription ').hide();  
  });
   jQuery("#Provenances").click(function(){
    jQuery('#Provenances').addClass('active'); 
    jQuery('#Description,#Details ').removeClass('active');
    jQuery('#prodctProvenances').show(); 
    jQuery('#prodctDetailes,#prodctDescription ').hide();  
  });
    jQuery("#Description").click(function(){
    jQuery('#Description').addClass('active'); 
    jQuery('#Details,#Provenances ').removeClass('active'); 
    jQuery('#prodctDescription').show(); 
    jQuery('#prodctProvenances,#prodctDetailes ').hide(); 
  });
  */
  jQuery('.image-zoom a').click(function(){
      jQuery('.pdp-zoom-popup, .pdp-zoom-popup-overlay').fadeIn();
      jQuery(".pdp-slider-padd").appendTo(".pdp-zoom-popup").addClass('test');
  });
  jQuery('.pdp-zoom-popup-overlay, .pdp-zoom-popup-close').click(function(){
      jQuery('.pdp-zoom-popup, .pdp-zoom-popup-overlay').fadeOut();
      jQuery(".pdp-slider-padd").appendTo(".pdp-wrap");
  });

   jQuery(".prodctdes").mCustomScrollbar(); 
});