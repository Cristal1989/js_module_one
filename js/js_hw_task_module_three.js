//=== === ===
//===  1  ===
//=== === ===

//Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

//imgUrl - фотография, значение "https://via.placeholder.com/640x480";
//descr - описание, значение "Spacious apartment in the city center";
//rating - рейтинг, значение 4;
//price - цена, значение 2153;
//tags - метаинформация, массив ["premium", "promoted", "top"].
//Объявлена переменная apartment
//Значение переменной apartment это объект
//В объекте есть свойство imgUrl
//Значение свойства imgUrl это строка "https://via.placeholder.com/640x480"
//В объекте есть свойство descr
//Значение свойства descr это строка "Spacious apartment in the city center"
//В объекте есть свойство rating
//Значение свойства rating это число 4
//В объекте есть свойство price
//Значение свойства price это число 2153
//В объекте есть свойство tags
//Значение свойства tags это массив ["premium", "promoted", "top"]

//type code ↓
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

//=== === ===
//===  2  ===
//=== === ===

//Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

//name - имя владельца, значение "Henry";
//phone - телефон, значение "982-126-1588";
//email - почта, значение "henry.carter@aptmail.com".
//Объявлена переменная apartment
//Значение переменной apartment это объект
//У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tags со значениями
//В объекте apartment есть свойство owner
//Значение свойства owner это объект
//В объекте owner есть свойство name
//Значение свойства name это "Henry"
//В объекте owner есть свойство phone
//Значение свойства phone это "982-126-1588"
//В объекте owner есть свойствао email
//Значение свойства email это "henry.carter@aptmail.com"

//type code ↓
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

apartment.owner = {
  name: 'Henry',
  phone: '982-126-1588',
  email: 'henry.carter@aptmail.com',
};

console.log(apartment);

//=== === ===
//===  3  ===
//=== === ===

//Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

//aptRating - рейтинг;
//aptDescr - описание;
//aptPrice - цена;
//aptTags - теги.
//Объявлена переменная apartment
//Значение переменной apartment это объект
//У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tags со значениями
//Объявлена переменная aptRating
//Значение переменной aptRating это число 4
//Объявлена переменная aptDescr
//Значение переменной aptDescr это строка "Spacious apartment in the city center"
//Объявлена переменная aptPrice
//Значение переменной aptPrice это число 2153
//Объявлена переменная aptTags
//Значение переменной aptTags это массив строк ["premium", "promoted", "top"]

//type code ↓
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;

//=== === ===
//===  4  ===
//=== === ===

//Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

//ownerName - имя владельца;
//ownerPhone - телефон владельца;
//ownerEmail - почта владельца;
//numberOfTags - количество элементов массива в свойстве tags;
//firstTag - первый элемент массива в свойстве tags;
//lastTag - последний элемент массива в свойстве tags.
//Объявлена переменная apartment с помощью const
//Значение переменной apartment это объект
//Объявлена переменная ownerName с помощью const
//Значение переменной ownerName это строка "Henry"
//Объявлена переменная ownerPhone с помощью const
//Значение переменной ownerPhone это "982-126-1588"
//Объявлена переменная ownerEmail с помощью const
//Значение переменной ownerEmail это "henry.carter@aptmail.com"
//Объявлена переменная numberOfTags с помощью const
//Значение переменной numberOfTags это 3
//Объявлена переменная firstTag с помощью const
//Значение переменной firstTag это "premium"
//Объявлена переменная lastTag с помощью const
//Значение переменной lastTag это "top"

//type code ↓
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
console.log(numberOfTags);
const firstTag = apartment.tags[0];
console.log(firstTag);
const lastTag = apartment.tags[apartment.tags.length - 1];
console.log(lastTag);

//=== === ===
//===  5  ===
//=== === ===

//Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».

