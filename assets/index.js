const square = document.getElementById('item');
let deg = 0;

/*
setInterval(function () {
  square.style.transform = `rotate(${++deg}deg)`;
}, 1000 / 60);
*/

setInterval(rotateFun, 1000 / 60);

function rotateFun() {
  square.style.transform = `rotate(${++deg}deg)`;
}

const button = document.getElementsByTagName('button')[0];
button.onclick = function () {
  alert('hello');
};
