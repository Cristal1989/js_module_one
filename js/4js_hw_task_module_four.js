// ==================================================
// ===================== Task 1 =====================
// ==================================================
//
Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.

Объявлена функция makePizza
Объявлена переменная result
Значение переменной result это строка "Your pizza is being prepared, please wait."
Значение переменной result получено с помощью вызова функции
Объявлена переменная pointer
Значение переменной pointer это ссылка на функцию makePizza

function makePizza() {
  return "Your pizza is being prepared, please wait.";
}

const result = null;
const pointer = null;

//
// ==================================================
// ===================== Task 2 =====================
// ==================================================
//
Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.

Объявлена функция deliverPizza
Объявлена функция makePizza
Объявлена функция makeMessage
Функция makeMessage принимает два параметра, названые согласно задания, pizzaName и callback
Вызов makeMessage("Royal Grand", makePizza) возвращает строку "Pizza Royal Grand is being prepared, please wait..."
Вызов makeMessage("Ultracheese", deliverPizza) возвращает строку "Delivering Ultracheese pizza."


function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}
function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}
function makeMessage(pizzaName) {
  return;
}

//
// ==================================================
// ===================== Task 3 =====================
// ==================================================
//
Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), которая логирует строку "Eating pizza <имя пиццы>".

Объявлена функция makePizza
Функция makePizza принимает два параметра
Вторым аргументом при вызове makePizza("Ultracheese") передана функция eatPizza с единственным параметром pizzaName

function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}
makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});

makePizza("Ultracheese");

//
// ==================================================
// ===================== Task 4 =====================
// ==================================================
//
Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.

Метод order объявляет три параметра
Вызов pizzaPalace.order("Smoked", makePizza, onOrderError) возвращает "Your order is accepted. Cooking pizza Smoked."
Вызов pizzaPalace.order("Four meats", makePizza, onOrderError) возвращает "Your order is accepted. Cooking pizza Four meats."
Вызов pizzaPalace.order("Big Mike", makePizza, onOrderError) возвращает "Error! There is no pizza with a name Big Mike in the assortment."
Вызов pizzaPalace.order("Vienna", makePizza, onOrderError) возвращает "Error! There is no pizza with a name Vienna in the assortment."


const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName) {},
};
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}
function onOrderError(error) {
  return `Error! ${error}`;
}
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);

//
// ==================================================
// ===================== Task 5 =====================
// ==================================================
//
Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

Объявлена функция calculateTotalPrice(orderedItems)
Для перебора массива orderedItems использован метод forEach
Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  for (let i = 0; i < orderedItems.length; i += 1) {
    totalPrice += orderedItems[i];
  }
  return totalPrice;

}
console.log(calculateTotalPrice([12, 85, 37, 4]));

//
// ==================================================
// ===================== Task 6 =====================
// ==================================================
//
Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

Объявлена функция filterArray(numbers, value)
Для перебора массива numbers использован метод forEach
Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

function filterArray(numbers, value) {
  const filteredNumbers = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]);
    }
  }
  return filteredNumbers;
}

//
// ==================================================
// ===================== Task 7 =====================
// ==================================================
//
Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

Объявлена функция getCommonElements(firstArray, secondArray)
Для перебора параметра (массива) использован метод forEach
Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

  for (let i = 0; i < firstArray.length; i += 1) {
    if (secondArray.includes(firstArray[i])) {
      commonElements.push(firstArray[i]);
    }
  }

  return commonElements;
}

//
// ==================================================
// ===================== Task 8 =====================
// ==================================================
//
Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

Объявлена переменная calculateTotalPrice
Переменной calculateTotalPrice присвоена стрелочная функция с параметрами (quantity, pricePerItem)
Вызов calculateTotalPrice(5, 100) возвращает 500
Вызов calculateTotalPrice(8, 60) возвращает 480
Вызов calculateTotalPrice(3, 400) возвращает 1200
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

function calculateTotalPrice(quantity, pricePerItem) {
  return quantity * pricePerItem;
}

//
// ==================================================
// ===================== Task 9 =====================
// ==================================================
//
Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.

Объявлена переменная calculateTotalPrice
Переменной calculateTotalPrice присвоена стрелочная функция с параметрами (quantity, pricePerItem)
В функции использован неявный возврат
Вызов calculateTotalPrice(5, 100) возвращает 500
Вызов calculateTotalPrice(8, 60) возвращает 480
Вызов calculateTotalPrice(3, 400) возвращает 1200
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};

