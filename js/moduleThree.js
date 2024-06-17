// ============================ Object ==================

const book = {
  title: 'Kingdom',
  author: 'Name Lastname',
  genres: ['History', 'Horror', 'Comedy'],
  isPublic: true,
  rating: 8.4,
};

// ============================ Вложенные свйоства

const user = {
  name: 'Vasya Pupkin',
  tag: '#Vasya',
  location: {
    country: 'England',
    city: 'London',
  },
  stats: {
    folowers: 15,
    views: 2,
    like: 1,
  },
};

// ==============

const book = {
  title: 'Kingdom',
  author: 'Name Lastname',
  genres: ['History', 'Horror', 'Comedy'],
  isPublic: true,
  rating: 8.4,
};

const bookTitle = book.title;
console.log(bookTitle); //Kingdom
const bookAuthor = book.author;
console.log(bookAuthor); //Name Lastname
const bookPrice = book.price;
console.log(bookPrice); //undefind

// ==================

const user = {
  name: 'Vasya Pupkin',
  tag: '#Vasya',
  location: {
    country: 'England',
    city: 'London',
  },
  stats: {
    folowers: 15,
    views: 2,
    like: 1,
  },
  hobbies: ['Swiming', 'Music', 'Box'],
};

const userLocation = user.location.country;
console.log(userLocation); //England
const userStatus = user.stats.friends;
console.log(userStatus); //undefind

// ====================

const user = {
  name: 'Vasya Pupkin',
  tag: '#Vasya',
  location: {
    country: 'England',
    city: 'London',
  },
  stats: {
    folowers: 15,
    views: 2,
    like: 1,
  },
  hobbies: ['Swiming', 'Music', 'Box'],
};

const hobbie = user.hobbies;
console.log(hobbie); //[ 'Swiming', 'Music', 'Box' ]
const firstHobbie = user.hobbies[0];
console.log(firstHobbie); //"Swiming"
const lengthHobie = user.hobbies.length;
console.log(lengthHobie); //3

// =================

const book = {
  title: 'Kingdom',
  author: 'Name Lastname',
  genres: ['History', 'Horror', 'Comedy'],
  isPublic: true,
  rating: 8.4,
};

const bookTitle = book['title'];
console.log(bookTitle); //Kingdom

const propKey = 'author';
const bookAuthor = book[propKey];
console.log(bookAuthor); //Name Lastname

// ======================

const book = {
  title: 'Kingdom',
  author: 'Name Lastname',
  genres: ['History', 'Horror', 'Comedy'],
  isPublic: true,
  rating: 8.4,
};

book.title = 'Castle';
book.isPublic = false;
book.genres.push('Drama');

console.log(book.title); //Castle
console.log(book.isPublic); //false
console.log(book.genres); //[ 'History', 'Horror', 'Comedy', 'Drama' ]

// ======================

const book = {
  title: 'Kingdom',
  author: 'Name Lastname',
  genres: ['History', 'Horror', 'Comedy'],
  isPublic: true,
  rating: 8.4,
};

book.pageCount = 600;
book.originalLanguage = 'En';
book.translations = ['Uk', 'Ru', 'Pl'];

console.log(book.pageCount); //600
console.log(book.originalLanguage); //'En'
console.log(book.translations); //["Uk", "Ru", "Pl"]

// ===================

const name = 'Vasya Pupkin';
const age = 30;

const user = {
  name: name,
  age: age,
};

console.log(user.name); //"Vasya Pupkin"
console.log(user.age); //30

// ===================

const name = 'Vasya Pupkin';
const age = 30;

const user = {
  name,
  age,
};

console.log(user.name); //"Vasya Pupkin"
console.log(user.age); //30

// =======================

const propName = 'name';
const user = {
  age: 25,
};

user[propName] = 'Vasya Pupkin';
console.log(user.name); //Vasya Pupkin

// =======================

const propName = 'name';
const user = {
  age: 25,
  // Имя этого свойства будет взято с переменной propName
  [propName]: 'Vasya Pupkin',
};

console.log(user.name); //Vasya Pupkin

//===================== Логически и синтаксичеки сгруппированая сущность

