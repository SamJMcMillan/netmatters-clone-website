// Setup the two cookie elements for use
const cookiePopup = document.getElementsByClassName("cookie-popup");
const cookieOverlay = document.getElementById("cookie-overlay");

// Creates the cookie
setCookie = (cName, cValue, expDays) => {
  // Sets time for the cookies expiry date
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();

  // Constructs the cookie, using the correct syntax
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
};

// Checks if a cookie has been made
getCookie = (cName) => {
  // Sets the variables that are required for the function
  const name = cName + "=";
  // URI's are Universal Resource Identifiers. Cookies have a URI, so the next two lines
  // identifies the cookie and breaks its components down for use.
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split("; ");
  let value;
  // Checks if the name of the cookie being checked is the one being referenced
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) value = val.substring(name.length);
  });

  return value;
};

// This function is attached to the 'Accept cookies' button in the html with onClick
// Adds the cookie and removes the cookie interface elements
acceptCookies = () => {
  $(cookiePopup).hide();
  $(cookieOverlay).hide();
  setCookie("cookie", true, 30);
};

// Checks if the cookie interface elements need to pop up, based on whether the cookie is
// already present or not
cookieMessage = () => {
  if (!getCookie("cookie")) {
    $(cookiePopup).show();
    $(cookieOverlay).show();
  }
};

// Fires off the cookieMessage function upon page load
window.addEventListener("load", cookieMessage);
