// // ======================== localStorage =====================

// localStorage.setItem('Ui-theme', 'light');
// localStorage.setItem('sidebar', 'expanded');
// localStorage.setItem('notification-level', 'mute');

// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };
// localStorage.setItem('settings', JSON.stringify(settings));

// // ==============================

// localStorage.setItem('Ui-theme', 'dark');

// const theme = localStorage.getItem('Ui-theme');
// console.log(theme); //"dark"

// // ===========================

// const savedSettings = localStorage.getItem('settings');
// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // settings object

// // ===================

// localStorage.setItem('Ui-theme', 'dark');
// console.log(localStorage.getItem('Ui-theme')); //dark

// localStorage.removeItem('Ui-theme');
// console.log(localStorage.getItem('Ui-theme')); //null

// // ==============================

// localStorage.setItem('Ui-theme', 'light');
// localStorage.setItem('sidebar', 'expanded');
// localStorage.setItem('notification-level', 'mute');

// console.log(localStorage.getItem('Ui-theme')); // light
// console.log(localStorage.getItem('sidebar')); // expanded
// console.log(localStorage.getItem('notification-level')); //mute

// localStorage.clear();
// console.log(localStorage.getItem('Ui-theme')); // null
// console.log(localStorage.getItem('sidebar')); // null
// console.log(localStorage.getItem('notification-level')); //null

// =================================== save message(localStorage) ============================

const form = document.querySelector('.feedback-form');
const localStorageKey = 'This is string';

form.elements.message.value = localStorage.getItem(localStorageKey) ?? '';

form.addEventListener('input', e => {
  localStorage.setItem(localStorageKey, e.target.value);
});

form.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
});
