import '../../../assets/styles/image.css';

const image = document.createElement('img');

image.src = 'http://cdn.weatherapi.com/weather/64x64/night/113.png';
image.alt = '';
image.className = 'image';
image.ariaHidden = 'true';

export function updateImage(src: string) {
  image.src = src;
}

export default image;
