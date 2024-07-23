const listWithId = document.querySelector('#menu');
listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '24px';

const listWithClass = document.querySelector('.menu');
const menuItemsByTagName = document.querySelector('li');
const menuItemByClass = document.querySelector('.menu__item');
const firstMenuItem = document.querySelector('.menu__item');
firstMenuItem.style.color = 'red';

const domSection = document.querySelector('.dom');
domSection.style.border = '1px dashed black';
domSection.style.borderRadius = '8px';
domSection.style.paddingTop = '24px';

// ====================================== img =============================

const img = document.querySelector('.image');
img.src = 'https://picsum.photos/id/13/640/480';
img.alt = 'tel';

// ============================= textContent ============================

const textE1 = document.querySelector('.article__text');
const titleE1 = document.querySelector('.article__title');
titleE1.textContent = 'New text';

const article = document.querySelector('.article');
article.style.display = 'block';
article.style.border = '1px dashed black';
article.style.borderRadius = '8px';
article.style.paddingTop = '20px';

// ================================ classList ==========================

const link = document.querySelector('.link');
const hasActiveClass = link.classList.contains('is-active');
link.classList.add('special');
link.classList.remove('is-active');
link.classList.toggle('is-active');
link.classList.replace('special', 'regular');

// ========================== style ===================

// const button = document.querySelector('.btn');
// button.style.backgroundColor = 'blue';
// button.style.fontSize = '24px';
// button.style.textAlign = 'center';

// ============================= attribute ==============================

const img1 = document.querySelector('.img1');
console.log(img1.attributes); // NameNodeMap {0:class,1:src,alt,length:1 }
console.log(img1.hasAttribute('src')); // true
console.log(img1.getAttribute('alt')); // "laptop"
img1.setAttribute('alt', 'tel');
console.log(img1.getAttribute('alt')); // "tel"

// ============================== data attribute =========================

// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(seveBtn.dataset.action); //save

// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); //close

// ===========================

const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');

const editor = document.querySelector('.editor');
editor.style.border = '1px dashed black';
editor.style.paddingTop = '15px';
editor.style.paddingLeft = '15px';

// =============================== создание и удаление элементов ====================

const title = document.createElement('h1');
// heading.textContent = 'This is title';

const image2 = document.createElement('img');
image2.src = 'https://placeimg.com/640/480/nature';
image2.alt = 'nature';

console.log(image2);

// ==================================== Добавление ====================

const list = document.querySelector('.usernames');
const listItem = document.createElement('li');

listItem.textContent = 'Vasya';
list.append(listItem);

const firstItem = document.createElement('li');
firstItem.textContent = 'Polya';
list.prepend(firstItem);

const user = document.querySelector('.user');

const allList = document.querySelector('.username__item');
allList.style.border = '1px dashed red';

// ================================ remove ================================

const text1 = document.querySelector('.text1');
text1.remove();

// =================================== Свойство innerHTML =============================

const article2 = document.querySelector('.article2');
console.log(article2.innerHTML);
const title2 = document.querySelector('.article2', '.title2');
console.log(title2.innerHTML);
const text2 = document.querySelector('.article2', '.text2');
console.log(text2.innerHTML);
const link2 = document.querySelector('.article2', '.link2');
console.log(link2.innerHTML);

// ======================= Изменение ================

title2.innerHTML = 'This is <b>new</b> title';

// =================================

const languages = ['HTML', 'CSS', 'React', 'Node', 'JS', 'Vue'];
const list3 = document.querySelector('.list3');
const markUp = languages
  .map(language => `<li class="list__item3">${language}</li>`)
  .join('');
list3.innerHTML = markUp;

// =============================== Добавление ========================

const newText = `<p class="new__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est beatae facilis rem id commodi sequi ad! Obcaecati, nulla iusto?</p><a class="new__link" href="#">Read moreeeee</a>`;
article2.innerHTML += newText;

// =============================== Метод insertAdjacentHTML() =========================

const list4 = document.querySelector('.list4');
const newLanguages = ['React', 'Node', 'Vue'];
const markUp2 = newLanguages
  .map(language => `<li class="list__item4">${language}</li>`)
  .join('');
