import './Heading.scss';

const Heading = (text) => {
  const h1 = document.createElement('h1');
  h1.classList.add('heading');
  h1.textContent = `${text}`;
  return h1;
};

export default Heading;
