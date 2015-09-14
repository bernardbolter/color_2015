$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight() - 50;
    	if (windowHeight < 400) {
    		$('.hero_wrap').css('height', 400);
    		$('.paintings').css('top', 400);	
    	} else {
    		$('.hero_wrap').css('height', windowHeight);
    		$('.paintings').css('top', windowHeight);
    	}
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});

$(window).load(function() {          
  var i = 0;
  var images = ['sp_lg.jpg', 'sm_lg.jpg', 'hm_lg.jpg'];
  var image = $('.hero_wrap');
                //Change image at regular intervals
  setInterval(function(){  
   image.fadeOut(2000, function () {
   image.css('background-image', 'url(../img/bw/' + images [i++] +')');
   image.fadeIn(5000);
   });
   if(i == images.length)
    i = 0;
  }, 5000);           
 });