//aptRating - рейтинг;
//aptDescr - описание;
//aptPrice - цена;
//aptTags - теги.
//Объявлена переменная apartment
//Значение переменной apartment это объект
//Объявлена переменная aptRating
//Значение переменной aptRating это 4
//Объявлена переменная aptDescr
//Значение переменной aptDescr это "Spacious apartment in the city center"
//Объявлена переменная aptPrice
//Значение переменной aptPrice это 2153
//Объявлена переменная aptTags
//Значение переменной aptTags это ["premium", "promoted", "top"]

//type code ↓
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

const aptRating = apartment['rating'];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];

//=== === ===
//===  6  ===
//=== === ===

//Дополни код обновив значения свойств объекта apartment:

//цену в свойстве price на 5000;
//рейтинг квартиры в свойстве rating на 4.7;
//имя владельца во вложенном свойстве name на "Henry Sibola";
//массив тегов в свойстве tags добавив в конец строку "trusted".
//Объявлена переменная apartment
//Значение переменной apartment это объект
//Значение вложенного свойства price это число 5000
//Значение вложенного свойства rating это число 4.7
//Значение вложенного свойства name это строка "Henry Sibola"
//Значение вложенного свойства tags это массив ["premium", "promoted", "top", "trusted"]

//type code ↓
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = 'Henry Sibola';
apartment.tags.push('trusted');
console.log(apartment);

//=== === ===
//===  7  ===
//=== === ===

//Добавь объекту apartment несколько новых свойств:

//area - площадь в квадратных метрах, число 60;
//rooms - количество комнат, число 3;
//location - местоположение квартиры, обьект со следующими вложенными //свойствами;
//country - страна, строка "Jamaica";
//city - город, строка "Kingston".
//Объявлена переменная apartment
//Значение переменной apartment это объект
//Значение вложенного свойства area это число 60
//Значение вложенного свойства rooms это число 3
//Значение вложенного свойства location это объект
//Значение вложенного свойства location.country это строка "Jamaica"
//Значение вложенного свойства location.city это строка "Kingston"

//type code ↓
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Henry Sibola',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  contry: 'Jamaica',
  city: 'Kingston',
};

console.log(apartment);

//=== === ===
//===  8  ===
//=== === ===

//Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств.

//Объявлена переменная product
//Значение переменной product это объект
//Значение вложенного свойства name это строка "Repair Droid"
//Значение вложенного свойства price это число 2500
//Значение вложенного свойства image это строка "https://via.placeholder.com/640x480"
//Значение вложенного свойства tags это массив ["on sale", "trending", "best buy"]

//type code ↓
const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  name,
  price,
  image,
  tags,
};

console.log(product);

//=== === ===
//===  9  ===
//=== === ===

//Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.

//Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства password - строка "jqueryismyjam".

//Объявлена переменная credentials
//Значение переменной credentials это объект
//В объекте credentials есть свойство email
//Значение вложенного свойства email это строка "henry.carter@aptmail.com"
//В объекте credentials есть свойство password
//Значение вложенного свойства password это строка "jqueryismyjam"

//type code ↓
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  emailInputName: 'henry.carter@aptmail.com',
  passwordInputName: 'jqueryismyjam',
};

console.log(credentials);

//=== === ===
//=== 10  ===
//=== === ===

//Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

//Объявлена переменная apartment
//Значение переменной apartment это объект
//Объявлена переменная keys
//Значение переменной keys это массив ["descr", "rating", "price"]
//Объявлена переменная values
//Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]

//type code ↓
const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];

for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}

console.log(keys);
console.log(values);

//=== === ===
//=== 11  ===
//=== === ===

//Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.

//Объявлена переменная advert.
//Значение переменной advert это объект.
//Объявлена переменная apartment.
//Значение переменной apartment это объект.
//Объявлена переменная keys.
//Значение переменной keys это массив ["descr", "rating", "price"].
//Объявлена переменная values.
//Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].

//type code ↓
const keys = [];
const values = [];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Spacious apartment in the city center';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  if (apartment.hasOwnProperty(key)) {
    keys.push(key);
    values.push(apartment[key]);
  }
}
console.log(keys);
console.log(values);

