const keysColl = [
  [
    {
      code: 'Backquote', value: '`', valueRus: 'ё', valueUpperRus: 'Ё', valueShift: '~',
    },
    { code: 'Digit1', value: 1, valueShift: '!' },
    { code: 'Digit2', value: 2, valueShift: '@' },
    { code: 'Digit3', value: 3, valueShift: '#' },
    { code: 'Digit4', value: 4, valueShift: '$' },
    { code: 'Digit5', value: 5, valueShift: '%' },
    { code: 'Digit6', value: 6, valueShift: '^' },
    { code: 'Digit7', value: 7, valueShift: '&' },
    { code: 'Digit8', value: 8, valueShift: '*' },
    { code: 'Digit9', value: 9, valueShift: '(' },
    { code: 'Digit0', value: 0, valueShift: ')' },
    { code: 'Minus', value: '-', valueShift: '_' },
    { code: 'Equal', value: '=', valueShift: '+' },
    { code: 'Backspace', value: 'Backspace', class: 'keyboard__key--grow' },
  ],
  [
    { code: 'Tab', value: 'Tab', class: 'keyboard__key--grow' },
    {
      code: 'KeyQ', value: 'q', valueUpper: 'Q', valueRus: 'й', valueUpperRus: 'Й',
    },
    {
      code: 'KeyW', value: 'w', valueUpper: 'W', valueRus: 'ц', valueUpperRus: 'Ц',
    },
    {
      code: 'KeyE', value: 'e', valueUpper: 'E', valueRus: 'у', valueUpperRus: 'У',
    },
    {
      code: 'KeyR', value: 'r', valueUpper: 'R', valueRus: 'к', valueUpperRus: 'К',
    },
    {
      code: 'KeyT', value: 't', valueUpper: 'T', valueRus: 'е', valueUpperRus: 'Е',
    },
    {
      code: 'KeyY', value: 'y', valueUpper: 'Y', valueRus: 'н', valueUpperRus: 'Н',
    },
    {
      code: 'KeyU', value: 'u', valueUpper: 'U', valueRus: 'г', valueUpperRus: 'Г',
    },
    {
      code: 'KeyI', value: 'i', valueUpper: 'I', valueRus: 'ш', valueUpperRus: 'Ш',
    },
    {
      code: 'KeyO', value: 'o', valueUpper: 'O', valueRus: 'щ', valueUpperRus: 'Щ',
    },
    {
      code: 'KeyP', value: 'p', valueUpper: 'P', valueRus: 'з', valueUpperRus: 'З',
    },
    {
      code: 'BracketLeft', value: '[', valueRus: 'х', valueUpperRus: 'Х', valueShift: '{',
    },
    {
      code: 'BracketRight', value: ']', valueRus: 'ъ', valueUpperRus: 'Ъ', valueShift: '}',
    },
    { code: 'Backslash', value: '\\', valueShift: '|' },
    { code: 'Delete', value: 'Del', class: 'keyboard__key--grow' },
  ],
  [
    { code: 'CapsLock', value: 'CapsLock', class: 'keyboard__key--grow' },
    {
      code: 'KeyA', value: 'a', valueUpper: 'A', valueRus: 'ф', valueUpperRus: 'Ф',
    },
    {
      code: 'KeyS', value: 's', valueUpper: 'S', valueRus: 'ы', valueUpperRus: 'Ы',
    },
    {
      code: 'KeyD', value: 'd', valueUpper: 'D', valueRus: 'в', valueUpperRus: 'В',
    },
    {
      code: 'KeyF', value: 'f', valueUpper: 'F', valueRus: 'а', valueUpperRus: 'А',
    },
    {
      code: 'KeyG', value: 'g', valueUpper: 'G', valueRus: 'п', valueUpperRus: 'П',
    },
    {
      code: 'KeyH', value: 'h', valueUpper: 'H', valueRus: 'р', valueUpperRus: 'Р',
    },
    {
      code: 'KeyJ', value: 'j', valueUpper: 'J', valueRus: 'о', valueUpperRus: 'О',
    },
    {
      code: 'KeyK', value: 'k', valueUpper: 'K', valueRus: 'л', valueUpperRus: 'Л',
    },
    {
      code: 'KeyL', value: 'l', valueUpper: 'L', valueRus: 'д', valueUpperRus: 'Д',
    },
    {
      code: 'Semicolon', value: ';', valueRus: 'ж', valueUpperRus: 'Ж', valueShift: ':',
    },
    {
      code: 'Quote', value: "'", valueRus: 'э', valueUpperRus: 'Э', valueShift: '"',
    },
    { code: 'Enter', value: 'Enter', class: 'keyboard__key--grow' },
  ],
  [
    { code: 'ShiftLeft', value: 'Shift', class: 'keyboard__key--grow' },
    {
      code: 'KeyZ', value: 'z', valueUpper: 'Z', valueRus: 'я', valueUpperRus: 'Я',
    },
    {
      code: 'KeyX', value: 'x', valueUpper: 'X', valueRus: 'ч', valueUpperRus: 'Ч',
    },
    {
      code: 'KeyC', value: 'c', valueUpper: 'C', valueRus: 'с', valueUpperRus: 'С',
    },
    {
      code: 'KeyV', value: 'v', valueUpper: 'V', valueRus: 'м', valueUpperRus: 'М',
    },
    {
      code: 'KeyB', value: 'b', valueUpper: 'B', valueRus: 'и', valueUpperRus: 'И',
    },
    {
      code: 'KeyN', value: 'n', valueUpper: 'N', valueRus: 'т', valueUpperRus: 'Т',
    },
    {
      code: 'KeyM', value: 'm', valueUpper: 'M', valueRus: 'ь', valueUpperRus: 'Ь',
    },
    {
      code: 'Comma', value: ',', valueRus: 'б', valueUpperRus: 'Б', valueShift: '<',
    },
    {
      code: 'Period', value: '.', valueRus: 'ю', valueUpperRus: 'Ю', valueShift: '>',
    },
    {
      code: 'Slash', value: '/', valueRus: '.', valueUpperRus: '.', valueShift: '?',
    },
    { code: 'ArrowUp', value: '▲' },
    { code: 'ShiftRight', value: 'Shift', class: 'keyboard__key--grow' },
  ],
  [
    { code: 'ControlLeft', value: 'Ctrl', class: 'keyboard__key--grow' },
    { code: 'MetaRight', value: 'Win' },
    { code: 'AltLeft', value: 'Alt' },
    { code: 'Space', value: ' ', class: 'keyboard__key--space' },
    { code: 'AltRight', value: 'Alt' },
    { code: 'ArrowLeft', value: '◄' },
    { code: 'ArrowDown', value: '▼' },
    { code: 'ArrowRight', value: '►' },
    { code: 'ControlRight', value: 'Ctrl', class: 'keyboard__key--grow' },
  ],
];

export default keysColl;
