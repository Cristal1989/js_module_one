// ======== massive =======

// const clients = ['Vasya', 'Ann', 'Polya'];
// console.log(clients[0], clients[2]);
// console.log(clients[1]);
// console.log(clients[2]);

// ========= Изменение элемента массива========

// const clients = ['Vasya', 'Ann', 'Polya'];
// clients[0] = 'Petya';
// clients[1] = 'Vasya';
// console.log(clients);

// ================= Определение последнего элемента массива ===========

// const clients = ['Vasya', 'Ann', 'Polya'];
// const lastElement = clients.length - 1;
// console.log(lastElement); //2
// console.log(clients[lastElement]); //Polya

// ================== Итерация по массиву =================

// const clients = ['Vasya', 'Ann', 'Polya'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

//=================== for..of ============

// const clients = ['Vasya', 'Ann', 'Polya'];

// for (client of clients) {
//   console.log(client);
// }

// const string = 'JS';

// for (const character of string) {
//   console.log(character);
// }

// ====================== break continue massive ================

// const clients = ['Vasya', 'Ann', 'Polya'];
// const clietsNameFind = 'Ann';
// let message;

// for (client of clients) {
//   //На каждой итерации будет проверять совпадает ли элемент массива с именем клиента, если совпадает, запишем в message
//   //Про успех и работу break чтобы дальше не искать

//   if (client === clietsNameFind) {
//     message = 'Client found';
//     break;
//   }

//   //Если они не совпадают записываем message об отсутствии имени

//   message = 'Client not found';
// }
// console.log(message);

// ==============

// const clients = ['Vasya', 'Ann', 'Polya'];
// const clietsNameFind = 'Ann';
// let message = 'Client not found';

// for (const client of clients) {
//   if (client === clietsNameFind) {
//     message = 'Client found';
//     break;
//   }
//   //Если не совпадает, то на этой итерации ничего не делается
// }
// console.log(message);

