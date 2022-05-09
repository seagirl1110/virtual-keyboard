/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/create-keys.js":
/*!****************************!*\
  !*** ./src/create-keys.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _print_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print-key */ "./src/print-key.js");


const createKeys = (keysColl, kb, lang, upper, display) => {
  const keyboard = kb;
  localStorage.setItem('lng', JSON.stringify(lang));
  keyboard.innerHTML = '';
  keysColl.forEach(line => {
    const keyboardLine = document.createElement('div');
    keyboardLine.classList.add('keyboard__line');
    keyboard.append(keyboardLine);
    line.forEach(item => {
      const keyboardKey = document.createElement('button');
      keyboardKey.classList.add('keyboard__key');
      let {
        value
      } = item;

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
      keyboardKey.setAttribute('data-code', item.code);

      if (item.class) {
        keyboardKey.classList.add(item.class);
      }

      keyboardLine.append(keyboardKey);
      keyboardKey.addEventListener('click', () => {
        (0,_print_key__WEBPACK_IMPORTED_MODULE_0__["default"])(display, keyboardKey.textContent, upper);
      });
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createKeys);

/***/ }),

/***/ "./src/highlight-keys.js":
/*!*******************************!*\
  !*** ./src/highlight-keys.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hightlightKeys": () => (/* binding */ hightlightKeys),
/* harmony export */   "notHightlightKeys": () => (/* binding */ notHightlightKeys)
/* harmony export */ });
const hightlightKeys = item => {
  item.classList.add('keyboard__key--active');
};

const notHightlightKeys = item => {
  item.classList.remove('keyboard__key--active');
};



/***/ }),

