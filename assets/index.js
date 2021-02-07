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

/*
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
*/

/*
fetch('../data/users.json')
  .then(parseData)
  .then(logData)
  .catch(onLoadUsersReject);

function parseData(response) {
  return response.json();
}

function logData(data) {
  console.log(data);
}

function onLoadUsersReject(response) {
  console.log(response);
}
*/

/*
//promise
let isMoneyEnough = true;

let buyNewCar = new Promise(function (resolve, reject) {
  if (isMoneyEnough) {
    let newCar = { model: 'reno123', color: 'black', year: 1984, price: 500 };
    resolve(newCar);
  } else {
    let reason = new Error('To be continue...))');
    reject(reason);
  }
});

let getCar = function () {
  buyNewCar
    .then(function (result) {
      console.log(result);
    })
    .catch(function (error) {
      console.log(error.message);
    });
};

getCar();

// async-await - вызов функции асинхронно

async function getCar() {
  try {
    let newMyCar = await buyNewCar; // ждем промис
  } catch (error) {
    console.log(error.message);
  }
}
*/

/*
создать промис по получению случайного числа из функции (0-10)
которое больше 5
*/

const getNumberBiggerThan5 = new Promise(someFun);

function someFun(resolve, reject) {
  const number = Math.random() * 10;
  console.log(number);
  if (number >= 5) resolve(number);
  else {
    reject(new Error());
  }
}

console.log(getNumberBiggerThan5);
