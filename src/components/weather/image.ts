import '../../../assets/styles/image.css';

const image = document.createElement('img');

image.alt = '';
image.className = 'image';
image.ariaHidden = 'true';

export function updateImage(src: string) {
  image.src = src;
}

export default image;
