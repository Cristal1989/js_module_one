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
