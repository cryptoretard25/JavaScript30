const { log } = console;

const keys = document.querySelectorAll(".container .key");
const audios = document.querySelectorAll("audio");

window.addEventListener("keydown", function (event) {
  const code = event.keyCode;
  const key = getKey(keys, code);
  const audio = getKey(audios, code);
  
  //return when wrong button pressed
  if(!audio) return;
  audio.currentTime=0;
  log(audio.currentTime);
  audio.play();
  
  
  key.classList.add("playing");
  setTimeout(() => {
    key.classList.remove("playing");
  }, 100);
});

function getKey(nodes, keycode) {
  let result;
  nodes.forEach((element) => {
    if (+element.dataset["key"] === keycode) result = element;
  });
  return result;
}