const bookShelf = {
  books: ['Kingdom', 'Custle'],
  // Это метод объекта
  getBooks() {
    console.log('Этот метод будет проверять все книги - свойство books');
  },
  // Это метод объекта
  addBook(BookName) {
    console.log('Этот метод будет добавлять новую книгу в свойства books');
  },
};

// Вызовы методов
bookShelf.getBooks();
bookShelf.addBook('New book');

console.log(bookShelf);

//================== Слабо связаные независимы сущности

const books = [];
function getBooks() {}
function addBook() {}

//===================

const bookShelf = {
  books: ['Kingdom'],
  getBooks() {
    console.log(this);
  },
};

// Перед точкой находится объект bookShelf, поэтому вызов метода this будет сохранять ссылку на него
bookShelf.getBooks();

// ==================

const bookShelf = {
  books: ['Kingdom'],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf.getBooks()); //["Kingdom"]
bookShelf.addBook('New book');
bookShelf.addBook('Very New book');
console.log(bookShelf.getBooks()); //[ 'Kingdom', 'New book', 'Very New book' ]
bookShelf.removeBook('Kingdom');
console.log(bookShelf.getBooks()); //[ 'New book', 'Very New book' ]

// ========================= for...in==================

const book = {
  title: 'Kingdom',
  author: 'Name Lastname',
  genres: ['History', 'Horror', 'Comedy'],
  isPublic: true,
  rating: 8.4,
};

for (const key in book) {
  console.log(key);
  console.log(book[key]);
}

// =======================Метод hasOwnProperty()===============

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Sharik';

console.log(dog); //{ name: 'Sharik' }
console.log(dog.name); //Sharik
console.log(dog.legs); //4

// ==================

// Плохой пример
console.log('name' in dog); //true
console.log('legs' in dog); //true

// Хороший пример
console.log(dog.hasOwnProperty('name')); //true
console.log(dog.hasOwnProperty('legs')); //false

// ============

const book = {
  title: 'Kingdom',
  author: 'Name Lastname',
  genres: ['History', 'Horror', 'Comedy'],
  isPublic: true,
  rating: 8.4,
};

for (const key in book) {
  // Если это собственное свойство - выполняем тело if
  if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book[key]);
  }
  // Если это не собстенное свойство - ничего не делаем
}

// ============================= Метод Object.keys() ====================

const book = {
  title: 'Kingdom',
  author: 'Name Lastname',
  genres: ['History', 'Horror', 'Comedy'],
  isPublic: true,
  rating: 8.4,
};

const keys = Object.keys(book);
console.log(keys); //[ 'title', 'author', 'genres', 'isPublic', 'rating' ]

// ======================

const book = {
  title: 'Kingdom',
  author: 'Name Lastname',
  genres: ['History', 'Horror', 'Comedy'],
  isPublic: true,
  rating: 8.4,
};
const keys = Object.keys(book);

for (const key of keys) {
  console.log(key);
  console.log(book[key]);
}

// =============================== Метод Object.values() =================

const book = {
  title: 'Kingdom',
  author: 'Name Lastname',
  genres: ['History', 'Horror', 'Comedy'],
  isPublic: true,
  rating: 8.4,
};

const keys = Object.keys(book);
const values = Object.values(book);

console.log(`keys: ${keys}\nvalues: ${values} `);

// ==============================

const products = {
  apple: 4,
  carrot: 10,
  broad: 3,
  cheese: 25,
};
// =========
// const values = Object.values(products).join(' + ');
// console.log(values);
// =========

const values = Object.values(products);
let total = 0;

for (const value of values) {
  total += value;
}
console.log(total); //42

// =================================== Метод Object.entries()=====================

const book = {
  title: 'Kingdom',
  author: 'Name Lastname',
  genres: ['History', 'Horror', 'Comedy'],
  isPublic: true,
  rating: 8.4,
};
const keys = Object.keys(book);
const values = Object.values(book);
const entries = Object.entries(book);

console.log(`Keys: ${keys}\nValues: ${values}\nEntries: ${entries}`);

// =============================== Массив объектов ==================

