import '../../assets/styles/content.css';
import wrapper from './weather/wrapper';
import form from './search/form';

const separator = document.createElement('hr');
separator.className = 'separator';

const content = document.createElement('div');
content.className = 'content';
content.append(wrapper, separator, form);

export default content;
