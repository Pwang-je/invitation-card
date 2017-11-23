
$(window).scroll(function(){
  var sticky = $('#header-fixed'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('h-fixed');
  else sticky.removeClass('h-fixed');
});