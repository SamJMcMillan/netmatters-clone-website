const navLinks = document.getElementById("navList");
const navBtn = document.getElementById("navButton");

$(navLinks).hide();

function displayNav() {
  if (navLinks.style.display === "none") {
    $(navLinks).slideDown(400);
    $(navBtn).addClass("is-active");
  } else {
    $(navLinks).slideUp(400);
    $(navBtn).removeClass("is-active");
  }

  return true;
}
