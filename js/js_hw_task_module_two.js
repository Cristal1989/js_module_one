//========================== Task 01 ==========================

//Объяви функцию sayHi, внутри которой добавь console.log() со строкой "Hello, this is my first function!". После объявления
//вызови функцию sayHi.

//Ожидается объявление функции
//Функции присвоено имя sayHi
//В теле функции sayHi есть console.log("Hello, this is my first function!")
//После объявления есть вызов функции sayHi

// 1. Объявить функцию
// 2. Тело функции
// 3. Вызовы функции multiply

function sayHi() {
  console.log('Hello, this is my first function!');
}

sayHi();

//=============================================================|
//========================== Task 02 ==========================|
//=============================================================|

//Функция add должна уметь складывать три числа и выводить результат в консоль. Добавь функции add три параметра a, b и c,
//которые будут получать значения аргументов при её вызове.

//Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>", где <result> это сумма переданных чисел.

//Объявлена функция add(a, b, c)
//Вызов add(15, 27, 10) выводит в консоль "Addition result equals 52"
//Вызов add(10, 20, 30) выводит в консоль "Addition result equals 60"
//Вызов add(5, 10, 15) выводит в консоль "Addition result equals 30"

// Change code below this line
function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
  // Change code above this line
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

//=============================================================|
//========================== Task 03 ==========================|
//=============================================================|

//Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.

//Объявлена функция add(a, b, c)
//В функции add есть оператор return
//Вызов add(15, 27, 10) возвращает 52
//Вызов add(10, 20, 30) возвращает 60
//Вызов add(5, 10, 15) возвращает 30
//Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

function add(a, b, c) {
  // Change code below this line
  if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
    console.log(a + b + c);
    return (result = a + b + c);
  }
  // Change code above this line
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

//=============================================================|
//========================== Task 04 ==========================|
//=============================================================|

//Функция makeMessage(name, price) составляет и возвращает сообщение о покупке. Она объявляет два параметра, значения которых будут задаваться во время её вызова.

//name - название товара
//price - цена товара
//Дополни код функции так, чтобы в переменную message записывалась строка "You picked <product name>, price per item is <product price> credits", где <product name> и <product price> это значения параметров name и price. Используй синтаксис шаблонных строк.

//Info
//Обрати внимание на то, что в коде нет вызовов функции makeMessage. С этого задания и дальше ты сам будешь вызывать свои функции и проверять то, как они работают.

//Объявлена функция makeMessage(name, price)
//Вызов makeMessage('Radar', 6150) возвращает "You picked Radar, price per item is 6150 credits"
//Вызов makeMessage('Scanner', 3500) возвращает "You picked Scanner, price per item is 3500 credits"
//Вызов makeMessage('Reactor', 8000) возвращает "You picked Reactor, price per item is 8000 credits"
//Вызов makeMessage('Engine', 4070) возвращает "You picked Engine, price per item is 4070 credits"

function makeMessage(name, price) {
  // Change code below this line
  const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  console.log(message);
  return message;
}
makeMessage('Radar', 6150);
makeMessage('Scanner', 3500);
makeMessage('Reactor', 8000);
makeMessage('Engine', 4070);

//=============================================================|
//========================== Task 05 ==========================|
//=============================================================|

//Функция calculateTotalPrice считает и возвращает общую сумму покупки. Она принимает два параметра, значения которых будут задаваться во время её вызова.

//orderedQuantity - количество единиц товара в заказе;
//pricePerItem - цена одной единицы товара.
//Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки, результат умножения кол-ва товаров на цену одного.

//Объявлена функция calculateTotalPrice (orderedQuantity, pricePerItem)
//Вызов calculateTotalPrice(5, 100) возвращает 500
//Вызов calculateTotalPrice(8, 60) возвращает 480
//Вызов calculateTotalPrice(3, 400) возвращает 1200
//Вызов calculateTotalPrice(1, 3500) возвращает 3500
//Вызов calculateTotalPrice(12, 70) возвращает 840
//Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

function calculateTotalPrice(orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerItem;

  console.log(totalPrice);
  // Change code above this line
  return totalPrice;
}
calculateTotalPrice(5, 100);
calculateTotalPrice(8, 60);
calculateTotalPrice(3, 400);
calculateTotalPrice(1, 3500);
calculateTotalPrice(12, 70);

