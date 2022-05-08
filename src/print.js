import { display } from "./script";
import { createKeys } from "./create-keys";

let capslock = false;

const print = (char) => {

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

export {capslock, print}