//
// ==================================================
// ===================== Task 10 ====================
// ==================================================
//
Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.

Объявлена переменная calculateTotalPrice
Переменной calculateTotalPrice присвоена стрелочная функция с параметром (orderedItems)
Для перебора массива orderedItems использован метод forEach
Коллбек для метода forEach это стрелочная функция
Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (item) {
    totalPrice += item;
  });

  return totalPrice;
}

//
// ==================================================
// ===================== Task 11 ====================
// ==================================================
//
Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

Объявлена переменная filterArray
Переменной filterArray присвоена стрелочная функция с параметрами (numbers, value)
Для перебора массива numbers использован метод forEach
Коллбек для метода forEach это стрелочная функция
Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  return filteredNumbers;
}

//
// ==================================================
// ===================== Task 12 ====================
// ==================================================
//
Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

-Объявлена переменная getCommonElements.

Переменной getCommonElements присвоена стрелочная функция с параметрами (firstArray, secondArray)
Для перебора массива firstArray использован метод forEach
Коллбек для метода forEach это стрелочная функция
Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

  firstArray.forEach(function (element) {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });
  return commonElements;
}

//
// ==================================================
// ===================== Task 13 =====================
// ==================================================
//
Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

Объявлена функция changeEven(numbers, value)
Функция changeEven не изменяет значение параметра numbers
Вызов changeEven([1, 2, 3, 4, 5], 10) возвращает новый массив [1, 12, 3, 14, 5]
Вызов changeEven([2, 8, 3, 7, 4, 6], 10) возвращает новый массив [12, 18, 3, 7, 14, 16]
Вызов changeEven([17, 24, 68, 31, 42], 100) возвращает новый массив [17, 124, 168, 31, 142]
Вызов changeEven([44, 13, 81, 92, 36, 54], 100) возвращает новый массив [144, 13, 81, 192, 136, 154]
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

function changeEven(numbers, value) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = numbers[i] + value;
    }
  }
}

//
// ==================================================
// ===================== Task 14 =====================
// ==================================================
//
Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().

Объявлена переменная planets
Значение переменной planets это массив ["Earth", "Mars", "Venus", "Jupiter"]
Объявлена переменная planetsLengths
Значение переменной planetsLengths это массив [5, 4, 5, 7]
Для перебора массива планет использован метод map()

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsLengths = planets;

//
// ==================================================
// ===================== Task 15 ====================
// ==================================================
//
Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.

Объявлена переменная books
Значение переменной books это массив
Объявлена переменная titles
Значение переменной titles это массив ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
Для перебора массива books используется метод map() как чистая функция

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const titles = books;

//
// ==================================================
// ===================== Task 16 ====================
// ==================================================
//
Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.

Объявлена переменная books
Значение переменной books это массив объектов
Объявлена переменная genres
Значение переменной genres это массив [ "adventure", "history", "fiction", "horror", "mysticism" ]
Для перебора массива books используется метод flatMap()

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];

const genres = books;

//
// ==================================================
// ===================== Task 17 ====================
// ==================================================
//
Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.

Объявлена переменная getUserNames

Переменной getUserNames присвоена стрелочная функция с параметром (users).

Для перебора параметра users используется метод map()

Вызов функции с указанным массивом пользователей возвращает массив ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


const getUserNames = users => {
    

  };
//
// ==================================================
// ===================== Task 18 ====================
// ==================================================
//
Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.

