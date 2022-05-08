import { keysColl } from "./keys";

let upper = true;

document.addEventListener('keypress', (evt) => {
    evt.preventDefault();
    console.log(evt);
    const char = evt.key;
    if (char.shiftKey === true) {
        char = char.toUpperCase;
    }

    print(char);
})

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
// display.addEventListener('input', (evt) => {
//     evt.preventDefault()
//     console.log(evt)
// })
displayWrapper.append(display);

const keyboard = document.createElement('section');
keyboard.classList.add('keyboard');
container.append(keyboard);

createKeys();

function createKeys(upper = false) {
    console.log(upper)
    keyboard.innerHTML = '';

    for (const line of keysColl) {
        const keyboardLine = document.createElement('div');
        keyboardLine.classList.add('keyboard__line');
        keyboard.append(keyboardLine);

        for (const item of line) {
            const keyboardKey = document.createElement('button');
            keyboardKey.classList.add('keyboard__key');
            keyboardKey.setAttribute('data-key', item.key);
            if (upper) {
                if (item.valueUpper) {
                    keyboardKey.textContent = item.valueUpper;
                } else {
                    keyboardKey.textContent = item.value;
                }
            } else {
                keyboardKey.textContent = item.value;
            }

            if (item.class) {
                keyboardKey.classList.add(item.class);
            }
            keyboardLine.append(keyboardKey);

            keyboardKey.addEventListener('click', () => {
                print(keyboardKey.textContent)
            })
        }
    }
}


const text = document.createElement('div');
text.classList.add('description');
text.innerHTML = `<p class="description__text">Клавиатура создана в операционной системе Windows</p>
    <p class="description__text">Для переключения языка комбинация: левые ctrl + shift</p>`
container.append(text);

function print(char) {

    switch (char) {

        // case 'Backspace':
        //     display.textContent = ;
        //     break

        case 'Tab':
            display.textContent += '    ';
            break;

        // case 'Delete':
        //     display.textContent +=;
        //     break;

        case 'CapsLock':
            createKeys(upper)
            upper = !upper;
            break;

        case 'Enter':
            display.textContent += '\n';
            break;

        default: display.textContent += char;;
    }
}