//=============================================================|
//========================== Task 06 ==========================|
//=============================================================|

//Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) составляет и возвращает сообщение о покупке ремонтных дроидов. Она объявляет три параметра, значения которых будут задаваться во время её вызова.

//orderedQuantity - количество дроидов в заказе
//pricePerDroid - цена одного дроида
//deliveryFee - стоимость доставки
//Дополни код функции так, чтобы она возвращала сообщение о заказе в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". Не забудь о цене доставки при вычислениях общей стоимости.

//Объявлена функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
//Вызов makeOrderMessage(2, 100, 50) возвращает "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
//Вызов makeOrderMessage(4, 300, 100) возвращает "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."
//Вызов makeOrderMessage(10, 70, 200) возвращает "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
  const message = `You ordered droids worth ${
    orderedQuantity * pricePerDroid + deliveryFee
  } credits. Delivery (${deliveryFee} credits) is included in total price.`;

  console.log(message);
  // Change code above this line
  return message;
}
makeOrderMessage(2, 100, 50);
makeOrderMessage(4, 300, 100);
makeOrderMessage(10, 70, 200);

//=============================================================|
//========================== Task 07 ==========================|
//=============================================================|

//Функция isAdult объявляет один параметр age (возраст), значение которого будет задаваться во время её вызова. Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие. Человек считается совершеннолетним в возрасте 18 лет и старше.

//Объявлена функция isAdult(age)
//В выражении проверки используется оператор >=
//Вызов isAdult(20) возвращает true
//Вызов isAdult(14) возвращает false
//Вызов isAdult(8) возвращает false
//Вызов isAdult(37) возвращает true

function isAdult(age) {
  // Change code below this line
  const passed = age >= 18;

  console.log(passed);
  // Change code above this line
  return passed;
}
isAdult(20);
isAdult(14);
isAdult(8);
isAdult(37);

//=============================================================|
//========================== Task 08 ==========================|
//=============================================================|

//Функция isValidPassword(password) проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль true или false. Переменная SAVED_PASSWORD хранит значение ранее сохраненного пароля. Введённый пароль передаётся в параметр password.

//Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей. Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.

//Объявлена функция isValidPassword(password)
//В выражении проверки паролей использован оператор ===
//Вызов isValidPassword("mangodab3st") возвращает false
//Вызов isValidPassword("kiwirul3z") возвращает false
//Вызов isValidPassword("jqueryismyjam") возвращает true

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  let isMatch = password === SAVED_PASSWORD;
  console.log(isMatch);
  // Change code above this line
  return isMatch;
}
isValidPassword('mangodab3st');
isValidPassword('kiwirul3z');
isValidPassword('jqueryismyjam');

//=============================================================|
//========================== Task 09 ==========================|
//=============================================================|

//Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.

//Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка "You are an adult".
//В противном случае должен выполняться блок else и записывается строка "You are a minor".
//Объявлена функция checkAge(age).
//В выражении проверки возраста использован оператор >=
//Вызов checkAge(20) возвращает "You are an adult"
//Вызов checkAge(8) возвращает "You are a minor"
//Вызов checkAge(14) возвращает "You are a minor"
//Вызов checkAge(38) возвращает "You are an adult"

function checkAge(age) {
  let message;
  const adult = 18;
  if (age >= adult) {
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  console.log(message);
  return message;
}

checkAge(20);
checkAge(8);
checkAge(14);
checkAge(38);

//=============================================================|
//========================== Task 10 ==========================|
//=============================================================|

//Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

//available - общее количество товаров на складе
//ordered - единиц товара в заказе
//Используя ветвления дополни код функции так, что:

//Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка "Not enough goods in stock!".
//В противном случае записывается строка "Order is processed, our manager will contact you.".
//Объявлена функция checkStorage(available, ordered).
//Вызов checkStorage(100, 50) возвращает "Order is processed, our manager will contact you."
//Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
//Вызов checkStorage(200, 20) возвращает "Order is processed, our manager will contact you."
//Вызов checkStorage(200, 150) возвращает "Order is processed, our manager will contact you."
//Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!"

function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (available >= ordered) {
    message = 'Order is processed, our manager will contact you.';
  } else {
    message = 'Not enough goods in stock!';
  }

  console.log(message);
  // Change code above this line
  return message;
}

checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(200, 20);
checkStorage(200, 150);
checkStorage(150, 180);

//=============================================================|
//========================== Task 11 ==========================|
//=============================================================|

//Замени выражения со стандартными математеческими операторами на комбинированный оператор присвоения с добавлением, вычитанием, умножением и делением.

//Значение переменной a равно 7
//Использован оператор +=
//Значение переменной b равно 6
//Использован оператор -=
//Значение переменной c равно 45
//Использован оператор *=
//Значение переменной d равно 2
//Использован оператор /=

let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;

//=============================================================|
//========================== Task 12 ==========================|
//=============================================================|

//Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

//Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

//pricePerDroid - цена одного дроида
//orderedQuantity - кол-во заказанных дроидов
//customerCredits - сумма средств на счету клиента
//Дополни её следующим функционалом:

//Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
//Добавь проверку сможет ли клиент оплатить заказ:
//если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку "Insufficient funds!";
//в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: "You ordered <число> droids, you have <число> credits left".
//Объявлена функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits)
//Вызов makeTransaction(3000, 5, 23000) возвращает "You ordered 5 droids, you have 8000 credits left"
//Вызов makeTransaction(1000, 3, 15000) возвращает "You ordered 3 droids, you have 12000 credits left"
//Вызов makeTransaction(5000, 10, 8000) возвращает "Insufficient funds!"
//Вызов makeTransaction(2000, 8, 10000) возвращает "Insufficient funds!"
//Вызов makeTransaction(500, 10, 5000) возвращает "You ordered 10 droids, you have 0 credits left"

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  let totalPrice = pricePerDroid * orderedQuantity;
  // Change code below this line
  if (customerCredits < totalPrice) {
    message = 'Insufficient funds!';
    // console.log(message);
  } else {
    message = `"You ordered ${orderedQuantity} droids, you have ${
      customerCredits - totalPrice
    } credits left".`;
  }

  // Change code above this line
  console.log(message);
  return message;
}

makeTransaction(3000, 5, 23000);
makeTransaction(1000, 3, 15000);
makeTransaction(5000, 10, 8000);
makeTransaction(2000, 8, 10000);
makeTransaction(500, 10, 5000);

//=============================================================|
//========================== Task 13 ==========================|
//=============================================================|

//Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

//Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
//Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
//Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка "Access denied, wrong password!".
//Объявлена функция checkPassword(password)
//Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
//Вызов checkPassword(null) возвращает "Canceled by user!"
//Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
//Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  if (password === null) {
    message = 'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) {
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  console.log(message);
  return message;
}

checkPassword('mangohackzor');
checkPassword(null);
checkPassword('polyhax');
checkPassword('jqueryismyjam');

//=============================================================|
//========================== Task 14 ==========================|
//=============================================================|

//Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова.

//available - доступное количество товаров на складе
//ordered - единиц товара в заказе
//Используя ветвления дополни код функции так, что:

//Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка "There are no products in the order!".
//Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка "Your order is too large, there are not enough items in stock!".
//В противном случае в переменную message присваевается строка "The order is accepted, our manager will contact you".
//Объявлена функция checkStorage(available, ordered)
//Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
//Вызов checkStorage(100, 130) возвращает "Your order is too large, there are not enough items in stock!"
//Вызов checkStorage(70, 0)возвращает "There are no products in the order!"
//Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
//Вызов checkStorage(200, 250) возвращает "Your order is too large, there are not enough items in stock!"
//Вызов checkStorage(150, 0) возвращает "There are no products in the order!"

function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (ordered === 0) {
    message = 'There are no products in the order!';
  } else if (ordered > available) {
    message = 'Your order is too large, there are not enough items in stock!';
  } else {
    message = 'The order is accepted, our manager will contact you';
  }

  console.log(message);
  // Change code above this line
  return message;
}

checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(70, 0);
checkStorage(200, 20);
checkStorage(200, 250);
checkStorage(150, 0);

//=============================================================|
//========================== Task 15 ==========================|
//=============================================================|

//Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

