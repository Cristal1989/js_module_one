//=========================== Part 2 =================

//=============================================================|
//========================== Task 01 ==========================|
//=============================================================|

//Запиши условие в инструкции if так, чтобы функция работала правильно.

//Объявлена функция checkAge(age).
//В выражении проверки возраста использован оператор >=
//Вызов checkAge(20) возвращает "You are an adult"
//Вызов checkAge(8) возвращает "You are a minor"
//Вызов checkAge(14) возвращает "You are a minor"
//Вызов checkAge(38) возвращает "You are an adult"
//В теле функции есть только одна инструкция if
//В теле функции нет инструкции else или else if

function checkAge(age) {
  let message;
  if (age >= 18) {
    return (message = 'You are an adult');
  }
  return (message = 'You are a minor');
}
console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(14));
console.log(checkAge(38));

//=============================================================|
//========================== Task 02 ==========================|
//=============================================================|

//Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

//Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:

//удали переменную message
//удали else
//код должен работать так же, как и до оптимизации
//Объявлена функция checkPassword(password)
//Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
//Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
//Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === ADMIN_PASSWORD) {
    return (message = 'Welcome!');
  }
  return (message = 'Access denied, wrong password!');
}
console.log(checkPassword('mangohackzor'));
console.log(checkPassword('polyhax'));
console.log(checkPassword('jqueryismyjam'));

//=============================================================|
//========================== Task 03 ==========================|
//=============================================================|

//Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.

//available - доступное количество товаров на складе
//ordered - количество единиц товара в заказе
//Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

//Объявлена функция checkStorage(available, ordered)
//Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
//Вызов checkStorage(100, 130) возвращает "Your order is too large, not enough goods in stock!"
//Вызов checkStorage(70, 0) возвращает "Your order is empty!"
//Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
//Вызов checkStorage(200, 250) возвращает "Your order is too large, not enough goods in stock!"
//Вызов checkStorage(150, 0) возвращает "Your order is empty!"

function checkStorage(available, ordered) {
  let message;
  if (ordered === 0) {
    return (message = 'Your order is empty!');
  } else if (ordered > available) {
    return (message = 'Your order is too large, not enough goods in stock!');
  }
  return (message = 'The order is accepted, our manager will contact you');
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));

//=============================================================|
//========================== Task 04 ==========================|
//=============================================================|

//Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".

//Объявлена переменная fruits
//Значение переменной fruits это массив ["apple", "plum", "pear", "orange"]

//=============================================================|
//========================== Task 05 ==========================|
//=============================================================|

//Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.

//Имя переменной	Значение переменной
//firstElement	первый элемент массива
//secondElement	второй элемент массива
//lastElement	последний элемент массива
//Объявлена переменная firstElement
//Значение переменной firstElement это строка "apple"
//Объявлена переменная secondElement
//Значение переменной secondElement это строка "plum"
//Объявлена переменная lastElement
//Значение переменной lastElement это строка "orange"

const fruits = ['apple', 'plum', 'pear', 'orange'];
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[fruits.length - 1];

//=============================================================|
//========================== Task 06 ==========================|
//=============================================================|

//Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".

//Объявлена переменная fruits
//Значение переменной fruits это массив ["apple", "peach", "pear", "banana"]

const fruits = ['apple', 'plum', 'pear', 'orange'];
fruits.splice(1, 1, 'peach');
fruits.splice(3, 1, 'banana');
console.log(fruits);

//=============================================================|
//========================== Task 07 ==========================|
//=============================================================|

//Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

//Объявлена переменная fruitsArrayLength
//Значение переменной fruitsArrayLength это число 4

const fruits = ['apple', 'peach', 'pear', 'banana'];
const fruitsArrayLength = fruits.length;
console.log(fruitsArrayLength);

//=============================================================|
//========================== Task 08 ==========================|
//=============================================================|

//Имя переменной	      Ожидаемое значение
//lastElementIndex	    Индекс последнего элемента масcива fruits через длина_массива - 1
//lastElement	          Значение последнего элемента массива

//Объявлена переменная lastElementIndex
//Значение переменной lastElementIndex это число 3
//Объявлена переменная lastElement
//Значение переменной lastElement это строка "banana"

const fruits = ['apple', 'peach', 'pear', 'banana'];
const lastElementIndex = fruits.length - 1;
const lastElement = fruits.splice(3, 1);
console.log(lastElementIndex);
console.log(lastElement);