list4.insertAdjacentHTML('beforeend', markUp2);
list4.insertAdjacentHTML('beforebegin', '<h2>Languages</h2>');

// ==================================== Метод addEventListener() ======================

// const button = document.querySelector('.my__button');
// // button.addEventListener('click', () => console.log('Hello world'));
// const handelClick = () => console.log('Hello World');
// button.addEventListener('click', handelClick);

// ======================= btn

const singleBtn = document.querySelector('#single');
const handleClick = () => console.log('Single click');
singleBtn.addEventListener('click', handleClick);

const multipleBtn = document.querySelector('#multiple');
const firstCallback = () => console.log('First callback');
const secondCallback = () => console.log('Second callback');
const thirdCallback = () => console.log('Third callback');
multipleBtn.addEventListener('click', firstCallback);
multipleBtn.addEventListener('click', secondCallback);
multipleBtn.addEventListener('click', thirdCallback);

// ============================================ Метод removeEventListener() ========================

const addListenerBtn = document.querySelector('.add-js');
const removeListenerBtn = document.querySelector('.remove-js');
const btn1 = document.querySelector('.target-js');

const handleClick1 = () => console.log('Event callback on click');

addListenerBtn.addEventListener('click', () => {
  btn1.addEventListener('click', handleClick1);
  console.log('Click event listener added to btn');
});
removeListenerBtn.addEventListener('click', () => {
  btn1.removeEventListener('click', handleClick1);
  console.log('Click event listener remove from btn');
});

// ========================================== Ключевое слово this ==========================

const mango = {
  username: 'Mango',
  showUserName() {
    console.log(this);
    console.log(`Мое имя пользователя: ${this.username}`);
  },
};
const btn2 = document.querySelector('.btn2');
// mango.showUserName();
// Плохой пример. this будет ссылаться на btn2 если использовать showUserName() в качестве callback
// btn2.addEventListener("click", mango.showUserName());

// btn2.addEventListener('click', mango.showUserName.bind(mango));

// ======================================= Объект событий ================================

const handleClick3 = event => console.log(event);
// button.addEventListener('click', handleClick3);

// =============================

const button3 = document.querySelector('.btn3');
const handleClick4 = e => {
  console.log('Event', e);
  console.log('Event type', e.type);
  console.log('Event current target', e.currentTarget);
};
button3.addEventListener('click', handleClick4);

// ========================================== Действия браузера по умолчанию =======================

const form = document.querySelector('.register__form');
form.addEventListener('submit', e => {
  e.preventDefault();

  const {
    elements: { username, password },
  } = e.currentTarget;
  console.log(username.value, password.value);
});

// ========================================== События клавиатуры =============================

document.addEventListener('keydown', e => console.log('Keydown', e));
document.addEventListener('keyup', e => console.log('Keyup', e));

// ===================================== Свойство key и code ================================

document.addEventListener('keydown', e => {
  console.log('Key', e.key);
  console.log('Code', e.code);
});

// =============================================================

const clearLogBtn = document.querySelector('.clear');
const logList = document.querySelector('.log__list');
let keyPressCounter = 1;

console.log(clearLogBtn);

document.addEventListener('keydown', logMessage);
document.addEventListener('keyup', logMessage);

clearLogBtn.addEventListener('click', reset);

function logMessage({ type, key, code }) {
  const markUp = `<div class="log__item">${keyPressCounter}
  <ul>
  <li>Event: ${type}</li>
  <li>Key: ${key}</li>
  <li>Code: ${code}</li>
  </ul>
  </div>`;
  logList.insertAdjacentHTML('afterbegin', markUp);
  if (type === 'keyup') {
    incrementKeyPressCounter();
  }
}

function reset() {
  keyPressCounter = 1;
  logList.innerHTML = '';
}

function incrementKeyPressCounter() {
  keyPressCounter += 1;
}

// ========================================= Клавиши модификаторы =========================

document.addEventListener('keydown', e => {
  e.preventDefault();
  if ((e.ctrlKey || e.metaKey) && e.code === 'KeyS') {
    console.log('Ctrl+S or Command+S');
  }
});
