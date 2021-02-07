/*
const square = document.getElementById('item');
let deg = 0;

setInterval(rotateFun, 1000 / 60);

function rotateFun() {
  square.style.transform = `rotate(${++deg}deg)`;
}

const button = document.getElementsByTagName('button')[0];
button.onclick = function () {
  alert('hello');
};
*/

const store = {
  users: null,
  isFetching: false,
  error: null,
};

// асинхронный код выполняется после синхронного!!!

//https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest
const request = new XMLHttpRequest();

const button = document.getElementById('loadButton');
button.onclick = function () {
  // false - синхрон загрузка, true (-) - асинхр
  request.open('GET', './data/users.json', true);
  request.send();
};

request.onloadstart = function () {
  store.isFetching = true;
  //console.log(store);
};

request.onload = function () {
  store.isFetching = false;
  if (this.status >= 200 && this.status < 300) {
    store.users = JSON.parse(this.responseText);
  } else {
    store.error = new Error(`${this.status} : ${this.statusText}`);
  }
};

console.log(store);