//=============================================================|
//========================== Task 09 ==========================|
//=============================================================|

//Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

//Объявлена функция getExtremeElements(array)
//Вызов getExtremeElements([1, 2, 3, 4, 5]) возвращает [1, 5]
//Вызов getExtremeElements(["Earth", "Mars", "Venus"]) возвращает ["Earth", "Venus"]
//Вызов getExtremeElements(["apple", "peach", "pear", "banana"]) возвращает ["apple", "banana"]

function getExtremeElements(array) {
  const firstElement = array.splice(0, 1);
  const lastElement = array.splice(array.length - 1, 1);
  const newArray = firstElement.concat(lastElement);
  return newArray;
}
console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

//=============================================================|
//========================== Task 10 ==========================|
//=============================================================|

//Дополни код функции splitMessage(message, delimiter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimiter - массив строк.

//Объявлена функция splitMessage(message, delimiter)
//Вызов splitMessage("Mango hurries to the train", " ") возвращает ["Mango", "hurries", "to", "the", "train"]
//Вызов splitMessage("Mango", "") возвращает ["M", "a", "n", "g", "o"]
//Вызов splitMessage("best_for_week", "_") возвращает ["best", "for", "week"]

function splitMessage(message, delimiter) {
  let words = message.split(delimiter);
  console.log(words);
  return words;
}

splitMessage('Mango hurries to the train', ' ');
splitMessage('Mango', '');
splitMessage('best_for_week', '_');

//=============================================================|
//========================== Task 11 ==========================|
//=============================================================|

//Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

//Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

//Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

//Объявлена функция calculateEngravingPrice(message, pricePerWord)
//Вызов calculateEngravingPrice("JavaScript is in my blood", 10) возвращает 50
//Вызов calculateEngravingPrice("JavaScript is in my blood", 20) возвращает 100
//Вызов calculateEngravingPrice("Web-development is creative work", 40) возвращает 160
//Вызов calculateEngravingPrice("Web-development is creative work", 20) возвращает 80

function calculateEngravingPrice(message, pricePerWord) {
  let words = message.split(' ');
  let allPrice;

  return (allPrice = pricePerWord * words.length);
}

console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
console.log(calculateEngravingPrice('Web-development is creative work', 40));
console.log(calculateEngravingPrice('Web-development is creative work', 20));

//=============================================================|
//========================== Task 12 ==========================|
//=============================================================|

//Дополни код функции makeStringFromArray(array, delimiter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimiter - строку.

//Объявлена функция makeStringFromArray(array, delimiter)
//Вызов makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") возвращает "Mango hurries to the train"
//Вызов makeStringFromArray(["M", "a", "n", "g", "o"], "") возвращает "Mango"
//Вызов makeStringFromArray(["top", "picks", "for", "you"], "_") возвращает "top_picks_for_you"

function makeStringFromArray(array, delimiter) {
  let string = array.join(delimiter);
  console.log(string);
  return string;
}

makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ');
makeStringFromArray(['M', 'a', 'n', 'g', 'o'], '');
makeStringFromArray(['top', 'picks', 'for', 'you'], '_');

//=============================================================|
//========================== Task 13 ==========================|
//=============================================================|

//Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адресов.

//Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.

//Внимание
//Slug это всегда строка в нижнем регистре, слова которой разделены тире.

//Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

//Значением параметра title будут строки, слова которых разделены только пробелами
//Все символы slug должны быть в нижнем регистре
//Все слова slug должна быть разделены тире
//Объявлена функция slugify(title)
//Вызов slugify("Arrays for begginers") возвращает "arrays-for-begginers"
//Вызов slugify("English for developer") возвращает "english-for-developer"
//Вызов slugify("Ten secrets of JavaScript") возвращает "ten-secrets-of-javascript"
//Вызов slugify("How to become a JUNIOR developer in TWO WEEKS") возвращает "how-to-become-a-junior-developer-in-two-weeks"

function slugify(title) {
  let slug = title.toLowerCase();
  let slugSplit = slug.split(' ');
  let slugResult = slugSplit.join('-');
  console.log(slugResult);
  return slugResult;
}

slugify('Arrays for begginers');
slugify('Ten secrets of JavaScript');
slugify('English for developer');
slugify('How to become a JUNIOR developer in TWO WEEKS');

//=============================================================|
//========================== Task 14 ==========================|
//=============================================================|

//Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