//=== === ===
//=== 12  ===
//=== === ===

//Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

//Объявлена функция countProps(object)
//Вызов countProps({}) возвращает 0
//Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
//Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
//Функция подсчитывает только собственные свойства объекта

//type code ↓
function countProps(object) {
  let propCount = 0;
  let keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return (propCount = keys.length);
}

console.log(countProps({}));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
console.log(countProps({ name: 'Mango', age: 2 }));

//=== === ===
//=== 13  ===
//=== === ===

//Перебери объект apartment используя метод Object.keys() и цикл for...of. //Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

//Объявлена переменная apartment.
//Значение переменной apartment это объект.
//Объявлена переменная keys.
//Значение переменной keys это массив ["descr", "rating", "price"].
//Значение переменной keys получено с помощью метода Object.keys().
//Объявлена переменная values.
//Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].
//Значение переменной values получено с помощью цикла for...of.

//type code ↓
const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const keys = Object.keys(apartment);
const values = [];

for (let key of keys) {
  values.push(apartment[key]);
}

console.log(keys);
console.log(values);

//=== === ===
//=== 14  ===
//=== === ===

//Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, но необязательно, цикл for...of.

//Объявлена функция countProps(object)
//Вызов countProps({}) возвращает 0
//Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
//Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
//Функция подсчитывает только собственные свойства объекта
//Функция использует метод Object.keys() и, возможно, цикл for...of

//type code ↓
function countProps(object) {
  let propCount = 0;
  const keys = Object.keys(object);
  // for (const key in object) {
  //   if (object.hasOwnProperty(key)) {
  //     propCount += 1;
  //   }
  // }

  for (let key of keys) {
    // if (object.hasOwnProperty(key)) {
    // }
    propCount = keys.length;
  }
  return propCount;
}

console.log(countProps({ name: 'Mango', age: 2 }));

//=== === ===
//=== 15  ===
//=== === ===

//Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы //Object.keys() и Object.values().

//Объявлена переменная apartment
//Значение переменной apartment это объект
//Объявлена переменная keys
//Значение переменной keys это массив ["descr", "rating", "price"]
//Объявлена переменная values
//Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]
//Для получения массива ключей объекта apartment используется Object.keys()
//Для получения массива значений объекта apartment используется Object.values()

//type code ↓
const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const keys = Object.keys(apartment);
const values = Object.values(apartment);

console.log(keys);
console.log(values);

//=== === ===
//=== 16  ===
//=== === ===

//Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. //Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. //Используй переменную totalSalary для хранения общей суммы зарплаты.

//Объявлена функция countTotalSalary(salaries)
//Вызов countTotalSalary({}) возвращает 0
//Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330
//Вызов countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400
//Функция учитывает только собственные свойства объекта

//type code ↓
function countTotalSalary(salaries) {
  let totalSalary = 0;
  let values = Object.values(salaries);

  for (const value of values) {
    // if (salaries.hasOwnProperty(value)) {
    totalSalary += value;
    // }
  }

  return totalSalary;
}

console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

//=== === ===
//=== 17  ===
//=== === ===

//Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

//Объявлена переменная colors
//Значение переменной colors это массив
//Объявлена переменная hexColors
//Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
//Объявлена переменная rgbColors
//Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

//type code ↓
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

for (let color of colors) {
  hexColors.push(color.hex);
}

for (let color of colors) {
  rgbColors.push(color.rgb);
}

console.log(hexColors);
console.log(rgbColors);

//=== === ===
//=== 18  ===
//=== === ===

//Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). //Если продукт с таким названием не найден, функция должна возвращать null.

//Объявлена функция getProductPrice(productName).
//Вызов getProductPrice("Radar") возвращает 1300.
//Вызов getProductPrice("Grip") возвращает 1200.
//Вызов getProductPrice("Scanner") возвращает 2700.
//Вызов getProductPrice("Droid") возвращает 400.
//Вызов getProductPrice("Engine") возвращает null.

//type code ↓
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (product of products) {
    if (productName === product.name) {
      return product.price;
    }
  }
  return null;
}

