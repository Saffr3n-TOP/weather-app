import '../assets/styles/style.css';
import form from './components/search/form';
import wrapper from './components/weather/wrapper';

const root = document.querySelector('.root');
root.append(wrapper, form);
