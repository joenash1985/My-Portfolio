$(window).load(function() {

		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;

	});
	
	
	window.onscroll = function() {
        if (window.pageYOffset >= 300){
            jQuery('.header').css({position: 'fixed', right: '0px', top: '0px'});
        }
        else {
            jQuery('.header').css({position: 'static', right: '', top: ''});
        }
    }


// mobile navigation
$(document).ready(function(){
	
	
	
	
	$("a#thumbnails").fancybox();
	
	
	$("#nav-mobile").html('<ul class="closemobilenav"><img src="images/close.png" alt="close" /></ul>'+$("#nav-main").html());
	
     $("#nav-trigger span").click(function(){
       
            $("nav#nav-mobile ul").slideDown(250);
    });
	
	$(".closemobilenav").click(function(){
            $("nav#nav-mobile ul").slideUp(250);
    });
	
	$('#nav-main ul li').hover(function () {
        $(this).children('ul').fadeIn(100);
    }, function () {
        $(this).children('ul').fadeOut(50);
    });
	
	
	
	
	$('.cartdrop').hover(function () {
        $('.cartdropbox').fadeIn(300);
    }, function () {
        $('.cartdropbox').fadeOut(50);
    });
	
	
	
	$("a.thumbnails").fancybox();

    
	$('.hero-gallery').flickity({
	  // options
		cellAlign: 'left',
		contain: false,
		pageDots: false,
		imagesLoaded: true,
		prevNextButtons: true,
		wrapAround: true,
		autoPlay: 6000,
		pauseAutoPlayOnHover: true
	});
	
	$('.testimonials-gallery').flickity({
	  // options
		cellAlign: 'left',
		contain: false,
		pageDots: false,
		imagesLoaded: true,
		prevNextButtons: true,
		wrapAround: true,
		autoPlay: 6000,
		pauseAutoPlayOnHover: true
	});
	
	$('.simple-gallery').flickity({
	  // options
		cellAlign: 'left',
		contain: true,
		pageDots: false,
		imagesLoaded: true,
		prevNextButtons: true,
		wrapAround: true,
		autoPlay: 6000,
		pauseAutoPlayOnHover: true
	});
	
});

/*jQuery(document).ready(function() {
    jQuery('.sectionmax').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
       });
	   
	   jQuery('.box').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
       });
});*/