//number - число, вхождение которого проверяется
//start - начало числового промежутка
//end - конец числового промежутка
//Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от start до end. То есть число должно быть больше либо равно start и меньше либо равно end. Результатом выражения проверки будет буль true или false.

//Объявлена функция isNumberInRange(start, end, number)
//В выражении проверки использован оператор &&
//Вызов isNumberInRange(10, 30, 17) возвращает true
//Вызов isNumberInRange(10, 30, 5) возвращает false
//Вызов isNumberInRange(20, 50, 24) возвращает true
//Вызов isNumberInRange(20, 50, 76) возвращает false

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; // Change this line

  console.log(isInRange);
  return isInRange;
}

isNumberInRange(10, 30, 17);
isNumberInRange(10, 30, 5);
isNumberInRange(20, 50, 24);
isNumberInRange(20, 50, 76);

//=============================================================|
//========================== Task 16 ==========================|
//=============================================================|

//Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.

//Присвой переменной canAccessContent выражение проверки подписки. Если значение параметра subType равно строкам "pro" или "vip", пользователь получит доступ. Результатом выражения проверки будет буль true или false.

//Объявлена функция checkIfCanAccessContent(subType)
//В выражении проверки использован оператор ||
//Вызов checkIfCanAccessContent("pro") возвращает true
//Вызов checkIfCanAccessContent("starter") возвращает false
//Вызов checkIfCanAccessContent("vip") возвращает true
//Вызов checkIfCanAccessContent("free") возвращает false

function checkIfCanAccessContent(subType) {
  let canAccessContent = subType === 'pro' || subType === 'vip';

  console.log(canAccessContent);
  return canAccessContent;
}

checkIfCanAccessContent('pro');
checkIfCanAccessContent('starter');
checkIfCanAccessContent('vip');
checkIfCanAccessContent('free');

//=============================================================|
//========================== Task 17 ==========================|
//=============================================================|

//Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. То есть число должно быть меньше либо равно start и больше либо равно end. Результатом выражения проверки будет буль true или false.

//Она объявляет три параметра, значения которых будут задаваться во время её вызова:

//number - число, не вхождение которого проверяется
//start - начало числового промежутка
//end - конец числового промежутка
//Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.

//Объявлена функция isNumberNotInRange(start, end, number)
//В выражении использован оператор !
//Вызов isNumberNotInRange(10, 30, 17) возвращает false
//Вызов isNumberNotInRange(10, 30, 5) возвращает true
//Вызов isNumberNotInRange(20, 50, 24) возвращает false
//Вызов isNumberNotInRange(20, 50, 76) возвращает true

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange;

  console.log(isNotInRange);
  return isNotInRange;
}

isNumberNotInRange(10, 30, 17);
isNumberNotInRange(10, 30, 5);
isNumberNotInRange(20, 50, 24);
isNumberNotInRange(20, 50, 76);

//=============================================================|
//========================== Task 18 ==========================|
//=============================================================|

//Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent) в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из //функции как результат её работы.

//Используя ветвления и логические операторы, дополни код функции.

//Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
//Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
//Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
//Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
//Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.

//Объявлена функция getDiscount(totalSpent)
//Вызов getDiscount(137000) возвращает 0.1
//Вызов getDiscount(46900) возвращает 0.05
//Вызов getDiscount(8250) возвращает 0.02
//Вызов getDiscount(1300) возвращает 0
//Вызов getDiscount(5000) возвращает 0.02
//Вызов getDiscount(20000) возвращает 0.05
//Вызов getDiscount(50000) возвращает 0.1

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
  } else {
    discount = BASE_DISCOUNT;
  }
  console.log(discount);
  // Change code above this line
  return discount;
}

getDiscount(137000);
getDiscount(46900);
getDiscount(8250);
getDiscount(1300);
getDiscount(5000);
getDiscount(20000);
getDiscount(50000);

//=============================================================|
//========================== Task 19 ==========================|
//=============================================================|

//Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.

//Объявлена функция checkStorage(available, ordered).
//Использован тернарный оператор.
//Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
//Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
//Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
//Вызов checkStorage(200, 150) возвращает "The order is accepted, our manager will contact you"
//Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!"