Объявлена переменная getUserNames
Переменной getUserNames присвоена стрелочная функция с параметром (users)
Для перебора параметра users используется метод map()
Вызов функции с указанным массивом пользователей возвращает массив ["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


const getUserEmails = users => {
    

  };
//
// ==================================================
// ===================== Task 19 ====================
// ==================================================
//
Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().

Объявлена переменная numbers
Значение переменной numbers это массив [17, 24, 82, 61, 36, 18, 47, 52, 73]
Объявлена переменная evenNumbers
Значение переменной evenNumbers это массив [24, 82, 36, 18, 52]
Объявлена переменная oddNumbers
Значение переменной oddNumbers это массив [17, 61, 47, 73]
Для перебора массива numbers использован метод filter()

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers;
const oddNumbers = numbers;
//
// ==================================================
// ===================== Task 20 ====================
// ==================================================
//
Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

Объявлена переменная books
Значение переменной books это массив объектов
Объявлена переменная allGenres
Значение переменной allGenres это массив ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
Объявлена переменная uniqueGenres
Значение переменной uniqueGenres это массив ["adventure", "history", "fiction", "mysticism", "horror"]
Для вычисления значения переменной allGenders использован метод flatMap()
Для вычисления значения переменной uniqueGenres использован метод filter()

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
const allGenres = books;
const uniqueGenres = allGenres;

//
// ==================================================
// ===================== Task 21 ====================
// ==================================================
//
Используя метод filter() дополни код так, чтобы:

В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.
Объявлена переменная books
Значение переменной books это массив объектов
Объявлена переменная MIN_RATING
Значение переменной MIN_RATING это число 8
Объявлена переменная AUTHOR
Значение переменной AUTHOR это строка "Bernard Cornwell"
Объявлена переменная topRatedBooks
Значение переменной topRatedBooks это массив книг с рейтингов выше 8
Объявлена переменная booksByAuthor
Значение переменной booksByAuthor это массив книг автор которых "Bernard Cornwell"
Для перебора массива books использован метод filter()

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books;
const booksByAuthor = books;

//
// ==================================================
// ===================== Task 22 ====================
// ==================================================
//
Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.

Объявлена переменная getUsersWithEyeColor
Переменной getUsersWithEyeColor присвоена стрелочная функция с параметрами (users, color)
Для перебора параметра users используется метод filter()
Если значение параметра color это "blue", функция возвращает массив объектов пользователей с именами Moore Hensley, Sharlene Bush и Carey Barr
Если значение параметра color это "green", функция возвращает массив объектов пользователей с именами Ross Vazquez и Elma Head
Если значение параметра color это "brown", функция возвращает массив объектов пользователей с именами Blackburn Dotson и Sheree Anthony
Если значение параметра color это любая другая строка, функция возвращает пустой массив
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


const getUsersWithEyeColor = (users, color) => {
};

//
// ==================================================
// ===================== Task 23 ====================
// ==================================================
//
Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.

Объявлена переменная getUsersWithAge
Переменной getUsersWithAge присвоена стрелочная функция с параметрами (users, minAge, maxAge)
Для перебора параметра users используется метод filter()
Если значение параметров minAge и maxAge равны 20 и 30 соотвественно, функция возвращает массив объектов пользователей с именами Ross Vazquez, Elma Head и Carey Barr
Если значение параметров minAge и maxAge равны 30 и 40 соотвественно, функция возвращает массив объектов пользователей с именами Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony
Если значение параметров minAge и maxAge равны 80 и 100 соотвественно, функция возвращает пустой массив
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


const getUsersWithAge = (users, minAge, maxAge) => {
};

//
// ==================================================
// ===================== Task 24 ====================
// ==================================================
//
Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.

Объявлена переменная getUsersWithFriend
Переменной getUsersWithFriend присвоена стрелочная функция с параметрами (users, friendName)
Для перебора параметра users используется метод filter()
Если значение параметра friendName это строка "Briana Decker", функция возвращает массив объектов пользователей с именами Sharlene Bush и Sheree Anthony
Если значение параметра friendName это строка "Goldie Gentry", функция возвращает массив объектов пользователей с именами Elma Head и Sheree Anthony
Если значение параметра friendName это строка "Adrian Cross", функция возвращает пустой массив
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


const getUsersWithFriend = (users, friendName) => {   
};

//
// ==================================================
// ===================== Task 25 ====================
// ==================================================
//
Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

Объявлена переменная getFriends
Переменной getFriends присвоена стрелочная функция с параметром (users)
Вызов функции с указанным массивом пользователей возвращает массив ["Sharron Pace", "Briana Decker", "Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


const getFriends = (users) => {   
};

//
// ==================================================
// ===================== Task 26 ====================
// ==================================================
//
Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.

Объявлена переменная getActiveUsers Переменной getActiveUsers присвоена стрелочная функция с параметром users
Для перебора параметра users используется метод filter()
Вызов функции с указанным массивом пользователей возвращает массив объектов пользователей с именами Sharlene Bush, Elma Head, Carey Barr и Sheree Anthony
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


const getActiveUsers = (users) => {   
};

//
// ==================================================
// ===================== Task 27 ====================
// ==================================================
//
Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.

-Объявлена переменная getInactiveUsers.

Переменной getInactiveUsers присвоена стрелочная функция с параметром users
Для перебора параметра users используется метод filter()
Вызов функции с указанным массивом пользователей возвращает массив объектов пользователей с именами Moore Hensley, Ross Vazquez и Blackburn Dotson
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


const getInactiveUsers = (users) => {   
};

//
// ==================================================
// ===================== Task 28 ====================
// ==================================================
//
Используя метод find() дополни код так, чтобы:

В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.
Объявлена переменная books
Значение переменной books это массив
Объявлена переменная BOOK_TITLE
Значение переменной BOOK_TITLE это строка "The Dream of a Ridiculous Man"
Объявлена переменная AUTHOR
Значение переменной AUTHOR это строка "Robert Sheckley"
Объявлена переменная bookWithTitle
Значение переменной bookWithTitle это объект книги с названием выше "The Dream of a Ridiculous Man"
Объявлена переменная bookByAuthor
Значение переменной bookByAuthor это объект книги автора "Robert Sheckley"
Для перебора массива books использован метод find()

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR = 'Robert Sheckley';


const bookWithTitle = books;
const bookByAuthor = books;


//
// ==================================================
// ===================== Task 29 ====================
// ==================================================
//
Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого (свойство email) совпадает со значением параметра email.

Объявлена функция getUserWithEmail(users, email)

Для перебора параметра users используется метод find()

Если значение параметра email это "shereeanthony@kog.com", функция возвращает объект пользователя с именем Sheree Anthony

Если значение параметра email это "elmahead@omatom.com", функция возвращает объект пользователя с именем Elma Head

Если значение параметра email это "blackburndotson@furnigeer.com", функция возвращает объект пользователя с именем Blackburn Dotson

Если в массиве users нет пользователя с почтой из параметра email, функция возвращает undefined

Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


const getUserWithEmail = (users, email) => {   
};

//
// ==================================================
// ===================== Task 30 ====================
// ==================================================
//
Используя метод every() дополни код так, чтобы:

В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.
Объявлена переменная firstArray
Значение переменной firstArray это массив [26, 94, 36, 18]
Объявлена переменная secondArray
Значение переменной secondArray это массив [17, 61, 23]
Объявлена переменная thirdArray
Значение переменной thirdArray это массив [17, 26, 94, 61, 36, 23, 18]
Объявлена переменная eachElementInFirstIsEven
Значение переменной eachElementInFirstIsEven это буль true
Объявлена переменная eachElementInFirstIsOdd
Значение переменной eachElementInFirstIsOdd это буль false
Объявлена переменная eachElementInSecondIsEven
Значение переменной eachElementInSecondIsEven это буль false
Объявлена переменная eachElementInSecondIsOdd
Значение переменной eachElementInSecondIsOdd это буль true
Объявлена переменная eachElementInThirdIsEven
Значение переменной eachElementInThirdIsEven это буль false
Объявлена переменная eachElementInThirdIsOdd
Значение переменной eachElementInThirdIsOdd это буль false
Для перебора массивов использован метод every()

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];


const eachElementInFirstIsEven = firstArray;
const eachElementInFirstIsOdd = firstArray;

const eachElementInSecondIsEven = secondArray;
const eachElementInSecondIsOdd = secondArray;

const eachElementInThirdIsEven = thirdArray;
const eachElementInThirdIsOdd = thirdArray;
//
// ==================================================
// ===================== Task 31 ====================
// ==================================================
//
Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.

Объявлена переменная isEveryUserActive
Переменной isEveryUserActive присвоена стрелочная функция с параметром (users)
Для перебора параметра users используется метод every()
Вызов функции с указанным массивом пользователей возвращает false
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


const isEveryUserActive = (users) => {   
};

//
// ==================================================
// ===================== Task 32 ====================
// ==================================================
//
Используя метод some() дополни код так, чтобы:

В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.
Объявлена переменная firstArray
Значение переменной firstArray это массив [26, 94, 36, 18]
Объявлена переменная secondArray
Значение переменной secondArray это массив [17, 61, 23]
Объявлена переменная thirdArray
Значение переменной thirdArray это массив [17, 26, 94, 61, 36, 23, 18]
Объявлена переменная anyElementInFirstIsEven
Значение переменной anyElementInFirstIsEven это буль true
Объявлена переменная anyElementInFirstIsOdd
Значение переменной anyElementInFirstIsOdd это буль false
Объявлена переменная anyElementInSecondIsEven
Значение переменной anyElementInSecondIsEven это буль false
Объявлена переменная anyElementInSecondIsOdd
Значение переменной anyElementInSecondIsOdd это буль true
Объявлена переменная anyElementInThirdIsEven
Значение переменной anyElementInThirdIsEven это буль true
Объявлена переменная anyElementInThirdIsOdd
Значение переменной anyElementInThirdIsOdd это буль true
Для перебора массивов использован метод some()


const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];


