import { keysColl } from "./keys";

const body = document.body;

const container = document.createElement('div');
container.classList.add('container');
container.innerHTML = `<h1 class="title">RSS Виртуальная клавиатура</h1>`
body.append(container);

const displayWrapper = document.createElement('div');
displayWrapper.classList.add('display-wrapper');
container.append(displayWrapper);

const display = document.createElement('textarea');
display.classList.add('display');
displayWrapper.append(display);

const keyboard = document.createElement('section');
keyboard.classList.add('keyboard');
container.append(keyboard);

for (const line of keysColl) {
    const keyboardLine = document.createElement('div');
    keyboardLine.classList.add('keyboard__line');
    keyboard.append(keyboardLine);

    for (const item of line) {
        const { key, value } = item;
        const keyboardKey = document.createElement('button');
        keyboardKey.classList.add('keyboard__key');
        keyboardKey.setAttribute('data-key', key);
        keyboardKey.textContent = value;
        if (item.class) {
            keyboardKey.classList.add(item.class);
        }
        keyboardLine.append(keyboardKey);
    }
}

const text = document.createElement('div');
text.classList.add('description');
text.innerHTML = `<p class="description__text">Клавиатура создана в операционной системе Windows</p>
    <p class="description__text">Для переключения языка комбинация: левые ctrl + shift</p>`
container.append(text);