console.log(getProductPrice('Radar'));
console.log(getProductPrice('Droid'));
console.log(getProductPrice('Scanner'));
console.log(getProductPrice('Engine'));

//=== === ===
//=== 19  ===
//=== === ===

//Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

//Объявлена функция getAllPropValues(propName)
//Вызов getAllPropValues("name") возвращает ["Radar", "Scanner", "Droid", "Grip"]
//Вызов getAllPropValues("quantity") возвращает [4, 3, 7, 9]
//Вызов getAllPropValues("price") возвращает [1300, 2700, 400, 1200]
//Вызов getAllPropValues("category") возвращает []

//type code ↓
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  let values = [];
  for (const product of products) {
    for (const obj in product) {
      if (obj === propName) {
        values.push(product[obj]);
      }
    }
  }
  return values;
}

console.log(getAllPropValues('name'));

//=== === ===
//=== 20  ===
//=== === ===

//Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

//Объявлена функция calculateTotalPrice(productName)
//Вызов calculateTotalPrice("Blaster") возвращает 0
//Вызов calculateTotalPrice("Radar") возвращает 5200
//Вызов calculateTotalPrice("Droid") возвращает 2800
//Вызов calculateTotalPrice("Grip") возвращает 10800
//Вызов calculateTotalPrice("Scanner") возвращает 8100

//type code ↓
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

const summ = product => product.price * product.quantity;

function calculateTotalPrice(productName) {
  const product = products.find(item => item.name === productName);
  if (product) {
    return summ(product);
  } else {
    return `Product ${productName} not found`;
  }
}
console.log(calculateTotalPrice('Radar'));

// const summ = product => product.price * product.quantity;
// function calculateTotalPrice(productName) {
//   for (const product of products) {
//     const prodValue = Object.values(product);
//     for (const nameFind in product) {
//       if (prodValue.includes(productName)) {
//         // summ(product);
//         return product.price * product.quantity;
//       }
//       return 0;
//     }
//   }
// }

// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Blaster'));

//=== === ===
//=== 21  ===
//=== === ===

//Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

//Объявлена переменная highTemperatures
//Значение переменной highTemperatures это объект
//Объявлена переменная yesterday с помощью деструктуризации
//Значение переменной yesterday это число 28
//Объявлена переменная today с помощью деструктуризации
//Значение переменной today это число 26
//Объявлена переменная tomorrow с помощью деструктуризации
//Значение переменной tomorrow это число 33
//Объявлена переменная meanTemperature
//Значение переменной meanTemperature это число 29
//Используется синтаксис деструктуризации объекта highTemperatures

//type code ↓
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
const { yesterday, today, tomorrow } = highTemperatures;

const meanTemperature = (yesterday + today + tomorrow) / 3;
console.log(meanTemperature);

//=== === ===
//=== 22  ===
//=== === ===

//В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures. //Задай значение по умолчанию для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

//Объявлена переменная highTemperatures
//Значение переменной highTemperatures это объект
//Объявлена переменная highTemperatures
//Значение переменной highTemperatures это объект
//Объявлена переменная yesterday с помощью деструктуризации
//Значение переменной yesterday это число 28
//Объявлена переменная today с помощью деструктуризации
//Значение переменной today это число 26
//Объявлена переменная tomorrow с помощью деструктуризации
//Значение переменной tomorrow это число 33
//Объявлена переменная icon с помощью деструктуризации
//Значение переменной icon это строка "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
//Используется деструктуризация объекта

