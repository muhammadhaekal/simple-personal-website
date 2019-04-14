// ---------------------- DOM Target
const tncButton = document.getElementById("tnc-button");
const heroShot = document.getElementById("hero-shot");
const cookiesTnc = document.getElementById("cookies-tnc");
const newsLetterPannel = document.getElementById("newsletter-panel");
const removeButton = document.getElementById("remove-button");

// ---------------------- Event listeners
tncButton.addEventListener("click", handleTncClick);
window.addEventListener("scroll", handleScroll);
removeButton.addEventListener("click", handleRemoveButton);
document.addEventListener("DOMContentLoaded", handleDocumentReady);

// ---------------------- Handler Function
function handleTncClick() {
  cookiesTnc.style.display = "none";
  heroShot.style.marginTop = 0;
}

function handleScroll(e) {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= (1 / 3) * screen.height) {
    newsLetterPannel.style.bottom = 0;
  }
}

function handleRemoveButton() {
  newsLetterPannel.style.animation = "slidedown 2s";
  newsLetterPannel.style.bottom = "-100%";
  window.removeEventListener("scroll", handleScroll);
}

function handleDocumentReady() {
  console.log(`${cookiesTnc.offsetHeight}px`);
  heroShot.style.marginTop = `${cookiesTnc.offsetHeight}px`;
  //   heroShot.style.marginTop = "100px";
}