const books = [
  {
    title: 'Kingdom',
    author: 'Stiven King',
    rating: 9.9,
  },
  {
    title: 'Dom2',
    author: 'King Kong',
    rating: 1.1,
  },
  {
    title: 'Custtle',
    author: 'King Artur',
    rating: 7.4,
  },
];

for (const book of books) {
  console.log(
    `Книги: ${book}\nНазвание: ${book.title}\nАвтор: ${book.author}\nРейтинг: ${book.rating}`
  );
}

const bookName = [];

for (const book of books) {
  bookName.push(book.title);
}
console.log(bookName); //[ 'Kingdom', 'Dom2', 'Custtle' ]

let totalRating = 0;

for (const book of books) {
  totalRating += book.rating;
}

let avgRating = (totalRating / books.length).toFixed(1);
console.log(avgRating); //6.1

// =============================== Синтаксис spread и rest =================

const temps = [14, -2, 3, 25, 0];
// В консоли будет массив
console.log(`Temps: ${temps}`); //Temps: 14,-2,3,25,0

// Так не сработает, потому что передаем целый массив
console.log(Math.max(temps)); //NaN

// В консоли будет набор отдельных чисел
console.log(...temps); //14 -2 3 25 0

// Распределяем коллекцию элементов в качестве отдельных аргументов
console.log(Math.max(...temps)); //25

// ========================== Spread создание нового массива

const temps = [14, -2, 3, 25, 0];
// Это точная но независимая копия tepms[]
const copyOfTemps = [...temps];
console.log(copyOfTemps); //[ 14, -2, 3, 25, 0 ]

// ====================
const temps1 = [14, -2, 3, 25, 0];
const temps2 = [14, -2, 3, 25, 0];
const allTemps = [...temps1, ...temps2];
console.log(allTemps); //[14, -2, 3, 25, 0, 14, -2, 3, 25, 0]

// ==================================== Spread: создание нового объекта ============

const first = {
  propA: 1,
  propB: 15,
};
const second = {
  propC: 25,
};
const third = { ...first, ...second };
console.log(third); //{ propA: 1, propB: 15, propC: 25 }

// ===========================

const first = {
  propA: 1,
  propB: 15,
  propC: 50,
};
const second = {
  propC: 25,
  propD: 20,
};
const third = { ...first, ...second };
console.log(third); //{ propA: 1, propB: 15, propC: 25, propD: 20 }

const fourth = { ...second, ...first };
console.log(fourth); //{ propC: 50, propD: 20, propA: 1, propB: 15 }

// ==================================
const first = {
  propA: 1,
  propB: 15,
  propC: 50,
};
const second = {
  propC: 51,
};
const third = {
  propB: 10,
  ...first,
  ...second,
};
console.log(third); //{ propB: 15, propA: 1, propC: 51 }

const fourth = { ...second, ...first, propB: -5 };
console.log(fourth); //{ propC: 50, propA: 1, propB: -5 }

const fifth = { ...first, propC: 100, ...second };
console.log(fifth); //{ propA: 1, propB: 15, propC: 51 }

// =============================== Rest: сбор всех аргументов функции ============

// Как объявить параметры функции таким образом чтобы можно было передать большое количество аргументов
function multiply(...args) {
  console.log(`args: ${args}`);
}
multiply(1, 3, 5);

// ====================

function multiply(firstNumber, secondNumber, ...args) {
  console.log(firstNumber);
  console.log(secondNumber);
  console.log(args);
}

multiply(10, 20, 30); //10 20 [ 30 ]
multiply(10, 20, 30, 100, 1000); //10 20 [(30, 100, 1000)];

// ========================================= Деструктуризация объектов ================

const book = {
  title: 'Kingdom',
  author: 'Name Lastname',
  genres: ['History', 'Horror', 'Comedy'],
  isPublic: false,
  rating: 8.4,
};

const accessType = book.isPublic ? 'в печати' : 'не в печати';
const message = `Книга ${book.title} автора ${book.author} с рейтингом ${book.rating} находится ${accessType}`;
console.log(message); //Книга Kingdom автора Name Lastname с рейтингом 8.4 находится не в печати

// ===================

const book = {
  title: 'Kingdom',
  author: 'Name Lastname',
  genres: ['History', 'Horror', 'Comedy'],
  isPublic: false,
  rating: 8.4,
};

