import './KeysRow.scss';
import Key from '../Key/Key';

const KeysRow = (row, handleEvent) => {
  const keysRow = document.createElement('div');

  keysRow.classList.add('keyboard__row');

  for (let key of row) keysRow.append(Key(key, handleEvent));

  return keysRow;
};

export default KeysRow;
