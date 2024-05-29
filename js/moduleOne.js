// 'use strict';

// let a = 10;
// console.log(a);

// //метод количество символов
// let b = 'Hello world'.length;
// console.log(b);

// //метод регистра верхнего и нижнего

// console.log('Hello world'.toUpperCase());
// console.log('Hello world'.toLowerCase());

// // Объявление переменных
// const yearOfBirthd = 2024;
// console.log(yearOfBirthd);

// //yearOfBirthd = 2020; //error
// //console.log(yearOfBirthd);

// console.log(age); //underfind

// age = 14;
// console.log(age);

// let age = 20; //переопределение переменной
// age = 25;
// console.log(age);

// const username = 'Vasya';
// console.log('username is', username);

// const message = 'Hello World'; //Открывает модальное окно с сообщением указанной переменной в alert
// alert(message);

// const username = prompt('Write your name');
// console.log(username);

// const x = 5;
// const y = 10;
// const z = 5;

// console.log('x > y', x > y); //false
// console.log('x < y', x < y); //true
// console.log('x < z', x < z); //false
// console.log('x <= z', x <= z); //true
// console.log('x === y', x === y); //false
// console.log('x === z', x === z); //true
// console.log('x !== y', x !== y); //true
// console.log('x !== z', x !== z); //false

// const valueA = '5';
// console.log(number(valueA)); //5
// console.log(typeof number(valueA)); //number

// const valueB = 'random';
// console.log(Number(valueB));
// console.log(typeof Number(valueB));

// console.log(Number.parseInt('5'));
// console.log(Number.parseInt('5.2asd'));
// console.log(Number.parseInt('15asd'));

// console.log(Number.isNaN(valueB)); //false

// console.log(0.1 + 0.2);

// console.log(0.17 + 0.24);
// console.log((0.17 + 0.24).toFixed(3));

// console.log(Math.ceil(1.2)); //2

// const message = 'JS ' + 'is' + ' awesome';
// console.log(message);

// console.log(1 + '2');

// const guestName = 'Vasya';
// const roomNumber = 123;
// const messageOne =
//   'Welcome ' + guestName + ', your room number is ' + roomNumber + '!';
// console.log(messageOne);
// const messageTwo = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(messageTwo);

// const message = 'Welcome to js';
// console.log(message.length); //13
// console.log('hello world'.length); //11

// const message = 'hello world, welcome to js';
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());

// console.log('SAMSung' === 'samsung'); //false
// console.log('SAMSung' === 'SAMSUNG'); //false

// const BRAND_NAME = 'SAMSUNG';
// const userInput = 'SAMSung';
// const normalizeUppercaseInput = userInput.toUpperCase();
// console.log(userInput); //SAMSung
// console.log(userInput === BRAND_NAME); //false
// console.log(normalizeUppercaseInput); //SAMSUNG
// console.log(normalizeUppercaseInput === BRAND_NAME); //true

// const message = 'Hello World';
// console.log(message.indexOf('Hello')); //0
// console.log(message.indexOf('asd')); //-1

// const message = 'Hello World';
// console.log(message.includes('H')); //true
// console.log(message.includes('h')); //fasle

// const messageOne = 'Hello World.js';
// const messageTwo = 'Hello World.css';
// console.log(messageOne.endsWith('.js')); //true
// console.log(messageTwo.endsWith('.js')); //false

// const fileName = 'script.js';
// const miniJsFileName = fileName.replace('.js', '.min.js');
// console.log(miniJsFileName); //script.min.js

// const cssFileNames = 'file.css, style.css, min.css';
// const miniCssFileNames = cssFileNames.replaceAll('.css', '.min.css');
// console.log(miniCssFileNames); //file.min.css, style.min.css, min.min.css

// const productName = 'Sushi Box';
// console.log(productName.slice(0, 5)); //Sushi
// console.log(productName.slice(0, productName.length)); //Sushi Box

// const age = 50;
// console.log(age > 10 && age < 60); //true && true -> true

// const age = 50;
// console.log(age > 55 && age < 60); //false && true -> false

// console.log(1 && 5); //true && true -- 5
// console.log(5 && 1); //true && true -- 1
// console.log(0 && 2); //false && true -- 0
// console.log(2 && 0); //true && false -- 0
// console.log('' && 'sad'); //false && true -- ""
// console.log('sad' && ''); //true && false -- ""
// console.log('sad' && 'asdaa'); //true && true -- "asdaa"

// const age = 5;
// console.log(age < 10 || age > 20); //true || false -- true
// console.log(age < 3 || age > 4); //false || true -- true
// console.log(age < 3 || age > 20); //false || false -- false

