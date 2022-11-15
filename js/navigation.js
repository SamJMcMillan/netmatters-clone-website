const overlay = document.getElementById("overlay");
const navLinks = document.getElementById("navList");
const navBtn = document.getElementById("navButton");

$(navLinks).hide();

function displayNav() {
  if (navLinks.style.display === "none") {
    $(navLinks).show();
    $(overlay).show();
    body.style.width = "80%";
    $(navBtn).addClass("is-active");
  } else {
    $(navLinks).hide();
    $(overlay).hide();
    body.style.width = "100%";
    $(navBtn).removeClass("is-active");
  }

  return true;
}
