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
