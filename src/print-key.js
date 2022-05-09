import { display } from './script';

let capslock = false;

const printKey = (char) => {
  let isNeedRender = false;

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
      isNeedRender = true;
      break;

    case 'Enter':
      display.textContent += '\n';
      break;

      // case 'Shift':
      //     break;

    case 'Ctrl':
    case 'Control':
    case 'Win':
    case 'Meta':
    case 'Alt':
      break;

    default: display.textContent += char;
  }
  return isNeedRender;
};

export { capslock, printKey };
