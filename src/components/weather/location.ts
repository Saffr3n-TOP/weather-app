const location = document.createElement('span');

location.className = 'text text_larger text_bold';
location.textContent = 'Country, City';

export function updateLocation(country: string, city: string) {
  location.textContent = `${country}, ${city}`;
}

export default location;