/***/ "./src/keys.js":
/*!*********************!*\
  !*** ./src/keys.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const keysColl = [[{
  code: 'Backquote',
  value: '`',
  valueRus: 'ё',
  valueUpperRus: 'Ё'
}, {
  code: 'Digit1',
  value: 1
}, {
  code: 'Digit2',
  value: 2
}, {
  code: 'Digit3',
  value: 3
}, {
  code: 'Digit4',
  value: 4
}, {
  code: 'Digit5',
  value: 5
}, {
  code: 'Digit6',
  value: 6
}, {
  code: 'Digit7',
  value: 7
}, {
  code: 'Digit8',
  value: 8
}, {
  code: 'Digit9',
  value: 9
}, {
  code: 'Digit0',
  value: 0
}, {
  code: 'Minus',
  value: '-'
}, {
  code: 'Equal',
  value: '='
}, {
  code: 'Backspace',
  value: 'Backspace',
  class: 'keyboard__key--grow'
}], [{
  code: 'Tab',
  value: 'Tab',
  class: 'keyboard__key--grow'
}, {
  code: 'KeyQ',
  value: 'q',
  valueUpper: 'Q',
  valueRus: 'й',
  valueUpperRus: 'Й'
}, {
  code: 'KeyW',
  value: 'w',
  valueUpper: 'W',
  valueRus: 'ц',
  valueUpperRus: 'Ц'
}, {
  code: 'KeyE',
  value: 'e',
  valueUpper: 'E',
  valueRus: 'у',
  valueUpperRus: 'У'
}, {
  code: 'KeyR',
  value: 'r',
  valueUpper: 'R',
  valueRus: 'к',
  valueUpperRus: 'К'
}, {
  code: 'KeyT',
  value: 't',
  valueUpper: 'T',
  valueRus: 'е',
  valueUpperRus: 'Е'
}, {
  code: 'KeyY',
  value: 'y',
  valueUpper: 'Y',
  valueRus: 'н',
  valueUpperRus: 'Н'
}, {
  code: 'KeyU',
  value: 'u',
  valueUpper: 'U',
  valueRus: 'г',
  valueUpperRus: 'Г'
}, {
  code: 'KeyI',
  value: 'i',
  valueUpper: 'I',
  valueRus: 'ш',
  valueUpperRus: 'Ш'
}, {
  code: 'KeyO',
  value: 'o',
  valueUpper: 'O',
  valueRus: 'щ',
  valueUpperRus: 'Щ'
}, {
  code: 'KeyP',
  value: 'p',
  valueUpper: 'P',
  valueRus: 'з',
  valueUpperRus: 'З'
}, {
  code: 'BracketLeft',
  value: '[',
  valueRus: 'х',
  valueUpperRus: 'Х'
}, {
  code: 'BracketRight',
  value: ']',
  valueRus: 'ъ',
  valueUpperRus: 'Ъ'
}, {
  code: 'Backslash',
  value: '\\'
}, {
  code: 'Delete',
  value: 'Del',
  class: 'keyboard__key--grow'
}], [{
  code: 'CapsLock',
  value: 'CapsLock',
  class: 'keyboard__key--grow'
}, {
  code: 'KeyA',
  value: 'a',
  valueUpper: 'A',
  valueRus: 'ф',
  valueUpperRus: 'Ф'
}, {
  code: 'KeyS',
  value: 's',
  valueUpper: 'S',
  valueRus: 'ы',
  valueUpperRus: 'Ы'
}, {
  code: 'KeyD',
  value: 'd',
  valueUpper: 'D',
  valueRus: 'в',
  valueUpperRus: 'В'
}, {
  code: 'KeyF',
  value: 'f',
  valueUpper: 'F',
  valueRus: 'а',
  valueUpperRus: 'А'
}, {
  code: 'KeyG',
  value: 'g',
  valueUpper: 'G',
  valueRus: 'п',
  valueUpperRus: 'П'
}, {
  code: 'KeyH',
  value: 'h',
  valueUpper: 'H',
  valueRus: 'р',
  valueUpperRus: 'Р'
}, {
  code: 'KeyJ',
  value: 'j',
  valueUpper: 'J',
  valueRus: 'о',
  valueUpperRus: 'О'
}, {
  code: 'KeyK',
  value: 'k',
  valueUpper: 'K',
  valueRus: 'л',
  valueUpperRus: 'Л'
}, {
  code: 'KeyL',
  value: 'l',
  valueUpper: 'L',
  valueRus: 'д',
  valueUpperRus: 'Д'
}, {
  code: 'Semicolon',
  value: ';',
  valueRus: 'ж',
  valueUpperRus: 'Ж'
}, {
  code: 'Quote',
  value: "'",
  valueRus: 'э',
  valueUpperRus: 'Э'
}, {
  code: 'Enter',
  value: 'Enter',
  class: 'keyboard__key--grow'
}], [{
  code: 'ShiftLeft',
  value: 'Shift',
  class: 'keyboard__key--grow'
}, {
  code: 'KeyZ',
  value: 'z',
  valueUpper: 'Z',
  valueRus: 'я',
  valueUpperRus: 'Я'
}, {
  code: 'KeyX',
  value: 'x',
  valueUpper: 'X',
  valueRus: 'ч',
  valueUpperRus: 'Ч'
}, {
  code: 'KeyC',
  value: 'c',
  valueUpper: 'C',
  valueRus: 'с',
  valueUpperRus: 'С'
}, {
  code: 'KeyV',
  value: 'v',
  valueUpper: 'V',
  valueRus: 'м',
  valueUpperRus: 'М'
}, {
  code: 'KeyB',
  value: 'b',
  valueUpper: 'B',
  valueRus: 'и',
  valueUpperRus: 'И'
}, {
  code: 'KeyN',
  value: 'n',
  valueUpper: 'N',
  valueRus: 'т',
  valueUpperRus: 'Т'
}, {
  code: 'KeyM',
  value: 'm',
  valueUpper: 'M',
  valueRus: 'ь',
  valueUpperRus: 'Ь'
}, {
  code: 'Comma',
  value: ',',
  valueRus: 'б',
  valueUpperRus: 'Б'
}, {
  code: 'Period',
  value: '.',
  valueRus: 'ю',
  valueUpperRus: 'Ю'
}, {
  code: 'Slash',
  value: '/',
  valueRus: '.',
  valueUpperRus: '.'
}, {
  code: 'ArrowUp',
  value: '▲'
}, {
  code: 'ShiftRight',
  value: 'Shift',
  class: 'keyboard__key--grow'
}], [{
  code: 'ControlLeft',
  value: 'Ctrl',
  class: 'keyboard__key--grow'
}, {
  code: 'MetaRight',
  value: 'Win'
}, {
  code: 'AltLeft',
  value: 'Alt'
}, {
  code: 'Space',
  value: ' ',
  class: 'keyboard__key--space'
}, {
  code: 'AltRight',
  value: 'Alt'
}, {
  code: 'ArrowLeft',
  value: '◄'
}, {
  code: 'ArrowDown',
  value: '▼'
}, {
  code: 'ArrowRight',
  value: '►'
}, {
  code: 'ControlRight',
  value: 'Ctrl',
  class: 'keyboard__key--grow'
}]];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keysColl);

/***/ }),

