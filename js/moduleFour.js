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
  arr.forEach(num => {
    newArr.push(num * value);
  });
  return newArr;
};

const numArr = [4, 7, 1, 4, 10, 22, 50];
const doubledArr = multiply(numArr, 2);

// Мутация исходных данных не состоялась
console.log(numArr); //[4, 7, 1, 4, 10, 22, 50]
// Функция вернула новый массив с измененными данными
console.log(doubledArr); //[ 8, 14, 2, 8, 20, 44, 100]

// =================================== Метод map() =======================

const planets = ['Earth', 'Venus', 'Jupiter', 'Mars'];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); //[ 'EARTH', 'VENUS', 'JUPITER', 'MARS' ]

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase); //[ 'earth', 'venus', 'jupiter', 'mars' ]

// Оригинальный массив
console.log(planets); //[ 'Earth', 'Venus', 'Jupiter', 'Mars' ]

// ===================================== Массив объектов ===================

const students = [
  {
    name: 'Ann',
    score: 5,
  },
  {
    name: 'Vasya',
    score: 23,
  },
  {
    name: 'Petya',
    score: 1,
  },
  {
    name: 'Ivan',
    score: 45,
  },
  {
    name: 'Polina',
    score: 30,
  },
];
const names = students.map(student => student.name);
console.log(names); //[ 'Ann', 'Vasya', 'Petya', 'Ivan', 'Polina' ]

const scores = students.map(student => student.score);
console.log(scores); //[ 5, 23, 1, 45, 30 ]

// ===================================== Метод flatMap() ====================

const students = [
  {
    name: 'Ann',
    score: 5,
    courses: ['Math', 'Physic'],
  },
  {
    name: 'Vasya',
    score: 23,
    courses: ['Drawing', 'Swimming', 'Math'],
  },
  {
    name: 'Petya',
    score: 1,
    courses: ['Math', 'Flying', 'Drawing'],
  },
  {
    name: 'Ivan',
    score: 45,
    courses: ['Swimming', 'Physic', 'Flying'],
  },
  {
    name: 'Polina',
    score: 30,
    courses: ['Math', 'Physic', 'Swimming', 'Flying', 'Drawing'],
  },
];

students.map(student => student.courses);
const allCourses = students.flatMap(student => student.courses);
// console.table(students.flatMap(student => student.courses));
// ['Math',     'Physic',
// 'Drawing',  'Swimming',
// 'Math',     'Math',
// 'Flying',   'Drawing',
// 'Swimming', 'Physic',
// 'Flying',   'Math',
// 'Physic',   'Swimming',
// 'Flying',   'Drawing']
const uniqueCourses = allCourses.filter((course, idx, arr) => {
  arr.indexOf(course) === idx;
});
console.log(uniqueCourses);

// ================================ Метод filter() =============================

const values = [3, 19, -5, 55, -34, 105, -38];
const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues); //[ 3, 19, 55, 105 ]

const negativeValues = values.filter(value => value < 0);
console.log(negativeValues); //[ -5, -34, -38 ]

const nullValues = values.filter(value => value > 1000);
console.log(nullValues); //[]

// Исходный массив
console.log(values); //[3, 19, -5, 55, -34, 105, -38]

// =======================================

const students = [
  {
    name: 'Ann',
    score: 5,
    courses: ['Math', 'Physic'],
  },
  {
    name: 'Vasya',
    score: 23,
    courses: ['Drawing', 'Swimming', 'Math'],
  },
  {
    name: 'Petya',
    score: 1,
    courses: ['Math', 'Flying', 'Drawing'],
  },
  {
    name: 'Ivan',
    score: 45,
    courses: ['Swimming', 'Physic', 'Flying'],
  },
  {
    name: 'Polina',
    score: 30,
    courses: ['Math', 'Physic', 'Swimming', 'Flying', 'Drawing'],
  },
];

const allCourses = students.flatMap(student => student.courses);
const uniqueCourses = allCourses.filter((course, idx, arr) => {
  return arr.indexOf(course) === idx;
});
console.log(uniqueCourses); //[ 'Math', 'Physic', 'Drawing', 'Swimming', 'Flying' ]

// ======================== Массив объектов =================

const LOW_SCORE = 50;
const HIGH_SCORE = 80;

const students = [
  {
    name: 'Ann',
    score: 55,
  },
  {
    name: 'Vasya',
    score: 83,
  },
  {
    name: 'Petya',
    score: 15,
  },
  {
    name: 'Ivan',
    score: 45,
  },
  {
    name: 'Polina',
    score: 90,
  },
  {
    name: 'Alina',
    score: 64,
  },
];

// Высший балл
const bestScore = students.filter(student => student.score >= HIGH_SCORE);
console.log(bestScore); //[ { name: 'Vasya', score: 83 }, { name: 'Polina', score: 90 } ]

// Средний балл
// const mediumScore = students.filter(student => student.score < HIGH_SCORE && student.score
//   >= LOW_SCORE);
const mediumScore = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(mediumScore); //[ { name: 'Ann', score: 55 }, { name: 'Alina', score: 64 } ]