//firstTwoEls - массив из первых двух элементов
//nonExtremeEls - массив из всех элементов кроме первого и последнего
//lastThreeEls - массив из трёх последних элементов
//Объявлена переменная fruits
//Значение переменной fruits это массив ["apple", "plum", "pear", "orange", "banana"]
//Объявлена переменная firstTwoEls
//Значение переменной firstTwoEls это массив ["apple", "plum"]
//Объявлена переменная nonExtremeEls
//Значение переменной nonExtremeEls это массив ["plum", "pear", "orange"]
//Объявлена переменная lastThreeEls
//Значение переменной lastThreeEls это массив ["pear", "orange", "banana"]
//Переменной lastThreeEls присвоена копия части массива fruits после применения метода slice с правильными аргументами

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
console.log(firstTwoEls);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
console.log(nonExtremeEls);
const lastThreeEls = fruits.slice(fruits.length - 3, fruits.length);
console.log(lastThreeEls);

//=============================================================|
//========================== Task 15 ==========================|
//=============================================================|

//Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

//Объявлена переменная oldClients
//Значение переменной oldClients это массив ["Mango", "Ajax", "Poly", "Kiwi"]
//Объявлена переменная newClients
//Значение переменной newClients это массив ["Peach", "Houston"]
//Объявлена переменная allClients
//Значение переменной allClients это массив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
//Переменной allClients присвоен массив после применения метода concat с правильными аргументами

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients);
console.log(allClients);

//=============================================================|
//========================== Task 16 ==========================|
//=============================================================|

//Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

//Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.

//Объявлена функция makeArray(firstArray, secondArray, maxLength)
//Вызов makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) возвращает ["Mango", "Poly", "Ajax"]
//Вызов makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) возвращает ["Mango", "Poly", "Houston", "Ajax"]
//Вызов makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) возвращает ["Mango", "Ajax", "Chelsea"]
//Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) возвращает ["Earth", "Jupiter"]
//Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) возвращает ["Earth", "Jupiter", "Neptune", "Uranus"]
//Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) возвращает []
//Вызов функции makeArray() со случайными массивами и случайным числом возвращает правильный массив

function makeArray(firstArray, secondArray, maxLength) {
  let newArray = firstArray.concat(secondArray);
  let cutArray;
  if (maxLength >= newArray.length) {
    console.log(newArray);
    return newArray;
  }
  // cutArray = newArray.splice(maxLength, newArray.length - maxLength);
  // console.log(newArray);
  cutArray = newArray.slice(0, maxLength);
  console.log(cutArray);
  return cutArray;
}

makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3);
makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4);
makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3);
makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2);
makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4);
makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0);
makeArray([1, 'qwer', 3, 4], ['asd'], 2);

//=============================================================|
//========================== Task 17 ==========================|
//=============================================================|

//Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

//Объявлена переменная start
//Значение переменной start это число 3
//Объявлена переменная end
//Значение переменной end это число 7
//Объявлена переменная i - счётчик цикла
//Начальное значение переменной i равно 3
//Условие цикла приводится к true до тех пор, пока i меньше либо равно 7
//На каждой итерации значение переменной i увеличивается на единицу
//Вывод в консоль переменной i покажет числа 3, 4, 5, 6, 7

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) {
  console.log(i);
}

//=============================================================|
//========================== Task 18 ==========================|
//=============================================================|

//Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

//Объявлена функция calculateTotal(number)
//Вызов функции calculateTotal(1) возвращает 1
//Вызов функции calculateTotal(3) возвращает 6
//Вызов функции calculateTotal(7) возвращает 28
//Вызов функции calculateTotal(18) возвращает 171
//Вызов функции calculateTotal(24) возвращает 300
//Вызов функции calculateTotal() со случайным числом возвращает правильное значение

function calculateTotal(number) {
  let summ = 0;
  for (let i = 0; i <= number; i++) {
    summ += i;
  }
  console.log(summ);
  return summ;
}

calculateTotal(1);
calculateTotal(3);
calculateTotal(7);
calculateTotal(18);
calculateTotal(24);
calculateTotal(5);

//=============================================================|
//========================== Task 19 ==========================|
//=============================================================|

//Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

//Объявлена переменная fruits
//Значение переменной fruits это массив ["apple", "plum", "pear", "orange"]
//Объявлена переменная i - счётчик цикла
//Начальное значение переменной i равно 0
//Условие цикла приводится к true до тех пор, пока i меньше 4
//На каждой итерации значение переменной i увеличивается на единицу
//В теле цикла for объявляется переменная const fruit и этой переменной присваивается значение - элемент массива
//В теле цикла for используется вывод в консоль переменной fruit

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  console.log(fruit);
}