// ===================== Поиск большего числа

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// //Для чисел меньше порогового значения срабатывает continue. Выполнение тела прекращается и управление передается на след итерацию

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число больше ${threshold} : ${numbers[i]}`);
// }

// ====================== Присвоение по ссылке и значению ======

// let a = 5;

// //Присвоение по значению в памяти будет создана еще 1 ячейка, в которую будет скопировано значение 5

// let b = a;
// console.log(a); //5
// console.log(b); //5

// //Изменим значение a

// a = 10;
// console.log(a); //10

// //Значение b не изменилось поскольку это отдельная копия

// console.log(b); //5

// ===================== Сложные типы

// const a = ['Ann'];

// //Поскольку а это массив в b записывается ссылка на уже существующий массив в памяти. Теперь a и b указывают на один и тот же массив

// const b = a;
// console.log(a); //["Ann"]
// console.log(b); //["Ann"]

// //Изменим массив - добавим еще 1 элемент, используя указатель из а

// a.push('Vasya');
// console.log(a); //[ 'Ann', 'Vasya' ]

// //b так же изменилась, потому что b как и а просто содержит ссылку на то же место в памяти

// console.log(b); //[ 'Ann', 'Vasya' ]

// //Результат повторяется

// b.push('Petya');
// console.log(a); //['Ann', 'Vasya', 'Petya']
// console.log(b); //[ 'Ann', 'Vasya', 'Petya']

// =================== Методы массивов ====================

// ==================== Метод split ============

const name = 'Mango';
console.log(name.split('')); //[ 'M', 'a', 'n', 'g', 'o' ]

const message = 'JS - is awesome';
console.log(message.split(' ')); //[ 'JS', '-', 'is', 'awesome' ]

// ====================== Метод join ==============

const message = ['JS', '-', 'is', 'awesome'];
console.log(message.join('')); //JS-isawesome
console.log(message.join(' ')); //JS - is awesome
console.log(message.join('-')); //JS---is-awesome

// ====================== Метод indexOf ==============

const clients = ['Ann', 'Petya', 'Vasya', 'Polina'];
console.log(clients.indexOf('Vasya')); //2
console.log(clients.indexOf('Ignat')); //-1

// ====================== Метод includes ==============

const clients = ['Ann', 'Petya', 'Vasya', 'Polina'];
console.log(clients.includes('Ann')); //true
console.log(clients.includes('Ignat')); //false

// ==================

const fruit = 'Apple';

if (fruit === 'Apple' || fruit === 'Strawberry') {
  console.log('It is a red fruit');
}
// ==========
const fruit = 'Apple';

if (
  fruit === 'Apple' ||
  fruit === 'Strawberry' ||
  fruit === 'Cherry' ||
  fruit === 'Cranberries'
) {
  console.log('It is a red fruit');
}

// ============

const redFruits = ['Apple', 'Strawberry', 'Cherry', 'Cranberries'];
const fruit = 'Cherry';

const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
  console.log(`${fruit} is a red fruit`); //Cherry
}

// ====================== Метод push ==============

const numbers = [];

numbers.push(1);
console.log(numbers); //[ 1 ]

numbers.push(2);
console.log(numbers); //[ 1, 2 ]

numbers.push(3);
console.log(numbers); //[ 1, 2, 3 ]

numbers.push(4);
console.log(numbers); //[ 1, 2, 3, 4 ]

numbers.push(5);
console.log(numbers); //[ 1, 2, 3, 4, 5 ]

numbers.push(6);
console.log(numbers); //[ 1, 2, 3, 4, 5, 6 ]

// ====================== Метод pop ==============

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.pop());
console.log(numbers); //[ 1, 2, 3, 4 ]

console.log(numbers.pop());
console.log(numbers); //[ 1, 2, 3 ]

console.log(numbers.pop());
console.log(numbers); //[ 1, 2 ]

console.log(numbers.pop());
console.log(numbers); //[1]

console.log(numbers.pop());
console.log(numbers); //[]

// ====================== Метод slice ==============

const clients = ['Ann', 'Petya', 'Vasya', 'Polina'];

console.log(clients.slice(1, 3)); //[ 'Petya', 'Vasya' ]

const clients = ['Ann', 'Petya', 'Vasya', 'Polina'];

console.log(clients.slice(-2)); //[ 'Vasya', 'Polina' ]

// ====================== Метод splice ==============

const scores = [1, 2, 3, 4, 5];

// Удаляем три элемента массива начиная с первого элемента (index 0)
const deleteScores = scores.splice(0, 3);

// Теперь массив scores содержит два элемента
console.log(scores); // [ 4, 5 ]

// А массив deleteScores содержит три удаленных элементов
console.log(deleteScores); // [ 1, 2, 3 ]

// =================

const colors = ['red', 'green', 'blue'];
colors.splice(2, 0, 'black');
console.log(colors); //[ 'red', 'green', 'black', 'blue' ]

// ============

const colors = ['red', 'green', 'blue'];
colors.splice(1, 0, 'yellow', 'pink');
console.log(colors); //[ 'red', 'yellow', 'pink', 'green', 'blue' ]

// ====================================

const languages = ['Js', 'C++', 'C', 'C#', 'Java'];

//Заменяем элемент с индексом 1 на новый
languages.splice(1, 1, 'Pyton');
console.log(languages); //[ 'Js', 'Pyton', 'C', 'C#', 'Java' ]

// Заменяем один элемент с индексом 2 на несколько
languages.splice(2, 1, 'Swift', 'Go');
console.log(languages); //[ 'Js', 'Pyton', 'Swift', 'Go', 'C#', 'Java' ]

// ====================== Метод concat ==============

const oldClients = ['Vasya', 'Petya', 'Ann', 'Jora'];
const newClients = ['Polna', 'Max'];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); //[ 'Vasya', 'Petya', 'Ann', 'Jora', 'Polna', 'Max' ]

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); //[ 'Polna', 'Max', 'Vasya', 'Petya', 'Ann', 'Jora' ]

console.log(oldClients); //['Vasya', 'Petya', 'Ann', 'Jora'];
console.log(newClients); //['Polna', 'Max'];

// ============================ Функции ===============

// 1. Объявление функции multiply
function multiply() {
  // тело функции
  console.log('This is decloration function multiply');
}

// 2. Вызов фунции multiply
multiply(); //This is decloration function multiply
multiply(); //This is decloration function multiply
multiply(); //This is decloration function multiply
