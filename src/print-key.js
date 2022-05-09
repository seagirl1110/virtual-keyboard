const printKey = (d, char, capslock) => {
  let isNeedRender = false;
  let cl = capslock;
  const display = d;
  const start = display.selectionStart;

  switch (char) {
    case 'Backspace':
      display.focus();
      if (start > 0) {
        display.value = display.value.slice(0, start - 1) + display.value.slice(start);
        display.selectionStart = start - 1;
        display.selectionEnd = start - 1;
      }
      break;

    case 'Tab':
      display.value += '    ';
      break;

    case 'Del':
    case 'Delete':
      display.focus();
      if (start < display.value.length) {
        display.value = display.value.slice(0, start) + display.value.slice(start + 1);
        display.selectionStart = start;
        display.selectionEnd = start;
      }
      break;

    case 'CapsLock':
      cl = !cl;
      isNeedRender = true;
      break;

    case 'Enter':
      display.value += '\n';
      break;

    // case 'Shift':
    //     break;

    case 'Ctrl':
    case 'Control':
    case 'Win':
    case 'Meta':
    case 'MetaRight':
    case 'Alt':
    case 'AltGraph':
      break;

    default: display.value += char;
  }
  return { isNeedRender, cl };
};

export default printKey;
