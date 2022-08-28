const { log } = console;

const keys = document.querySelectorAll(".container .key");
const audios = document.querySelectorAll('audio');


window.addEventListener("keydown", function (event) {
  const audio = audios[event.key - 1];
  const key = keys[event.key - 1];
  log(key);
  log(audio);
  key.classList.add("playing");
  audio.play();
  setTimeout(() => {
    key.classList.remove("playing");
  }, 100);
});