const anyElementInFirstIsEven = firstArray;
const anyElementInFirstIsOdd = firstArray;

const anyElementInSecondIsEven = secondArray;
const anyElementInSecondIsOdd = secondArray;

const anyElementInThirdIsEven = thirdArray;
const anyElementInThirdIsOdd = thirdArray;

//
// ==================================================
// ===================== Task 33 ====================
// ==================================================
//
Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.

Объявлена функция isAnyUserActive(users)
Для перебора параметра users используется метод some()
Вызов функции с указанным массивом пользователей возвращает true
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


const isAnyUserActive = users => {   
};

//
// ==================================================
// ===================== Task 34 ====================
// ==================================================
//
Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.

Объявлена переменная players
Значение переменной players это объект игроков с игровым временем каждого
Объявлена переменная playtimes
Значение переменной playtimes это массив [1270, 468, 710, 244]
Объявлена переменная totalPlayTime
Значение переменной totalPlayTime это число 2692
Для перебора массива playtimes используется метод reduce()
Объявлена переменная averagePlayTime
Значение переменной averagePlayTime это число 673

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes;
const averagePlayTime = totalPlayTime / playtimes.length;
//
// ==================================================
// ===================== Task 35 ====================
// ==================================================
//
Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).

Объявлена переменная players
Значение переменной players это массив объектов игроков
Объявлена переменная totalAveragePlaytimePerGame
Значение переменной totalAveragePlaytimePerGame это число 1023
Для перебора массива players используется метод reduce()

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
const totalAveragePlaytimePerGame = players;

