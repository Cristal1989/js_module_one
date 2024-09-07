// console.log('First');
// console.log('Second');
// console.log('Third');

// ======================

//Запустится 1й лог
console.log('First log');

setTimeout(() => {
  // Выпонится последним через 2000ms
  console.log('Second log');
}, 2000);

// Запустится вторым

console.log('Third log');
//First log
//Third log
//Second log

// =================================== timeout =====================

const button = document.querySelector('button');
const onClick = () => {
  const timerId = setTimeout(() => {
    console.log('Async code');
  }, 2000);
  // console.log(timerId);
};
button.addEventListener('click', onClick);

// ======================== clearTimeout(id) ======================

const greet = () => {
  console.log('Hello');
};
// const timerId = setTimeout(greet, 3000);
// clearTimeout(timerId);

// ============================ setInterval()================

const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-stop');
let timerId = null;

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    console.log(`Start async js ${Math.random()}`);
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stoped`);
});

// =============================== Date ========================

const date = new Date();
console.log(date); //2024-08-24T11:11:25.675Z
console.log(date.toString()); //Sat Aug 24 2024 14:12:28 GMT+0300 (Восточная Европа, летнее время)

//============================ unix ==========================

console.log(new Date(0)); //1970-01-01T00:00:00.000Z
console.log(new Date(15000)); //1970-01-01T00:00:15.000Z
console.log(date.getTime()); //1724498726117

// ========================= Установка Date ===================

const teamMeetingDate = new Date('March 16, 2030');
console.log(teamMeetingDate); //2030-03-15T22:00:00.000Z

const preciseTeamMeetingDate = new Date('March 16, 2030 14:10:00');
console.log(preciseTeamMeetingDate); //2030-03-16T12:10:00.000Z

// =================================

new Date('2030-03-16');
new Date('2030-03');
new Date('2018');
new Date('03/16/2030');
new Date('2030/03/16');
new Date('2030/3/16');
new Date('March 16, 2030');
new Date('March 16, 2030 14:20:20');
new Date('2030-03-16 14:20:20');
new Date('2030-03-16t14:20:20');
new Date('16 March 2030');

// =====================

// const date = new Date(2030, 2, 16, 10, 10, 12, 10);
console.log(date); //2030-03-16T08:10:12.010Z

// =========================== Методы ====================

// const date = new Date();
console.log('Date: ', date); //Date:  2024-08-24T12:04:55.393Z

// Возвращает день месяца от 1 до 31
console.log('getDate(): ', date.getDate()); //getDate():  24

// Возвращает день недели от 0 до 6
console.log('getDay(): ', date.getDay()); //getDay():  6

// Возвращает месяц от 0 до 11
console.log('getMonth(): ', date.getMonth()); //getMonth():  7

// Возращает год из 4 цифр
console.log('getFullYear(): ', date.getFullYear()); //getFullYear():  2024

// Возвращает часы
console.log('getHours(): ', date.getHours()); //getHours():  15

// Возращает минуты
console.log('getMinutes(): ', date.getMinutes()); //getMinutes():  4

// Возвращает скунды
console.log('getSeconds(): ', date.getSeconds()); //getSeconds():  55

// Возвращает миллискунды
console.log('getMilliseconds(): ', date.getMilliseconds()); //getMilliseconds():  393

// =========================================

// const date = new Date();
console.log('Date: ', date); //Date:  2024-08-24T12:04:55.393Z

// Возращает день месяца от 1 до 31
console.log('getUTCDate(): ', date.getUTCDate()); //getUTCDate():  24

// Возвращает день недели от 0 до 6
console.log('getUTCDay(): ', date.getUTCDay()); //getUTCDay():  6

// Возвращает месяц от 0 до 11
console.log('getUTCMonth(): ', date.getUTCMonth()); //getUTCMonth():  7

// Возращает год из 4 цифр
console.log('getUTCFullYear(): ', date.getUTCFullYear()); //getUTCFullYear():  2024

// Возвращает часы
console.log('getUTCHours(): ', date.getUTCHours()); //getUTCHours():  12

// Возращает минуты
console.log('getUTCMinutes(): ', date.getUTCMinutes()); //getUTCMinutes():  13

// Возвращает скунды
console.log('getUTCSeconds(): ', date.getUTCSeconds()); //getUTCSeconds():  47

// Возвращает миллискунды
console.log('getUTCMilliseconds(): ', date.getUTCMilliseconds()); //getUTCMilliseconds():  118

// =============================== Сеттеры =========================

// const date = new Date('March 16 2030 12:10:10');
date.setMinutes(20);
console.log(date); //2030-03-16T10:20:10.000Z

date.setFullYear(2040, 4, 8);
console.log(date); //2040-05-08T09:20:10.000Z

// ================================== Форматирование времени =====================

// const date = new Date('March 16 2030 12:15:20');

console.log(date.toString()); // Sat Mar 16 2030 12:15:20 GMT+0200 (Восточная Европа, стандартное время)
console.log(date.toTimeString()); // 12:15:20 GMT+0200 (Восточная Европа, стандартное время)
console.log(date.toLocaleTimeString()); // 12:15:20
console.log(date.toUTCString()); // Sat, 16 Mar 2030 10:15:20 GMT
console.log(date.toDateString()); // Sat Mar 16 2030
console.log(date.toISOString()); // 2030-03-16T10:15:20.000Z
console.log(date.toLocaleString()); //16.03.2030, 12:15:20
console.log(date.getTime()); //1899886520000

// ======================== Promise create ===============

// const promise = new Promise((resolve, reject) => {
//   // Асинхронная операция
// });

// ======================

// Изменить значение переменной isSuccess для вызова разрешения или отклоненияъ
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve('Успех, значение функции передано resolve');
    } else {
      reject('Ошибка передана в функцию reject');
    }
  }, 2000);
});

// ============================== then =======================

// Изменить значение переменной isSuccess для вызова разрешения или отклонения
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve('Успех');
    } else {
      reject('Ошибка');
    }
  }, 2000);
});

// Сначала запустится
console.log('Before promise.then()');

// Регистрация promise колбек promise.then()
promise.then(
  value => {
    console.log('onResolve вызван вне promise.then()');
    console.log(value);
    // Задача успешно передана в результат
  },
  error => {
    console.log('onReject вызван внутри promise.then()');
    console.log(error);
  }
);
// Сначала запустится первым
console.log("console.log('Before promise.then()');");

// Регистрация callbacks promise.then()
promise.then(
  // onResolve запустится третим или не запуститься вообще
  (value => {
    console.log('onResolve вызывается внутри promise.then()');
    console.log(value);
  },
  // onReject выполняется третий раз или не выполнится вообще
  error => {
    console.log('onReject вызывается внутри promise.then()');
    console.log(error);
  })
);
console.log('After promise.then()');

// =============== catch ==========================

promise
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  });

// ========================= finally ======================

promise
  .then(value => {
    console.log(value); // Успех, значение передано в функцию resolve
  })
  .catch(error => {
    console.log(error); // Ошибка, значение передано в функцию reject
  })
  .finally(() => {
    console.log('Обещание(promise) выполнено');
  });

// ============================= Цепочки promise ===================

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promise
  .then(value => {
    console.log(value); //5
    return value * 2;
  })
  .then(value => {
    console.log(value); //10
    return value * 3;
  })
  .then(value => {
    console.log(value); //30
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('Final task');
  });

// ============================================= Login form ===============

const fatchUserFromServer = (username, onSuccess, onError) => {
  console.log(`Fatching data for ${username}`);
  setTimeout(() => {
    // Изменения значения переменной isSuccess для имитации статуса запроса
    const isSuccess = true;
    if (isSuccess) {
      onSuccess('Success value');
    } else {
      onError('Error');
    }
  }, 2000);
};

const onFatchSuccess = user => console.log(user);
const onFatchError = error => console.log(error);

fatchUserFromServer('Ann', onFatchSuccess, onFatchError); //Fatching data for Ann
//Success value

// =====================================

const fatchUserFromServer = username => {
  return new Promise((resolve, reject) => {
    console.log(`Fatching data for ${username}`);
    setTimeout(() => {
      const isSuccess = true;
      if (isSuccess) {
        resolve('Success value');
      } else {
        reject(error);
      }
    }, 2000);
  });
};

fatchUserFromServer('Petya')
  .then(user => console.log(user))
  .catch(error => console.error(error));