//type code ↓
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
// const icon = highTemperatures.icon;
const {
  yesterday,
  today,
  tomorrow,
  icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;

const meanTemperature = (yesterday + today + tomorrow) / 3;

//=== === ===
//=== 23  ===
//=== === ===

//Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. //Задай значение по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

//Объявлена переменная highTemperatures
//Значение переменной highTemperatures это объект
//Объявлена переменная highYesterday
//Значение переменной highYesterday это число 28
//Объявлена переменная highToday
//Значение переменной highToday это число 26
//Объявлена переменная highTomorrow
//Значение переменной highTomorrow это число 33
//Объявлена переменная highIcon
//Значение переменной highIcon это строка "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
//Используется деструктуризация объекта

//type code ↓
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;
const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;

const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
console.log(meanTemperature);

//=== === ===
//=== 24  ===
//=== === ===

//Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..

//Объявлена переменная colors
//Значение переменной colors это массив
//Объявлена переменная hexColors
//Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
//Объявлена переменная rgbColors
//Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
//Для перебора массива используется цикл for...of
//В цикле for...of используется деструктуризация объекта

//type code ↓
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  const { hex, rgb } = color;
  hexColors.push(hex);
  rgbColors.push(rgb);
}
console.log(hexColors);
console.log(rgbColors);

//=== === ===
//=== 25  ===
//=== === ===

//Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

//Объявлена переменная forecast
//Значение переменной forecast это объект
//Объявлена переменная highToday с помощью деструктуризации
//Значение переменной highToday это число 32
//Объявлена переменная lowToday с помощью деструктуризации
//Значение переменной lowToday это число 28
//Объявлена переменная todayIcon с помощью деструктуризации
//Значение переменной todayIcon это строка "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
//Объявлена переменная highTomorrow с помощью деструктуризации
//Значение переменной highTomorrow это число 31
//Объявлена переменная lowTomorrow с помощью деструктуризации
//Значение переменной lowTomorrow это число 27
//Объявлена переменная tomorrowIcon с помощью деструктуризации
//Значение переменной tomorrowIcon это строка "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
//Используется синтаксис деструктуризации объекта highTemperatures

//type code ↓
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

const {
  today: { low: lowToday, high: highToday, icon: todayIcon },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
} = forecast;

console.log(highTomorrow);

//=== === ===
//=== 26  ===
//=== === ===

//Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.

//{
//  today: { low: 10, high: 20 },
//  tomorrow: { low: 20, high: 30 }
//}
//Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.

//Объявлена функция calculateMeanTemperature(forecast)
//В теле функции используется деструктуризация объекта
//В теле функции объявлена переменная todayHigh с помощью деструктуризации
//В теле функции объявлена переменная todayLow с помощью деструктуризации
//В теле функции объявлена переменная tomorrowLow с помощью деструктуризации
//В теле функции объявлена переменная tomorrowHigh с помощью деструктуризации
//Вызов calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) возвращает 28.5
//Вызов calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) возвращает 37

