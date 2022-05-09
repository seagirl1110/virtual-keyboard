import printKey from './print-key';

const createKeys = (keysColl, kb, lang, upper) => {
  const keyboard = kb;
  localStorage.setItem('lng', JSON.stringify(lang));

  keyboard.innerHTML = '';

  keysColl.forEach((line) => {
    const keyboardLine = document.createElement('div');
    keyboardLine.classList.add('keyboard__line');
    keyboard.append(keyboardLine);

    line.forEach((item) => {
      const keyboardKey = document.createElement('button');
      keyboardKey.classList.add('keyboard__key');
      let { value } = item;

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
        printKey(keyboardKey.textContent);
      });
    });
  });
};

export default createKeys;
