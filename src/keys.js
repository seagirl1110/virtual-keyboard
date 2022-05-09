const keysColl = [
  [
    {
      code: 'Backquote', value: '`', valueRus: 'ё', valueUpperRus: 'Ё',
    },
    { code: '1', value: 1 },
    { code: '2', value: 2 },
    { code: '3', value: 3 },
    { code: '4', value: 4 },
    { code: '5', value: 5 },
    { code: '6', value: 6 },
    { code: '7', value: 7 },
    { code: '8', value: 8 },
    { code: '9', value: 9 },
    { code: '0', value: 0 },
    { code: 'Minus', value: '-' },
    { code: 'Equal', value: '=' },
    { code: 'Backspace', value: 'Backspace', class: 'keyboard__key--grow' },
  ],
  [
    { code: 'Tab', value: 'Tab', class: 'keyboard__key--grow' },
    {
      code: 'q', value: 'q', valueUpper: 'Q', valueRus: 'й', valueUpperRus: 'Й',
    },
    {
      code: 'w', value: 'w', valueUpper: 'W', valueRus: 'ц', valueUpperRus: 'Ц',
    },
    {
      code: 'e', value: 'e', valueUpper: 'E', valueRus: 'у', valueUpperRus: 'У',
    },
    {
      code: 'r', value: 'r', valueUpper: 'R', valueRus: 'к', valueUpperRus: 'К',
    },
    {
      code: 't', value: 't', valueUpper: 'T', valueRus: 'е', valueUpperRus: 'Е',
    },
    {
      code: 'y', value: 'y', valueUpper: 'Y', valueRus: 'н', valueUpperRus: 'Н',
    },
    {
      code: 'u', value: 'u', valueUpper: 'U', valueRus: 'г', valueUpperRus: 'Г',
    },
    {
      code: 'i', value: 'i', valueUpper: 'I', valueRus: 'ш', valueUpperRus: 'Ш',
    },
    {
      code: 'o', value: 'o', valueUpper: 'O', valueRus: 'щ', valueUpperRus: 'Щ',
    },
    {
      code: 'p', value: 'p', valueUpper: 'P', valueRus: 'з', valueUpperRus: 'З',
    },
    {
      code: 'BracketLeft', value: '[', valueRus: 'х', valueUpperRus: 'Х',
    },
    {
      code: 'BracketRight', value: ']', valueRus: 'ъ', valueUpperRus: 'Ъ',
    },
    { code: 'Backslash', value: '\\' },
    { code: 'Delete', value: 'Del', class: 'keyboard__key--grow' },
  ],
  [
    { code: 'CapsLock', value: 'CapsLock', class: 'keyboard__key--grow' },
    {
      code: 'a', value: 'a', valueUpper: 'A', valueRus: 'ф', valueUpperRus: 'Ф',
    },
    {
      code: 's', value: 's', valueUpper: 'S', valueRus: 'ы', valueUpperRus: 'Ы',
    },
    {
      code: 'd', value: 'd', valueUpper: 'D', valueRus: 'в', valueUpperRus: 'В',
    },
    {
      code: 'f', value: 'f', valueUpper: 'F', valueRus: 'а', valueUpperRus: 'А',
    },
    {
      code: 'g', value: 'g', valueUpper: 'G', valueRus: 'п', valueUpperRus: 'П',
    },
    {
      code: 'h', value: 'h', valueUpper: 'H', valueRus: 'р', valueUpperRus: 'Р',
    },
    {
      code: 'j', value: 'j', valueUpper: 'J', valueRus: 'о', valueUpperRus: 'О',
    },
    {
      code: 'k', value: 'k', valueUpper: 'K', valueRus: 'л', valueUpperRus: 'Л',
    },
    {
      code: 'l', value: 'l', valueUpper: 'L', valueRus: 'д', valueUpperRus: 'Д',
    },
    {
      code: 'Semicolon', value: ';', valueRus: 'ж', valueUpperRus: 'Ж',
    },
    {
      code: 'Quote', value: "'", valueRus: 'э', valueUpperRus: 'Э',
    },
    { code: 'Enter', value: 'Enter', class: 'keyboard__key--grow' },
  ],
  [
    { code: 'ShiftLeft', value: 'Shift', class: 'keyboard__key--grow' },
    {
      code: 'z', value: 'z', valueUpper: 'Z', valueRus: 'я', valueUpperRus: 'Я',
    },
    {
      code: 'x', value: 'x', valueUpper: 'X', valueRus: 'ч', valueUpperRus: 'Ч',
    },
    {
      code: 'c', value: 'c', valueUpper: 'C', valueRus: 'с', valueUpperRus: 'С',
    },
    {
      code: 'v', value: 'v', valueUpper: 'V', valueRus: 'м', valueUpperRus: 'М',
    },
    {
      code: 'b', value: 'b', valueUpper: 'B', valueRus: 'и', valueUpperRus: 'И',
    },
    {
      code: 'n', value: 'n', valueUpper: 'N', valueRus: 'т', valueUpperRus: 'Т',
    },
    {
      code: 'm', value: 'm', valueUpper: 'M', valueRus: 'ь', valueUpperRus: 'Ь',
    },
    {
      code: 'Comma', value: ',', valueRus: 'б', valueUpperRus: 'Б',
    },
    {
      code: 'Period', value: '.', valueRus: 'ю', valueUpperRus: 'Ю',
    },
    {
      code: 'Slash', value: '/', valueRus: '.', valueUpperRus: '.',
    },
    { code: 'ArrowUp', value: '▲' },
    { code: 'ShiftRight', value: 'Shift', class: 'keyboard__key--grow' },
  ],
  [
    { code: 'ControlLeft', value: 'Ctrl', class: 'keyboard__key--grow' },
    { code: 'MetaLeft', value: 'Win' },
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