//type code ↓
function calculateMeanTemperature(forecast) {
  // const todayLow = forecast.today.low;
  // const todayHigh = forecast.today.high;
  // const tomorrowLow = forecast.tomorrow.low;
  // const tomorrowHigh = forecast.tomorrow.high;

  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;

  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

console.log(
  calculateMeanTemperature({
    today: { low: 28, high: 32 },
    tomorrow: { low: 25, high: 29 },
  })
);

//=== === ===
//=== 27  ===
//=== === ===

//В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

//Объявлена переменная scores
//Значение переменной scores это массив [89, 64, 42, 17, 93, 51, 26]
//Объявлена переменная bestScore
//Значение переменной bestScore это число 93
//Объявлена переменная worstScore
//Значение переменной worstScore это число 17
//Для передачи аргументов методу Math.max() используется синтаксис ... на массиве scores
//Для передачи аргументов методу Math.min() используется синтаксис ... на массиве scores

//type code ↓
const scores = [89, 64, 42, 17, 93, 51, 26];
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

console.log(bestScore);
console.log(worstScore);

//=== === ===
//=== 28  ===
//=== === ===

//В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:

//В переменной allScores хранился массив всех результатов от первой до третьей группы.
//В переменной bestScore был самый высокий общий балл.
//В переменной worstScore был самый низкий общий балл.
//Объявлена переменная firstGroupScores
//Значение переменной firstGroupScores это массив [64, 42, 93]
//Объявлена переменная secondGroupScores
//Значение переменной secondGroupScores это массив [89, 14, 51, 26]
//Объявлена переменная thirdGroupScores
//Значение переменной thirdGroupScores это массив [29, 47, 18, 97, 81]
//Объявлена переменная allScores.
//Значение переменной allScores это массив [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
//Объявлена переменная bestScore
//Значение переменной bestScore это число 97
//Объявлена переменная worstScore
//Значение переменной worstScore это число 14
//При присвоении значения переменной allScores использовался синтаксис ... для заполнения массива
//Для передачи аргументов методу Math.max() используется синтаксис ... на массиве allScores
//Для передачи аргументов методу Math.min() используется синтаксис ... на массиве allScores

//type code ↓
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

console.log(bestScore);
console.log(worstScore);

//=== === ===
//=== 29  ===
//=== === ===

//В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.

//Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

//Объявлена переменная defaultSettings
//Значение переменной defaultSettings это объект
//Объявлена переменная overrideSettings
//Значение переменной overrideSettings это объект
//Объявлена переменная finalSettings
//Значение переменной finalSettings это объект
//Значение свойства finalSettings.theme равно "light"
//Значение свойства finalSettings.public равно "false"
//Значение свойства finalSettings.withPassword равно "true"
//Значение свойства finalSettings.minNumberOfQuestions равно 10
//Значение свойства finalSettings.timePerQuestion равно 30
//При присваивании значения переменной finalSettings используется синтаксис ...

//type code ↓
const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
const finalSettings = { ...defaultSettings, ...overrideSettings };
console.log(finalSettings);

//=== === ===
//=== 30  ===
//=== === ===

//Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

//text - текст задачи.
//category - категория задачи.
//priority - приоритет задачи.
//Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

//В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

//Объявлена функция makeTask(data)
//Вызов makeTask({}) возвращает { category: "General", priority: "Normal", completed: false }
//Вызов makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) возвращает { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
//Вызов makeTask({ category: "Finance", text: "Take interest" }) возвращает { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
//Вызов makeTask({ priority: "Low", text: "Choose shampoo" }) возвращает { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
//Вызов makeTask({ text: "Buy bread" }) возвращает { category: "General", priority: "Normal", text: "Buy bread", completed: false }

//type code ↓
function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';

  return { ...{ category, priority, completed }, ...data };
}
console.log(makeTask({ text: 'Buy bread' }));
console.log(makeTask({}));
console.log(
  makeTask({
    category: 'Homemade',
    priority: 'Low',
    text: 'Take out the trash',
  })
);

//=== === ===
//=== 31  ===
//=== === ===

//Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.

//Объявлена функция add
//Функция add использует параметр args
//Для сбора аргументов в переменную args, в подписи функции используется синтаксис ... (оперетор rest)
//Вызов add(15, 27) возвращает 42
//Вызов add(12, 4, 11, 48) возвращает 75
//Вызов add(32, 6, 13, 19, 8) возвращает 78
//Вызов add(74, 11, 62, 46, 12, 36) возвращает 241

//type code ↓
const add = (...args) => {
  let summ = 0;
  for (let i = 0; i < args.length; i++) {
    summ += args[i];
  }
  return summ;
};

console.log(add(15, 27));
console.log(add(74, 11, 62, 46, 12, 36));

//=== === ===
//=== 32  ===
//=== === ===

//Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело //функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром //функции.

//Объявлена функция addOverNum()
//Вызов addOverNum(50, 15, 27) возвращает 0
//Вызов addOverNum(10, 12, 4, 11, 48, 10, 8) возвращает 71
//Вызов addOverNum(15, 32, 6, 13, 19, 8) возвращает 51
//Вызов addOverNum(20, 74, 11, 62, 46, 12, 36) возвращает 218

//type code ↓
function addOverNum(...args) {
  let total = 0;

  for (const arg of args) {
    if (args[0] < arg) {
      total += arg;
    }
  }

  return total;
}

console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

//=== === ===
//=== 33  ===
//=== === ===

//Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

//Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

//Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.

//Объявлена функция findMatches()
//Вызов findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) возвращает [1, 2]
//Вызов findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) возвращает [17, 89, 2]
//Вызов findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) возвращает [24, 9, 41]
//Вызов findMatches([63, 11, 8, 29], 4, 7, 16) возвращает []

//type code ↓
function findMatches(...args) {
  const matches = [];
  for (arg of args) {
    if (args[0].includes(arg)) {
      matches.push(arg);
    }
  }
  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

//=== === ===
//=== 34  ===
//=== === ===

//Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).
//Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку "Deleting book <имя книги>", где <имя книги> это значение параметра bookName.
//Метод updateBook(oldName, newName) будет обновлять название книги на новое. Возвращает строку "Updating book <старое имя> to <новое имя>", где <старое имя> и <новое имя>это значения параметров oldName и newName соотвественно.
//Объявлена переменная bookShelf
//Значение переменной bookShelf это объект
//Значение свойства bookShelf.getBooks это метод объекта
//Вызов метода bookShelf.getBooks() возвращает строку "Returning all books"
//Значение свойства bookShelf.addBook это метод объекта
//Вызов метода bookShelf.addBook("Haze") возвращает строку "Adding book Haze"
//Значение свойства bookShelf.removeBook это метод объекта
//Вызов метода bookShelf.removeBook("Red sunset") возвращает строку "Deleting book Red sunset"
//Значение свойства bookShelf.updateBook это метод объекта
//Вызов метода bookShelf.updateBook("Sands of dune", "Dune") возвращает строку "Updating book Sands of dune to Dune"

//type code ↓
const bookShelf = {
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return console.log('Returning all books');
  },
  addBook(bookName) {
    return console.log(`Adding book ${bookName}`);
  },
  removeBook(bookName) {
    return console.log(`Deleting book ${bookName}`);
  },
  updateBook(oldName, newName) {
    return console.log(`Updating book ${oldName} to ${newName}`);
  },
};

bookShelf.getBooks();
bookShelf.addBook('Haze');
bookShelf.removeBook('Red sunset');
bookShelf.updateBook('Sands of dune', 'Dune');
console.log(bookShelf);

//=== === ===
//=== 35  ===
//=== === ===

//Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент

//Объявлена переменная bookShelf
//Значение переменной bookShelf это объект
//Значение свойства bookShelf.updateBook это метод объекта
//После вызова метода bookShelf.updateBook("Haze", "Dungeon chronicles"), значение свойства books это массив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
//После вызова метода bookShelf.updateBook("The last kingdom", "Dune"), значение свойства books это массив ["Dune", "Haze", "The guardian of dreams"]

//type code ↓
const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    const indexBook = bookShelf.books.indexOf(oldName);
    bookShelf.books.splice(indexBook, 1, newName);
    // return bookShelf.books;
  },
};

bookShelf.updateBook('Haze', 'Dungeon chronicles');
console.log(bookShelf.books);
bookShelf.updateBook('The last kingdom', 'Dune');
console.log(bookShelf.books);

//=== === ===
//=== 36  ===
//=== === ===

//К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления, удаления, поиска и обновления зелий. Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.

//Объявлена переменная atTheOldToad
//Значение переменной atTheOldToad это объект
//Значение свойства atTheOldToad.potions это массив []

//type code ↓
const atTheOldToad = {
  potions: [],
};

//=== === ===
//=== 37  ===
//=== === ===

//Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

//Объявлена переменная atTheOldToad
//Значение переменной atTheOldToad это объект
//Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
//Значение свойства atTheOldToad.getPotions это метод объекта
//Вызов метода atTheOldToad.getPotions() возвращает ["Speed potion", "Dragon breath", "Stone skin"]

//type code ↓
const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  getPotions() {
    return Object.values(this.potions);
  },
};

console.log(atTheOldToad.getPotions());

//=== === ===
//=== 38  ===
//=== === ===

//Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

