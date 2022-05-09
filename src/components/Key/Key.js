import './Key.scss';

const Key = (key, handleEvent) => {
  const keyType = Object.keys(key)[0];
  const keyElement = document.createElement('div');
  const enContainer = document.createElement('span');
  const ruContainer = document.createElement('span');
  const caseDown = document.createElement('span');
  const caseUp = document.createElement('span');
  const capsLock = document.createElement('span');
  const shiftCaps = document.createElement('span');

  keyElement.classList.add('keyboard__key', keyType);
  enContainer.classList.add('en');
  ruContainer.classList.add('ru', 'hidden');
  caseDown.classList.add('caseDown');
  caseUp.classList.add('caseUp', 'hidden');
  capsLock.classList.add('caps', 'hidden');
  shiftCaps.classList.add('shiftCaps', 'hidden');

  const setKeys = (container, element) => {
    const type = element.classList[0];
    switch (container) {
      case enContainer:
        element.textContent = key[keyType].en[type];
        enContainer.append(element);
        break;
    }
  };

  setKeys(enContainer, caseDown);
  setKeys(enContainer, caseUp);
  setKeys(enContainer, capsLock);
  setKeys(enContainer, shiftCaps);

  keyElement.addEventListener('mousedown', (e) => handleEvent(e, keyElement))

  keyElement.append(enContainer);
  keyElement.append(ruContainer);

  return keyElement
};

export default Key;