function checkStorage(available, ordered) {
  let message;
  message =
    available >= ordered
      ? (message = 'The order is accepted, our manager will contact you')
      : (message = 'Not enough goods in stock!');

  console.log(message);
  // Change code below this line
  return message;
}

checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(200, 20);
checkStorage(200, 150);
checkStorage(150, 180);

//=============================================================|
//========================== Task 20 ==========================|
//=============================================================|

//Функция checkPassword(password) сравнивает переданный ей пароль (параметр password) с сохранённым паролем администратора (константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.

//Используя тернарный оператор дополни функцию так, что:

//Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку "Access is allowed".
//В противном случае, присвой message строку "Access denied, wrong password!".
//Объявлена функция checkPassword(password)
//Использован тернарный оператор
//Вызов checkPassword("jqueryismyjam") возвращает "Access is allowed"
//Вызов checkPassword("angul4r1sl1f3") возвращает "Access denied, wrong password!"
//Вызов checkPassword("r3actsux") возвращает "Access denied, wrong password!"

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  message =
    password === ADMIN_PASSWORD
      ? (message = 'Access is allowed')
      : (message = 'Access denied, wrong password!');

  console.log(message);
  // Change code below this line
  return message;
}

checkPassword('jqueryismyjam');
checkPassword('angul4r1sl1f3');
checkPassword('r3actsux');

//=============================================================|
//========================== Task 21 ==========================|
//=============================================================|

//Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type), проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.

//Если значение параметра type это строка:

//"starter" - цена подписки 0 кредитов.
//"professional" - цена подписки 20 кредитов.
//"organization" - цена подписки 50 кредитов.
//Изначально в теле функции была инструкция if...else, которая выглядела вот так.

//if (type === "starter") {
//  price = 0;
//} else if (type === "professional") {
//  price = 20;
//} else if (type === "organization") {
//  price = 50;
//}
//После рефакторинга инструкция if..else была заменена на switch. Дополни код инструкции switch, чтобы функция работала правильно.

//Объявлена функция getSubscriptionPrice(type)
//Вызов getSubscriptionPrice("professional") возвращает число 20
//Вызов getSubscriptionPrice("organization") возвращает число 50
//Вызов getSubscriptionPrice("starter") возвращает число 0

function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

  switch (
    type // Change this line
  ) {
    case 'starter': // Change this line
      price = 0; // Change this line
      break;

    case 'professional': // Change this line
      price = 20; // Change this line
      break;

    case 'organization': // Change this line
      price = 50; // Change this line
      break;

    default:
      console.log('Check ur subscribe');
  }

  console.log(price);
  // Change code above this line
  return price;
}

getSubscriptionPrice('professional');
getSubscriptionPrice('organization');
getSubscriptionPrice('starter');

//=============================================================|
//========================== Task 22 ==========================|
//=============================================================|

//Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

//Если значение параметра password:

//равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
//совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
//не удовлетворяет ни одному из предыдущих условий, в переменную message записывается строка "Access denied, wrong password!".
//Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).

//Объявлена функция checkPassword(password)
//Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
//Вызов checkPassword(null) возвращает "Canceled by user!"
//Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
//Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  switch (password) {
    case null:
      message = 'Canceled by user!';
      break;
    case ADMIN_PASSWORD:
      message = 'Welcome!';
      break;
    default:
      message = 'Access denied, wrong password!';
  }

  console.log(message);
  // Change code above this line
  return message;
}

checkPassword('mangohackzor');
checkPassword(null);
checkPassword('polyhax');
checkPassword('jqueryismyjam');

//=============================================================|
//========================== Task 23 ==========================|
//=============================================================|

//Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.

//Формат возвращаемой строки "Shipping to <country> will cost <price> credits", где вместо <country> и <price> необходимо подставить соотвествующие значения.

//Список стран и стоимость доставки:

//China - 100 кредитов
//Chile - 250 кредитов
//Australia - 170 кредитов
//Jamaica - 120 кредитов
//Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку "Sorry, there is no delivery to your country"

