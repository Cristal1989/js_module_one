// ================================ Всплытие событий ==============================

// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const descendant = document.querySelector('#descendant');

// parent.addEventListener('click', () => console.log('Click on parent'));
// child.addEventListener('click', () => console.log('Click on child'));
// descendant.addEventListener('click', () => console.log('Click on descendant'));

// ======================== Свойство event.target ========================

// const parent = document.querySelector('#parent');
// parent.addEventListener('click', e => {
//   console.log('Event target: ', e.target);
//   console.log('Current target: ', e.currentTarget);
// });

// ================================= Прекращение всплытия. =====================

const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const descendant = document.querySelector('#descendant');

parent.addEventListener('click', () => alert('Parent click'));
child.addEventListener('click', () => alert('Child click'));
descendant.addEventListener('clikc', e => {
  e.stopPropagation();
  alert('Descedant click handle');
});
