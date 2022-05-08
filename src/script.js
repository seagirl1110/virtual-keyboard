import { keysColl } from "./keys";

let langRus = false;
let capslock = false;

document.addEventListener('keydown', (evt) => {
    evt.preventDefault();
    console.log(evt);
    console.log(evt.code);

    const char = evt.key;

    if (evt.key === 'Shift' && evt.ctrlKey) {
        langRus = !langRus;
        createKeys()
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

function createKeys(lang = langRus, upper = capslock) {

    console.log(`capslock ${capslock}`)
    console.log(`lang ${lang}`)

    keyboard.innerHTML = '';

    for (const line of keysColl) {
        const keyboardLine = document.createElement('div');
        keyboardLine.classList.add('keyboard__line');
        keyboard.append(keyboardLine);

        for (const item of line) {
            const keyboardKey = document.createElement('button');
            keyboardKey.classList.add('keyboard__key');
            let value = item.value;
            if (upper && lang) {
                if (item.valueUpperRus) {
                    value = item.valueUpperRus;
                }
            } else if (upper) {
                if (item.valueUpper) {
                    value = item.valueUpper;
                }
            } else if (lang) {
                if (item.valueRus) {
                    value = item.valueRus;
                }
            }

            keyboardKey.textContent = value;

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
    <p class="description__text">Для переключения языка комбинация: ctrl + shift</p>`
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
            capslock = !capslock;
            createKeys()
            break;

        case 'Enter':
            display.textContent += '\n';
            break;

        default: display.textContent += char;;
    }
}