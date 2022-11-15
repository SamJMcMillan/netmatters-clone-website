const cookiePopup = document.getElementsByClassName("cookie-popup");
const cookieOverlay = document.getElementById("cookie-overlay");

$(cookiePopup).show();
$(cookieOverlay).show();

function acceptCookies() {
  $(cookiePopup).hide();
  $(cookieOverlay).hide();
}
