
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

stopBtn.setAttribute('disabled', '');

startBtn.addEventListener('click', startBtnHandler);
stopBtn.addEventListener('click', stopBtnHandler);

let id = null;
function startBtnHandler() {
  id = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.toggleAttribute('disabled');
  stopBtn.toggleAttribute('disabled');
}

function stopBtnHandler() {
  clearInterval(id);
  stopBtn.toggleAttribute('disabled');
  startBtn.toggleAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