/***/ "./src/print-key.js":
/*!**************************!*\
  !*** ./src/print-key.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

    default:
      display.value += char;
  }

  return {
    isNeedRender,
    cl
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printKey);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  width: 100%;\n  font-family: \"Cutive Mono\", monospace;\n  font-size: 18px;\n  line-height: 24px;\n  color: #fff;\n  background-color: #2b3755;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.container {\n  width: 100%;\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 30px;\n}\n\n.title {\n  text-align: center;\n  font-size: 36px;\n  line-height: 42px;\n  margin: 20px 0;\n}\n\n.display {\n  display: block;\n  width: 100%;\n  height: 40vh;\n  padding: 10px 20px;\n  word-wrap: break-word;\n  border-radius: 5px;\n  background-color: #2b3755;\n  outline: none;\n  color: #fff;\n  font-size: 18px;\n  line-height: 24px;\n}\n.display-wrapper {\n  border-radius: 5px;\n  margin-bottom: 15px;\n  padding: 5px;\n  background: linear-gradient(to bottom, #1a2133, #4d6398);\n}\n\n.keyboard {\n  width: 700px;\n  margin: 0 auto;\n  padding: 5px;\n}\n.keyboard__line {\n  display: flex;\n  justify-content: center;\n  margin: 5px 0;\n}\n.keyboard__key {\n  min-width: 40px;\n  height: 40px;\n  background: linear-gradient(to bottom, #4d6398, #334266);\n  border-radius: 5px;\n  margin: 0 2px;\n  padding: 5px 10px;\n  font-size: 18px;\n  line-height: 24px;\n  color: #fff;\n  outline: none;\n  border: none;\n  transition: all 0.3ms;\n}\n.keyboard__key:hover {\n  background: #4d6398;\n  cursor: pointer;\n}\n.keyboard__key:active {\n  box-shadow: inset 3px 3px 3px #334266;\n  background: #885588;\n}\n.keyboard__key--active {\n  box-shadow: inset 3px 3px 3px #334266;\n  background: #885588;\n}\n.keyboard__key--grow {\n  flex-grow: 1;\n}\n.keyboard__key--space {\n  width: 290px;\n}\n\n.description {\n  text-align: center;\n  margin-top: 20px;\n}\n.description__text {\n  margin: 5px;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,WAAA;EACA,qCAAA;EACA,eAAA;EACA,iBAAA;EACA,WAAA;EACA,yBAAA;AACJ;;AAEA;EACI,sBAAA;AACJ;;AAEA;EACI,WAAA;EACA,iBAAA;EACA,cAAA;EACA,eAAA;AACJ;;AAEA;EACI,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;AACJ;;AAEA;EACI,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,yBAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,iBAAA;AACJ;AAGI;EACI,kBAAA;EACA,mBAAA;EACA,YAAA;EACA,wDAAA;AADR;;AAKA;EACI,YAAA;EACA,cAAA;EACA,YAAA;AAFJ;AAMI;EACI,aAAA;EACA,uBAAA;EACA,aAAA;AAJR;AASI;EACI,eAAA;EACA,YAAA;EACA,wDAAA;EACA,kBAAA;EACA,aAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,WAAA;EACA,aAAA;EACA,YAAA;EACA,qBAAA;AAPR;AAUQ;EACI,mBAAA;EACA,eAAA;AARZ;AAYQ;EACI,qCAAA;EACA,mBAAA;AAVZ;AAcQ;EACI,qCAAA;EACA,mBAAA;AAZZ;AAiBQ;EACI,YAAA;AAfZ;AAoBQ;EACI,YAAA;AAlBZ;;AAuBA;EACI,kBAAA;EACA,gBAAA;AApBJ;AAwBI;EACI,WAAA;AAtBR","sourcesContent":["body {\r\n    margin: 0;\r\n    width: 100%;\r\n    font-family: \"Cutive Mono\", monospace;\r\n    font-size: 18px;\r\n    line-height: 24px;\r\n    color: #fff;\r\n    background-color: #2b3755;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.container {\r\n    width: 100%;\r\n    max-width: 1280px;\r\n    margin: 0 auto;\r\n    padding: 0 30px;\r\n}\r\n\r\n.title {\r\n    text-align: center;\r\n    font-size: 36px;\r\n    line-height: 42px;\r\n    margin: 20px 0;\r\n}\r\n\r\n.display {\r\n    display: block;\r\n    width: 100%;\r\n    height: 40vh;\r\n    padding: 10px 20px;\r\n    word-wrap: break-word;\r\n    border-radius: 5px;\r\n    background-color: #2b3755;\r\n    outline: none;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    line-height: 24px;\r\n\r\n    // .display-wrapper\r\n\r\n    &-wrapper {\r\n        border-radius: 5px;\r\n        margin-bottom: 15px;\r\n        padding: 5px;\r\n        background: linear-gradient(to bottom, #1a2133, #4d6398);\r\n    }\r\n}\r\n\r\n.keyboard {\r\n    width: 700px;\r\n    margin: 0 auto;\r\n    padding: 5px;\r\n\r\n    // .keyboard__line\r\n\r\n    &__line {\r\n        display: flex;\r\n        justify-content: center;\r\n        margin: 5px 0;\r\n    }\r\n\r\n    // .keyboard__key\r\n\r\n    &__key {\r\n        min-width: 40px;\r\n        height: 40px;\r\n        background: linear-gradient(to bottom, #4d6398, #334266);\r\n        border-radius: 5px;\r\n        margin: 0 2px;\r\n        padding: 5px 10px;\r\n        font-size: 18px;\r\n        line-height: 24px;\r\n        color: #fff;\r\n        outline: none;\r\n        border: none;\r\n        transition: all 0.3ms;\r\n\r\n        // .keyboard__key:hover\r\n        &:hover {\r\n            background: #4d6398;\r\n            cursor: pointer;\r\n        }\r\n\r\n        // .keyboard__key:active\r\n        &:active {\r\n            box-shadow: inset 3px 3px 3px #334266;\r\n            background: #885588;\r\n        }\r\n\r\n        // .keyboard__key--active\r\n        &--active {\r\n            box-shadow: inset 3px 3px 3px #334266;\r\n            background: #885588;\r\n        }\r\n\r\n        // .keyboard__key--grow,\r\n\r\n        &--grow {\r\n            flex-grow: 1;\r\n        }\r\n\r\n        // .keyboard__key--space\r\n\r\n        &--space {\r\n            width: 290px;\r\n        }\r\n    }\r\n}\r\n\r\n.description {\r\n    text-align: center;\r\n    margin-top: 20px;\r\n\r\n    // .description__text\r\n\r\n    &__text {\r\n        margin: 5px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ "./src/keys.js");
/* harmony import */ var _create_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-keys */ "./src/create-keys.js");
/* harmony import */ var _print_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./print-key */ "./src/print-key.js");
/* harmony import */ var _highlight_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./highlight-keys */ "./src/highlight-keys.js");





