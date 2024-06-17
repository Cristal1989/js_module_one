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
