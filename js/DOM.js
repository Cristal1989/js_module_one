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
