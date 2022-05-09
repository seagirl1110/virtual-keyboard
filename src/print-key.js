const printKey = (d, char, capslock) => {
  let isNeedRender = false;
  let cl = capslock;
  const display = d;

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
      cl = !cl;
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
  return { isNeedRender, cl };
};

export { printKey };
