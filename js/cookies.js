// Setup the two cookie elements for use
const cookiePopup = document.getElementsByClassName("cookie-popup");
const settingsPage = document.getElementById("cookie-settings");
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
  $(settingsPage).hide();
  setCookie("cookie", true, 30);
};

// Checks if the cookie interface elements need to pop up, based on whether the cookie is
// already present or not
cookieMessage = () => {
  if (!getCookie("cookie")) {
    $(cookiePopup).show();
    $(cookieOverlay).show();
    $(settingsPage).hide();
  }
};

// Fires off the cookieMessage function upon page load
window.addEventListener("load", cookieMessage);

// Store for the cookie settings page variables needed
const detailsPage = document.getElementById("cookie-settings");
const detailsTable = document.getElementById("detailed-preferences");
const detailBtn = document.getElementById("detail-btn");

// Ensures that the detailsPage starts closed and opens it when the
// "Change Settings" button is clicked on the cookie popup
$(detailsPage).hide();

openSettings = () => {
  $(detailsPage).show();
};

$(detailsTable).hide();

openDetails = () => {
  if (!detailsTable.classList.contains("is-active")) {
    $(detailsTable).show().addClass("is-active");
    $(detailBtn).html("Hide Detailed Preferences");
  } else {
    $(detailsTable).hide().removeClass("is-active");
    $(detailBtn).html("Show Detailed Preferences");
  }
};

// Below is the functions for the disable/enable functions
funcButtons = () => {
  const disable = document.getElementById("func-dis");
  const enable = document.getElementById("func-ena");
  if (
    disable.classList.contains("active-btn") &&
    enable.classList.contains("inactive-btn")
  ) {
    $(disable).removeClass("active-btn").addClass("inactive-btn");
    $(enable).addClass("active-btn").removeClass("inactive-btn");
  } else {
    $(disable).addClass("active-btn").removeClass("inactive-btn");
    $(enable).removeClass("active-btn").addClass("inactive-btn");
  }
};

prefButtons = () => {
  const disable = document.getElementById("pref-dis");
  const enable = document.getElementById("pref-ena");
  if (
    disable.classList.contains("active-btn") &&
    enable.classList.contains("inactive-btn")
  ) {
    $(disable).removeClass("active-btn").addClass("inactive-btn");
    $(enable).addClass("active-btn").removeClass("inactive-btn");
  } else {
    $(disable).addClass("active-btn").removeClass("inactive-btn");
    $(enable).removeClass("active-btn").addClass("inactive-btn");
  }
};

hotButtons = () => {
  const disable = document.getElementById("hot-dis");
  const enable = document.getElementById("hot-ena");
  if (
    disable.classList.contains("active-btn") &&
    enable.classList.contains("inactive-btn")
  ) {
    $(disable).removeClass("active-btn").addClass("inactive-btn");
    $(enable).addClass("active-btn").removeClass("inactive-btn");
  } else {
    $(disable).addClass("active-btn").removeClass("inactive-btn");
    $(enable).removeClass("active-btn").addClass("inactive-btn");
  }
};

linButtons = () => {
  const disable = document.getElementById("lin-dis");
  const enable = document.getElementById("lin-ena");
  if (
    disable.classList.contains("active-btn") &&
    enable.classList.contains("inactive-btn")
  ) {
    $(disable).removeClass("active-btn").addClass("inactive-btn");
    $(enable).addClass("active-btn").removeClass("inactive-btn");
  } else {
    $(disable).addClass("active-btn").removeClass("inactive-btn");
    $(enable).removeClass("active-btn").addClass("inactive-btn");
  }
};

fbButtons = () => {
  const disable = document.getElementById("fb-dis");
  const enable = document.getElementById("fb-ena");
  if (
    disable.classList.contains("active-btn") &&
    enable.classList.contains("inactive-btn")
  ) {
    $(disable).removeClass("active-btn").addClass("inactive-btn");
    $(enable).addClass("active-btn").removeClass("inactive-btn");
  } else {
    $(disable).addClass("active-btn").removeClass("inactive-btn");
    $(enable).removeClass("active-btn").addClass("inactive-btn");
  }
};

