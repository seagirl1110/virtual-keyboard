import keysColl from './keys';
import { keyboard, langRus } from './script';
import { capslock, print } from './print';

const createKeys = (lang = langRus, upper = capslock) => {
  localStorage.setItem('lng', JSON.stringify(lang));

  keyboard.innerHTML = '';

  for (const line of keysColl) {
    const keyboardLine = document.createElement('div');
    keyboardLine.classList.add('keyboard__line');
    keyboard.append(keyboardLine);

    for (const item of line) {
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
        print(keyboardKey.textContent);
      });
    }
  }
};

window.addEventListener('load', () => {
  const lang = JSON.parse(localStorage.getItem('lng'));
  createKeys(lang);
});

export default createKeys;