// Низший балл
const worstScore = students.filter(student => student.score < LOW_SCORE);
console.log(worstScore); //[ { name: 'Petya', score: 15 }, { name: 'Ivan', score: 45 } ]

// ===================================== Метод find() =============================

const colorPeakerOptions = [
  {
    label: 'red',
    color: '#f44336',
  },
  {
    label: 'green',
    color: '#a44336',
  },
  {
    label: 'blue',
    color: '#b44336',
  },
  {
    label: 'pink',
    color: '#c44336',
  },
  {
    label: 'indigo',
    color: '#d44336',
  },
];

colorPeakerOptions.find(option => option.label === 'red');
console.table(colorPeakerOptions.find(option => option.label === 'red')); //{ label: 'red', color: '#f44336' }
colorPeakerOptions.find(option => option.label === 'green');
colorPeakerOptions.find(option => option.label === 'blue');

// ====================== Метод findIndex() ===============================

const colorPeakerOptions = [
  {
    label: 'red',
    color: '#f44336',
  },
  {
    label: 'green',
    color: '#a44336',
  },
  {
    label: 'blue',
    color: '#b44336',
  },
  {
    label: 'pink',
    color: '#c44336',
  },
  {
    label: 'indigo',
    color: '#d44336',
  },
];

colorPeakerOptions.findIndex(option => option.label);
console.log(colorPeakerOptions.findIndex(option => option.label)); //0
colorPeakerOptions.findIndex(option => option.label === 'red');
console.log(colorPeakerOptions.findIndex(option => option.label === 'red')); //0
colorPeakerOptions.findIndex(option => option.label === 'white');
console.log(colorPeakerOptions.findIndex(option => option.label === 'white')); //-1

// =============================== Метод every() =============================

// Все элементы >= 0 - true
[1, 2, 3, 4, 5].every(value => value >= 0); //true

// Все элементы >= 0 - false
[1, 2, 3, 4, 5, -1].every(value => value >= 0); // false

// ================== Массив объектов =================

const fruits = [
  {
    name: 'Apple',
    amount: 25,
  },
  {
    name: 'Pear',
    amount: 0,
  },
  {
    name: 'Banana',
    amount: 42,
  },
  {
    name: 'Grapefruit',
    amount: 4,
  },
];

// Every первое true если только всех фруктов будет болье 0 штук
const allAvailable = fruits.every(fruit => fruit.amount > 0); // false

// Some первое true если хотя бы один фрукт будет больще 0 штук
const someAvailable = fruits.some(fruit => fruit.amount > 0); // true

// =========================== Метод reduce() ================================

const total = [22, 33, 50, 150, 20].reduce((previousValue, number) => {
  return previousValue + number;
}, -100);
console.log(total); // 175

// ======================== Массив объектов =====================

const students = [
  {
    name: 'Ann',
    score: 55,
  },
  {
    name: 'Vasya',
    score: 83,
  },
  {
    name: 'Petya',
    score: 15,
  },
  {
    name: 'Ivan',
    score: 45,
  },
  {
    name: 'Polina',
    score: 90,
  },
  {
    name: 'Alina',
    score: 64,
  },
];

// Название аккумулятора может быть произвольным, это просто параметр функции
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);
const avgScore = totalScore / students.length;

console.log(avgScore.toFixed(1)); //58.7

// ===============================================

const tweets = [
  {
    id: '000',
    likes: 4,
    tags: ['Not JS', 'JS'],
  },
  {
    id: '001',
    likes: 14,
    tags: ['Not JS', 'JS', 'CSS'],
  },
  {
    id: '002',
    likes: 6,
    tags: ['HTML', 'JS'],
  },
  {
    id: '003',
    likes: 22,
    tags: ['Not JS', 'React'],
  },
  {
    id: '004',
    likes: 7,
    tags: ['React', 'CSS', 'HTML'],
  },
];

// Пройдемся по всем элементам коллекции и присвоим значение свойства likes к аккумулятору начального значения, который укажем 0
const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
console.log(likes); // 53

// Может подсчет лайков не одиночная операция, поэтому напишем функцию для подсчета лайков из коллекции
const countLikes = tweets =>
  tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
console.log(countLikes(tweets)); // 53

// ===========
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);
//   // allTags.
//   return allTags;
// }, []);
// console.log(tags);

// =============

const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);
    return allTags;
  }, []);
const tags = getTags(tweets);
console.log(tags);

// Вынесем callback функцию отдельно, а в reduce() передадим ссылку на нее. Это стандартная практика если callback функция достаточно большая
// Если в объекте - аккумуляторе аккум отсутствует свое свойство с ключем tag то создаем ее и записываем ей значение 0
// В другом случае увеличиваем значение на 1

const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }
  acc[tag] += 1;
  return acc;
};

// Начальное значение аккума - это пустой объект
const countTags = tags => tags.reduce(getTagStats, {});
const tagCount = countTags(tags);
console.log(tagCount); // { 'Not JS': 3, JS: 3, CSS: 2, HTML: 2, React: 2 }
