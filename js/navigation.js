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
    body.style.width = "80%";
    // Animates the hamburger button
    $(navBtn).addClass("is-active");
    // If the navigation menu is already open, remove navigation menu elements and shift
    // the body of the website back in place
  } else {
    $(navLinks).hide();
    $(overlay).hide();
    body.style.width = "100%";
    // Animates the hamburger button
    $(navBtn).removeClass("is-active");
  }

  return true;
};
