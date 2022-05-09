import './Info.scss';

const Info = (aboutOS, aboutSwitchCombination) => {
  const div = document.createElement('div');

  for (let i = 0; i < 2; i++) div.append(document.createElement('p'));

  div.classList.add('info');

  div.childNodes.forEach((e) => e.classList.add('info__text'));
  div.childNodes[0].textContent = aboutOS;
  div.childNodes[1].textContent = aboutSwitchCombination;

  return div;
};

export default Info;
