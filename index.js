const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const butStart = document.querySelector('button[data-action="start"]');
const butStop = document.querySelector('button[data-action="stop"]');
let timerId = 0;



butStart.addEventListener("click", start);
butStop.addEventListener("click", stop);

function start() {
  if (timerId) {
     return;
  }
  timerId = setInterval(() => {
    let colorRandom = colors[randomIntegerFromInterval(0, 5)];
    document.body.style.backgroundColor = colorRandom;
    
  }, 1000);
}

function stop() {
  
  clearInterval(timerId);
  timerId = 0
 
}
