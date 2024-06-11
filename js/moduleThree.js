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