//Объявлена функция getShippingCost(country)
//В теле функции использована инструкция switch
//Вызов getShippingCost("Australia") возвращает "Shipping to Australia will cost 170 credits"
//Вызов getShippingCost("Germany") возвращает "Sorry, there is no delivery to your country"
//Вызов getShippingCost("China") возвращает "Shipping to China will cost 100 credits"
//Вызов getShippingCost("Chile") возвращает "Shipping to Chile will cost 250 credits"
//Вызов getShippingCost("Jamaica") возвращает "Shipping to Jamaica will cost 120 credits"
//Вызов getShippingCost("Sweden") возвращает "Sorry, there is no delivery to your country"

function getShippingCost(country) {
  let price;
  let message;

  // Change code below this line
  switch (country) {
    case 'China':
      price = 100;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case 'Chile':
      price = 250;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case 'Australia':
      price = 170;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case 'Jamaica':
      price = 120;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    default:
      message = 'Sorry, there is no delivery to your country';
  }

  console.log(message);
  // Change code above this line
  return message;
}

getShippingCost('Australia');
getShippingCost('Germany');
getShippingCost('China');
getShippingCost('Chile');
getShippingCost('Jamaica');
getShippingCost('Sweden');

//=============================================================|
//========================== Task 24 ==========================|
//=============================================================|

//Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. Дополни шаблонную строку в переменной message длиной строки из параметра name.

//Объявлена функция getNameLength(name)
//Вызов функции getNameLength("Poly") возвращает "Name Poly is 4 characters long"
//Вызов функции getNameLength("Harambe") возвращает "Name Harambe is 6 characters long"
//Вызов функции getNameLength("Billy") возвращает "Name Billy is 5 characters long"
//Вызов функции getNameLength("Joe") возвращает "Name Joe is 3 characters long"

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  console.log(message);
  return message;
}

getNameLength('Poly');
getNameLength('Harambe');
getNameLength('Billy');
getNameLength('Joe');

//=============================================================|
//========================== Task 25 ==========================|
//=============================================================|

//Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.

//courseTopicLength - длина строки.
//firstElement - первый символ строки.
//lastElement - последний символ строки.
//Объявлена переменная courseTopic
//Значение переменной courseTopic это строка "JavaScript essentials"
//Объявлена переменная courseTopicLength
//Значение переменной courseTopicLength это число 21
//Объявлена переменная firstElement
//Значение переменной firstElement это строка "J"
//Объявлена переменная lastElement
//Значение переменной lastElement это строка "s"

const courseTopic = 'JavaScript essentials';

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

console.log(lastElement);

// Change code above this line

//=============================================================|
//========================== Task 26 ==========================|
//=============================================================|

//Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

//string - оригинальная строка
//length - количество символов с начала строки для подстроки
//Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.

//Объявлена функция getSubstring(string, length)
//Вызов функции getSubstring("Hello world", 3) возвращает "Hel"
//Вызов функции getSubstring("Hello world", 6) возвращает "Hello"
//Вызов функции getSubstring("Hello world", 8) возвращает "Hello wo"
//Вызов функции getSubstring("Hello world", 11) возвращает "Hello world"
//Вызов функции getSubstring("Hello world", 0) возвращает ""

function getSubstring(string, length) {
  const substring = string.slice(0, length);

  console.log(`"${substring}"`);
  return substring;
}

getSubstring('Hello world', 3);
getSubstring('Hello world', 6);
getSubstring('Hello world', 8);
getSubstring('Hello world', 11);
getSubstring('Hello world', 0);

//=============================================================|
//========================== Task 27 ==========================|
//=============================================================|

//Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.

//Дополни код функции так, что если длина строки:

//не превышает maxLength, функция возвращает её в исходном виде.
//больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", после чего возвращает укороченную версию.
//Объявлена функция formatMessage(message, maxLength)
//Вызов функции formatMessage("Curabitur ligula sapien", 16) возвращает "Curabitur ligula..."
//Вызов функции formatMessage("Curabitur ligula sapien", 23) возвращает "Curabitur ligula sapien"
//Вызов функции formatMessage("Vestibulum facilisis purus nec", 20) возвращает "Vestibulum facilisis..."
//Вызов функции formatMessage("Vestibulum facilisis purus nec", 30) возвращает "Vestibulum facilisis purus nec"
//Вызов функции formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) возвращает "Nunc sed turpis..."
//Вызов функции formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) возвращает "Nunc sed turpis a felis in nunc fringilla"

