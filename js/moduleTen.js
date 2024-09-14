// import PostList from '../post-list/post-list';
// import PostList from './components/PostList';

// ============================= REST API ======================================

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    // Обработка ответа
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    // Обработка ответа
  })
  .catch(error => {
    // Обработка ответа
  });

// ================================== fetch users  GET запрос =========================

// const fetchUsersBtn = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');

// fetchUsersBtn.addEventListener('click', () => {
//   fetchUsers()
//     .then(users => {
//       renderUsers(users);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

// function fetchUsers() {
//   return fetch('https://jsonplaceholder.typicode.com/users').then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderUsers(users) {
//   const markUp = users
//     .map(
//       user => `<li>
//     <p><b>Name</b>: ${user.name}</p>
//     <p><b>Email</b>: ${user.email}</p>
//     <p><b>Company</b>: ${user.company.name}</p>
//     </li>`
//     )
//     .join('');
//   userList.insertAdjacentHTML('beforeend', markUp);
// }

// =========================================== Errors ======================

// let globalVariaribles; //undefind

// // Инициализация извлечения данных
// fetch('https://jsonplaceholder.typicode.com/users').then(response =>
//   response.json().then(users => {
//     console.log('Пользователи внутри then callback', users);
//   })
// );

// // Запись результата в глобальную переменную
// globalVariaribles = users;
// console.log('globalVariaribles внутри fetch callback', globalVariaribles);

// // Здесь нет асинхронных данных
// console.log('globalVariaribles снаружи fetch', globalVariaribles);

// =================================== Параметры строки запроса ====================

const fetchUsersBtn = document.querySelector('.btn');
const userList = document.querySelector('.user-list');

fetchUsersBtn.addEventListener('click', () => {
  fetchUsers()
    .then(users => {
      renderUsers(users);
    })
    .catch(error => {
      console.log(error);
    });
});

function fetchUsers() {
  return fetch(
    'https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name'
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderUsers(users) {
  const markUp = users
    .map(
      user => `<li>
    <p><b>Name</b>: ${user.name}</p>
    <p><b>Email</b>: ${user.email}</p>
    <p><b>Company</b>: ${user.company.name}</p>
    </li>`
    )
    .join('');
  userList.insertAdjacentHTML('beforeend', markUp);
}

// ======================== Class URLSearchParams ============================

const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: 'name',
});
console.log(searchParams.toString());

const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
console.log(url);

// ============================== HTTP Заголовки =========================

const headers = new Headers({
  'content-type': 'application/json',
  'custom-header': 'custom value',
});
headers.append('content-type', 'text/bash');
headers.append('custom-header', 'custom, value');

console.log(headers.has('content-type')); //true
console.log(headers.get('content-type')); //application/json, text/bash
console.log(headers.set('content-type', 'application/json')); //map obj
console.log(headers.delete('custom-header'));

// ========================================

fetch('https://jsonplaceholder.typicode.com/users', {
  headers: {
    Accept: 'application/json',
  },
}).then(response => {
  // Отклик
});

// =========================================== limit запрос ======================

const fetchPostsBtn = document.querySelector('.btn1');
const postLimit = document.querySelector('.posts');

fetchPostsBtn.addEventListener('click', async () => {
  try {
    const posts = await fetchPosts();
    renderPosts(posts);
  } catch (error) {
    console.log(error);
  }
});

async function fetchPosts() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  );
  return response.data;
}

function renderPosts(posts) {
  const markUp = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
    <h2 class="post-title">${title.slice(0, 30)}</h2>
    <p><b>Post ID</b>: ${id}</p>
    <p><b>Author ID</b>: ${userId}</p>
    <p>${body}</p>
    </li>`;
    })
    .join('');
  postLimit.innerHTML = markUp;
}

// ================================ per_page ===================

const fetchPostsBtn2 = document.querySelector('.btn2');
const postLimit2 = document.querySelector('.posts2');

fetchPostsBtn2.addEventListener('click', async () => {
  try {
    const posts = await fetchPosts2();
    renderPosts2(posts);
  } catch (error) {
    console.log(error);
  }
});

async function fetchPosts2() {
  const params = new URLSearchParams({
    _limit: 5,
    _page: 3,
  });
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?${params}`
  );
  return response.data;
}

function renderPosts2(posts) {
  const markUp = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
    <h2 class="post-title">${title.slice(0, 30)}</h2>
    <p><b>Post ID</b>: ${id}</p>
    <p><b>Author ID</b>: ${userId}</p>
    <p>${body}</p>
    </li>`;
    })
    .join('');
  postLimit2.innerHTML = markUp;
}

// ================================== Загрузить еще ============================

const fetchPostsBtn3 = document.querySelector('.btn3');
const postLimit3 = document.querySelector('.posts3');
let page = 1;
let perPage = 10;

fetchPostsBtn3.addEventListener('click', async () => {
  try {
    const posts = await fetchPosts3();
    renderPosts3(posts);
    page += 1;
    if (page > 1) {
      fetchPostsBtn3.textContent = 'Fetch More Posts';
    }
  } catch (error) {
    console.log(error);
  }
});

async function fetchPosts3() {
  const params = new URLSearchParams({
    _limit: perPage,
    _page: page,
  });
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?${params}`
  );
  return response.data;
}