//=============================================================|
//========================== Task 20 ==========================|
//=============================================================|

//Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

//Объявлена функция calculateTotalPrice(order)
//Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
//Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
//Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
//Вызов функции calculateTotalPrice() со случайным массивом возвращает правильное значение

function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 0; i < order.length; i++) {
    total += order[i];
  }

  console.log(total);
  return total;
}

calculateTotalPrice([12, 85, 37, 4]);
calculateTotalPrice([164, 48, 291]);
calculateTotalPrice([412, 371, 94, 63, 176]);

//=============================================================|
//========================== Task 21 ==========================|
//=============================================================|

//Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

//Объявлена функция findLongestWord(string)
//Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
//Вызов функции findLongestWord("Google do a roll") возвращает Google
//Вызов функции findLongestWord("May the force be with you") возвращает force
//Вызов функции findLongestWord() со случайной строкой возвращает правильное значение

// return string.split(' ').reduce((a, b) => (b.length > a.length ? b : a));

function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = '';

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('May the force be with you'));


//=============================================================|
//========================== Task 22 ==========================|
//=============================================================|

//Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

//Объявлена функция createArrayOfNumbers(min, max)
//Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3]
//Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17]
//Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34]
//Вызов функции createArrayOfNumbers() со случайными min и max возвращает правильный массив
//В цикле for использовался метод push

function createArrayOfNumbers(min, max) {
  const numbers = [];

  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }

  console.log(numbers);
  return numbers;
}

createArrayOfNumbers(1, 3);
createArrayOfNumbers(14, 17);
createArrayOfNumbers(29, 34);

//=============================================================|
//========================== Task 23 ==========================|
//=============================================================|

//Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

//Объявлена функция filterArray(numbers, value)
//Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
//Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
//Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
//Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
//Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
//Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
//В цикле for использовался метод push

function filterArray(numbers, value) {
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      newArray.push(numbers[i]);
    }
  }
  console.log(newArray);
  return newArray;
}

filterArray([1, 2, 3, 4, 5], 3);
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 38);
filterArray([12, 24, 8, 41, 76], 20);

//=============================================================|
//========================== Task 24 ==========================|
//=============================================================|

//Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

//Дополни код функции так, что если:

//фрукт есть в массиве, то функция возвращает true;
//фрукта нет в массиве, то функция возвращает false.
//Объявлена функция checkFruit(fruit)
//Вызов checkFruit("plum") возвращает true
//Вызов checkFruit("mandarin") возвращает false
//Вызов checkFruit("pear") возвращает true
//Вызов checkFruit("Pear") возвращает false
//Вызов checkFruit("apple") возвращает true
//Вызов функции checkFruit() со случайным словом возвращает правильное значение boolean
//В функции использовался метод includes

function checkFruit(fruit) {
  const fruits = ['apple', 'plum', 'pear', 'orange'];
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].includes(fruit)) {
      return true;
    }
  }
  return false;
}
console.log(checkFruit('plum'));
console.log(checkFruit('mandarin'));
console.log(checkFruit('pear'));
console.log(checkFruit('Pear'));
console.log(checkFruit('apple'));

//=============================================================|
//========================== Task 25 ==========================|
//=============================================================|

//Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

//Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

//Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

//Объявлена функция getCommonElements(array1, array2)
//Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
//Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
//Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
//Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
//Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
//Вызов функции getCommonElements() со случайными двумя массивами возвращает правильный массив
//В цикле for использовались методы includes и push

function getCommonElements(array1, array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      newArray.push(array1[i]);
    }
  }
  console.log(newArray);
  return newArray;
}

getCommonElements([1, 2, 3], [2, 4]);
getCommonElements([1, 2, 3], [2, 1, 17, 19]);
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
getCommonElements([1, 2, 3], [10, 20, 30]);

//=============================================================|
//========================== Task 26 ==========================|
//=============================================================|

//Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

//Объявлена функция calculateTotalPrice(order)
//Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
//Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
//Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
//Вызов функции calculateTotalPrice([]) возвращает 0
//Вызов функции calculateTotalPrice() со случайным массивом чисел возвращает правильную сумму

function calculateTotalPrice(order) {
  let total = 0;

  for (let orders of order) {
    total += orders;
  }

  console.log(total);
  return total;
}

