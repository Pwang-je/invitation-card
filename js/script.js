/*$(window).scroll(function(){
  var sticky = $('#header-fixed'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('h-fixed');
  else sticky.removeClass('h-fixed');
});
*/

$(function(){
    var menupos = $("#header-fixed").offset().top;
    $(window).scroll(function(){
       if($(window).scrollTop() >= menupos) {
          $("#header-fixed").css("position","fixed");
          $("#header-fixed").css("top","0");
          $('#top_mar').show();
          }
    });
 });
