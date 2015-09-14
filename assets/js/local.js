$(function(){
});

$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.hero_wrap').css('height', windowHeight);
    $('.paintings').css('top', windowHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});
