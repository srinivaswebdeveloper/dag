 
jQuery(document).ready(function(){

/* main Home page baner slider starts */	
jQuery('.masterEvent').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 300,
	lazyLoad: 'ondemand',
	autoplay: true,
	dots: true,		
	responsive: [  
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
     
  ]	 
});
/* main Home page baner slider ends */

/* Search Starts */
jQuery(".searchTxt").click(function(){
  jQuery(this).parents(".logoNavigation").find(".searchslide").slideToggle();
  jQuery(".banner").toggleClass("removeTopPadding");
  jQuery(".logoNavigation").toggleClass("removeBorder");  
})
/* Search Ends */

})
 
 
jQuery(window).load(function()
{
	  var winWidth = jQuery(window).width(); 
	  if(winWidth < 800)
		{	  
			  jQuery(".footerLtLinks .footLinkTitle").click(function()
			  {				  
				 jQuery(this).parents(".commonFootLink").find("ul").slideDown().parents(".commonFootLink").siblings().find("ul").slideUp(); 
				 jQuery(this).addClass("activeElem").parents(".commonFootLink").siblings().find(".footLinkTitle").removeClass("activeElem");
			  });  
			  
			  jQuery(".sortLink").click(function(){
				  jQuery(".filterList").animate({"left":"0px"}, "slow").toggleClass('visible');
			  })
			  jQuery(".filterLink").click(function(){
				  jQuery(".respSort").animate({"left":"0px"}, "slow").toggleClass('visible');
			  })
			  
			  jQuery(".closeFilter").click(function(){
				 jQuery(".filterList, .respSort").animate({"left":"-9999px"}, "slow").removeClass('visible');
			  })
			  
		}
	  else
		{ 
			  return false; 
		}
	
})

/* popup Section Start */
jQuery(document).ready(function(){
	jQuery('.beforelogin, #loginform').click(function(){		
		jQuery('#popupContener, #loginFormSection').css("display", "block");
		jQuery('#registerFormSection, #ForgotPasswordFormSection, #OtpFormSection').css("display", "none");
	})
	jQuery('#registerform').click(function(){
		jQuery('#registerFormSection').css("display", "block");
		jQuery('#loginFormSection, #ForgotPasswordFormSection, #OtpFormSection').css("display", "none");
	})
	jQuery('#forgotpassword').click(function(){
		jQuery('#ForgotPasswordFormSection').css("display", "block");
		jQuery('#loginFormSection, #registerFormSection, #OtpFormSection').css("display", "none");
	})
	jQuery('#otpform').click(function(){
		jQuery('#OtpFormSection').css("display", "block");
		jQuery('#loginFormSection, #registerFormSection, #ForgotPasswordFormSection').css("display", "none");
	})
	jQuery('.contentsection1').click(function(){		
		jQuery('#contentsection1, #popupContener').css("display", "block");
		jQuery('#contentsection2').css("display", "none");
	})
	jQuery('.contentsection2').click(function(){
		jQuery('#contentsection2, #popupContener').css("display", "block");
		jQuery('#contentsection1').css("display", "none");
	})
	
	jQuery('.popupClose, .popupoverlay').click(function(){		
		jQuery('#popupContener').hide();
	})
	
});
/* popup Section End */



/*Artist  page js sliders*/
 jQuery(document).ready(function(){
    jQuery('.respSign a').click(function(){
      jQuery('.respSign ul').slideToggle();
    });
});