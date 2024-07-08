// ========================== this =================

//Петя бежит быстро, потому что Петя пытается поймать поезд
const petya = {
  username: 'Petya',
  showName() {
    console.log(petya.username);
  },
};

console.log(petya.showName()); //"Petya"

// Петя бежит быстро, потому что он (this) пытается поймать поезд

const petya = {
  username: 'Petya',
  showName() {
    console.log(this.username);
  },
};
console.log(petya.showName()); //"Petya"

// ===================================

const bookShelf = {
  author: ['Stiven King', 'Boris Akunin'],
  getAuthor() {
    return this.author;
  },
  addAuthor(newAuthor) {
    this.author.push(newAuthor);
  },
};

console.log(bookShelf.getAuthor()); //[ 'Stiven King', 'Boris Akunin' ]
bookShelf.addAuthor('Doncova');
console.log(bookShelf.getAuthor()); //[ 'Stiven King', 'Boris Akunin', 'Doncova' ]

// ========================== this в качестве метода объекта =====================

const petya = {
  username: 'Petya',
  showThis() {
    console.log(this);
  },
  showName() {
    console.log(this.username);
  },
};
petya.showThis(); //username: 'Petya', showThis: [F: showThis], showName: [F: showName]
petya.showName(); //Petya

// ======================

function showThis() {
  // Это showThis
  console.log(this);
}
// Вызываем в глобальном контексте showThis
const user = {
  username: 'Mango',
};
// Записываем ссылку на функцию в свойстве объекта
// Обратите внимание что это не вызов - нет ()
user.showContext = showThis;

// Вызываем функцию в контексте объекта
// Это будет указывать на текущий объект в контексте которого осуществляется вызов, а не глобальный объект

console.log(user.showContext());
//{ username: 'Mango', showContext: [Function: showThis] }
//undefined

// ================================ this в callback функциях =========================

const customer = {
  firstname: 'Petya',
  lastname: 'Vasechkin',
  getFullName() {
    return `${this.firstname} ${this.lastname}`;
  },
};

function makeMessage(callback) {
  // Вызов метода getFullName без объекта
  console.log(`Обрабатываем заявку от ${callback}`);
}

makeMessage(customer.getFullName); // Ошибка при вызове
makeMessage(customer.getFullName()); //Обрабатываем заявку от Petya Vasechkin

// ============================ стрелочные функции и this ============

const showThis = () => {
  console.log(`Это showThis: ${this}`);
};
showThis(); // Объект window

const user = {
  username: 'Mango',
};
user.showContext = showThis;
user.showContext(); //Объект window

// =================================

const hotel = {
  username: 'Peris Hilton',
  showThis() {
    const foo = () => {
      // Стрелки запоминают контекст во время объявления из родительской области видимости
      console.log('This in foo', this);
    };
    foo();
    console.log('This в showThis', this);
  },
};

hotel.showThis();
//This in foo { username: 'Peris Hilton', showThis: [Function: showThis] }
//This в showThis { username: 'Peris Hilton', showThis: [Function: showThis] }

// ================================== Метод call() =============================

function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}`);
}
const mango = {
  username: 'Mango',
};

const poly = {
  username: 'Poly',
};

greetGuest.call(mango, 'Добро пожаловать '); //Добро пожаловать , Mango
greetGuest.call(poly, 'Добро пожаловать '); //Добро пожаловать , Poly

// ================================== Метод apply() =============================

function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}`);
}
const mango = {
  username: 'Mango',
};

const poly = {
  username: 'Poly',
};

greetGuest.apply(mango, ['Добро пожаловать ']); // Добро пожаловать , Mango
greetGuest.apply(poly, ['Добро пожаловать ']); // Добро пожаловать , Poly

// ===================================== Метод bind() =======================

function greet(clientName) {
  return console.log(`${clientName}, добро пожаловать в ${this.service}`);
}

const steam = {
  service: 'Steam',
};
const staemGreater = greet.bind(steam);
staemGreater('Mango'); // Mango, добро пожаловать в Steam

const gmail = {
  service: 'Gmail',
};
const gmailGreater = greet.bind(gmail);
gmailGreater('Poly'); // Poly, добро пожаловать в Gmail

// ================================== bind() и метод объекта ======================