calculateTotalPrice([12, 85, 37, 4]);
calculateTotalPrice([164, 48, 291]);
calculateTotalPrice([]);

//=============================================================|
//========================== Task 27 ==========================|
//=============================================================|

//Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

//Объявлена функция filterArray(numbers, value)
//Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
//Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
//Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
//Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
//Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
//Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
//Функция filterArray() использует цикл for..of

function filterArray(numbers, value) {
  const filteredNumbers = [];
  // for (let i = 0; i < numbers.length; i += 1) {
  //   const number = numbers[i];

  //   if (number > value) {
  //     filteredNumbers.push(number);
  //   }
  // }

  for (number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  console.log(filteredNumbers);
  return filteredNumbers;
}

filterArray([1, 2, 3, 4, 5], 3);
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 38);

//=============================================================|
//========================== Task 28 ==========================|
//=============================================================|

//Дополни выражения остатка от деления так, чтобы код проходил тесты.

//Объявлена переменная a
//Значение переменной a это число 0
//Объявлена переменная b
//Значение переменной b это число 1
//Объявлена переменная c
//Значение переменной c это число 3
//Объявлена переменная d
//Значение переменной d это число 5
//Объявлена переменная e
//Значение переменной e это число 2

const a = 3 % 3;
console.log(a);
const b = 4 % 3;
console.log(b);
const c = 11 % 8;
console.log(c);
const d = 12 % 7;
console.log(d);
const e = 8 % 3;
console.log(e);

//=============================================================|
//========================== Task 29 ==========================|
//=============================================================|

//Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

//Объявлена функция getEvenNumbers(start, end)
//Вызов функции getEvenNumbers(2, 5) возвращает [2, 4]
//Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10]
//Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12]
//Вызов функции getEvenNumbers(8, 8) возвращает [8]
//Вызов функции getEvenNumbers(7, 7) возвращает []
//Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив

function getEvenNumbers(start, end) {
  let newArray = [];
  let evenArray = [];

  for (i = start; i <= end; i++) {
    newArray.push(i);
  }
  for (a of newArray) {
    if (a % 2 === 0) {
      evenArray.push(a);
    }
  }
  console.log(evenArray);
  return evenArray;
}

getEvenNumbers(2, 5);
getEvenNumbers(3, 11);
getEvenNumbers(6, 12);
getEvenNumbers(8, 8);
getEvenNumbers(7, 7);

//=============================================================|
//========================== Task 30 ==========================|
//=============================================================|

//Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

//Объявлена переменная start со значением 6
//Объявлена переменная end со значением 27
//Объявлена переменная number без инициализации
//Итоговое значение переменной number равно 10
//В цикле for используется break для выхода до завершения всех итераций цикла

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}
console.log(number);

//=============================================================|
//========================== Task 31 ==========================|
//=============================================================|

//Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

//возвращала первое число от start до end, которое делится на divisor без остатка
//не использовала оператор break
//не использовала переменную number
//Объявлена функция findNumber(start, end, divisor)
//Вызов findNumber(2, 6, 5) возвращает 5
//Вызов findNumber(8, 17, 3) возвращает 9
//Вызов findNumber(6, 9, 4) возвращает 8
//Вызов findNumber(16, 35, 7) возвращает 21
//Вызов findNumber() со случайным набором чисел возвращает верный результат
//В цикле for не должен использоваться break для выхода до завершения всех итераций цикла

function findNumber(start, end, divisor) {
  for (let i = start; i <= end; i++) {
    if (i % divisor === 0) {
      return i;
    }
  }
  return null;
}

console.log(findNumber(2, 6, 5));
console.log(findNumber(8, 17, 3));
console.log(findNumber(6, 9, 4));
console.log(findNumber(16, 35, 7));

//=============================================================|
//========================== Task 32 ==========================|
//=============================================================|

//Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

//При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

//Объявлена функция includes(array, value)
//Вызов includes([1, 2, 3, 4, 5], 3) возвращает true
//Вызов includes([1, 2, 3, 4, 5], 17) возвращает false
//Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") возвращает true
//Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") возвращает false
//Вызов includes(["apple", "plum", "pear", "orange"], "plum") возвращает true
//Вызов includes(["apple", "plum", "pear", "orange"], "kiwi") возвращает false
//Вызов includes() для случайного массива со случайным value возвращает верный boolean
//В функции includes используется for, return, но не метод массива includes

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')
);
console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus')
);
