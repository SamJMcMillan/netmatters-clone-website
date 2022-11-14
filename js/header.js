// Sticky Header
$(window).scroll(function () {
  var sticky = $(".sticky-header"),
    scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass("sticky");
  else sticky.removeClass("sticky");
});
