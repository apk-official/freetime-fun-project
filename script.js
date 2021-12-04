// Mute switch

const icon = document.querySelector("picture");
const soundOn = document.querySelector(".speaker");
const soundOff = document.querySelector(".speaker-mute");
const changeSound = icon.addEventListener("click", function () {
  if (
    soundOn.classList.contains("speaker") &&
    soundOff.classList.contains("disable")
  ) {
    const audio = document.querySelector("audio");
    soundOff.classList.remove("disable");
    soundOn.classList.add("disable");
    audio.play();
  } else {
    const audio = document.querySelector("audio");
    soundOn.classList.remove("disable");
    soundOff.classList.add("disable");
    audio.pause();
  }
});

// Light Effect

const button = document.querySelector("button");
const buttonPump = document.querySelector(".pump-button");
const bgChange = button.addEventListener("click", function () {
  const heading = document.querySelector("h1");
  const ghost1 = document.querySelector(".ghost");
  const ghost2 = document.querySelector(".ghost2");
  const audio = document.querySelector("audio");
  ghost1.classList.add("ghost-animate-left");
  ghost2.classList.add("ghost-animate-right");
  navigator.vibrate([500, 250, 500, 250, 500, 250, 500, 250, 500, 250, 500]);
  heading.classList.add("glow");
  button.classList.add("spooky-button-in");
  buttonPump.classList.add("spooky-button-out");

  setTimeout(() => {
    heading.classList.remove("glow");
    ghost1.classList.remove("ghost-animate-left");
    ghost2.classList.remove("ghost-animate-right");
    button.classList.remove("spooky-button-in");
    buttonPump.classList.remove("spooky-button-out");
  }, 5000);
});