//
// ==================================================
// ===================== Task 36 ====================
// ==================================================
//
Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.

Объявлена переменная calculateTotalBalance
Переменной calculateTotalBalance присвоена стрелочная функция с параметром (users)
Для перебора параметра users используется метод reduce()
Вызов функции с указанным массивом пользователей возвращает число 20916
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


const calculateTotalBalance = users => {   
};

//
// ==================================================
// ===================== Task 37 =====================
// ==================================================
//
Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.

Объявлена переменная getTotalFriendCount
Переменной getTotalFriendCount присвоена стрелочная функция с параметром (users)
Для перебора параметра users используется метод reduce()
Вызов функции с указанным массивом пользователей возвращает число 14
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


const getTotalFriendCount = users => {   
};

//
// ==================================================
// ===================== Task 38 =====================
// ==================================================
//
Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.

Объявлена переменная releaseDates
Значение переменной releaseDates это массив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
Объявлена переменная authors
Значение переменной authors это массив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
Объявлена переменная ascendingReleaseDates
Значение переменной ascendingReleaseDates это массив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
Объявлена переменная alphabeticalAuthors
Значение переменной alphabeticalAuthors это массив ["Bernard Cornwell", "Tanith Lee", "Robert Sheckley", "Fyodor Dostoevsky"]
Использован метод sort()

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];

const ascendingReleaseDates = releaseDates;
const alphabeticalAuthors = authors;

//
// ==================================================
// ===================== Task 39 ====================
// ==================================================
//
Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.

Объявлена переменная releaseDates
Значение переменной releaseDates это массив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
Объявлена переменная ascendingReleaseDates
Значение переменной ascendingReleaseDates это массив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
Объявлена переменная descendingReleaseDates
Значение переменной descendingReleaseDates это массив [2016, 2012, 2008, 1997, 1984, 1973, 1967]
Использован метод sort()

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];


const ascendingReleaseDates = releaseDates;
const descendingReleaseDates = releaseDates;
//
// ==================================================
// ===================== Task 40 ====================
// ==================================================
//
Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.

