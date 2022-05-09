import createKeys from './create-keys';
import { print } from './print';

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

createKeys();

const text = document.createElement('div');
text.classList.add('description');
text.innerHTML = `<p class="description__text">Клавиатура создана в операционной системе Windows</p>
    <p class="description__text">Для переключения языка комбинация: ctrl + shift</p>`;
container.append(text);

document.addEventListener('keydown', (evt) => {
  evt.preventDefault();
  console.log(evt);
  console.log(evt.code);

  if (evt.key === 'Shift' && evt.ctrlKey) {
    langRus = !langRus;
    createKeys();
  } else {
    const char = evt.key;
    print(char);
  }
});

export { display, keyboard, langRus };
