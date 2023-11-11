import '../../../assets/styles/input.css';

const TAG = 'input';
const TYPE = 'search';
const LABEL = 'Location';

const input = document.createElement(TAG);

input.type = TYPE;
input.name = TYPE;
input.id = TYPE;
input.className = TAG;
input.required = true;
input.placeholder = LABEL;
input.ariaLabel = LABEL;

input.onfocus = () => (input.placeholder = '');
input.onblur = () => (input.placeholder = LABEL);

input.oninput = () => {
  input.setCustomValidity('');
  if (input.checkValidity()) return;
  input.setCustomValidity('Please fill out this field.');
  input.reportValidity();
};

export default input;