function formatMessage(message, maxLength) {
  let result;

  if (message.length > maxLength) {
    result = message.slice(0, maxLength);
    console.log(`"${result}..."`);
  } else {
    result = message.slice(0, message.length);
    console.log(`"${result}"`);
  }

  /// Change code above this line
  return result;
}

formatMessage('Curabitur ligula sapien', 16);
formatMessage('Curabitur ligula sapien', 23);
formatMessage('Vestibulum facilisis purus nec', 20);
formatMessage('Vestibulum facilisis purus nec', 30);
formatMessage('Nunc sed turpis a felis in nunc fringilla', 15);
formatMessage('Nunc sed turpis a felis in nunc fringilla', 41);

//=============================================================|
//========================== Task 28 ==========================|
//=============================================================|

//Функция normalizeInput(input) принимает строку (параметр input) и возвращает такую же строку, но в нижнем регистре. Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input.

//Объявлена функция normalizeInput(input)
//Вызов функции normalizeInput("Hello world") возвращает "hello world"
//Вызов функции normalizeInput("This ISN'T SpaM") возвращает "this isn't spam"
//Вызов функции normalizeInput("Big SALE") возвращает "big sale"

function normalizeInput(input) {
  normalizeInput = input.toLowerCase();

  console.log(normalizeInput);
  return normalizeInput;
}

normalizeInput('Hello world');
normalizeInput("This ISN'T SpaM");
normalizeInput('Big SALE');

//=============================================================|
//========================== Task 29 ==========================|
//=============================================================|

//Функция checkForName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.

//fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
//name - имя для проверки вхождения в полное имя.
//Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). Пусть функция //строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

//Объявлена функция checkForName(fullname, name).
//Вызов функции checkForName("Egor Kolbasov", "Egor") возвращает true
//Вызов функции checkForName("Egor Kolbasov", "egor") возвращает false
//Вызов функции checkForName("Egor Kolbasov", "egOr") возвращает false
//Вызов функции checkForName("Egor Kolbasov", "Zhenya") возвращает false
//Вызов функции checkForName("Vadim Nekrasov", "Vadim") возвращает true
//Вызов функции checkForName("Vadim Nekrasov", "vadim") возвращает false
//Вызов функции checkForName("Vadim Nekrasov", "Dima") возвращает false

function checkForName(fullName, name) {
  const result = fullName.includes(name);

  console.log(result);
  return result;
}

checkForName('Egor Kolbasov', 'Egor');
checkForName('Egor Kolbasov', 'egor');
checkForName('Egor Kolbasov', 'egOr');
checkForName('Egor Kolbasov', 'Zhenya');
checkForName('Vadim Nekrasov', 'Vadim');
checkForName('Vadim Nekrasov', 'vadim');
checkForName('Vadim Nekrasov', 'Dima');

//=============================================================|
//========================== Task 30 ==========================|
//=============================================================|

//Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.
//
//Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
//Если в строке нет запрещенных слов, функция возвращает буль false.
//Объявлена функция checkForSpam(message).
//Вызов функции checkForSpam("Latest technology news") возвращает false
//Вызов функции checkForSpam("JavaScript weekly newsletter")возвращает false
//Вызов функции checkForSpam("Get best sale offers now!") возвращает true
//Вызов функции checkForSpam("Amazing SalE, only tonight!") возвращает true
//Вызов функции checkForSpam("Trust me, this is not a spam message") возвращает true
//Вызов функции checkForSpam("Get rid of sPaM emails. Our book in on sale!") возвращает true
//Вызов функции checkForSpam("[SPAM] How to earn fast money?") возвращает true

function checkForSpam(message) {
  const littleLitera = message.toLowerCase();
  const result = littleLitera.includes('spam') || littleLitera.includes('sale');

  console.log(result);
  return result;
}

checkForSpam('Latest technology news');
checkForSpam('JavaScript weekly newsletter');
checkForSpam('Get best sale offers now!');
checkForSpam('Amazing SalE, only tonight!');
checkForSpam('Trust me, this is not a spam message');
checkForSpam('Get rid of sPaM emails. Our book in on sale!');
checkForSpam('[SPAM] How to earn fast money?');