gogButtons = () => {
  const disable = document.getElementById("gog-dis");
  const enable = document.getElementById("gog-ena");
  if (
    disable.classList.contains("active-btn") &&
    enable.classList.contains("inactive-btn")
  ) {
    $(disable).removeClass("active-btn").addClass("inactive-btn");
    $(enable).addClass("active-btn").removeClass("inactive-btn");
  } else {
    $(disable).addClass("active-btn").removeClass("inactive-btn");
    $(enable).removeClass("active-btn").addClass("inactive-btn");
  }
};

forButtons = () => {
  const disable = document.getElementById("for-dis");
  const enable = document.getElementById("for-ena");
  if (
    disable.classList.contains("active-btn") &&
    enable.classList.contains("inactive-btn")
  ) {
    $(disable).removeClass("active-btn").addClass("inactive-btn");
    $(enable).addClass("active-btn").removeClass("inactive-btn");
  } else {
    $(disable).addClass("active-btn").removeClass("inactive-btn");
    $(enable).removeClass("active-btn").addClass("inactive-btn");
  }
};

ntmButtons = () => {
  const disable = document.getElementById("ntm-dis");
  const enable = document.getElementById("ntm-ena");
  if (
    disable.classList.contains("active-btn") &&
    enable.classList.contains("inactive-btn")
  ) {
    $(disable).removeClass("active-btn").addClass("inactive-btn");
    $(enable).addClass("active-btn").removeClass("inactive-btn");
  } else {
    $(disable).addClass("active-btn").removeClass("inactive-btn");
    $(enable).removeClass("active-btn").addClass("inactive-btn");
  }
};

// Below is the functions that hide/show collapsable table rows
hotSpan = () => {
  const row = document.getElementById("hotRow");
  const pm = document.getElementById("hotPM");
  if (row.classList.contains("row-disabled")) {
    $(row).show().removeClass("row-disabled").addClass("row-active");
    $(pm).html("-");
  } else {
    $(row).hide().addClass("row-disabled").removeClass("row-active");
    $(pm).html("+");
  }
};

linSpan = () => {
  const row = document.getElementById("linRow");
  const pm = document.getElementById("linPM");
  if (row.classList.contains("row-disabled")) {
    $(row).show().removeClass("row-disabled").addClass("row-active");
    $(pm).html("-");
  } else {
    $(row).hide().addClass("row-disabled").removeClass("row-active");
    $(pm).html("+");
  }
};

fbSpan = () => {
  const row = document.getElementById("fbRow");
  const pm = document.getElementById("fbPM");
  if (row.classList.contains("row-disabled")) {
    $(row).show().removeClass("row-disabled").addClass("row-active");
    $(pm).html("-");
  } else {
    $(row).hide().addClass("row-disabled").removeClass("row-active");
    $(pm).html("+");
  }
};

gogSpan = () => {
  const row = document.getElementById("gogRow");
  const pm = document.getElementById("gogPM");
  if (row.classList.contains("row-disabled")) {
    $(row).show().removeClass("row-disabled").addClass("row-active");
    $(pm).html("-");
  } else {
    $(row).hide().addClass("row-disabled").removeClass("row-active");
    $(pm).html("+");
  }
};

forSpan = () => {
  const row = document.getElementById("forRow");
  const pm = document.getElementById("forPM");
  if (row.classList.contains("row-disabled")) {
    $(row).show().removeClass("row-disabled").addClass("row-active");
    $(pm).html("-");
  } else {
    $(row).hide().addClass("row-disabled").removeClass("row-active");
    $(pm).html("+");
  }
};

ntmSpan = () => {
  const row = document.getElementById("ntmRow");
  const pm = document.getElementById("ntmPM");
  if (row.classList.contains("row-disabled")) {
    $(row).show().removeClass("row-disabled").addClass("row-active");
    $(pm).html("-");
  } else {
    $(row).hide().addClass("row-disabled").removeClass("row-active");
    $(pm).html("+");
  }
};
