import location from './location';
import condition from './condition';
import image from './image';
import actualTemp from './actualTemp';
import feelTemp from './feelTemp';

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
wrapper.append(location, condition, image, actualTemp, feelTemp);

export default wrapper;