// console.log(!true); //false
// console.log(!false); //true
// console.log(!3); //false
// console.log(!'asd'); //false
// console.log(!0); //true
// console.log(!''); //true
// const isOnline = true;
// const isOffline = !isOnline;

//============== if ================

// let cost = 0;
// const subscribtion = 'pro';

// if (subscribtion === 'pro') {
//   cost = 100;
// }
// console.log(cost); //100

//============== else ================

// let cost = 0;
// const subscribtion = 'free';

// if (subscribtion === 'pro') {
//   cost = 100;
// }

// console.log(cost); //0

//============== if-else ================

// let cost;
// const subscribtion = 'free';

// if (subscribtion === 'pro') {
//   cost = 100;
// } else {
//   cost = 0;
// }
// console.log(cost); //0

//============== else-if ================

// let cost;
// const subscribtion = 'premium';

// if (subscribtion === 'free') {
//   cost = 0;
// } else if (subscribtion === 'pro') {
//   cost = 100;
// } else if (subscribtion === 'premium') {
//   cost = 500;
// } else {
//   console.log('Your price is add');
// }
// console.log(cost); //500

//============== else-if ================

// let type;
// const age = 20;

// if (age >= 18) {
//   type = 'adult';
// } else {
//   type = 'child';
// }

// console.log(type); // "adult"

// const age = 20;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type);

//=========================

// const num1 = 5;
// const num2 = 10;
// let biggerNumber;

// if (num1 > num2) {
//   biggerNumber = num1;
// } else {
//   biggerNumber = num2;
// }
// console.log(biggerNumber); //10

// const num1 = 5;
// const num2 = 10;
// let biggerNumber = num1 < num2 ? num2 : num1;
// console.log(biggerNumber);

//============== switch-case ================

// switch (значение) {
//   case значение:
//     инструкция;
//     breake;

//   case значение:
//     инструкция;
//     breake;

//   default:
//     инструкция;
// }

// let cost;
// const subscribtion = 'premium';

// switch (subscribtion) {
//   case 'free':
//     cost = 0;
//     break;
//   case 'pro':
//     cost = 100;
//     break;
//   case 'premium':
//     cost = 500;
//     break;
//   default:
//     console.log('Some message');
// }
// console.log(cost); //500

// ========================== vars ==========

// const value = 5;

// if (true) {
//   console.log('Block scope: ', value); //5
// }
// console.log('Global scope: ', value); //5

// if (true) {
//   const value = 5;
//   console.log('Block scope: ', value); //5
// }
// console.log('Global scope: ', value); //error

// const global = 'global';

// if (true) {
//   const blockA = 'block A';

//   //Видим глобальную плюс локальную А
//   console.log(global); //'global'
//   console.log(blockA); //'block A'

//   //Переменные blockB и blockC не найдены в доступных областях видимости
//   //Будет ошибка при обращении к переменной
//   console.log(blockB); //error
//   console.log(blockC); //error

//   if (true) {
//     const blockB = 'block B';

//     //Видим глобальную + внешнюю А + локальную В
//     console.log(global); //global
//     console.log(blockA); //block A
//     console.log(blockB); //block B

//     //Переменная blockC не найдена в доступных областях видимости, будет ошибка при обращении к ней
//     console.log(blockC); //error
//   }
// }

// if (true) {
//   const blockC = 'block C';

//   //Видим глобальную + локальную С
//   console.log(global); //global
//   console.log(blockC); //block C

//   //Переменная blockA и blockB не найдены в области видимости, будет ошибка при обращении к ним
//   console.log(blockA); //error
//   console.log(blockB); //error
// }

// //Видим только глобальную
// console.log(global); //global

// //Переменные blockA, blockB, blockC не найдены, будет ошибка при обращении к ним
// console.log(blockA); //error
// console.log(blockB); //error
// console.log(blockC); //error

//============================ while ==============

// let counter = 0;

// while (counter < 10) {
//   console.log('Counter: ', counter);
//   counter += 1;
// }

//=====

// let clientCounter = 18;
// const maxClients = 25;

// while (maxClients >= clientCounter) {
//   console.log('Clients in hotel: ', clientCounter);
//   clientCounter += 1;
// }

//============================ do..while ==============

// let password = '';

// do {
//   password = prompt('Enter your password longer than 4 numbers', '');
// } while (password.length < 5);

// console.log('Your password: ', password);

//============================ for ==============

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

//==========

// const target = 3;
// let summ = 0;

// for (let i = 0; i <= target; i += 1) {
//   summ += i;
// }

// console.log(summ);

//================ Остаток от деления ============

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

//================ Break ============

for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log('Found number 3');
    break;
  }
}

console.log('Lock after for()');

//================ continue ============

const num = 10;

for (let i = 0; i < num; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log('Нечетные i: ', i);
}
