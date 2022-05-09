import './Textarea.scss';

const Textarea = () => {
  const area = document.createElement('textarea');
  area.classList.add('area');
  return area;
};

export default Textarea;
