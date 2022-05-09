import './style.scss';
import keysColl from './keys';
import createKeys from './create-keys';
import printKey from './print-key';
import { hightlightKeys, notHightlightKeys } from './highlight-keys';

let capslock = false;
let langRus = JSON.parse(localStorage.getItem('lng')) || false;

const { body } = document;

const container = document.createElement('div');
container.classList.add('container');
container.innerHTML = '<h1 class="title">RSS Виртуальная клавиатура</h1>';
body.append(container);

const displayWrapper = document.createElement('div');
displayWrapper.classList.add('display-wrapper');
container.append(displayWrapper);

const display = document.createElement('textarea');
display.classList.add('display');
// display.addEventListener('input', (evt) => {
//     evt.preventDefault()
//     console.log(evt)
// })
displayWrapper.append(display);

const keyboard = document.createElement('section');
keyboard.classList.add('keyboard');
container.append(keyboard);

const text = document.createElement('div');
text.classList.add('description');
text.innerHTML = `<p class="description__text">Клавиатура создана в операционной системе Windows</p>
    <p class="description__text">Для переключения языка комбинация: ctrl + shift</p>`;
container.append(text);

document.addEventListener('keydown', (evt) => {
  evt.preventDefault();

  if (keyboard.querySelector(`[data-code=${evt.code}]`)) {
    setTimeout(() => {
      const item = keyboard.querySelector(`[data-code=${evt.code}]`);
      hightlightKeys(item);
    });

    if ((evt.key === 'Shift' && evt.ctrlKey) || (evt.key === 'Control' && evt.shiftKey)) {
      langRus = !langRus;
      createKeys(keysColl, keyboard, langRus, capslock, display);
    } else {
      const char = evt.key;
      const { isNeedRender, cl } = printKey(display, char, capslock);
      capslock = cl;
      if (isNeedRender) {
        createKeys(keysColl, keyboard, langRus, capslock, display);
      }
    }
  }
});

document.addEventListener('keyup', (evt) => {
  if (keyboard.querySelector(`[data-code=${evt.code}]`)) {
    const item = keyboard.querySelector(`[data-code=${evt.code}]`);

    if (evt.code !== 'CapsLock' || !capslock) {
      notHightlightKeys(item);
    }
  }
});

window.addEventListener('load', () => {
  const lang = JSON.parse(localStorage.getItem('lng'));
  createKeys(keysColl, keyboard, lang, capslock, display);
});