function renderPosts3(posts) {
  const markUp = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
    <h2 class="post-title">${title.slice(0, 30)}</h2>
    <p><b>Post ID</b>: ${id}</p>
    <p><b>Author ID</b>: ${userId}</p>
    <p>${body}</p>
    </li>`;
    })
    .join('');
  postLimit3.innerHTML = markUp;
}

// ===================================== Чтение read =======================

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.log(error));

// ======================== post id ======================

const postId = 1;

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.log(error));

// ========================= CREATE =======================

const postToAdd = {
  author: 'Athor Name',
  body: 'Create is awesome',
};
const options = {
  method: 'POST',
  body: JSON.stringify(postToAdd),
  headers: { contentType: 'application/json' },
};
fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(error => console.log(error));

// ==============================

// { "id": 1, "author": "Author Name", "content": "Text Content" };

// ================================= PATCH & PUT ===========================

const postToUpdate = {
  id: 1,
  body: 'Text content',
};
const options = {
  method: 'PATCH',
  body: JSON.stringify(postToUpdate),
  headers: { contentType: 'application/json' },
};
fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(error => console.log('ERROR' + error));

// ========================= DELETE ====================================

const postIdToDelete = 1;
fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
  method: 'DELETE',
})
  .then(() => console.log('Post Deleted'))
  .catch(error => console.log('ERROR: ', error));

// ===================================== Асинхронные функции ==========================

// ==================================== Token =================================

const fetchFriends = () => {
  return fetch('myapi.com/me').then(token => {
    console.log(token);
  });
};

// ===========================

const fetchFriends = () => {
  return fetch('myapi.com/me').then(token => {
    return fetch(`myapi.com/profile?token=${token}`).then(user => {
      console.log(user.id);
    });
  });
};

// ================================

const fetchFriends = () => {
  return fetch('myapi.com/me').then(token => {
    return fetch(`myapi.com/profile?token=${token}`).then(user => {
      return fetch(`myapi.com/users/${user.id}/friends`);
    });
  });
};
fetchFriends()
  .then(friends => {
    console.log(friends);
  })
  .catch(error => console.error(error));

// ====================================================

const fetchFriends = async () => {
  const token = await fetch('https://my-api.com/me');
  const user = await fetch(`https://my-api.com/profile?token=${token}`);
  const friends = await fetch(`https://my-api.com/users/${user.id}/friends`);
  return friends;
};

fetchFriends()
  .then(friends => console.log(friends))
  .catch(error => console.error(error));

// ================================= async/await ===================================

const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return users;
};

fetchUsers().then(users => console.log(users));

// ========================================

// Function declaration
async function foo() {
  // Тело функции
}

// Function expression
const foo = async function () {
  // Тело функции
};

// Array function
const foo = async () => {
  // Тело функции
};

// Метод объекта
const user = {
  async foo() {
    // Тело функции
  },
};

// Метод класса
class User {
  async foo() {
    // Тело функции
  }
}

// ===================================== Обработчик ошибок  ====================

const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log(error.message);
  }
};

fetchUsers();

// ========================================

const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return users;
};

fetchUsers()
  .then(users => console.log(users))
  .catch(error => console.log(error));

// ============================= плохой пример =============

const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return users;
};

const users = await fetchUsers();

// ==================================

const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return users;
};

const asyncFoo = async () => {
  try {
    const users = await fetchUsers();
    console.log(users);
  } catch (error) {
    console.log(error.message);
  }
};

asyncFoo();

// =================================== Параллельные запросы ========================

const fetchUsers = async () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const firstResponse = await fetch(`${baseUrl}/users/1`);
  const secondResponse = await fetch(`${baseUrl}/users/2`);
  const thirdResponse = await fetch(`${baseUrl}/users/3`);

  const firstUser = await firstResponse.json();
  const secondUser = await secondResponse.json();
  const thirdUser = await thirdResponse.json();

  console.log(firstUser, secondUser, thirdUser);
};

fetchUsers();

// ============================================

const fetchUsers = async () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const userIds = [1, 2, 3];

  // Создаем массив promise
  const arrayOfPromoses = userIds.map(async userId => {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    return response.json();
  });

  // Запускаем все promises параллельно и ждем их завершения
  const users = await Promise.all(arrayOfPromoses);
  console.log(users);
};

fetchUsers();
