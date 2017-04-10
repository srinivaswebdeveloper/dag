 
jQuery(document).ready(function(){ 
 
	 jQuery('.slideList1   ').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		asNavFor: '.thumSlider1',
	 });
	
	 jQuery('.thumSlider1 ').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slideList1',
		dots: false,
		arrows: true,
		focusOnSelect: true
	 });	 
	 
	 jQuery('.slideList2 ').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		asNavFor: '.thumSlider2',
	 });
	
	 jQuery('.thumSlider2 ').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slideList2',
		dots: false,
		arrows: true,
		focusOnSelect: true
	 });  
 
})
 
 
jQuery(window).load(function()
{
	 
})