Объявлена переменная authors
Значение переменной authors это массив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"]
Объявлена переменная authorsInAlphabetOrder
Значение переменной authorsInAlphabetOrder это массив ["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
Объявлена переменная authorsInReversedOrder
Значение переменной authorsInReversedOrder это массив ["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]
Использован метод sort()

const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];

const authorsInAlphabetOrder = authors;
const authorsInReversedOrder = authors;

//
// ==================================================
// ===================== Task 41 ====================
// ==================================================
//
Дополни код так, чтобы:

В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.
Объявлена переменная books
Значение переменной books это исходный массив объектов книг
Объявлена переменная sortedByAuthorName
Значение переменной sortedByAuthorName это массив книг отсортированный по имени автора в алфавитном порядке
Объявлена переменная sortedByReversedAuthorName
Значение переменной sortedByReversedAuthorName это массив книг отсортированный по имени автора в обратном алфавитном порядке
Объявлена переменная sortedByAscendingRating
Значение переменной sortedByAscendingRating это массив книг отсортированный по возрастанию рейтинга
Объявлена переменная sortedByDescentingRating
Значение переменной sortedByDescentingRating это массив книг отсортированный по убыванию рейтинга
Для перебора массива books используется метод sort()

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const sortedByAuthorName = books;
const sortedByReversedAuthorName = books;
const sortedByAscendingRating = books;
const sortedByDescentingRating = books;

//
// ==================================================
// ===================== Task 42 ====================
// ==================================================
//
Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).

Объявлена переменная sortByAscendingBalance
Переменной sortByAscendingBalance присвоена стрелочная функция с параметром (users)
Значение параметра users не изменяется
Вызов функции с указанным массивом пользователей возвращает новый массив пользователей отсортированный по возрастанию их баланса
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
Для перебора параметра users использован метод sort()


const sortByAscendingBalance = users => {
};

//
// ==================================================
// ===================== Task 43 ====================
// ==================================================
//
Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).

Объявлена переменная sortByDescendingFriendCount
Переменной sortByDescendingFriendCount присвоена стрелочная функция с параметром (users)
Значение параметра users не изменяется
Для перебора параметра users использован метод sort()
Вызов функции с указанным массивом пользователей возвращает новый массив пользователей отсортированный по убыванию количества их друзей
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


const sortByDescendingFriendCount = users => {   
};

//
// ==================================================
// ===================== Task 44 ====================
// ==================================================
//
Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.

Объявлена переменная sortByName
Переменной sortByName присвоена стрелочная функция с параметром (users)
Значение параметра users не изменяется
Для перебора параметра users использован метод sort()
Вызов функции с указанным массивом пользователей возвращает новый массив пользователей отсортированный по имени в алфавитном порядке
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


const sortByName = users => {   
};

//
// ==================================================
// ===================== Task 45 ====================
// ==================================================
//
Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

Объявлена переменная books
Значение переменной books это исходный массив объектов
Объявлена переменная MIN_BOOK_RATING
Значение переменной MIN_BOOK_RATING это число 8
Объявлена переменная names
Значение переменной names это массив ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
Нет объявленых переменных кроме books, MIN_BOOK_RATING и names
Используется цепочка методов filter, map, sort

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
const names = books;

//
// ==================================================
// ===================== Task 46 ====================
// ==================================================
//
Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).

Объявлена переменная getNamesSortedByFriendCount
Переменной getNamesSortedByFriendCount присвоена стрелочная функция с параметром (users)
В теле функции используется цепочка методов
Значение параметра users не изменяется
Вызов функции с указанным массивом пользователей возвращает массив ["Moore Hensley", "Sharlene Bush", "Elma Head", "Sheree Anthony", "Ross Vazquez", "Carey Barr", "Blackburn Dotson"]
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


const getNamesSortedByFriendCount = users => {   
};

//
// ==================================================
// ===================== Task 47 ====================
// ==================================================
//
Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .

Объявлена переменная getSortedFriends
Переменной getSortedFriends присвоена стрелочная функция с параметром (users)
В теле функции используется цепочка методов в правильном порядке
Значение параметра users не изменяется
Вызов функции с указанным массивом пользователей возвращает массив ["Adrian Cross", "Aisha Tran", "Briana Decker", "Eddie Strong", "Goldie Gentry", "Jacklyn Lucas", "Jordan Sampson", "Linda Chapman", "Marilyn Mcintosh", "Naomi Buckner", "Padilla Garrison", "Sharron Pace", "Solomon Fokes"]
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


const getSortedFriends = users => {   
};

//
// ==================================================
// ===================== Task 48 ====================
// ==================================================
//
Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.

Объявлена переменная getTotalBalanceByGender
Переменной getTotalBalanceByGender присвоена стрелочная функция с параметрами (users, gender)
В теле функции используется цепочка методов в правильном порядке
Значение параметра users не изменяется
Если значение параметра gender это строка "male", функция возвращает число 12053
Если значение параметра gender это строка "female", функция возвращает число 8863
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


const getSortedFriends = users => {   
};

//
//

