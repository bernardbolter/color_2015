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
  var bgImages = ['sp_lg.jpg', 'sm_lg.jpg', 'hm_lg.jpg'];
  var bgImage = bgImages[Math.floor(Math.random() * bgImages.length)];
  $('.hero_wrap').css('background-image', 'url(../img/bw/' + bgImage + ')');
});

$(document).ready(function() {
  $('.about_nav').click(function() {
    $('.about_wrap').toggleClass('about_slide');
  });
});