const { title, author, genres, isPublic, rating, likes } = book;
console.log(likes); //undefined

const accessType = isPublic ? 'в печати' : 'не в печати';
const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится ${accessType}`;
console.log(message); //Книга Kingdom автора Name Lastname с рейтингом 8.4 находится не в печати

// =========================== Значения по умолчанию

const book = {
  title: 'Kingdom',
  author: 'Name Lastname',
};
// Добавим изображение обертки, если оно отсутствует в объекте книги

const { title, author, img = 'https://via.placeholder.com/640/480' } = book;
console.log(title); //Kingdom
console.log(author); //Name Lastname
console.log(img); //https://via.placeholder.com/640/480

// ================================ Изменение имени переменной===================

const firstBook = {
  title: 'First book',
  img: 'https://via.placeholder.com/640/480',
};
const {
  title: firstTitle,
  img: firstImg = 'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
} = firstBook;

console.log(firstTitle); //First book
console.log(firstImg); //https://via.placeholder.com/640/480

const secondBook = {
  title: 'Second book',
};
const { title: secondTitle, img: secondImg = 'https://asdasdads' } = secondBook;
console.log(secondTitle); //Second book
console.log(secondImg); //https://asdasdads

// ==================================== Деструктуризация в циклах =============
const books = [
  {
    title: 'Kingdom',
    author: 'Name Lastname',
    genres: ['History', 'Horror', 'Comedy'],
    isPublic: false,
    rating: 8.4,
  },
  {
    title: 'Custle',
    author: 'Harry',
    genres: ['Drama', 'Melodrama', 'Comedy'],
    isPublic: true,
    rating: 0.4,
  },
];

// Классический способ
for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}

//Деструктуризированый вариант
for (const book of books) {
  const { title, author, rating } = book;
  console.log(title);
  console.log(author);
  console.log(rating);
}

for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}

// ============================= Глубокая деструктуаризация ================

const user = {
  name: 'Username',
  tag: '#User',
  stats: {
    folovers: 50,
    views: 15,
    likes: 10,
  },
};
const {
  name,
  tag,
  stats: { folovers, views: userViews, likes: userLikes = 0 },
} = user;
console.log(name); //Username
console.log(tag); //#User
console.log(folovers); //50
console.log(userViews); //15
console.log(userLikes); //10

// ================================= Деструктурицация массивов ===================

const rgb = [200, 255, 100];
const [red, green, blue] = rgb;

console.log(`R: ${red}, G: ${green}, B: ${blue}`); //R: 200, G: 255, B: 100

// =====================

const rgb = [200, 255, 100];
let red, green, blue;
[red, green, blue] = rgb;

console.log(`R: ${red}, G: ${green}, B: ${blue}`); //R: 200, G: 255, B: 100

// ========================

const rgb = [200, 255, 100];
const [red, green, blue, alpha = 0.3] = rgb;

console.log(`R: ${red}, G: ${green}, B: ${blue}, Alpha: ${alpha}`); //R: 200, G: 255, B: 100, Alpha: 0.3

// =============================

const rgb = [200, 255, 100];
const [red, ...colors] = rgb;

console.log(red); //200
console.log(colors); //[ 255, 100 ]

// =================================

const rgb = [200, 255, 100];
const [, , blue] = rgb;

console.log(`B: ${blue}`); //B: 100

// ============================================== Паттерн "Объект параметров" ====================

function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
  // Что то делаем с параметрами
  console.log(title);
  console.log(numberOfPages);
  // И так далее
}

doStuffWithBook('Kingdom', 250, 15, 9.8, true);

// ======================

function doStuffWithBook(book) {
  // Делаем что то со свойствами объекта
  console.log(book.title);
  console.log(book.downloads);
  console.log(book.rating);
  // И так далее
}

// =================

doStuffWithBook({ title: 'Ringdom', numberOfPages: 250, rating: 9.8 });
console.log(doStuffWithBook);

// ====================

function doStuffWithBook(book) {
  const { title, numberOfPages, rating } = book;
  console.log(title);
  console.log(rating);
}

// ====================

function doStuffWithBook({ title, numberOfPages, rating }) {
  console.log(title);
  console.log(rating);
}