const customer = {
  firstName: 'Petya',
  lastName: 'Polin',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
function makeMessage(callback) {
  console.log(`Обрабатываем заявку от ${callback()}.`);
}
makeMessage(customer.getFullName.bind(customer)); //Обрабатываем заявку от Petya Polin.

// =========================================== Процедурное программирование ==================

const baseSalary = 30000;
const overTime = 10;
const rate = 20;
const getWage = (baseSalary, overTime, rate) => baseSalary + overTime * rate;

console.log(getWage(baseSalary, overTime, rate)); //30200

// ===================================

const employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};

console.log(employee.getWage()); //30200

// =============================== Прототип объекта =========================

const animal = {
  legs: 4,
};

const dog = Object.create(animal);
dog.name = 'Sharik';
console.log(dog); //{ name: 'Sharik' }
console.log(animal.isPrototypeOf(dog)); //true

console.log(dog.hasOwnProperty('name')); //true
console.log(dog.name); //Sharik
console.log(dog.hasOwnProperty('legs')); //false
console.log(dog.legs); //4

// ======================== Метод hasOwnProperty()======================

const animal = {
  eats: true,
};
const dog = Object.create(animal);
dog.bargs = true;
for (const key in dog) {
  console.log(key); //bargs;eats
}

// =====================

const animal = {
  eats: true,
};
const dog = Object.create(animal);
dog.bargs = true;
for (const key in dog) {
  if (!dog.hasOwnProperty(key)) continue;
  console.log(key); //bargs
}

// =================================== Метод Object.keys(obj) =====================

const animal = {
  eats: true,
};
const dog = Object.create(animal);
dog.bargs = true;
const dogKeys = Object.keys(dog);
console.log(dogKeys); //[ 'bargs' ]

// ====================================== Классы ==========================

class User {
  // Тело класса
}
const mango = new User();
console.log(mango); //User {}

// ======================== constructor =======================

class User {
  // Синтаксис объявления метода класса
  constructor(name, email) {
    // Инициализация свойства экземпляра
    this.name = name;
    this.email = email;
  }
}
const mango = new User('Mango', 'mango123@gmail.com');
console.log(mango); //User { name: 'Mango', email: 'mango123@gmail.com' }
const apple = new User('Aplpe', 'mapple23@gmail.com');
console.log(apple); //User { name: 'Aplpe', email: 'mapple23@gmail.com' }

// ================================ Объект параметров ==========================

class User {
  // Диструктуризация объекта
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}
const mango = new User({ name: 'Mango', email: 'mango123@gmail.com' });
console.log(mango); //User { name: 'Mango', email: 'mango123@gmail.com' }

// ====================== Методы класса ================================

class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
  // Метод getEmail()
  getEmail() {
    return this.email;
  }
  // Метод changeEmail()
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

// ================================= Личные свойства ==========================

class User {
  // Необязательное объявление публичных свойств
  name;
  // Обязательное объявление приватных свойств
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
  getEmail() {
    return this.#email;
  }
  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}
const mango = new User({
  name: 'Mango',
  email: 'mango123@gmail.com',
});
mango.changeEmail('mango123@outlook.com');
console.log(mango.getEmail()); //mango123@outlook.com
console.log(mango.#email); // Ошибка, т.к это приватное свойство

// ================================== Геттеры и сеттеры ================================

class User {
  #email;
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
  // Геттер email
  get email() {
    return this.#email;
  }
  // Сеттер email
  set email(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({
  name: 'Mango',
  email: 'mango@gmail.com',
});
console.log(mango.email); //mango@gmail.com
mango.email = 'mango.outlook.com';
console.log(mango.email); //mango.outlook.com

// ========================

class User {
  #email;
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
  get email() {
    return this.#email;
  }
  set email(newEmail) {
    if (newEmail === '') {
      console.error('Ошибка, почта не может быть пустой');
      return;
    }
    this.#email = newEmail;
  }
}
const mango = new User({
  name: 'Mango',
  email: '',
});
console.log(mango.email);


======================================= Статические свйоства =======================


class User{
  // Объявление и инициализация статического свойства
  static Roles = {
    ADMIN: 'Admin',
    EDITOR: "Editor",
  }
  #email;
  #role;
  constructor({email, role}){
    this.#email = email;
    this.#role = role;
  }
  get role(){
    return this.#role;
  }
  set role(newRole){
    this.#role = newRole;
  }
}

const mango = new User({
  email: "mango@gmail.com",
  role: User.Roles.ADMIN,
});
console.log(mango.Roles);//undefined
console.log(User.Roles);//{ ADMIN: 'Admin', EDITOR: 'Editor' }

console.log(mango.role);//Admin
mango.role = User.Roles.EDITOR;
console.log(mango.role);//Editor