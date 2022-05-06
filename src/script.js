import { line1 } from "./keys";



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
displayWrapper.append(display);

const keyboard = document.createElement('section');
keyboard.classList.add('keyboard');
container.append(keyboard);

const keyboardLine = document.createElement('div');
keyboardLine.classList.add('keyboard__line');
keyboard.append(keyboardLine);

for (const { key, value } of line1) {
    const keyboardKey = document.createElement('button');
    keyboardKey.classList.add('keyboard__key');
    keyboardKey.setAttribute('data-key', key);
    keyboardKey.textContent = value;
    keyboardLine.append(keyboardKey);
}



const text = document.createElement('div');
text.classList.add('description');
text.innerHTML = `<p class="description__text">Клавиатура создана в операционной системе Windows</p>
    <p class="description__text">Для переключения языка комбинация: левые ctrl + shift</p>`
container.append(text);

/*    



    <div class="keyboard__line">
        <button class="keyboard__key keyboard__key--grow" type="button" data-key="Tab">Tab</button>
        <button class="keyboard__key" type="button" data-key="q">q</button>
        <button class="keyboard__key" type="button" data-key="w">w</button>
        <button class="keyboard__key" type="button" data-key="e">e</button>
        <button class="keyboard__key" type="button" data-key="r">r</button>
        <button class="keyboard__key" type="button" data-key="t">t</button>
        <button class="keyboard__key" type="button" data-key="y">y</button>
        <button class="keyboard__key" type="button" data-key="u">u</button>
        <button class="keyboard__key" type="button" data-key="i">i</button>
        <button class="keyboard__key" type="button" data-key="o">o</button>
        <button class="keyboard__key" type="button" data-key="p">p</button>
        <button class="keyboard__key" type="button" data-key="BracketRight">[</button>
        <button class="keyboard__key" type="button" data-key="BracketRight">]</button>
        <button class="keyboard__key" type="button" data-key="Backslash">\</button>
        <button class="keyboard__key keyboard__key--grow" type="button" data-key="Delete">Del</button>
    </div>
    <div class="keyboard__line">
        <button class="keyboard__key keyboard__key--grow" type="button" data-key="CapsLock">CapsLock</button>
        <button class="keyboard__key" type="button" data-key="a">a</button>
        <button class="keyboard__key" type="button" data-key="s">s</button>
        <button class="keyboard__key" type="button" data-key="d">d</button>
        <button class="keyboard__key" type="button" data-key="f">f</button>
        <button class="keyboard__key" type="button" data-key="g">g</button>
        <button class="keyboard__key" type="button" data-key="h">h</button>
        <button class="keyboard__key" type="button" data-key="j">j</button>
        <button class="keyboard__key" type="button" data-key="k">k</button>
        <button class="keyboard__key" type="button" data-key="l">l</button>
        <button class="keyboard__key" type="button" data-key="Semicolon">;</button>
        <button class="keyboard__key" type="button" data-key="Quote">'</button>
        <button class="keyboard__key keyboard__key--grow" type="button" data-key="Enter">Enter</button>
    </div>
    <div class="keyboard__line">
        <button class="keyboard__key keyboard__key--grow" type="button" data-key="ShiftLeft">Shift</button>
        <button class="keyboard__key" type="button" data-key="z">z</button>
        <button class="keyboard__key" type="button" data-key="x">x</button>
        <button class="keyboard__key" type="button" data-key="c">c</button>
        <button class="keyboard__key" type="button" data-key="v">v</button>
        <button class="keyboard__key" type="button" data-key="b">b</button>
        <button class="keyboard__key" type="button" data-key="n">n</button>
        <button class="keyboard__key" type="button" data-key="m">m</button>
        <button class="keyboard__key" type="button" data-key="Comma">,</button>
        <button class="keyboard__key" type="button" data-key="Period">.</button>
        <button class="keyboard__key" type="button" data-key="Slash">/</button>
        <button class="keyboard__key" type="button" data-key="ArrowUp">▲</button>
        <button class="keyboard__key keyboard__key--grow" type="button" data-key="ShiftRight">Shift</button>
    </div>
    <div class="keyboard__line">
        <button class="keyboard__key keyboard__key--grow" type="button" data-key="ControlLeft">Ctrl</button>
        <button class="keyboard__key" type="button" data-key="MetaLeft">Win</button>
        <button class="keyboard__key" type="button" data-key="AltLeft">Alt</button>
        <button class="keyboard__key keyboard__key--space" type="button" data-key="Space"> </button>
        <button class="keyboard__key" type="button" data-key="AltRight">Alt</button>
        <button class="keyboard__key" type="button" data-key="ArrowLeft">◄</button>
        <button class="keyboard__key" type="button" data-key="ArrowDown">▼</button>
        <button class="keyboard__key" type="button" data-key="ArrowRight">►</button>
        <button class="keyboard__key keyboard__key--grow" type="button" data-key="ControlRight">Ctrl</button>
    </div>


 */