import './Keyboard.scss';
import Layouts from '@data/KeyboardLayouts';
import KeysRow from '../KeysRow/KeysRow';

const Keyboard = (oninput, onDel) => {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  const options = {
    caps: false,
  };

  const handleEvent = (e, keyElement) => {
    const caseDown = document.querySelectorAll('.caseDown');
    const caseUp = document.querySelectorAll('.caseUp');
    const caps = document.querySelectorAll('.caps');
    const shiftCaps = document.querySelectorAll('.shiftCaps');
    const capsLockButton = document.querySelector('.capsLock');
    // document.addEventListener('keydown', (e) => oninput(e.key))

    switch (e.target.innerText) {
      case 'Backspace':
        onDel();
        break;
      case 'Tab':
        oninput('    ')
        break;
      case 'Del':
        onDel();
        break;
      case 'CapsLock':
        capsLockButton.classList.toggle('active');
        options.caps = !options.caps;
        caps.forEach((el) => el.classList.toggle('hidden'));
        caseDown.forEach((el) => el.classList.toggle('hidden'));
        break;
      case 'Enter':
        oninput('\n');
        break;
      case 'Shift':
        caseDown.forEach((el) => el.classList.toggle('hidden'));
        caseUp.forEach((el) => el.classList.toggle('hidden'));
        keyElement.addEventListener('mouseup', () => {
          caseDown.forEach((el) => el.classList.toggle('hidden'));
          caseUp.forEach((el) => el.classList.toggle('hidden'));
        });
        break;
      case 'Ctrl':
        console.log(e.target.innerText);
        break;
      case 'Win':
        console.log(e.target.innerText);
        break;
      case 'Alt':
        console.log(e.target.innerText);
        break;
      case 'space':
        oninput(' ')
        break;
      case 'UP':
        console.log(e.target.innerText);
        break;
      case 'Right':
        console.log(e.target.innerText);
        break;
      case 'Down':
        console.log(e.target.innerText);
        break;
      case 'Left':
        console.log(e.target.innerText);
        break;
      default:
        oninput(e.target.innerText);
        break;
    }
  };

  keyboard.append(...Layouts().map((row) => KeysRow(row, handleEvent)));

  return keyboard;
};

export default Keyboard;
