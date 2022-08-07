$(function() {
});

$(document).ready(function(){

	if($('.img-carousel.owl-carousel').length){
		$('.img-carousel.owl-carousel').owlCarousel({
			items: 1,
			loop: true,
			margin: 10,
			nav: true,
			navText: [
			  '<img src="img/arrow-l.png" style="background-color: transparent; border-radius: 20px; width:80px; height:50px; padding:15px">',
			  '<img src="img/arrow-r.png" style="background-color: transparent; border-radius: 20px; width:80px; height:50px; padding:15px">'
			],      
			dots: false,
		
		});
	}
	
	if($('.route-carousel.owl-carousel').length){
		$('.route-carousel.owl-carousel').owlCarousel({
			items: 8,
			loop: true,
			margin: 10,
			nav: true,
			navText: [
			  '<img src="img/arrow-r-green.png" style="background-color: transparent; border-radius: 20px; width:80px; height:50px; padding:15px">',
			  '<img src="img/arrow-l-green.png" style="background-color: transparent; border-radius: 20px; width:80px; height:50px; padding:15px">'
			],      
			dots: false,
			responsive : {
				0 : {
					items: 3,
				},

				992 : {
					items: 6,
				},
				1200	: {
					items: 8

				}				
			}			
		});
	}
	if($('.route-carousel-khorv.owl-carousel').length){
		$('.route-carousel-khorv.owl-carousel').owlCarousel({
			items: 8,
			loop: true,
			margin: 10,
			nav: true,
			navText: [
			  '<img src="img/arrow-l-white.png" style="background-color: transparent; border-radius: 20px; width:80px; height:50px; padding:15px">',
			  '<img src="img/arrow-r-white.png" style="background-color: transparent; border-radius: 20px; width:80px; height:50px; padding:15px">'
			],      
			dots: false,
			responsive : {
				0 : {
					items: 3,
				},

				992 : {
					items: 6,
				},
				1200	: {
					items: 8

				}				
			}			
		});
	}	
	if($('.cruise.owl-carousel').length){
		$('.cruise.owl-carousel').owlCarousel({
			items: 3,
			loop: true,
			margin: 10,
			nav: true,
			navText: [
			  '<img src="img/arrow-l-white.png" style="background-color: transparent; border-radius: 20px; width:80px; height:50px; padding:15px">',
			  '<img src="img/arrow-r-white.png" style="background-color: transparent; border-radius: 20px; width:80px; height:50px; padding:15px">'
			],      
			dots: false,
			responsive : {
				0 : {
					items: 1,
				},

				992 : {
					items: 2,
				},
				1200	: {
					items: 3

				}				
			}			
		});
	}
	
	if($('.instructor-carousel.owl-carousel').length){
		$('.instructor-carousel.owl-carousel').owlCarousel({
			items: 2,
			loop: true,
			margin: 10,
			nav: true,
			navText: [
			  '<img src="img/arrow-l-white.png" style="background-color: transparent; border-radius: 20px; width:80px; height:50px; padding:15px">',
			  '<img src="img/arrow-r-white.png" style="background-color: transparent; border-radius: 20px; width:80px; height:50px; padding:15px">'
			],      
			dots: false,
			responsive : {
				0 : {
					items: 1,
				},
				768 : {
					items: 2,
				}				
			}			
		
		});
	}
	
	if($('.plan-carousel.owl-carousel').length){
		$('.plan-carousel.owl-carousel').owlCarousel({
			items: 4,
			loop: true,
			margin: 20,
			nav: true,
			navText: [
			  '<img src="img/arrow-l.png" style="background-color: transparent; border-radius: 20px; width:80px; height:50px; padding:15px">',
			  '<img src="img/arrow-r.png" style="background-color: transparent; border-radius: 20px; width:80px; height:50px; padding:15px">'
			],      
			dots: false,
			responsive : {
				0 : {
					items: 2,
				},
				576 : {
					items: 2,
				},				
				768 : {
					items: 3,
				},
				992 : {
					items: 3,
				},
				1200	: {
					items: 4

				}				
			}			
		
		});
	}
	
	if($('.book-carousel.owl-carousel').length){
		$('.book-carousel.owl-carousel').owlCarousel({
			items: 1,
			loop: true,
			margin: 20,
			nav: true,
			navText: [
			  '<img src="img/arrow-l-white.png" style="background-color: transparent; border-radius: 20px; width:80px; height:50px; padding:15px">',
			  '<img src="img/arrow-r-white.png" style="background-color: transparent; border-radius: 20px; width:80px; height:50px; padding:15px">'
			],      
			dots: false,
		
		});
	}
	
	if($('.why-carousel.owl-carousel').length){
		$('.why-carousel.owl-carousel').owlCarousel({
			items: 1,
			loop: true,
			margin: 10,
			nav: true,
			navText: [
			  '<img src="img/arrow-l-white.png" style="background-color: transparent; border-radius: 20px; width:80px; height:50px; padding:15px">',
			  '<img src="img/arrow-r-white.png" style="background-color: transparent; border-radius: 20px; width:80px; height:50px; padding:15px">'
			],      
			dots: false,
		
		});
	}
	
	if($('.dnipro-carousel.owl-carousel').length){
		$('.dnipro-carousel.owl-carousel').owlCarousel({
			items: 1,
			loop: true,
			margin: 10,
			nav: true,
			autoHeight: true,
			navText: [
			  '<img src="img/arrow-l.png" style="background-color: transparent; border-radius: 20px; width:80px; height:50px; padding:15px">',
			  '<img src="img/arrow-r.png" style="background-color: transparent; border-radius: 20px; width:80px; height:50px; padding:15px">'
			],      
			dots: false,
		
		});
	}
	
	if($('.carousel.owl-carousel').length){
		$('.carousel.owl-carousel').owlCarousel({
			items: 3,
			loop: true,
			margin: 10,
			nav: true,
			navText: [
			  '<img src="img/arrow-l.png" style="background-color: transparent; border-radius: 20px; width:80px; height:50px; padding:15px">',
			  '<img src="img/arrow-r.png" style="background-color: transparent; border-radius: 20px; width:80px; height:50px; padding:15px">'
			],      
			dots: false,
			responsive : {
				0 : {
					items: 1,
				},

				992 : {
					items: 2,
				},
				1200	: {
					items: 3

				}				
			}			
		});
	}
	
	if($('.top-carousel.owl-carousel').length){
		$('.top-carousel.owl-carousel').owlCarousel({
			items: 1,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',		
			transitionStyle: "fade",
			loop: true,
			margin: 0,
			nav: false,    
			dots: true,
			autoplay: false,
			autoplayTimeout: 3500,
			autoplayHoverPause: false			
		});
	}
	
	$(document).on("click", ".top-carousel .owl-dot", function(){
		$('.top-carousel').trigger('stop.owl.autoplay');
		$('.top-carousel').trigger('play.owl.autoplay');
		return false;
	});	
	
	if($(window).width() < 1200){
		$("header").addClass("with_bgrnd");
	}
	
	if($("header.with_bgrnd").length == false){
		if($(window).scrollTop() < 100){
			$("header").removeClass("with_bgrnd");
		}else{
			$("header").addClass("with_bgrnd");
		}  
		$(document).on("scroll", function(){
			if($(window).scrollTop() < 100){
				$("header").removeClass("with_bgrnd");
			}else{
				$("header").addClass("with_bgrnd");
			}    
		});
	}	
  
});


