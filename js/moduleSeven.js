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

// ================================ DELIGATION ================================
// ================================ Color Select ==============================

const colorPalette = document.querySelector('.color-palette');
const output = document.querySelector('.output');

colorPalette.addEventListener('click', selectColor);

// This is where delegation «magic» happens
function selectColor(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}

// Some helper functions to render palette items
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomHexColor();
    const item = document.createElement('button');
    item.type = 'button';
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add('item');
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

// ============================== Event scroll ===========================

const output1 = document.querySelector('.output1');
let scrollEventCounter = 0;

const resetButton = document.querySelector('.scroll-btn');
resetButton.addEventListener('click', () => {
  scrollEventCounter = 0;
  output1.textContent = scrollEventCounter;
});

document.addEventListener('scroll', () => {
  scrollEventCounter += 1;
  output1.textContent = scrollEventCounter;
});

// =============================== throttle ================================

// document.addEventListener(
//   'scroll',
//   _.throttle(() => {
//     console.log('Вызов обработчика прокрутки каждые 300ms');
//   }, 300)
// );

// ============================= throttle scroll ===========================

const vanillaOutput = document.querySelector('.output1.vanilla');
const throttledOutput = document.querySelector('.output1.throttled');
const debounceOutput = document.querySelector('.output1.debounce');
const eventCounter1 = {
  vanilla: 0,
  throttled: 0,
  debounce: 0,
};

document.addEventListener('scroll', () => {
  eventCounter1.vanilla += 1;
  vanillaOutput.textContent = eventCounter1.vanilla;
});

document.addEventListener(
  'scroll',
  _.throttle(() => {
    eventCounter1.throttled += 1;
    throttledOutput.textContent = eventCounter1.throttled;
  }, 300)
);
// ================================== debounce =========================
document.addEventListener(
  'scroll',
  _.debounce(() => {
    eventCounter1.debounce += 1;
    debounceOutput.textContent = eventCounter1.debounce;
  }, 300)
);

// ================================= Режим debounce leading & trailing ================================

document.addEventListener(
  'scroll',
  _.debounce(
    () => {
      console.log('Прослушка каждый раз при скролле');
    },
    300,
    {
      leading: true,
      trailing: false,
    }
  )
);

// =========================================

const vanillaOutput2 = document.querySelector('.output2.vanilla2');
const throttledOutput2 = document.querySelector('.output2.throttled2');
const trailingOutput2 = document.querySelector('.output2.trailing2');
const leadingOutput2 = document.querySelector('.output2.leading2');
const eventCounter2 = {
  vanilla: 0,
  throttled: 0,
  trailing: 0,
  leading: 0,
};

// trailing debounce
document.addEventListener(
  'scroll',
  _.debounce(() => {
    eventCounter2.trailing += 1;
    trailingOutput2.textContent = eventCounter2.trailing;
  }, 300)
);

document.addEventListener(
  'scroll',
  _.debounce(
    () => {
      eventCounter2.leading += 1;
      leadingOutput2.textContent = eventCounter2.leading;
    },
    300,
    {
      leading: true,
      trailing: false,
    }
  )
);

document.addEventListener('scroll', () => {
  eventCounter2.vanilla += 1;
  vanillaOutput2.textContent = eventCounter2.vanilla;
});
