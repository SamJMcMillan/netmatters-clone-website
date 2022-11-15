const navLinks = document.getElementById("navList");
const navBtn = document.getElementById("navButton");

$(navLinks).hide();

function displayNav() {
  if (navLinks.style.display === "none") {
    $(navLinks).show();
    $(navBtn).addClass("is-active");
  } else {
    $(navLinks).hide();
    $(navBtn).removeClass("is-active");
  }

  return true;
}
