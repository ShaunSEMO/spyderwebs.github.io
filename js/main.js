jQuery(document).ready( function($) {

  var $body = $('body');
  var $title = $('#head-content');
  var elementArray = [$('#section-1'),$('#section-2'),$('#section-3'),$('#section-4')];
  var $win = $(window);

  $body.css('display','none');
  $title.css('display','none');
  



  $body.fadeIn('slow',function(){
    $title.slideDown('slow');
  });
  
   $win.on('scroll', function() {
      //console.log($win.scrollTop())
      var obj = $('#section-1').scrollTop();
      console.log(obj)

      for (var i = 0; i < elementArray.length; i++) {
        
      }

   });


	var top = jQuery(document).scrollTop();

	$(".nvbtn").on('mouseenter', function (){
		$(this).addClass("hovering");
		
	});
	$(".nvbtn").on('mouseleave', function(){
		$(this).removeClass("hovering");
	});

	jQuery(window).scroll(function () {
    	var height = 150;

    });


    $(".nvbtn-home").on('click', function(){
    	$("html, body").animate({scrollTop: 0}, 1000);
        return false;
   	});
   	$(".nvbtn-about").on('click', function(){
    	$("html, body").animate({scrollTop: 600}, 1000);
        return false;
   	});
    $(".nvbtn-services").on('click', function(){
      $("html, body").animate({scrollTop: 1100}, 1000);
        return false;
    });
    $(".nvbtn-pricing").on('click', function(){
      $("html, body").animate({scrollTop: 2200}, 1000);
        return false;
    });
    $(".nvbtn-contact").on('click', function(){
      $("html, body").animate({scrollTop: 3389}, 1000);
        return false;
    });
   	
});





    		
