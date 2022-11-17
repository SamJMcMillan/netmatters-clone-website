// Identifies the sidebar elements for use in the function
const overlay = document.getElementById("overlay");
const navLinks = document.getElementById("navList");
const navBtn = document.getElementById("navButton");

// Hides the sidebar navigation by default
$(navLinks).hide();

displayNav = () => {
  // If the navigation menu is not open, show navigation menu elements and shift the body of
  // the website to make way for it
  if (navLinks.style.display === "none") {
    $(navLinks).show();
    $(overlay).show();
    $("body").addClass("move-body");
    $("nav").addClass("move-body");
    // Animates the hamburger button
    $(navBtn).addClass("is-active");
    $("html").addClass("no-scroll");
    // If the navigation menu is already open, remove navigation menu elements and shift
    // the body of the website back in place
  } else {
    $(navLinks).hide();
    $(overlay).hide();
    $("body").removeClass("move-body");
    $("nav").removeClass("move-body");
    // Animates the hamburger button
    $(navBtn).removeClass("is-active");
    $("html").removeClass("no-scroll");
  }

  return true;
};
