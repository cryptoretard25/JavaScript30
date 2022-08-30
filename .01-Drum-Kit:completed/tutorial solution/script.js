const { log } = console;

window.addEventListener("keydown", renderKeyDown);
const keys = document.querySelectorAll("div.key");

// Listening to Transition End event
// CSS transitions provide a way to control animation speed when changing CSS properties.
// Instead of having property changes take effect immediately, you can cause the changes in a
// property to take place over a period of time.
// We wanna delete animation class, right after transition ends
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function renderKeyDown(event) {
  const div = document.querySelector(`.key[data-key="${event.key}"]`);
  const audio = document.querySelector(`audio[data-key="${event.key}"]`);
  if (!div && !audio) return;
  audio.currentTime = 0;
  audio.play();

  div.classList.toggle("playing");
}
