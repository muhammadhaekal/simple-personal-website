const tncButton = document.getElementById("tnc-button");
const heroShot = document.getElementById("hero-shot");
const cookiesTnc = document.getElementById("cookies-tnc");
const newsLetterPannel = document.getElementById("newsletter-panel");
tncButton.addEventListener("click", handleTncClick);

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

window.addEventListener("scroll", handleScroll);
