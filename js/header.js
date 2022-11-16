// Sets up essential components for the function
const body = document.body;
let lastScroll = 0;

// listens for scroll wheel movement and fires off an anonymous function
window.addEventListener("scroll", () => {
  // This function needs to check, and therefore have a reference to, scroll direction
  const currentScroll = window.pageYOffset;

  // If the scroll is at the top of the screen, ignore the rest of the function
  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
    // Gives the screen at the top padding to accomodate space for the nav bar
    body.style.paddingTop = "215px";
  }

  // Checks if the scroll is moving down and applies the appropriate class
  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
    // also removes padding at the top of the screen if there is any
    body.style.paddingTop = "0px";
  }

  // Checks if the scroll is moving up
  if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }

  // Returns the current scroll Y offset and records it, to be checked against
  // the next scroll
  lastScroll = currentScroll;
});
