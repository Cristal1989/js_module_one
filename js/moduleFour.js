// ======================== Call back функции =================

function greet(name) {
  return `Добро пожаловать ${name}`;
}

// Вызываем функцию greet и выводи результат в консоль
console.log(greet('Vasya')); // Добро пожаловать Vasya

// Выводим функцию greet в консоль не вызывая ее
console.log(greet); // f greet() {`Добро пожаловать ${name}`}

// =======================

function greet(name) {
  return console.log(`Добро пожаловать ${name}`);
}

// Функция высшего порядка
function registerGuest(name, callback) {
  console.log(`Регистрация гостя ${name}`);
  // callback - Передача функции
  callback(name);
}

registerGuest('Petya', greet); //Регистрация гостя Petya
//Добро пожаловать Petya

// ====================== Инлайн callback ======================

function registerGuest(name, callback) {
  console.log(`Регистрация гостя ${name}`);
  callback(name);
}

// Передадим инлайн функцию grett в качестве callback
registerGuest('Max', function greet(name) {
  console.log(`Добро пожаловать ${name}`);
}); //Регистрация гостя Max
//Добро пожаловать Max

// Передадим инлайн функцию notify в качестве callback
registerGuest('Ann', function notify(name) {
  console.log(`Уважаемый(-я) ${name}, ваш номер будет готов через день`);
}); //Регистрация гостя Ann
//Уважаемый(-я) Ann, ваш номер будет готов через день

// ==========================

function processCall(resepient) {
  // Имитируем доступность абонента случайным числом
  const isResepientAvalable = Math.random() > 0.5;
  if (!isResepientAvalable) {
    console.log(`Абонент ${resepient} недоступный, оставьте сообщение`);
    // Логика активации автоответчика
  } else {
    console.log(`Cоединяем с ${resepient}, ожидайте`);
    // Логика принятия звонка
  }
}

processCall('Vasya');

// ===============================

function processCall(recepient, onAvalable, onNotAvalable) {
  const isResepientAvalable = Math.random() > 0.5;
  if (!isResepientAvalable) {
    onAvalable(recepient);
    return;
  }
  onNotAvalable(recepient);
}

function takeCall(name) {
  console.log(`Соединяю с ${name}, ожидайте`);
}

function activateAnswerignMachine(name) {
  console.log(`Абонент ${name} недостпен, оставьте сообщение`);
}

function leaveHelloMessage(name) {
  console.log(`Абонент ${name} недоступный, записываем видеосообщение`);
}

processCall('Ann', takeCall, activateAnswerignMachine); //Соединяю с Ann, ожидайте
processCall('Ann', takeCall, leaveHelloMessage); //Абонент Ann недоступный, записываем видеосообщение

// =================================== Абстрагирование ==================

function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

repeatLog(5); //0-4

// =========================

function printValue(value) {
  console.log(value);
}

function prettyValue(value) {
  console.log('Logging value: ', value);
}

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

// Передаем printValue как callback функцию repeat(3, printValue)
repeat(3, printValue); //0-2

// Передадим prettyPrint как callback функцию
repeat(3, prettyValue); //Logging value: 0-2

// ============================= forEach() ==========================

const numbers = [2, 5, 7, 4, 1, 0];

for (let i = 0; i < numbers.length; i++) {
  console.log(`Индекс ${i}, значение ${numbers[i]}`);
}

// Метод перебора через forEach()
numbers.forEach(function (number, index) {
  console.log(`Индекс ${index}, значение ${number}`);
});

// ======================== Cтрелочные функции ====================

function multiply(a, b, c) {
  return a + b + c;
  // Это обычная функция
}

const foo = (a, b, c) => {
  return a + b + c;
  // Это стрелочная функция
};

// ============================= Неявное возвращение ==============

const name = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

const name = (a, b, c) => a + b + c;
console.log(name(3, 4, 5)); //12

// ============================= Псевдомассив arguments ========================

const fn = (...args) => {
  console.log(args);
};

fn(3, 2, 1, 0); //[ 3, 2, 1, 0 ]

// =========================== Стрелочные функции как callback ==================

const array = [3, 5, 8, 9, 10];
array.forEach(function (number, index) {
  console.log(`Индекс ${index}, значение ${number}`);
});

// Анонимная стрелочная функция
array.forEach((number, index) => {
  console.log(`Индекс ${index}, значение ${number}`);
});

// =================

const array = [3, 5, 8, 9, 10];
const logMessage = (number, index) => {
  console.log(`Индекс ${index}, значение ${number}`);
};

array.forEach(logMessage);

// =============================== Императивное программирование ============

// Императивный подход
const array = [3, 5, 8, 9, 10];
const filterArray = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] > 7) {
    filterArray.push(array[i]);
  }
}

console.log(filterArray);

// Декларативный подход
const array = [3, 5, 8, 9, 10];
const filterArray = array.filter(num => num > 7);

console.log(filterArray);

// ===================================== Функция с побочными эффектами =================

const multiply = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * value;
  }
};
const numArr = [4, 7, 1, 4, 10, 22, 50];

multiply(numArr, 2);
// Мутация исходных данных - массива numArr
console.log(numArr); //[ 8, 14, 2, 8, 20, 44, 100]

// =========================== Чистая функция =====================

const multiply = (arr, value) => {
  let newArr = [];
  arr.forEach(element => {
    newArr.push(element * value);
  });
  return newArr;
};

const numArr = [4, 7, 1, 4, 10, 22, 50];
const doubledArr = multiply(numArr, 2);

// Мутация исходных данных не состоялась
console.log(numArr); //[4, 7, 1, 4, 10, 22, 50]
// Функция вернула новый массив с измененными данными
console.log(doubledArr); //[ 8, 14, 2, 8, 20, 44, 100]
