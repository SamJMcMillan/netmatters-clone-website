// Check scroll direction

var lastScrollTop = 0;
const navbar = document.getElementsByClassName("sticky-header");
$(window).scroll(() => {
  var st = $(this).scrollTop();
  if (st < lastScrollTop) {
    $(navbar).addClass("sticky");
  } else if (st > lastScrollTop) $(navbar).removeClass("sticky");
  lastScrollTop = st;
});

// $(window).scroll(function () {
//   var sticky = $(".sticky-header"),
//     scroll = $(window).scrollTop();

//   if (scroll >= 100) sticky.addClass("sticky");
//   else sticky.removeClass("sticky");
// });
