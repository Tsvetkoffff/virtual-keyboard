import Heading from './Heading/Heading';
import Textarea from './Textarea/Textarea';
import Keyboard from './Keyboard/Keyboard';
import Info from './Info/Info';

const App = () => {
  const oninput = (value) => {
    const input = document.querySelector('textarea');
    input.value += value;
  };
  const onDel = () => {
    const input = document.querySelector('textarea');
    input.value = input.value.substring(0, input.value.length - 1);
  };

  document.body.append(
    Heading('RSS Virtual Keyboard'),
    Textarea(),
    Keyboard(oninput, onDel),
    Info(
      'The keyboard was created in the Windows operating system',
      'To switch the language use: left alt + shift'
    )
  );
};

export default App;