let capslock = false;
let langRus = JSON.parse(localStorage.getItem('lng')) || false;
const {
  body
} = document;
const container = document.createElement('div');
container.classList.add('container');
container.innerHTML = '<h1 class="title">RSS Виртуальная клавиатура</h1>';
body.append(container);
const displayWrapper = document.createElement('div');
displayWrapper.classList.add('display-wrapper');
container.append(displayWrapper);
const display = document.createElement('textarea');
display.classList.add('display'); // display.addEventListener('input', (evt) => {
//     evt.preventDefault()
//     console.log(evt)
// })

displayWrapper.append(display);
const keyboard = document.createElement('section');
keyboard.classList.add('keyboard');
container.append(keyboard);
const text = document.createElement('div');
text.classList.add('description');
text.innerHTML = `<p class="description__text">Клавиатура создана в операционной системе Windows</p>
    <p class="description__text">Для переключения языка комбинация: ctrl + shift</p>`;
container.append(text);
document.addEventListener('keydown', evt => {
  evt.preventDefault();

  if (keyboard.querySelector(`[data-code=${evt.code}]`)) {
    setTimeout(() => {
      const item = keyboard.querySelector(`[data-code=${evt.code}]`);
      (0,_highlight_keys__WEBPACK_IMPORTED_MODULE_4__.hightlightKeys)(item);
    });
  }

  if (evt.key === 'Shift' && evt.ctrlKey || evt.key === 'Control' && evt.shiftKey) {
    langRus = !langRus;
    (0,_create_keys__WEBPACK_IMPORTED_MODULE_2__["default"])(_keys__WEBPACK_IMPORTED_MODULE_1__["default"], keyboard, langRus, capslock, display);
  } else {
    const char = evt.key;
    const {
      isNeedRender,
      cl
    } = (0,_print_key__WEBPACK_IMPORTED_MODULE_3__["default"])(display, char, capslock);
    capslock = cl;

    if (isNeedRender) {
      (0,_create_keys__WEBPACK_IMPORTED_MODULE_2__["default"])(_keys__WEBPACK_IMPORTED_MODULE_1__["default"], keyboard, langRus, capslock, display);
    }
  }
});
document.addEventListener('keyup', evt => {
  if (keyboard.querySelector(`[data-code=${evt.code}]`)) {
    const item = keyboard.querySelector(`[data-code=${evt.code}]`);

    if (evt.code !== 'CapsLock' || !capslock) {
      (0,_highlight_keys__WEBPACK_IMPORTED_MODULE_4__.notHightlightKeys)(item);
    }
  }
});
window.addEventListener('load', () => {
  const lang = JSON.parse(localStorage.getItem('lng'));
  (0,_create_keys__WEBPACK_IMPORTED_MODULE_2__["default"])(_keys__WEBPACK_IMPORTED_MODULE_1__["default"], keyboard, lang, capslock, display);
});
})();

/******/ })()
;
//# sourceMappingURL=main.b420ce9a94573f30fc4d.js.map