//Объявлена переменная atTheOldToad
//Значение переменной atTheOldToad это объект
//Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
//Значение свойства atTheOldToad.addPotion это метод объекта
//После первого вызова метода atTheOldToad.addPotion("Invisibility"), в свойстве potions будет массив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
//После второго вызова метода atTheOldToad.addPotion("Power potion"), в свойстве potions будет массив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]

//type code ↓
const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  addPotion(potionName) {
    this.potions.push(potionName);
    return this.potions;
  },
};

console.log(atTheOldToad.addPotion('Invisibility'));
console.log(atTheOldToad.addPotion('Power potion'));

//=== === ===
//=== 39  ===
//=== === ===

//Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

//Объявлена переменная atTheOldToad
//Значение переменной atTheOldToad это объект
//Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
//Значение свойства atTheOldToad.removePotion это метод объекта
//После первого вызова метода atTheOldToad.removePotion("Dragon breath"), в свойстве potions будет массив ["Speed potion", Stone skin"]
//После второго вызова метода atTheOldToad.removePotion("Speed potion"), в свойстве potions будет массив ["Stone skin"]

//type code ↓
const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  removePotion(potionName) {
    const indexPotion = this.potions.indexOf(potionName);
    this.potions.splice(indexPotion, 1);
    return this.potions;
  },
};

console.log(atTheOldToad.removePotion('Dragon breath'));
console.log(atTheOldToad.removePotion('Speed potion'));

//=== === ===
//=== 40  ===
//=== === ===

//Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

//Объявлена переменная atTheOldToad
//Значение переменной atTheOldToad это объект
//Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
//Значение свойства atTheOldToad.updatePotionName это метод объекта
//После первого вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), в свойстве potions будет массив ["Speed potion", "Polymorth", "Stone skin"]
//После второго вызова метода atTheOldToad.updatePotionName("Stone skin", "Invisibility"), в свойстве potions будет массив ["Speed potion", "Polymorth", "Invisibility"]

//type code ↓
const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    const indexPotion = this.potions.indexOf(oldName);
    this.potions.splice(indexPotion, 1, newName);
    return this.potions;
  },
};

console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
console.log(atTheOldToad.updatePotionName('Stone skin', 'Invisibility'));

//=== === ===
//=== 41  ===
//=== === ===

//Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

//{
// name: "Dragon breath",
// price: 700
//}
//Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

//getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
//addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре. В противном случае возвращается строка.
//removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
//updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
//Объявлена переменная atTheOldToad
//Значение переменной atTheOldToad это объект
//Значение свойства atTheOldToad.getPotions это метод объекта
//Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
//Значение свойства atTheOldToad.addPotion это метод объекта.
//Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), в массиве potions последним элементом будет этот объект
//Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: "Power potion", price: 270 }), в массиве potions последним элементом будет этот объект
//Если добавляемое зелье уже есть в массиве potions, метод addPotion возвращает строку с текстом из исходного кода
//Если добавляемое зелье уже есть в массиве potions, метод addPotion не добавляет в него передаваемый обьект
//Для исходного объекта после вызова atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), массив potions не изменяется
//Для исходного объекта после вызова atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), массив potions не изменяется
//Для исходного объекта вызов atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), возвращает строку "Error! Potion Dragon breath is already in your inventory!"
//Для исходного объекта вызов atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), возвращает строку "Error! Potion Stone skin is already in your inventory!"
//Значение свойства atTheOldToad.removePotion это метод объекта
//Для исходного объекта после вызова метода atTheOldToad.removePotion("Dragon breath"), в свойстве potions будет массив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
//Для исходного объекта после вызова метода atTheOldToad.removePotion("Speed potion"), в свойстве potions будет массив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
//Значение свойства atTheOldToad.updatePotionName это метод объекта
//Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
//Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"), в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

//type code ↓
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    // return this.potions;
    for (potion of this.potions) {
      return potion;
    }
  },
  addPotion(newPotion) {
    if (this.potions.includes(newPotion)) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
};

console.log(atTheOldToad.getPotions());
